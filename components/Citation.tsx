import type { Source } from "@/lib/data/profile";

// StatusBadge removed — no longer showing verification status

export function CitationList({ sources }: { sources: Source[] }) {
  if (sources.length === 0) return null;
  return (
    <ul className="mt-3 space-y-1.5 border-l-2 border-hairline pl-4 text-sm text-graphite">
      {sources.map((s) => (
        <li key={s.id}>
          <span className="text-ink">{s.publication}</span>
          {s.date && <span> · {s.date}</span>}
          {s.url && (
            <>
              {" — "}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-maroon hover:text-maroon-dark"
              >
                source देखें
              </a>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
