import type { Metadata } from "next";
import { profile } from "@/lib/data/profile";

const BASE = "https://jashwantshiblisingh.netlify.app";

export const metadata: Metadata = {
  title: "जशवंत सिंह (Jashwant Singh) — Shibli Singh Azamgarh UP",
  description:
    "जशवंत सिंह (Jashwant Singh) उर्फ शिब्ली सिंह — आज़मगढ़ UP के 3 बार ग्राम प्रधान, जिला पंचायत सदस्य, सुभासपा प्रदेश सलाहकार। Gram Pradhan SBSP politician Uttar Pradesh.",
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: "जशवंत सिंह (Jashwant Singh) — सुभासपा, आज़मगढ़",
    description: "जशवंत सिंह शिब्ली सिंह — 3 बार ग्राम प्रधान, सुभासपा प्रदेश सलाहकार, आज़मगढ़।",
    url: `${BASE}/about`,
    images: [{ url: `${BASE}/profile.jpg`, width: 400, height: 500, alt: "जशवंत सिंह शिब्ली सिंह" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/profile.jpg`] },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "jashwantshiblisingh",
  url: BASE,
  description: "जशवंत सिंह (Jashwant Singh) उर्फ शिब्ली सिंह का official public information profile",
  inLanguage: "hi",
};

export default function AboutPage() {
  return (
    <>
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
            यह website <strong>जशवंत सिंह (Jashwant Singh) उर्फ शिब्ली सिंह
            (Shibli Singh)</strong> का एक independent public-information profile
            है। यह publicly available sources से तैयार की गई है।
          </p>

          <h2 className="mt-10 font-serif text-xl text-ink">
            जशवंत सिंह (शिब्ली सिंह) कौन हैं?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
            <strong>जशवंत सिंह उर्फ शिब्ली सिंह</strong> उत्तर प्रदेश के{" "}
            <strong>आज़मगढ़ ज़िले</strong> के असवनियां ग्राम, थाना बरदह के
            निवासी हैं। वे <strong>3 बार ग्राम प्रधान</strong> (असवनियां ग्राम
            पंचायत) और{" "}
            <strong>सरायमोहन जिला पंचायत क्षेत्र से जिला पंचायत सदस्य</strong>{" "}
            रह चुके हैं। वर्ष 2018 से वे{" "}
            <strong>सुहेलदेव भारतीय समाज पार्टी (सुभासपा / SBSP)</strong> से
            जुड़े हैं और वर्तमान में{" "}
            <strong>सुभासपा के प्रदेश सलाहकार</strong> हैं।
          </p>

          <h2 className="mt-10 font-serif text-xl text-ink">
            जानकारी कैसे verify की जाती है?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
            हर factual claim को publish करने से पहले एक public source से check
            किया जाता है।
          </p>

          <h2 className="mt-10 font-serif text-xl text-ink">यह website क्या नहीं है?</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink/90">
            <li>यह कोई official government या party website नहीं है।</li>
            <li>यह किसी search engine द्वारा endorsed नहीं है।</li>
            <li>यह {profile.name} पर कोई political position नहीं लेती।</li>
          </ul>

          <h2 className="mt-10 font-serif text-xl text-ink">सुधार सुझाएं</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
            अगर कोई जानकारी गलत लगे तो{" "}
            <a href="/contact" className="text-maroon hover:text-maroon-dark underline">
              संपर्क / सुधार
            </a>{" "}
            page पर जाएं।
          </p>
        </div>
      </div>
    </>
  );
}
