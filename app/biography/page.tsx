import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { biographySections, profile, siteMeta } from "@/lib/data/profile";

const BASE = "https://jashwantshiblisingh.netlify.app";

export const metadata: Metadata = {
  title: "जीवनी — जशवंत सिंह शिब्ली सिंह, आज़मगढ़",
  description:
    "जशवंत सिंह (Jashwant Singh) उर्फ शिब्ली सिंह की जीवनी — ग्राम प्रधान, जिला पंचायत सदस्य, किसान, सुभासपा प्रदेश सलाहकार, आज़मगढ़ उत्तर प्रदेश।",
  alternates: { canonical: `${BASE}/biography` },
  openGraph: {
    title: "जीवनी — जशवंत सिंह (Jashwant Singh) शिब्ली सिंह",
    url: `${BASE}/biography`,
    images: [{ url: `${BASE}/profile.jpg`, width: 400, height: 500, alt: "जशवंत सिंह" }],
  },
};

export default function BiographyPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `जीवनी — ${profile.name}`,
    about: profile.name,
    url: `${siteMeta.baseUrl}/biography`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Breadcrumbs items={[
        { label: "होम", href: "/" },
        { label: "जीवनी", href: "/biography" },
      ]} />

      <article className="container-content py-14">
        <header className="max-w-prose">
          <h1 className="font-serif text-3xl text-ink sm:text-4xl">जीवनी</h1>
          <p className="mt-3 text-sm text-graphite">
            {profile.name}, जिन्हें {profile.alternateName} के नाम से भी जाना
            जाता है, के बारे में publicly available information।
          </p>
        </header>

        <div className="mt-10 space-y-12">
          {biographySections.map((section) => (
            <section key={section.id} aria-labelledby={`${section.id}-heading`}>
              <h2
                id={`${section.id}-heading`}
                className="font-serif text-xl text-ink"
              >
                {section.title}
              </h2>
              <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink/90">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
