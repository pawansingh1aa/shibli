import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import { profile, timeline, sources, siteMeta } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: `जशवंत सिंह उर्फ शिब्ली सिंह — ग्राम प्रधान, सुभासपा प्रदेश सलाहकार, आज़मगढ़`,
  description:
    "जशवंत सिंह उर्फ शिब्ली सिंह — आज़मगढ़, उत्तर प्रदेश के 3 बार ग्राम प्रधान, जिला पंचायत सदस्य और सुहेलदेव भारतीय समाज पार्टी (सुभासपा) के प्रदेश सलाहकार। Jaswant Singh Shibli Singh Azamgarh UP SBSP politician.",
  keywords: [
    "जशवंत सिंह", "शिब्ली सिंह", "Jaswant Singh", "Jashwant Singh", "Shibli Singh",
    "आज़मगढ़", "Azamgarh", "ग्राम प्रधान", "Gram Pradhan", "सुभासपा", "SBSP",
    "सुहेलदेव भारतीय समाज पार्टी", "प्रदेश सलाहकार", "उत्तर प्रदेश", "Uttar Pradesh",
    "असवनियां", "दीदारगंज", "लालगंज", "जिला पंचायत",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "जशवंत सिंह (शिब्ली सिंह) — सुभासपा प्रदेश सलाहकार, आज़मगढ़ UP",
    description:
      "जशवंत सिंह उर्फ शिब्ली सिंह — 3 बार ग्राम प्रधान, जिला पंचायत सदस्य, सुभासपा प्रदेश सलाहकार। आज़मगढ़, उत्तर प्रदेश।",
    url: siteMeta.baseUrl,
    images: [{ url: `${siteMeta.baseUrl}/profile.jpg`, width: 400, height: 500, alt: "जशवंत सिंह" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "जशवंत सिंह (शिब्ली सिंह) — आज़मगढ़ UP",
    description: "सुभासपा प्रदेश सलाहकार, 3 बार ग्राम प्रधान असवनियां, आज़मगढ़।",
  },
};

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.alternateName,
    url: siteMeta.baseUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />

      <section aria-labelledby="journey-heading" className="border-b border-hairline">
        <div className="container-content py-14">
          <h2 id="journey-heading" className="font-serif text-2xl text-ink">
            राजनीतिक सफर
          </h2>
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
            इस site पर हर documented claim किसी public record से linked है। पूरी
            list claims, publications और dates के साथ{" "}
            <Link href="/sources" className="text-maroon hover:text-maroon-dark">
              source directory
            </Link>{" "}
            पर देखें।
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {sources.map((s) => (
              <li key={s.id} className="border-b border-hairline pb-3">
                <span className="text-ink">{s.publication}</span>
                {s.url && (
                  <>
                    {" — "}
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-maroon hover:text-maroon-dark"
                    >
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
