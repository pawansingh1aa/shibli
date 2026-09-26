import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsCard from "@/components/NewsCard";
import { profile, newsItems } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "News & Media",
  description: `Verified third-party news coverage of ${profile.name} (${profile.alternateName}), summarized with links to original reporting.`,
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }]} />

      <div className="container-content py-14">
        <header className="max-w-prose">
          <h1 className="font-serif text-3xl text-ink sm:text-4xl">
            News & Media
          </h1>
          <p className="mt-3 text-sm text-graphite">
            Short, original summaries of verified third-party reporting,
            each linking to the source publication. This site never
            reproduces full articles.
          </p>
        </header>

        <div className="mt-10">
          {newsItems.length === 0 ? (
            <div className="max-w-prose border border-dashed border-hairline p-6 text-sm text-graphite">
              No verified third-party news reports naming this individual
              were located at the time this page was built. This section
              will be updated as reliable coverage is identified and
              reviewed — see the{" "}
              <a href="/contact" className="text-maroon hover:text-maroon-dark">
                Contact / Correction
              </a>{" "}
              page to suggest a source.
            </div>
          ) : (
            newsItems.map((item) => <NewsCard key={item.id} item={item} />)
          )}
        </div>
      </div>
    </>
  );
}
