"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data/profile";
import SbspSymbol from "@/components/SbspSymbol";

const links = [
  { href: "/", label: "होम" },
  { href: "/biography", label: "जीवनी" },
  { href: "/elections", label: "चुनाव रिकॉर्ड" },
  { href: "/party-activities", label: "पार्टी गतिविधियाँ" },
  { href: "/contact", label: "संपर्क" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      {/* ── Saffron identity bar ── */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #D95E08 0%, #F4892A 60%, #E8A020 100%)",
        }}
        className="px-4 py-3 sm:px-6"
      >
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-serif text-lg font-bold text-white"
              style={{
                background: "rgba(0,0,0,0.2)",
                boxShadow: "0 0 0 2px rgba(255,255,255,0.5)",
              }}
            >
              ज
            </span>
            <span>
              <span
                className="block font-serif text-lg font-bold leading-tight text-white sm:text-xl"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
              >
                {profile.name}
              </span>
              <span className="block text-xs" style={{ color: "rgba(255,255,255,0.9)" }}>
                {profile.alternateName}
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            {/* Party name — desktop only */}
            <span
              className="hidden text-right text-xs leading-relaxed sm:block"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              <span className="flex items-center justify-end gap-1">
                <SbspSymbol size={12} />
                सुहेलदेव भारतीय समाज पार्टी
              </span>
              <span style={{ color: "rgba(255,255,255,0.65)" }}>(सुभासपा)</span>
            </span>

            {/* Hamburger button — mobile only */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded text-white md:hidden"
              style={{ background: "rgba(0,0,0,0.2)" }}
              aria-label={open ? "मेनू बंद करें" : "मेनू खोलें"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Green nav bar — desktop ── */}
      <nav
        aria-label="Primary desktop"
        className="hidden md:block"
        style={{ background: "#145224", borderBottom: "3px solid #D4960A" }}
      >
        <div className="mx-auto flex max-w-[1180px] flex-wrap gap-x-0.5 gap-y-1 px-4 py-1.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-3 py-1.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/20 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      {open && (
        <nav
          aria-label="Primary mobile"
          className="md:hidden"
          style={{ background: "#0F3D1C", borderBottom: "3px solid #D4960A" }}
        >
          <ul className="divide-y divide-white/10">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-5 py-3.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 active:bg-white/20"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
