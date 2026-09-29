import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import { profile, timeline, sources } from "@/lib/data/profile";

const BASE = "https://jashwantshiblisingh.netlify.app";

export const metadata: Metadata = {
  title: "जशवंत सिंह शिब्ली सिंह — ग्राम प्रधान, सुभासपा, आज़मगढ़",
  description:
    "जशवंत सिंह (Jashwant Singh) उर्फ शिब्ली सिंह — आज़मगढ़ UP के 3 बार ग्राम प्रधान, जिला पंचायत सदस्य, सुभासपा प्रदेश सलाहकार। Shibli Singh Azamgarh SBSP politician.",
  alternates: { canonical: BASE },
  openGraph: {
    title: "जशवंत सिंह (Jashwant Singh) — सुभासपा, आज़मगढ़",
    description: "3 बार ग्राम प्रधान, जिला पंचायत सदस्य, सुभासपा प्रदेश सलाहकार — आज़मगढ़, उत्तर प्रदेश।",
    url: BASE,
    images: [{ url: `${BASE}/profile.jpg`, width: 400, height: 500, alt: "जशवंत सिंह शिब्ली सिंह" }],
  },
};

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "जशवंत सिंह",
    alternateName: [
      "शिब्ली सिंह",
      "Jashwant Singh",
      "Jaswant Singh",
      "Shibli Singh",
      "jashwantshiblisingh",
      "जशवंत सिंह शिब्ली सिंह",
    ],
    jobTitle: "प्रदेश सलाहकार, सुहेलदेव भारतीय समाज पार्टी",
    url: BASE,
    image: `${BASE}/profile.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "असवनियां",
      addressRegion: "आज़मगढ़, उत्तर प्रदेश",
      addressCountry: "IN",
    },
    affiliation: {
      "@type": "Organization",
      name: "सुहेलदेव भारतीय समाज पार्टी",
      alternateName: "सुभासपा / SBSP",
      url: "https://www.sbsp.in/",
    },
    sameAs: [
      "https://www.facebook.com/share/1CwCsCf3nK/",
      "https://www.instagram.com/shiblisingh2055",
    ],
    description:
      "जशवंत सिंह उर्फ शिब्ली सिंह (Jashwant Singh alias Shibli Singh) उत्तर प्रदेश के आज़मगढ़ ज़िले के वरिष्ठ राजनीतिक कार्यकर्ता हैं। वे असवनियां ग्राम पंचायत से 3 बार ग्राम प्रधान और सरायमोहन जिला पंचायत क्षेत्र से जिला पंचायत सदस्य रह चुके हैं। वर्तमान में वे सुभासपा के प्रदेश सलाहकार हैं।",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />

      {/* SEO-friendly name mention — natural, not stuffed */}
      <section aria-labelledby="journey-heading" className="border-b border-hairline">
        <div className="container-content py-14">
          <h2 id="journey-heading" className="font-serif text-2xl text-ink">
            राजनीतिक सफर
          </h2>
          <p className="mt-2 max-w-prose text-sm text-graphite">
            जशवंत सिंह (Jashwant Singh), जिन्हें शिब्ली सिंह के नाम से भी जाना जाता है, के राजनीतिक जीवन की प्रमुख घटनाएं।
          </p>
          <div className="mt-8">
            <Timeline events={timeline} sources={sources} />
          </div>
          <Link
            href="/political-journey"
            className="mt-6 inline-block text-sm text-maroon hover:text-maroon-dark"
          >
            पूरी timeline देखें →
          </Link>
        </div>
      </section>

      <section aria-labelledby="sources-heading">
        <div className="container-content py-14">
          <h2 id="sources-heading" className="font-serif text-2xl text-ink">
            Sources
          </h2>
          <p className="mt-2 max-w-prose text-sm text-graphite">
            इस site पर हर documented claim किसी public record से linked है।{" "}
            <Link href="/sources" className="text-maroon hover:text-maroon-dark">
              source directory
            </Link>{" "}
            पर पूरी list देखें।
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {sources.map((s) => (
              <li key={s.id} className="border-b border-hairline pb-3">
                <span className="text-ink">{s.publication}</span>
                {s.url && (
                  <>
                    {" — "}
                    <a href={s.url} target="_blank" rel="noopener noreferrer nofollow"
                      className="text-maroon hover:text-maroon-dark">
                      देखें
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
