import type { ActivityItem } from "@/lib/data/profile";
import { MapPin, Calendar } from "lucide-react";

export default function ActivityCard({ item }: { item: ActivityItem }) {
  return (
    <article
      className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
      style={{ border: "1px solid #F0EAE0" }}
    >
      {/* Photo */}
      {item.photos.length > 0 && (
        <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/activities/${item.photos[0]}`}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2 text-xs" style={{ color: "#6A6A6A" }}>
          <span className="flex items-center gap-1">
            <Calendar size={11} aria-hidden />
            {item.date}
          </span>
          {item.location && (
            <span className="flex items-center gap-1">
              <MapPin size={11} aria-hidden />
              {item.location}
            </span>
          )}
          <span
            className="ml-auto flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
            style={{ background: "#145224" }}
          >
            सुभासपा
          </span>
        </div>

        <h3 className="mt-2 font-serif text-base font-semibold text-ink leading-snug">
          {item.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed" style={{ color: "#5A5A5A" }}>
          {item.description}
        </p>
      </div>
    </article>
  );
}
