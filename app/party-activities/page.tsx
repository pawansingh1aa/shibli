import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ActivityCard from "@/components/ActivityCard";
import { profile, activities, siteMeta } from "@/lib/data/profile";
import SbspSymbol from "@/components/SbspSymbol";

export const metadata: Metadata = {
  title: "पार्टी गतिविधियाँ",
  description: `${profile.name} (${profile.alternateName}) की सुभासपा से जुड़ी पार्टी गतिविधियाँ, जनसभाएं, कार्यक्रम और photos।`,
  alternates: { canonical: "/party-activities" },
  openGraph: {
    title: `पार्टी गतिविधियाँ — ${profile.name}`,
    url: `${siteMeta.baseUrl}/party-activities`,
  },
};

export default function PartyActivitiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "होम", href: "/" },
          { label: "पार्टी गतिविधियाँ", href: "/party-activities" },
        ]}
      />

      <div className="container-content py-10 sm:py-14">
        {/* Page header */}
        <header className="max-w-2xl">
          <div
            style={{
              height: "4px",
              width: "48px",
              borderRadius: "9999px",
              background: "#E8640A",
              marginBottom: "12px",
            }}
          />
          <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
            पार्टी गतिविधियाँ
          </h1>
          <p className="mt-2 flex items-center gap-2 text-sm" style={{ color: "#5A5A5A" }}>
            <span style={{ color: "#145224", flexShrink: 0 }}>
              <SbspSymbol size={14} />
            </span>
            जशवंत सिंह उर्फ शिब्ली सिंह की सुहेलदेव भारतीय समाज पार्टी (सुभासपा) से जुड़ी
            गतिविधियाँ, जनसभाएं एवं कार्यक्रम।
          </p>        </header>

        {/* Photo grid */}
        <div className="mt-10">
          {activities.length === 0 ? (
            <div
              className="rounded-xl border-2 border-dashed p-10 text-center"
              style={{ borderColor: "#E8E0D0" }}
            >
              <p className="font-serif text-lg font-semibold text-ink">जल्द आ रहा है</p>
              <p className="mt-2 text-sm" style={{ color: "#5A5A5A" }}>
                पार्टी गतिविधियों की जानकारी और photos यहाँ add की जाएंगी।
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {activities.map((item) => (
                <ActivityCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
