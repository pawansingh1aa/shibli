"use client";

import { useEffect } from "react";

// Extend Window type for Google Translate
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: TranslateElementConstructor;
      };
    };
  }
}

interface TranslateElementConstructor {
  new (
    options: {
      pageLanguage: string;
      includedLanguages: string;
      layout: number;
      autoDisplay: boolean;
      multilanguagePage: boolean;
    },
    elementId: string
  ): void;
  InlineLayout: { SIMPLE: number };
}

export default function LanguageBar() {
  useEffect(() => {
    // Define the callback Google Translate script calls on load
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          // Top languages for Indian + global audience
          includedLanguages:
            "hi,en,ur,bn,ta,te,mr,gu,pa,kn,ml,or,as,ne,ar,fr,de,es,zh-CN,ja,ru",
          layout:
            window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
          multilanguagePage: true,
        },
        "google_translate_element"
      );
    };

    // Inject the Google Translate script if not already present
    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ background: "#145224", borderBottom: "1px solid #0F3D1C" }}>
      <div className="container-content flex items-center justify-end gap-2 py-1.5">
        <span className="text-xs select-none" style={{ color: "rgba(255,255,255,0.75)" }}>🌐 भाषा:</span>
        {/* Google Translate mounts its dropdown here */}
        <div
          id="google_translate_element"
          className="google-translate-container text-sm"
        />
      </div>
    </div>
  );
}
