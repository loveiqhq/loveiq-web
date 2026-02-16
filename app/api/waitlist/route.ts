import { NextResponse } from "next/server";
import { Resend } from "resend";
import { waitlistEmail } from "../../../lib/emails/waitlist";
import { z } from "zod";
import { checkRateLimit, checkCooldown, getClientIp } from "../../../lib/ratelimit";
import { fetchWithTimeout } from "../../../lib/fetch-with-timeout";
import { verifyCsrfToken } from "../../../lib/csrf";
import logger from "../../../lib/logger";

type Payload = {
  email?: string;
  source?: string;
  firstName?: string | null;
  website?: string | null; // honeypot
};

const tableName = "waitlist_signups"; // matches Supabase table name

// Lazy initialization to avoid build-time errors when env vars are not set
let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

const waitlistSchema = z.object({
  email: z.string().email().max(320),
  source: z.string().max(120).optional(),
  firstName: z.string().max(80).optional().nullable(),
  website: z.string().max(0).optional().nullable(), // honeypot must be empty
});

// Rate limit configuration
const RATE_LIMIT_CONFIG = {
  bucket: "waitlist",
  limit: 5,
  windowMs: 60_000, // 1 minute
};

const EMAIL_COOLDOWN_MS = 60_000; // 1 minute per email

const notifySlackWaitlist = async ({
  email,
  firstName,
  source,
}: {
  email: string;
  firstName?: string | null;
  source?: string | null;
}) => {
  const url = process.env.SLACK_WAITLIST_WEBHOOK_URL;

  if (!url) {
    logger.warn("Slack webhook missing: set SLACK_WAITLIST_WEBHOOK_URL to enable waitlist alerts.");
    return;
  }

  // Mask to avoid sending full PII to Slack
  const maskedEmail = email.replace(/^(.).+(@.+)$/, "$1***$2");
  const text = `New waitlist signup: ${firstName ? `*${firstName}* ` : ""}${maskedEmail}${source ? ` (source: ${source})` : ""}`;

  try {
    logger.info({ maskedEmail, source: source || "n/a" }, "Sending Slack waitlist notification");
    const res = await fetchWithTimeout(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, username: "waitlist_signup" }),
      timeoutMs: 5000, // 5 second timeout
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      logger.error({ status: res.status, body }, "Slack webhook failed");
    } else {
      logger.info({ status: res.status }, "Slack webhook sent");
    }
  } catch (err) {
    logger.error({ err }, "Slack webhook error");
  }
};

export async function POST(request: Request) {
  // Verify CSRF token
  const csrfValid = await verifyCsrfToken(request);
  if (!csrfValid) {
    return NextResponse.json({ error: "Invalid request." }, { status: 403 });
  }

  const ip = getClientIp(request);

  // Check IP-based rate limit (persistent across restarts)
  const rateLimit = await checkRateLimit(ip, RATE_LIMIT_CONFIG);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((rateLimit.resetAt.getTime() - Date.now()) / 1000)),
        },
      }
    );
  }

  const parsed = waitlistSchema.safeParse(await request.json().catch(() => ({}) as Payload));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const { email, source, firstName, website } = parsed.data;
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedFirstName = firstName?.trim() || null;

  if (website) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // Check email-based cooldown (persistent across restarts)
  const cooldown = await checkCooldown(normalizedEmail, "waitlist-email", EMAIL_COOLDOWN_MS);
  if (!cooldown.allowed) {
    return NextResponse.json(
      { error: "Please wait before retrying." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil(cooldown.retryAfterMs / 1000)) },
      }
    );
  }

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return NextResponse.json({ error: "Service unavailable." }, { status: 503 });
  }

  const insertPayload = {
    email: normalizedEmail,
    source: source?.trim() || "landing-modal",
    created_at: new Date().toISOString(),
  };

  // Idempotency: if the email already exists, return success to avoid enumeration
  const existingRes = await fetchWithTimeout(
    `${url}/rest/v1/${tableName}?email=eq.${encodeURIComponent(normalizedEmail)}&select=id&limit=1`,
    {
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
      cache: "no-store",
      timeoutMs: 10000, // 10 second timeout for DB
    }
  );

  if (!existingRes.ok) {
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }

  const existing = (await existingRes.json()) as Array<{ id: string }>;
  if (Array.isArray(existing) && existing.length > 0) {
    return NextResponse.json({ success: true, already: true });
  }

  const response = await fetchWithTimeout(`${url}/rest/v1/${tableName}`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(insertPayload),
    timeoutMs: 10000, // 10 second timeout for DB
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }

  // Send waitlist confirmation email via Resend
  const from = process.env.RESEND_FROM || "LoveIQ <hello@send.loveiq.org>";
  const replyTo = process.env.RESEND_REPLY_TO || "hello@loveiq.org";
  const tpl = waitlistEmail({ firstName: normalizedFirstName });

  const { error } = await getResend().emails.send({
    from,
    to: normalizedEmail,
    replyTo,
    subject: tpl.subject,
    html: tpl.html,
    text: tpl.text,
  });

  if (error) {
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }

  await notifySlackWaitlist({ email: normalizedEmail, firstName: normalizedFirstName, source });

  return NextResponse.json({ success: true });
}
