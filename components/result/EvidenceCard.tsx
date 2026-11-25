import { messageNo } from "@/data/session";
import type { Evaluation } from "@/data/types";
import Link from "next/link";

export function EvidenceCard({ evaluation }: { evaluation: Evaluation }) {
  const credited = evaluation.evidences.filter((e) => e.kind === "credited");
  const questionable = evaluation.evidences.filter((e) => e.kind === "questionable");

  return (
    <div className="grid grid-cols-[1fr_300px] gap-8 px-6 pb-5">
      <div className="space-y-3">
        {credited.map((e) => (
          <blockquote key={e.messageId} className="border-l-2 border-mj-sky pl-3">
            <p className="text-[14px] leading-relaxed text-mj-navy-dark">“{e.quote}”</p>
            <p className="mt-0.5 text-[12px] text-text-sub">
              인정 · <span className="tnum">#{messageNo(e.messageId)}</span>
            </p>
          </blockquote>
        ))}
        {questionable.map((e) => (
          <blockquote key={e.messageId} className="border-l-2 border-coral pl-3">
            <p className="text-[14px] leading-relaxed text-mj-navy-dark">“{e.quote}”</p>
            <p className="mt-0.5 text-[12px] text-coral">
              감점 · {e.note} · <span className="tnum">#{messageNo(e.messageId)}</span>
            </p>
          </blockquote>
        ))}
      </div>
      <div className="flex flex-col">
        <p className="mb-2 text-[12px] font-bold text-coral">
          빠진 내용 <span className="font-normal text-text-sub">· 업로드 자료 기준</span>
        </p>
        <ul className="space-y-2">
          {evaluation.missing.map((m) => (
            <li key={m.text} className="flex gap-2 text-[14px] leading-relaxed text-mj-navy-dark">
              <span className="text-coral">–</span>
              <span>
                {m.text} <span className="tnum whitespace-nowrap text-[12px] text-text-sub">{m.page}</span>
              </span>
            </li>
          ))}
        </ul>
        <Link href={`/result/demo/appeal/${evaluation.conceptId}`} className="mt-auto self-start pt-4 text-[12px] font-bold underline underline-offset-4">이 평가에 이의 제기 →</Link>
      </div>
    </div>
  );
}
