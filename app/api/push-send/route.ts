import { NextRequest, NextResponse } from "next/server";
import webpush from "web-push";
import { getAllSubscriptions, removeSubscription } from "@/lib/subscriptions";

// POST /api/push-send — broadcast a notification to all subscribers
export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-push-secret");
  if (secret !== process.env.PUSH_ADMIN_SECRET) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // VAPID config inside handler — not at module level
  // This prevents build-time errors when env vars are not set
  webpush.setVapidDetails(
    `mailto:${process.env.VAPID_MAILTO ?? "admin@example.com"}`,
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
  );

  const payload = await req.json();
  const subscriptions = getAllSubscriptions();

  if (subscriptions.length === 0) {
    return NextResponse.json({ sent: 0, message: "No subscribers" });
  }

  const results = await Promise.allSettled(
    subscriptions.map((sub) =>
      webpush.sendNotification(sub, JSON.stringify(payload))
    )
  );

  results.forEach((result, i) => {
    if (result.status === "rejected") {
      const err = result.reason as { statusCode?: number };
      if (err?.statusCode === 410 || err?.statusCode === 404) {
        removeSubscription(subscriptions[i].endpoint);
      }
    }
  });

  const sent = results.filter((r) => r.status === "fulfilled").length;
  return NextResponse.json({ sent, total: subscriptions.length });
}
