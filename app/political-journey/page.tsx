import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Timeline from "@/components/Timeline";
import { profile, timeline, sources, siteMeta } from "@/lib/data/profile";

const BASE = "https://jashwantshiblisingh.netlify.app";

export const metadata: Metadata = {
  title: "राजनीतिक सफर — जशवंत सिंह शिब्ली सिंह, आज़मगढ़",
  description:
    "जशवंत सिंह (Jashwant Singh) उर्फ शिब्ली सिंह का राजनीतिक सफर — ग्राम प्रधान से सुभासपा प्रदेश सलाहकार तक, आज़मगढ़ उत्तर प्रदेश।",
  alternates: { canonical: `${BASE}/political-journey` },
  openGraph: {
    title: "राजनीतिक सफर — जशवंत सिंह (Jashwant Singh)",
    url: `${BASE}/political-journey`,
    images: [{ url: `${BASE}/profile.jpg`, width: 400, height: 500, alt: "जशवंत सिंह" }],
  },
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
