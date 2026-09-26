"use client";

import { useEffect, useState } from "react";
import { Bell, BellOff, X } from "lucide-react";

type PermState = "idle" | "asking" | "granted" | "denied" | "unsupported";

function urlBase64ToUint8Array(base64String: string): ArrayBuffer {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0))).buffer as ArrayBuffer;
}

async function subscribeUser(registration: ServiceWorkerRegistration): Promise<boolean> {
  try {
    const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
    if (!publicKey) {
      console.error("NEXT_PUBLIC_VAPID_PUBLIC_KEY is not set.");
      return false;
    }

    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicKey),
    });

    const res = await fetch("/api/push-subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subscription),
    });

    return res.ok;
  } catch (err) {
    console.error("Push subscription failed:", err);
    return false;
  }
}

export default function NotificationPrompt() {
  const [state, setState] = useState<PermState>("idle");
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("notif-dismissed")) {
      setDismissed(true);
      return;
    }

    if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
      setState("unsupported");
      return;
    }

    const current = Notification.permission;
    if (current === "granted") {
      setState("granted");
      // Register SW silently so subscription stays active
      registerAndSubscribe();
    } else if (current === "denied") {
      setState("denied");
    } else {
      // Show the prompt banner after a short delay
      const timer = setTimeout(() => setState("asking"), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  async function registerAndSubscribe() {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      await navigator.serviceWorker.ready;
      await subscribeUser(registration);
    } catch (err) {
      console.error("SW registration failed:", err);
    }
  }

  async function handleAllow() {
    setState("idle"); // hide banner while asking
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      await registerAndSubscribe();
      setState("granted");
    } else {
      setState("denied");
    }
  }

  function handleDismiss() {
    sessionStorage.setItem("notif-dismissed", "1");
    setDismissed(true);
  }

  // Nothing to render in these states
  if (
    dismissed ||
    state === "idle" ||
    state === "unsupported" ||
    state === "granted"
  ) {
    return null;
  }

  if (state === "denied") {
    return null; // Browser has blocked — nothing we can do until user resets
  }

  // state === "asking"
  return (
    <div
      role="dialog"
      aria-label="Enable notifications"
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-xl border border-gray-200 bg-white shadow-xl"
    >
      <div className="flex items-start gap-3 p-4">
        {/* Icon */}
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <Bell size={18} aria-hidden />
        </span>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900">
            Stay updated
          </p>
          <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">
            Allow notifications to receive instant updates whenever new news or
            announcements are published.
          </p>

          {/* Buttons */}
          <div className="mt-3 flex gap-2">
            <button
              onClick={handleAllow}
              className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500"
            >
              <Bell size={12} aria-hidden />
              Allow
            </button>
            <button
              onClick={handleDismiss}
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-400"
            >
              <BellOff size={12} aria-hidden />
              Not now
            </button>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={handleDismiss}
          aria-label="Close notification prompt"
          className="shrink-0 rounded p-0.5 text-gray-400 hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-400"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
