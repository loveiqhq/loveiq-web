import { NextResponse } from "next/server";

type Payload = {
  email?: string;
};

const tableName = "waitlist"; // adjust to your actual table name if different

export async function POST(request: Request) {
  const body: Payload = await request.json().catch(() => ({}));
  const email = body.email?.trim().toLowerCase();

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

  return NextResponse.json({ success: true });
}
