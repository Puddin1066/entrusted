import { NextResponse } from "next/server";
import { sendContactNotification, type ContactPayload } from "@/lib/email";

function normalize(s: unknown, max: number): string {
  const t = typeof s === "string" ? s.trim() : "";
  return t.slice(0, max);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const payload: ContactPayload = {
    name: normalize(b.name, 200),
    role: normalize(b.role, 120) || undefined,
    organization: normalize(b.organization, 200) || undefined,
    email: normalize(b.email, 320),
    phone: normalize(b.phone, 40) || undefined,
    serviceNeed: normalize(b.serviceNeed, 120),
    message: normalize(b.message, 8000),
  };

  if (!payload.name || !payload.email || !payload.serviceNeed || !payload.message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
  if (!emailOk) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }

  try {
    await sendContactNotification(payload);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Email failed.";
    console.error("[contact]", err);
    return NextResponse.json({ ok: false, error: message }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}
