import { NextResponse } from "next/server";

async function sha256(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function POST(request: Request) {
  const STAGING_PASSWORD = process.env.STAGING_PASSWORD;
  if (!STAGING_PASSWORD) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const body = (await request.json().catch(() => ({}))) as { password?: unknown };
  const { password } = body;

  if (!password || typeof password !== "string") {
    return NextResponse.json({ error: "Invalid input." }, { status: 400 });
  }

  const expected = await sha256(STAGING_PASSWORD);
  const incoming = await sha256(password);

  if (incoming !== expected) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set("staging_session", expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return response;
}
