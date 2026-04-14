import { NextRequest, NextResponse } from "next/server";

const MAILERLITE_TOKEN = process.env.MAILERLITE_API_TOKEN!;
const GROUP_ID = "184741291660149760"; // You Are the Goal - Life Audit

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();
    if (!email) return NextResponse.json({ success: false, error: "Email required" }, { status: 400 });

    const body: Record<string, unknown> = {
      email,
      groups: [GROUP_ID],
      status: "active",
    };
    if (name) body.fields = { name };

    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${MAILERLITE_TOKEN}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (res.ok || res.status === 201 || res.status === 200) {
      return NextResponse.json({ success: true });
    } else {
      console.error("MailerLite error:", data);
      return NextResponse.json({ success: false, error: "Subscription failed" }, { status: 500 });
    }
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
