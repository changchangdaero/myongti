"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Evaluation } from "@/data/types";
import { getLevel, levelLabel } from "@/lib/score";
import { EvidenceCard } from "./EvidenceCard";

export function ConceptScoreRow({
  name,
  evaluation,
  defaultOpen = false,
}: {
  name: string;
  evaluation: Evaluation;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const level = getLevel(evaluation.score);

  return (
    <li className="border-t border-line first:border-t-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="grid w-full grid-cols-[minmax(130px,1fr)_auto_64px_16px] items-center gap-4 px-6 py-4 text-left"
      >
        <span className={`text-[15px] text-mj-navy-dark ${open ? "font-bold" : ""}`}>{name}</span>
        <span className={`rounded border px-2 py-1 text-[11px] font-bold ${level === "good" ? "border-mj-navy bg-mj-navy text-white dark:text-black" : level === "weak" ? "stripe border-2 border-mj-navy" : "border-2 border-mj-navy"}`}>{levelLabel[level]}</span>
        <span className="tnum text-right text-[24px] font-bold leading-none">
          {evaluation.score}
        </span>
        <ChevronDown size={16} className={`text-text-sub transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <>
          <div className="-mt-1 flex items-baseline justify-between px-6 pb-4">
            <p className="text-[14px] text-mj-navy-dark">{evaluation.summary}</p>
            {level === "weak" && (
              <span className="shrink-0 text-[12px] font-bold">보완 학습 필요</span>
            )}
          </div>
          <EvidenceCard evaluation={evaluation} />
        </>
      )}
    </li>
  );
}
