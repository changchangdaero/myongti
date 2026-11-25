import type { Growth } from "@/data/types";

export function ExplanationDiff({ name, growth }: { name: string; growth: Growth }) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <p className="text-[15px] font-bold text-mj-navy-dark">{name}</p>
        <p className="tnum text-[14px] text-text-sub">
          {growth.before} → <b className="text-mj-navy">{growth.after}</b>
          <b className="ml-2 text-mj-sky">+{growth.after - growth.before}</b>
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="mb-1 text-[12px] text-text-sub">1차</p>
          <p className="text-[14px] leading-relaxed text-text-sub">{growth.beforeText}</p>
        </div>
        <div className="border-l-2 border-mj-navy pl-4">
          <p className="mb-1 text-[12px] font-bold text-mj-navy">재설명</p>
          <p className="text-[14px] leading-relaxed text-mj-navy-dark">
            {growth.afterText?.map((s, i) =>
              s.added ? (
                <span key={i} className="underline decoration-mj-sky decoration-2 underline-offset-4">
                  {s.text}
                </span>
              ) : (
                <span key={i}>{s.text}</span>
              ),
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
