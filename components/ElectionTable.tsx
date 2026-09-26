import type { ElectionRecord, Source } from "@/lib/data/profile";

export default function ElectionTable({
  records,
  sources,
}: {
  records: ElectionRecord[];
  sources: Source[];
}) {
  return (
    <>
      {/* ── Mobile card layout ── */}
      <div className="space-y-4 md:hidden">
        {records.map((r) => {
          const linked = sources.filter((s) => r.sourceIds.includes(s.id));
          return (
            <div
              key={r.id}
              className="rounded-lg border border-hairline bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className="rounded px-2 py-0.5 text-xs font-bold text-white"
                  style={{ background: "#E8640A" }}
                >
                  {r.year}
                </span>
              </div>
              <p className="mt-2 font-semibold text-ink">{r.constituency}</p>
              <p className="text-sm text-graphite">{r.election}</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-medium text-ink">Party: </span>
                  <span className="text-graphite">{r.party}</span>
                </div>
                <div>
                  <span className="font-medium text-ink">Votes: </span>
                  <span className="text-graphite">{r.votes ?? "—"}</span>
                </div>
              </div>
              <p className="mt-2 text-xs text-graphite">{r.status}</p>
              {linked.length > 0 && (
                <div className="mt-3 border-t border-hairline pt-2">
                  {linked.map((s) =>
                    s.url ? (
                      <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer nofollow"
                        className="text-xs" style={{ color: "#D95E08" }}>
                        {s.publication} ↗
                      </a>
                    ) : (
                      <span key={s.id} className="text-xs text-graphite">{s.publication}</span>
                    )
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Desktop table layout ── */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-hairline text-graphite">
              <th scope="col" className="py-3 pr-4 font-medium">साल</th>
              <th scope="col" className="py-3 pr-4 font-medium">चुनाव</th>
              <th scope="col" className="py-3 pr-4 font-medium">Constituency</th>
              <th scope="col" className="py-3 pr-4 font-medium">Party</th>
              <th scope="col" className="py-3 pr-4 font-medium">Status</th>
              <th scope="col" className="py-3 pr-4 font-medium">Votes</th>
              <th scope="col" className="py-3 pr-4 font-medium">Source</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r) => {
              const linked = sources.filter((s) => r.sourceIds.includes(s.id));
              return (
                <tr key={r.id} className="border-b border-hairline align-top">
                  <td className="py-4 pr-4 text-ink">{r.year}</td>
                  <td className="py-4 pr-4 text-ink">{r.election}</td>
                  <td className="py-4 pr-4 text-ink">{r.constituency}</td>
                  <td className="py-4 pr-4 text-ink">{r.party}</td>
                  <td className="py-4 pr-4 text-sm text-graphite">{r.status}</td>
                  <td className="py-4 pr-4 text-ink">{r.votes ?? "—"}</td>
                  <td className="py-4 pr-4">
                    {linked.length === 0 ? (
                      <span className="text-xs text-graphite">—</span>
                    ) : (
                      <ul className="space-y-1">
                        {linked.map((s) =>
                          s.url ? (
                            <li key={s.id}>
                              <a href={s.url} target="_blank" rel="noopener noreferrer nofollow"
                                className="text-xs" style={{ color: "#D95E08" }}>
                                {s.publication}
                              </a>
                            </li>
                          ) : (
                            <li key={s.id} className="text-xs text-graphite">{s.publication}</li>
                          )
                        )}
                      </ul>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
