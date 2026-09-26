import type { Source } from "@/lib/data/profile";

const categoryLabels: Record<Source["category"], string> = {
  "election-commission": "Election Commission / official archive",
  government: "सरकारी record",
  news: "Established news publication",
  "party-statement": "Official party statement",
  other: "अन्य public source",
};

export default function SourceCard({ source }: { source: Source }) {
  return (
    <article className="border-b border-hairline py-6 first:pt-0">
      <p className="text-xs uppercase tracking-wide text-graphite">
        {categoryLabels[source.category]}
      </p>
      <h3 className="mt-2 font-serif text-lg text-ink">{source.claim}</h3>
      <dl className="mt-3 grid gap-x-6 gap-y-1 text-sm text-graphite sm:grid-cols-3">
        <div>
          <dt className="inline font-medium text-ink">Publication: </dt>
          <dd className="inline">{source.publication}</dd>
        </div>
        <div>
          <dt className="inline font-medium text-ink">Date: </dt>
          <dd className="inline">{source.date ?? "Specified नहीं"}</dd>
        </div>
        <div>
          <dt className="inline font-medium text-ink">Link: </dt>
          <dd className="inline">
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-maroon hover:text-maroon-dark"
              >
                Original source
              </a>
            ) : (
              "Available नहीं"
            )}
          </dd>
        </div>
      </dl>
    </article>
  );
}
