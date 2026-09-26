import type { Metadata } from "next";
import { profile, siteMeta } from "@/lib/data/profile";

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "जशवंत सिंह उर्फ शिब्ली सिंह — ग्राम प्रधान, सुभासपा प्रदेश सलाहकार, आज़मगढ़",
  description:
    "जशवंत सिंह उर्फ शिब्ली सिंह — आज़मगढ़ उत्तर प्रदेश के 3 बार ग्राम प्रधान, जिला पंचायत सदस्य, सुहेलदेव भारतीय समाज पार्टी (सुभासपा) के प्रदेश सलाहकार। Jaswant Singh Shibli Singh Azamgarh UP politician SBSP.",
  alternates: { canonical: "/about" },
  keywords: [
    "जशवंत सिंह",
    "शिब्ली सिंह",
    "Jaswant Singh",
    "Jashwant Singh",
    "Shibli Singh",
    "Shibbli Singh",
    "आज़मगढ़",
    "Azamgarh",
    "ग्राम प्रधान",
    "Gram Pradhan",
    "सुभासपा",
    "SBSP",
    "सुहेलदेव भारतीय समाज पार्टी",
    "Suheldev Bharatiya Samaj Party",
    "प्रदेश सलाहकार",
    "Pradesh Salahkar",
    "उत्तर प्रदेश",
    "Uttar Pradesh",
    "असवनियां",
    "Aswaniya",
    "दीदारगंज",
    "Didarganj",
    "लालगंज",
    "Lalganj",
    "जिला पंचायत",
    "Zila Panchayat",
    "राजनेता",
    "politician",
  ],
  openGraph: {
    title: "जशवंत सिंह (शिब्ली सिंह) — सुभासपा प्रदेश सलाहकार, आज़मगढ़",
    description:
      "जशवंत सिंह उर्फ शिब्ली सिंह आज़मगढ़, उत्तर प्रदेश के वरिष्ठ राजनीतिक व्यक्तित्व हैं। 3 बार ग्राम प्रधान, जिला पंचायत सदस्य और सुभासपा प्रदेश सलाहकार।",
    url: `${siteMeta.baseUrl}/about`,
    type: "profile",
    images: [
      {
        url: `${siteMeta.baseUrl}/profile.jpg`,
        width: 400,
        height: 500,
        alt: "जशवंत सिंह उर्फ शिब्ली सिंह",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "जशवंत सिंह (शिब्ली सिंह) — आज़मगढ़ UP",
    description: "सुभासपा प्रदेश सलाहकार, 3 बार ग्राम प्रधान असवनियां, आज़मगढ़।",
  },
};

export default function AboutPage() {
  // ── JSON-LD Structured Data — Person schema ────────────────────────────────
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "जशवंत सिंह",
    alternateName: ["शिब्ली सिंह", "Jaswant Singh", "Jashwant Singh", "Shibli Singh"],
    description:
      "जशवंत सिंह उर्फ शिब्ली सिंह उत्तर प्रदेश के आज़मगढ़ ज़िले के वरिष्ठ राजनीतिक व्यक्तित्व हैं। वे 3 बार असवनियां ग्राम पंचायत के ग्राम प्रधान और सरायमोहन जिला पंचायत क्षेत्र से जिला पंचायत सदस्य रह चुके हैं। वर्तमान में वे सुहेलदेव भारतीय समाज पार्टी (सुभासपा) के प्रदेश सलाहकार हैं।",
    image: `${siteMeta.baseUrl}/profile.jpg`,
    url: siteMeta.baseUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "असवनियां",
      addressRegion: "आज़मगढ़, उत्तर प्रदेश",
      addressCountry: "IN",
    },
    jobTitle: "प्रदेश सलाहकार, सुहेलदेव भारतीय समाज पार्टी",
    memberOf: {
      "@type": "Organization",
      name: "सुहेलदेव भारतीय समाज पार्टी (सुभासपा)",
      alternateName: "SBSP",
    },
    knowsAbout: [
      "ग्राम पंचायत प्रशासन",
      "जिला पंचायत",
      "उत्तर प्रदेश राजनीति",
      "SBSP",
      "आज़मगढ़",
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "जशवंत सिंह उर्फ शिब्ली सिंह — Public Information Profile",
    description:
      "जशवंत सिंह उर्फ शिब्ली सिंह का official public information profile — आज़मगढ़, उत्तर प्रदेश।",
    url: siteMeta.baseUrl,
    about: { "@type": "Person", name: "जशवंत सिंह" },
    inLanguage: "hi",
    isAccessibleForFree: true,
  };

  return (
    <>
      {/* JSON-LD structured data — invisible to users, read by search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <div className="container-content py-14">
        <div className="max-w-prose">
          <h1 className="font-serif text-3xl text-ink sm:text-4xl">
            इस website के बारे में
          </h1>

          <p className="mt-6 text-[15px] leading-relaxed text-ink/90">
            यह website <strong>जशवंत सिंह उर्फ शिब्ली सिंह</strong> का एक
            independent public-information profile है। यह publicly available
            sources से तैयार की गई है और किसी official government website का
            हिस्सा नहीं है।
          </p>

          {/* SEO-rich content block — naturally uses keywords */}
          <h2 className="mt-10 font-serif text-xl text-ink">
            जशवंत सिंह (शिब्ली सिंह) कौन हैं?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
            <strong>जशवंत सिंह उर्फ शिब्ली सिंह</strong> उत्तर प्रदेश के{" "}
            <strong>आज़मगढ़ ज़िले</strong> के असवनियां ग्राम, थाना बरदह के
            निवासी हैं। वे <strong>3 बार ग्राम प्रधान</strong> (असवनियां ग्राम
            पंचायत, 2005–2010, 2010–2015 और 2020–2025) और{" "}
            <strong>सरायमोहन जिला पंचायत क्षेत्र से जिला पंचायत सदस्य</strong>{" "}
            रह चुके हैं। वर्ष 2018 से वे{" "}
            <strong>
              सुहेलदेव भारतीय समाज पार्टी (सुभासपा / SBSP)
            </strong>{" "}
            से जुड़े हुए हैं और वर्तमान में{" "}
            <strong>सुभासपा के प्रदेश सलाहकार</strong> के पद पर कार्यरत हैं।
          </p>

          <h2 className="mt-10 font-serif text-xl text-ink">
            जानकारी कैसे verify की जाती है?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
            हर factual claim को publish करने से पहले एक source से check किया
            जाता है। जो claim किसी reliable source से confirm नहीं हो सका, उसे
            "Publicly verified नहीं" label किया गया है।
          </p>

          <h2 className="mt-10 font-serif text-xl text-ink">
            यह website क्या नहीं है?
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink/90">
            <li>यह कोई official government या party website नहीं है।</li>
            <li>यह किसी search engine द्वारा verified या endorsed नहीं है।</li>
            <li>यह एक fan page नहीं है और {profile.name} पर कोई political position नहीं लेती।</li>
          </ul>

          <h2 className="mt-10 font-serif text-xl text-ink">
            सुधार सुझाएं
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
            अगर कोई जानकारी गलत या पुरानी लगे तो{" "}
            <a href="/contact" className="text-maroon hover:text-maroon-dark underline">
              संपर्क / सुधार
            </a>{" "}
            page पर जाकर अपना सुझाव दें।
          </p>
        </div>
      </div>
    </>
  );
}
