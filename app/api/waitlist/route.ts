import { NextResponse } from "next/server";
import { Resend } from "resend";
import { waitlistEmail } from "../../../lib/emails/waitlist";

type Payload = {
  email?: string;
  source?: string;
  firstName?: string | null;
};

const tableName = "waitlist_signups"; // matches Supabase table name
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body: Payload = await request.json().catch(() => ({}));
  const email = body.email?.trim().toLowerCase();
  const source = body.source?.trim() || "landing-modal";
  const firstName = body.firstName ?? null;

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return NextResponse.json({ error: "Supabase env vars missing" }, { status: 500 });
  }

  const insertPayload = {
    email,
    source,
    created_at: new Date().toISOString(),
  };

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
    const text = await response.text();
    return NextResponse.json({ error: "Failed to save", detail: text }, { status: 500 });
  }

  // Send waitlist confirmation email via Resend
  const from = process.env.RESEND_FROM || "LoveIQ <hello@send.loveiq.org>";
  const replyTo = process.env.RESEND_REPLY_TO || "hello@loveiq.org";
  const tpl = waitlistEmail({ firstName });

  const { error } = await resend.emails.send({
    from,
    to: email,
    replyTo,
    subject: tpl.subject,
    html: tpl.html,
    text: tpl.text,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
