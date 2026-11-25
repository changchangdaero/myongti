import type { MaterialMapRow } from "@/data/types";
import { scoreColor } from "@/lib/score";

export function MaterialMap({ rows }: { rows: MaterialMapRow[] }) {
  return (
    <table className="w-full table-fixed text-[13px]">
      <tbody>
        {rows.map((row) => (
          <tr key={row.subject} className="border-b border-line last:border-b-0">
            <th className="w-[110px] py-3 text-left font-bold text-mj-navy-dark">{row.subject}</th>
            {Array.from({ length: 5 }, (_, i) => row.files[i]).map((ch, i) =>
              !ch ? (
                <td key={i} />
              ) : (
              <td key={ch.topic} className="px-2 py-3">
                <div className="flex items-baseline justify-between gap-2">
                  <span className={`truncate ${ch.score === undefined ? "text-text-sub/60" : "text-mj-navy-dark"}`}>
                    {ch.topic}
                  </span>
                  <span
                    className="tnum shrink-0 text-[14px] font-bold"
                    style={{ color: ch.score === undefined ? undefined : scoreColor(ch.score) }}
                  >
                    {ch.score ?? <span className="text-line">–</span>}
                  </span>
                </div>
              </td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
