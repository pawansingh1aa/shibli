import Link from "next/link";
import { profile } from "@/lib/data/profile";
import SbspSymbol from "@/components/SbspSymbol";

export default function Footer() {
  return (
    <footer>
      {/* ── Deep green main footer ── */}
      <div style={{ background: "#0F3D1C" }}>
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-10 text-sm sm:px-6 sm:py-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-base font-bold text-white">{profile.name}</p>
            <p className="mt-0.5 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              {profile.alternateName}
            </p>
            <p className="mt-1 text-xs font-semibold flex items-center gap-1" style={{ color: "#F4892A" }}>
              <SbspSymbol size={12} />
              सुहेलदेव भारतीय समाज पार्टी (सुभासपा)
            </p>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              यह एक independent public-information profile है जो publicly available sources से तैयार की गई है। यह कोई official government website नहीं है।
            </p>
            {/* Social icons */}
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/share/1CwCsCf3nK/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                style={{ background: "#1877F2" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/shiblisingh2055"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                style={{ background: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pages */}
          <nav aria-label="Footer pages">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: "#F4892A" }}>
              Pages
            </p>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              <li><Link href="/biography" className="hover:text-white transition-colors">जीवनी</Link></li>
              <li><Link href="/elections" className="hover:text-white transition-colors">चुनाव रिकॉर्ड</Link></li>
              <li><Link href="/party-activities" className="hover:text-white transition-colors">पार्टी गतिविधियाँ</Link></li>
              <li><Link href="/2019-azamgarh-lok-sabha" className="hover:text-white transition-colors">2019 आज़मगढ़ Lok Sabha</Link></li>
            </ul>
          </nav>

          {/* Info */}
          <nav aria-label="Footer info">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: "#F4892A" }}>
              जानकारी
            </p>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              <li><Link href="/sources" className="hover:text-white transition-colors">Sources</Link></li>
              <li><Link href="/sources" className="hover:text-white transition-colors">Sources</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">इस website के बारे में</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">सुधार सुझाएं</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* ── Saffron bottom strip ── */}
      <div style={{ background: "#E8640A" }} className="py-3">
        <p
          className="mx-auto max-w-[1180px] px-5 text-center text-xs text-white sm:px-6"
        >
          © {new Date().getFullYear()} — Independent public-information profile। सभी facts किसी public source से attributed हैं।
        </p>
      </div>
    </footer>
  );
}
