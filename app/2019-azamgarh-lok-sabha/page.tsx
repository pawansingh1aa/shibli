import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CitationList } from "@/components/Citation";
import { profile, sources, siteMeta } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "2019 आज़मगढ़ लोकसभा — जशवंत सिंह (शिब्ली सिंह)",
  description:
    "2019 आज़मगढ़ लोकसभा चुनाव में सुभासपा प्रत्याशी जशवंत सिंह उर्फ शिब्ली सिंह की जानकारी।",
  alternates: { canonical: "/2019-azamgarh-lok-sabha" },
};

export default function Azamgarh2019Page() {
  const eciSource = sources.find((s) => s.id === "src-wiki-azamgarh-ls-2019");
  const affidavitSource = sources.find((s) => s.id === "src-adr-myneta-azamgarh-2019");
  const linkedSources = sources.filter((s) =>
    ["src-wiki-azamgarh-ls-2019", "src-adr-myneta-azamgarh-2019"].includes(s.id)
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "होम", href: "/" },
          { label: "चुनाव रिकॉर्ड", href: "/elections" },
          { label: "2019 आज़मगढ़ लोकसभा", href: "/2019-azamgarh-lok-sabha" },
        ]}
      />

      <article className="container-content py-14">
        <header className="max-w-prose">
          <h1 className="font-serif text-3xl text-ink sm:text-4xl">
            2019 आज़मगढ़ लोकसभा
          </h1>
          <p className="mt-3 text-sm text-graphite">
            2019 लोकसभा चुनाव में जशवंत सिंह उर्फ शिब्ली सिंह की भूमिका का विवरण।
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <section aria-labelledby="announced-heading" className="border border-hairline p-6">
            <h2 id="announced-heading" className="font-serif text-xl text-ink">
              सुभासपा प्रत्याशी घोषणा
            </h2>
            <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink/90">
              2019 लोकसभा चुनाव में सुहेलदेव भारतीय समाज पार्टी (सुभासपा) ने
              जशवंत सिंह उर्फ शिब्ली सिंह को आज़मगढ़ लोकसभा सीट से अपना
              प्रत्याशी घोषित किया था।
            </p>
          </section>

          <section aria-labelledby="withdrawal-heading" className="border border-hairline p-6">
            <h2 id="withdrawal-heading" className="font-serif text-xl text-ink">
              स्वास्थ्य कारणों से चुनाव नहीं लड़ सके
            </h2>
            <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink/90">
              स्वास्थ्य कारणों से जशवंत सिंह उर्फ शिब्ली सिंह चुनाव नहीं लड़
              सके। बाद में सुभासपा ने उनकी जगह अभिमन्यु सिंह को प्रत्याशी
              बनाया।
            </p>
            {affidavitSource && <CitationList sources={[affidavitSource]} />}
          </section>

          <section aria-labelledby="result-heading" className="border border-hairline p-6"
            style={{ borderColor: "#C8E6C9", background: "#F1F8E9" }}>
            <h2 id="result-heading" className="font-serif text-xl text-ink">
              चुनाव परिणाम
            </h2>
            <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink/90">
              2019 आज़मगढ़ लोकसभा सीट पर समाजवादी पार्टी के अखिलेश यादव ने
              जीत हासिल की। भारतीय जनता पार्टी के दिनेश लाल यादव "निरहुआ"
              runner-up रहे।
            </p>
            {eciSource && <CitationList sources={[eciSource]} />}
          </section>
        </div>

        <section aria-labelledby="sources-heading" className="mt-14">
          <h2 id="sources-heading" className="font-serif text-xl text-ink">
            Sources
          </h2>
          <CitationList sources={linkedSources} />
        </section>
      </article>
    </>
  );
}
