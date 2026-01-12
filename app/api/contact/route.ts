import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL || "hello@loveiq.org";
const slackContactWebhook = process.env.SLACK_CONTACT_WEBHOOK_URL;
const rateLimitWindowMs = 60_000;
const rateLimitMax = 5;
const ipHits = new Map<string, number[]>();

const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(120),
  lastName: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(4).max(40),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(10).max(1000),
  captcha: z.string().min(10),
});

const getClientIp = (req: Request) => {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
};

const isRateLimited = (key: string) => {
  const now = Date.now();
  const hits = ipHits.get(key)?.filter((t) => now - t < rateLimitWindowMs) ?? [];
  hits.push(now);
  ipHits.set(key, hits);
  return hits.length > rateLimitMax;
};

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

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      cache: "no-store",
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

  const text =
    `📩 *New contact request*\n` +
    `• *Name:* ${payload.firstName} ${payload.lastName}\n` +
    `• *Email:* ${payload.email}\n` +
    (payload.phone ? `• *Phone:* ${payload.phone}\n` : "") +
    `• *Message:* ${payload.message}`;

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
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
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Please try again later." }, { status: 429 });
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

  const from = process.env.RESEND_FROM || "LoveIQ <hello@send.loveiq.org>";

  try {
    await resend.emails.send({
      from,
      to: contactToEmail,
      replyTo: email,
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
