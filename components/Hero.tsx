import { profile } from "@/lib/data/profile";
import ProfileCard from "@/components/ProfileCard";
import SbspSymbol from "@/components/SbspSymbol";

export default function Hero() {
  return (
    <section style={{ background: "#FFF8F0", borderBottom: "2px solid #F4892A" }}>
      <div className="container-content py-8 sm:py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">

          {/* Text content */}
          <div className="order-2 lg:order-1">
            <div
              style={{
                height: "4px",
                width: "48px",
                borderRadius: "9999px",
                background: "#E8640A",
                marginBottom: "14px",
              }}
            />
            <h1 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {profile.name}
            </h1>
            <p
              className="mt-1.5 font-serif text-lg font-semibold sm:text-xl"
              style={{ color: "#D95E08" }}
            >
              {profile.alternateName}
            </p>
            {/* SBSP badge with chhadi symbol */}
            <span
              className="mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-semibold tracking-wide text-white"
              style={{ background: "#145224" }}
            >
              <SbspSymbol size={13} />
              सुहेलदेव भारतीय समाज पार्टी (सुभासपा)
            </span>

            <p
              className="mt-4 text-base leading-relaxed sm:text-[17px]"
              style={{ color: "#3A3A3A" }}
            >
              {profile.shortBio}
            </p>

            <p
              className="mt-3 flex items-center gap-2 text-sm"
              style={{ color: "#5A5A5A" }}
            >
              <span
                style={{
                  display: "inline-block",
                  height: "9px",
                  width: "9px",
                  borderRadius: "9999px",
                  background: "#E8640A",
                  flexShrink: 0,
                }}
                aria-hidden
              />
              {profile.region}
            </p>
          </div>

          {/* Profile photo */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end lg:items-start">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
