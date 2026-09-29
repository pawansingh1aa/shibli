import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ElectionTable from "@/components/ElectionTable";
import { elections, sources } from "@/lib/data/profile";

const BASE = "https://jashwantshiblisingh.netlify.app";

export const metadata: Metadata = {
  title: "चुनाव रिकॉर्ड — जशवंत सिंह (Jashwant Singh) आज़मगढ़",
  description:
    "जशवंत सिंह (Jashwant Singh) उर्फ शिब्ली सिंह का चुनाव रिकॉर्ड — 2017 दीदारगंज विधानसभा महाक्रांति दल, 2019 आज़मगढ़ लोकसभा सुभासपा।",
  alternates: { canonical: `${BASE}/elections` },
  openGraph: {
    title: "चुनाव रिकॉर्ड — जशवंत सिंह (Jashwant Singh)",
    url: `${BASE}/elections`,
    images: [{ url: `${BASE}/profile.jpg`, width: 400, height: 500, alt: "जशवंत सिंह" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/profile.jpg`] },
};

export default function ElectionsPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "होम", href: "/" },
        { label: "चुनाव रिकॉर्ड", href: "/elections" },
      ]} />
      <div className="container-content py-14">
        <header className="max-w-prose">
          <h1 className="font-serif text-3xl text-ink sm:text-4xl">चुनाव रिकॉर्ड</h1>
          <p className="mt-3 text-sm text-graphite">
            जशवंत सिंह (Jashwant Singh) उर्फ शिब्ली सिंह के चुनावी इतिहास का
            विवरण।
          </p>
        </header>
        <div className="mt-8">
          <ElectionTable records={elections} sources={sources} />
        </div>
      </div>
    </>
  );
}
