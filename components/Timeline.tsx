import type { TimelineEvent, Source } from "@/lib/data/profile";
import { CitationList } from "@/components/Citation";

export default function Timeline({
  events,
  sources,
}: {
  events: TimelineEvent[];
  sources: Source[];
}) {
  return (
    <ol className="relative border-l border-hairline pl-8">
      {events.map((event) => {
        const eventSources = sources.filter((s) =>
          event.sourceIds.includes(s.id)
        );
        return (
          <li key={event.id} className="mb-10 last:mb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full"
              style={{ background: "#E8640A" }}
            />
            <p className="text-sm font-medium text-graphite">{event.date}</p>
            <h3 className="mt-1 font-serif text-xl text-ink">{event.title}</h3>
            <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink/90">
              {event.description}
            </p>
            <CitationList sources={eventSources} />
          </li>
        );
      })}
    </ol>
  );
}
