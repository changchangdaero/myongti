"use client";

import { useState } from "react";
import type { Concept } from "@/data/types";

// AI가 자료에서 찾은 개념을 학생이 확인하고 고르는 목록
export function ConceptPicker({ concepts }: { concepts: Concept[] }) {
  const [checked, setChecked] = useState(() => new Set(concepts.map((c) => c.id)));

  const toggle = (id: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <p className="text-[13px] text-mj-navy-dark">
          AI가 자료에서 찾은 개념 <b className="tnum">{concepts.length}</b>
          <span className="ml-2 text-text-sub">틀렸거나 빠진 개념은 직접 고쳐 주세요</span>
        </p>
        <span className="tnum text-[12px] text-text-sub">
          {checked.size}/{concepts.length} 선택
        </span>
      </div>
      <ul>
        {concepts.map((c) => {
          const on = checked.has(c.id);
          return (
            <li key={c.id} className="border-b border-line">
              <button type="button" onClick={() => toggle(c.id)} className="flex w-full items-center gap-3 py-2.5 text-left">
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border ${
                    on ? "border-mj-navy bg-mj-navy" : "border-text-sub/50 bg-white"
                  }`}
                >
                  {on && (
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="white" strokeWidth={2}>
                      <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                    </svg>
                  )}
                </span>
                <span className={`flex-1 text-[15px] ${on ? "text-mj-navy-dark" : "text-text-sub line-through"}`}>{c.name}</span>
                <span className="tnum text-[12px] text-text-sub">{c.pages}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <button type="button" className="mt-2.5 text-[13px] text-mj-navy underline underline-offset-2">
        개념 직접 추가
      </button>
    </div>
  );
}
