import { profile } from "@/lib/data/profile";
import SbspSymbol from "@/components/SbspSymbol";

export default function ProfileCard() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-5">
      {/* Photo */}
      {profile.images.profilePhotoAvailable ? (
        <div
          className="shrink-0 overflow-hidden rounded-lg"
          style={{
            border: "3px solid #E8640A",
            boxShadow: "0 4px 16px rgba(232,100,10,0.2)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.images.profilePhotoPath}
            alt={profile.images.profilePhotoAlt}
            width={140}
            height={175}
            className="h-44 w-36 object-cover object-top"
          />
        </div>
      ) : (
        <div
          role="img"
          aria-label={profile.images.profilePhotoAlt}
          className="flex h-36 w-36 shrink-0 items-center justify-center rounded-lg font-serif text-4xl text-white"
          style={{ background: "#145224" }}
        >
          {initials}
        </div>
      )}

      {/* Info — below photo on mobile, beside on sm+ */}
      <div className="text-center sm:text-left">
        <p
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: "#E8640A" }}
        >
          {profile.name}
        </p>
        <p className="mt-1 text-sm font-semibold text-ink">
          {profile.alternateName}
        </p>
        <p className="mt-0.5 text-xs" style={{ color: "#5A5A5A" }}>
          {profile.region}
        </p>
        <span
          className="mt-2 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold text-white"
          style={{ background: "#145224" }}
        >
          <SbspSymbol size={11} />
          प्रदेश सलाहकार, सुभासपा
        </span>
      </div>
    </div>
  );
}
