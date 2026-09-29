import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Timeline from "@/components/Timeline";
import { timeline, sources } from "@/lib/data/profile";

const BASE = "https://jashwantshiblisingh.netlify.app";

export const metadata: Metadata = {
  title: "राजनीतिक सफर — जशवंत सिंह (Jashwant Singh) शिब्ली सिंह",
  description:
    "जशवंत सिंह (Jashwant Singh) उर्फ शिब्ली सिंह का राजनीतिक सफर — ग्राम प्रधान से सुभासपा प्रदेश सलाहकार तक, आज़मगढ़ उत्तर प्रदेश।",
  alternates: { canonical: `${BASE}/political-journey` },
  openGraph: {
    title: "राजनीतिक सफर — जशवंत सिंह (Jashwant Singh)",
    url: `${BASE}/political-journey`,
    images: [{ url: `${BASE}/profile.jpg`, width: 400, height: 500, alt: "जशवंत सिंह" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/profile.jpg`] },
};

export default function PoliticalJourneyPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "होम", href: "/" },
        { label: "राजनीतिक सफर", href: "/political-journey" },
      ]} />
      <article className="container-content py-14">
        <header className="max-w-prose">
          <h1 className="font-serif text-3xl text-ink sm:text-4xl">राजनीतिक सफर</h1>
          <p className="mt-3 text-sm text-graphite">
            जशवंत सिंह (Jashwant Singh) शिब्ली सिंह के राजनीतिक जीवन की
            chronological timeline।
          </p>
        </header>
        <div className="mt-10">
          <Timeline events={timeline} sources={sources} />
        </div>
      </article>
    </>
  );
}
