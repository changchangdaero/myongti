import type { Evaluation, Improvement } from "@/data/types";

export function ImproveCard({
  rank,
  name,
  improvement,
  evaluation,
}: {
  rank: number;
  name: string;
  improvement: Improvement;
  evaluation: Evaluation;
}) {
  return (
    <article className="flex flex-col border-t-2 border-mj-navy-dark pt-5">
      <header className="flex items-end justify-between">
        <div>
          <p className="tnum text-[13px] text-text-sub">0{rank}</p>
          <h2 className="mt-1 text-[22px] font-bold tracking-[-0.02em] text-mj-navy-dark">{name}</h2>
        </div>
        <span className={`tnum border-2 border-mj-navy px-3 py-2 text-[38px] font-bold leading-none ${evaluation.score < 60 ? "stripe" : ""}`}>
          {evaluation.score}
        </span>
      </header>

      <p className="mt-5 text-[15px] leading-relaxed text-mj-navy-dark">{improvement.reason}</p>

      <div className="mb-6 mt-6 grid gap-6 sm:grid-cols-2">
        <section>
          <h3 className="mb-2 text-[12px] font-bold text-coral">빠진 내용</h3>
          <ul className="space-y-1.5">
            {evaluation.missing.map((m) => (
              <li key={m.text} className="flex gap-2 text-[14px] leading-snug text-mj-navy-dark">
                <span className="text-coral">–</span>
                <span>
                  {m.text} <span className="tnum whitespace-nowrap text-[12px] text-text-sub">{m.page}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="mb-2 text-[12px] font-bold text-text-sub">내 자료에서 다시 볼 곳</h3>
          <ol className="space-y-1.5">
            {improvement.resources.map((r, i) => (
              <li key={r.file + r.pages} className="flex gap-2 text-[14px] leading-snug text-mj-navy-dark">
                <span className="tnum text-text-sub">{i + 1}</span>
                <span>
                  {r.label}
                  <span className="mt-0.5 block text-[12px] text-text-sub">
                    {r.file} <span className="tnum">{r.pages}</span>
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="mt-auto border-l-2 border-mj-sky pl-3">
        <p className="text-[12px] text-text-sub">
          다시 설명하기 전에 스스로 답해 보기 · {improvement.reviewDate} 재설명 추천
        </p>
        <p className="mt-1 text-[15px] font-bold text-mj-navy-dark">{improvement.selfCheck}</p>
      </div>
    </article>
  );
}
