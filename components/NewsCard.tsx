import type { NewsItem } from "@/lib/data/profile";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="border-b border-hairline py-6 first:pt-0">
      <div className="flex flex-wrap items-center gap-3 text-xs text-graphite">
        <span className="font-medium text-ink">{item.publication}</span>
        {item.date && <span>{item.date}</span>}
      </div>
      <h3 className="mt-2 font-serif text-lg text-ink">{item.headline}</h3>
      <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-ink/90">
        {item.summary}
      </p>
      {item.url && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-2 inline-block text-sm text-maroon hover:text-maroon-dark"
        >
          Original report पढ़ें
        </a>
      )}
    </article>
  );
}
