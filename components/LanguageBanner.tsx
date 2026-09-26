"use client";

import { useEffect, useState } from "react";
import { X, Globe } from "lucide-react";

// Quick-pick languages shown as buttons in the banner
const QUICK_LANGS = [
  { code: "hi", label: "हिन्दी" },
  { code: "en", label: "English" },
  { code: "ur", label: "اردو" },
  { code: "bn", label: "বাংলা" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "mr", label: "मराठी" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "ar", label: "عربي" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
];

// Trigger Google Translate to switch to a given language code
function switchLanguage(langCode: string) {
  // Google Translate sets a cookie and uses a <select> element internally
  const selectEl = document.querySelector<HTMLSelectElement>(
    ".goog-te-combo"
  );
  if (selectEl) {
    selectEl.value = langCode;
    selectEl.dispatchEvent(new Event("change"));
  }
}

export default function LanguageBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only once per browser session
    if (!sessionStorage.getItem("lang-banner-seen")) {
      // Small delay so Google Translate widget has time to load
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem("lang-banner-seen", "1");
    setVisible(false);
  }

  function handleLang(code: string) {
    switchLanguage(code);
    dismiss();
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Choose your language"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white shadow-2xl sm:bottom-6 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[480px] sm:rounded-2xl sm:border"
    >
      <div className="p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe size={18} className="text-amber-500" aria-hidden />
            <p className="text-sm font-semibold text-gray-900">
              Choose your language
            </p>
          </div>
          <button
            onClick={dismiss}
            aria-label="Close language selector"
            className="rounded p-1 text-gray-400 hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-400"
          >
            <X size={16} />
          </button>
        </div>

        <p className="mt-1 text-xs text-gray-500">
          This site can be translated into your preferred language.
        </p>

        {/* Language buttons */}
        <div className="mt-3 flex flex-wrap gap-2">
          {QUICK_LANGS.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLang(lang.code)}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700 transition hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
            >
              {lang.label}
            </button>
          ))}
        </div>

        {/* Footer hint */}
        <p className="mt-3 text-[11px] text-gray-400">
          More languages available via the 🌐 Language bar at the top of the
          page.
        </p>
      </div>
    </div>
  );
}
