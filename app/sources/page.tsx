import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SourceCard from "@/components/SourceCard";
import { profile, sources } from "@/lib/data/profile";

const BASE = "https://jashwantshiblisingh.netlify.app";

export const metadata: Metadata = {
  title: "Sources — जशवंत सिंह शिब्ली सिंह",
  description:
    "जशवंत सिंह (Jashwant Singh) शिब्ली सिंह से जुड़े सभी facts के public sources — Election Commission, ADR/MyNeta aur अन्य।",
  alternates: { canonical: `${BASE}/sources` },
  openGraph: {
    title: "Sources — जशवंत सिंह (Jashwant Singh)",
    url: `${BASE}/sources`,
  },
};

export default function SourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sources", href: "/sources" }]} />

      <div className="container-content py-14">
        <header className="max-w-prose">
          <h1 className="font-serif text-3xl text-ink sm:text-4xl">
            Sources
          </h1>
          <p className="mt-3 text-sm text-graphite">
            Every major claim on this site is checked against a public
            source, prioritized in this order: Election Commission and
            official archives, government and district administration
            records, established newspapers, and official party statements.
            Claims without a listed source here are marked "Not publicly
            verified" wherever they appear on the site.
          </p>
        </header>

        <div className="mt-10">
          {sources.length === 0 ? (
            <p className="text-sm text-graphite">No sources recorded yet.</p>
          ) : (
            sources.map((s) => <SourceCard key={s.id} source={s} />)
          )}
        </div>
      </div>
    </>
  );
}
