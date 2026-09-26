"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function CorrectionForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot spam trap
    if (formData.get("company_website")) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const correction = String(formData.get("correction") ?? "").trim();
    const evidence = String(formData.get("evidence") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !correction) {
      setErrorMessage(
        "कृपया अपना नाम, email और suggested correction ज़रूर भरें।"
      );
      return;
    }
    if (!emailPattern.test(email)) {
      setErrorMessage("कृपया एक valid email address enter करें।");
      return;
    }

    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      // eslint-disable-next-line no-console
      console.log("Correction submitted", { name, email, correction, evidence, message });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-verified/30 bg-verified/5 p-6 text-sm text-ink"
      >
        शुक्रिया। आपका suggested correction receive हो गया है और जो source आपने provide किया है उसके against review किया जाएगा।
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-prose space-y-5">
      {/* Honeypot field — real users को नहीं दिखता, bots के लिए */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">यह field मत भरें</label>
        <input
          type="text"
          id="company_website"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          नाम
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={120}
          className="mt-1 w-full border border-hairline bg-white px-3 py-2 text-sm text-ink"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          className="mt-1 w-full border border-hairline bg-white px-3 py-2 text-sm text-ink"
        />
      </div>

      <div>
        <label htmlFor="correction" className="block text-sm font-medium text-ink">
          Suggested correction
        </label>
        <textarea
          id="correction"
          name="correction"
          required
          rows={4}
          maxLength={2000}
          className="mt-1 w-full border border-hairline bg-white px-3 py-2 text-sm text-ink"
        />
      </div>

      <div>
        <label htmlFor="evidence" className="block text-sm font-medium text-ink">
          Source / Evidence
        </label>
        <p className="mt-1 text-xs text-graphite">
          किसी reliable, independent source का link या citation (news report,
          government record, official statement) ताकि correction review हो सके।
        </p>
        <textarea
          id="evidence"
          name="evidence"
          rows={3}
          maxLength={2000}
          className="mt-1 w-full border border-hairline bg-white px-3 py-2 text-sm text-ink"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          maxLength={2000}
          className="mt-1 w-full border border-hairline bg-white px-3 py-2 text-sm text-ink"
        />
      </div>

      {errorMessage && (
        <p role="alert" className="text-sm text-maroon">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? "भेजा जा रहा है…" : "Correction भेजें"}
      </button>
    </form>
  );
}
