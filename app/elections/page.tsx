import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ElectionTable from "@/components/ElectionTable";
import { profile, elections, sources, siteMeta } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "Election Record",
  description: `A clean, source-linked election record table for ${profile.name} (${profile.alternateName}). No estimated or unverified vote counts are shown.`,
  alternates: { canonical: "/elections" },
};

export default function ElectionsPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Election Record — ${profile.name}`,
    about: profile.name,
    url: `${siteMeta.baseUrl}/elections`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Election Record", href: "/elections" },
        ]}
      />

      <div className="container-content py-14">
        <header className="max-w-prose">
          <h1 className="font-serif text-3xl text-ink sm:text-4xl">
            Election Record
          </h1>
          <p className="mt-3 text-sm text-graphite">
            This table lists elections referenced in connection with this
            name. No estimated or invented vote totals are shown — where a
            figure cannot be sourced, the cell reads "—" and the status
            column explains what is and is not confirmed.
          </p>
        </header>

        <div className="mt-8">
          <ElectionTable records={elections} sources={sources} />
        </div>
      </div>
    </>
  );
}
