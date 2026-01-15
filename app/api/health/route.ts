import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { ok: true, service: "loveiq", ts: new Date().toISOString() },
    { status: 200 }
  );
}
