import type { SessionRecord } from "@/data/types";
import { scoreColor } from "@/lib/score";

export function SessionLog({ records }: { records: SessionRecord[] }) {
  return (
    <ul>
      {records.map((r) => (
        <li key={r.id} className="flex items-baseline gap-4 border-b border-line py-2.5 last:border-b-0">
          <span className="tnum w-11 text-[12px] text-text-sub">{r.date}</span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[14px] text-mj-navy-dark">
              {r.topic}
              {r.retry && <span className="ml-1.5 text-[12px] font-bold text-mj-sky">재설명</span>}
            </p>
            <p className="text-[12px] text-text-sub">{r.subject}</p>
          </div>
          <span className="tnum text-[18px] font-bold" style={{ color: scoreColor(r.score) }}>
            {r.score}
          </span>
        </li>
      ))}
    </ul>
  );
}
