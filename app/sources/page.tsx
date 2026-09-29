import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SourceCard from "@/components/SourceCard";
import { sources } from "@/lib/data/profile";

const BASE = "https://jashwantshiblisingh.netlify.app";

export const metadata: Metadata = {
  title: "Sources — जशवंत सिंह (Jashwant Singh) शिब्ली सिंह",
  description:
    "जशवंत सिंह (Jashwant Singh) शिब्ली सिंह से जुड़े सभी facts के public sources — Election Commission, ADR/MyNeta और अन्य।",
  alternates: { canonical: `${BASE}/sources` },
  openGraph: {
    title: "Sources — जशवंत सिंह (Jashwant Singh)",
    url: `${BASE}/sources`,
    images: [{ url: `${BASE}/profile.jpg`, width: 400, height: 500, alt: "जशवंत सिंह" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/profile.jpg`] },
};

export default function SourcesPage() {
  return (
    <>
      <Breadcrumbs items={[
        { label: "होम", href: "/" },
        { label: "Sources", href: "/sources" },
      ]} />
      <div className="container-content py-14">
        <header className="max-w-prose">
          <h1 className="font-serif text-3xl text-ink sm:text-4xl">Sources</h1>
          <p className="mt-3 text-sm text-graphite">
            इस site पर हर major claim को एक public source से check किया गया है।
          </p>
        </header>
        <div className="mt-10">
          {sources.length === 0 ? (
            <p className="text-sm text-graphite">अभी कोई source record नहीं।</p>
          ) : (
            sources.map((s) => <SourceCard key={s.id} source={s} />)
          )}
        </div>
      </div>
    </>
  );
}
