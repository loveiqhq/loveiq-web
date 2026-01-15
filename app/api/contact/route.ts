import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { checkRateLimit, getClientIp } from "../../../lib/ratelimit";
import { fetchWithTimeout } from "../../../lib/fetch-with-timeout";
import { verifyCsrfToken } from "../../../lib/csrf";

const resend = new Resend(process.env.RESEND_API_KEY);
const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
const slackContactWebhook = process.env.SLACK_CONTACT_WEBHOOK_URL;

// Rate limit configuration
const RATE_LIMIT_CONFIG = {
  bucket: "contact",
  limit: 5,
  windowMs: 60_000, // 1 minute
};

const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(120),
  lastName: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(4).max(40),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(10).max(1000),
  captcha: z.string().min(10),
});

const verifyCaptcha = async (token: string, ip: string) => {
  if (!recaptchaSecret) {
    console.error("Missing RECAPTCHA_SECRET_KEY");
    return false;
  }

  try {
    const params = new URLSearchParams();
    params.set("secret", recaptchaSecret);
    params.set("response", token);
    if (ip) params.set("remoteip", ip);

    const res = await fetchWithTimeout("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      cache: "no-store",
      timeoutMs: 5000, // 5 second timeout
    });

    if (!res.ok) {
      console.error("reCAPTCHA verify failed:", res.status);
      return false;
    }

    const json = (await res.json()) as { success?: boolean };
    return Boolean(json.success);
  } catch (err) {
    console.error("reCAPTCHA verify error:", err);
    return false;
  }
};

const sendSlackContactNotification = async (payload: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  const webhookUrl = slackContactWebhook;
  if (!webhookUrl) {
    console.warn("Slack contact webhook missing: SLACK_CONTACT_WEBHOOK_URL");
    return;
  }

  // Mask PII to avoid sending full details to Slack
  const maskedEmail = payload.email.replace(/^(.).+(@.+)$/, "$1***$2");
  const maskedPhone = payload.phone
    ? payload.phone.slice(0, 3) + "***" + payload.phone.slice(-2)
    : null;

  // Truncate message to prevent overly long Slack messages
  const truncatedMessage =
    payload.message.length > 200
      ? payload.message.slice(0, 200) + "..."
      : payload.message;

  // Escape special Slack markdown characters in user content
  const escapeSlack = (s: string) =>
    s.replace(/[&<>*_~`]/g, (c) => `\\${c}`);

  const text =
    `📩 *New contact request*\n` +
    `• *Name:* ${escapeSlack(payload.firstName)} ${escapeSlack(payload.lastName)}\n` +
    `• *Email:* ${maskedEmail}\n` +
    (maskedPhone ? `• *Phone:* ${maskedPhone}\n` : "") +
    `• *Message:* ${escapeSlack(truncatedMessage)}`;

  try {
    const res = await fetchWithTimeout(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
      timeoutMs: 5000, // 5 second timeout
    });
    const body = await res.text();
    if (!res.ok) {
      console.error("Slack contact webhook failed:", res.status, body);
    } else {
      console.log("Slack contact webhook sent:", res.status);
    }
  } catch (err) {
    console.error("Slack contact webhook error:", err);
  }
};

export async function POST(request: Request) {
  // Verify CSRF token
  const csrfValid = await verifyCsrfToken(request);
  if (!csrfValid) {
    return NextResponse.json({ error: "Invalid request." }, { status: 403 });
  }

  // Validate required config
  if (!contactToEmail) {
    console.error("Missing CONTACT_TO_EMAIL environment variable");
    return NextResponse.json({ error: "Service unavailable." }, { status: 503 });
  }

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

  const parsed = contactSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 });
  }

  const { firstName, lastName, phone, email, message, captcha } = parsed.data;

  const captchaOk = await verifyCaptcha(captcha, ip);
  if (!captchaOk) {
    return NextResponse.json({ error: "Captcha failed. Please try again." }, { status: 400 });
  }

  // Sanitize email for use in Reply-To header to prevent header injection
  // Remove any newlines, carriage returns, or null bytes
  const sanitizedReplyTo = email.replace(/[\r\n\0]/g, "").trim();

  // Additional validation - reject if sanitization changed the email
  // (indicates attempted header injection)
  if (sanitizedReplyTo !== email.trim()) {
    console.warn("Potential header injection attempt in email:", email.slice(0, 50));
    return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
  }

  const from = process.env.RESEND_FROM || "LoveIQ <hello@send.loveiq.org>";

  try {
    await resend.emails.send({
      from,
      to: contactToEmail!,
      replyTo: sanitizedReplyTo,
      subject: `New contact request from ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        message,
      ].join("\n"),
    });

    await sendSlackContactNotification({ firstName, lastName, email, phone, message });
  } catch (err) {
    console.error("Contact email send error:", err);
    return NextResponse.json({ error: "Unable to send message. Please try later." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
