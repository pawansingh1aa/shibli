import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Timeline from "@/components/Timeline";
import { profile, timeline, sources, siteMeta } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "Political Journey",
  description: `A chronological, source-backed timeline of documented political events associated with ${profile.name} (${profile.alternateName}).`,
  alternates: { canonical: "/political-journey" },
};

export default function PoliticalJourneyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Political Journey — ${profile.name}`,
    about: profile.name,
    url: `${siteMeta.baseUrl}/political-journey`,
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
          { label: "Political Journey", href: "/political-journey" },
        ]}
      />

      <article className="container-content py-14">
        <header className="max-w-prose">
          <h1 className="font-serif text-3xl text-ink sm:text-4xl">
            Political Journey
          </h1>
          <p className="mt-3 text-sm text-graphite">
            This timeline includes only events that public records could, in
            principle, confirm — local political activity, panchayat
            records, assembly and Lok Sabha contests, and SBSP-related
            activity. Each entry states plainly whether it is source-verified
            or not publicly verified, and links to the underlying record
            where one exists.
          </p>
        </header>

        <div className="mt-10">
          <Timeline events={timeline} sources={sources} />
        </div>

        <p className="mt-10 max-w-prose text-sm text-graphite">
          For the specific 2019 Azamgarh Lok Sabha episode referenced above,
          see the{" "}
          <a
            href="/2019-azamgarh-lok-sabha"
            className="text-maroon hover:text-maroon-dark"
          >
            dedicated page
          </a>{" "}
          for a full breakdown of the announcement, the reported non-contest,
          and the final result.
        </p>
      </article>
    </>
  );
}
