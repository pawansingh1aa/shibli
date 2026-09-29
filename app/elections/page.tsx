import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ElectionTable from "@/components/ElectionTable";
import { profile, elections, sources, siteMeta } from "@/lib/data/profile";

const BASE = "https://jashwantshiblisingh.netlify.app";

export const metadata: Metadata = {
  title: "चुनाव रिकॉर्ड — जशवंत सिंह शिब्ली सिंह, आज़मगढ़",
  description:
    "जशवंत सिंह (Jashwant Singh) उर्फ शिब्ली सिंह का चुनाव रिकॉर्ड — 2017 दीदारगंज विधानसभा (महाक्रांति दल) और 2019 आज़मगढ़ लोकसभा (सुभासपा)।",
  alternates: { canonical: `${BASE}/elections` },
  openGraph: {
    title: "चुनाव रिकॉर्ड — जशवंत सिंह (Jashwant Singh)",
    url: `${BASE}/elections`,
    images: [{ url: `${BASE}/profile.jpg`, width: 400, height: 500, alt: "जशवंत सिंह" }],
  },
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
