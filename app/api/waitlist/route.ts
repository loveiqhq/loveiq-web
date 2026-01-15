import { NextResponse } from "next/server";
import { Resend } from "resend";
import { waitlistEmail } from "../../../lib/emails/waitlist";
import { z } from "zod";
import { checkRateLimit, checkCooldown, getClientIp } from "../../../lib/ratelimit";

type Payload = {
  email?: string;
  source?: string;
  firstName?: string | null;
  website?: string | null; // honeypot
};

const tableName = "waitlist_signups"; // matches Supabase table name
const resend = new Resend(process.env.RESEND_API_KEY);

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
    console.warn("Slack webhook missing: set SLACK_WAITLIST_WEBHOOK_URL to enable waitlist alerts.");
    return;
  }

  // Mask to avoid sending full PII to Slack
  const maskedEmail = email.replace(/^(.).+(@.+)$/, "$1***$2");
  const text = `New waitlist signup: ${firstName ? `*${firstName}* ` : ""}<mailto:${email}|${maskedEmail}>${source ? ` (source: ${source})` : ""}`;

  try {
    console.log("Sending Slack waitlist notification for", maskedEmail, "source:", source || "n/a");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, username: "waitlist_signup" }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("Slack webhook failed:", res.status, body);
    } else {
      console.log("Slack webhook sent:", res.status);
    }
  } catch (err) {
    console.error("Slack webhook error:", err);
  }
};

export async function POST(request: Request) {
  const ip = getClientIp(request);

  // Check IP-based rate limit (persistent across restarts)
  const rateLimit = await checkRateLimit(ip, RATE_LIMIT_CONFIG);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil((rateLimit.resetAt.getTime() - Date.now()) / 1000)) },
      }
    );
  }

  const parsed = waitlistSchema.safeParse(await request.json().catch(() => ({} as Payload)));
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
    return NextResponse.json({ error: "Supabase env vars missing" }, { status: 500 });
  }

  const insertPayload = {
    email: normalizedEmail,
    source: source?.trim() || "landing-modal",
    created_at: new Date().toISOString(),
  };

  // Idempotency: if the email already exists, return success to avoid enumeration
  const existingRes = await fetch(`${url}/rest/v1/${tableName}?email=eq.${encodeURIComponent(normalizedEmail)}&select=id&limit=1`, {
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
    },
    cache: "no-store",
  });

  if (!existingRes.ok) {
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }

  const existing = (await existingRes.json()) as Array<{ id: string }>;
  if (Array.isArray(existing) && existing.length > 0) {
    return NextResponse.json({ success: true, already: true });
  }

  const response = await fetch(`${url}/rest/v1/${tableName}`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(insertPayload),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }

  // Send waitlist confirmation email via Resend
  const from = process.env.RESEND_FROM || "LoveIQ <hello@send.loveiq.org>";
  const replyTo = process.env.RESEND_REPLY_TO || "hello@loveiq.org";
  const tpl = waitlistEmail({ firstName: normalizedFirstName });

  const { error } = await resend.emails.send({
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
