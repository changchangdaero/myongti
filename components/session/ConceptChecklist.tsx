import { Check } from "lucide-react";
import type { Concept } from "@/data/types";

export function ConceptChecklist({
  concepts,
  doneIds,
  activeId,
}: {
  concepts: Concept[];
  doneIds: string[];
  activeId: string;
}) {
  return (
    <ol>
      {concepts.map((c, i) => {
        const done = doneIds.includes(c.id);
        const active = c.id === activeId;
        return (
          <li key={c.id} className="flex items-center justify-between border-b border-line py-4">
            <span
              className={`text-[15px] ${
                active ? "font-bold text-mj-navy-dark" : done ? "text-mj-navy-dark" : "text-text-sub"
              }`}
            >
              <span className={`mr-3 inline-flex h-5 w-5 items-center justify-center rounded-full border align-middle ${done ? "border-mj-navy bg-mj-navy text-white dark:text-black" : active ? "border-2 border-mj-navy" : "border-line"}`}>{done ? <Check size={12} strokeWidth={3} /> : <span className="tnum text-[9px]">{i + 1}</span>}</span>
              {c.name}
            </span>
            <span className={`text-[12px] ${active ? "font-bold text-mj-sky" : "text-text-sub"}`}>
              {done ? "설명 완료" : active ? "확인 중" : "설명 전"}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
