import { NextRequest, NextResponse } from "next/server";
import type { PushSubscription } from "web-push";
import { saveSubscription, removeSubscription } from "@/lib/subscriptions";

// POST /api/push-subscribe  — save a new subscription
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const subscription = body as PushSubscription;

    if (!subscription?.endpoint) {
      return NextResponse.json({ error: "Invalid subscription" }, { status: 400 });
    }

    saveSubscription(subscription);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// DELETE /api/push-subscribe  — remove an existing subscription
export async function DELETE(req: NextRequest) {
  try {
    const { endpoint } = await req.json();
    if (!endpoint) {
      return NextResponse.json({ error: "Endpoint required" }, { status: 400 });
    }
    removeSubscription(endpoint);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
