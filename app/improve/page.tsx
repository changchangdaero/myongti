import { ImproveCard } from "@/components/improve/ImproveCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { conceptName } from "@/data/concepts";
import { evaluations } from "@/data/evaluation";
import { improvements } from "@/data/improvement";
import { getLevel, scoreColor } from "@/lib/score";

export default function ImprovePage() {
  const items = improvements
    .map((imp) => ({ imp, ev: evaluations.find((e) => e.conceptId === imp.conceptId)! }))
    .sort((a, b) => a.ev.score - b.ev.score);
  const weak = items.filter((i) => getLevel(i.ev.score) === "weak");
  const rest = items.filter((i) => getLevel(i.ev.score) !== "weak");

  return (
    <>
      <PageHeader
        step={4}
        title="보완 학습"
        description={`보완이 필요한 개념 ${weak.length}개, 점수가 낮은 순서예요.`}
        right={<Button href="/session">다시 설명하기</Button>}
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {weak.map((i, idx) => (
          <ImproveCard
            key={i.imp.conceptId}
            rank={idx + 1}
            name={conceptName(i.imp.conceptId)}
            improvement={i.imp}
            evaluation={i.ev}
          />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-12 border-t border-line">
          {rest.map((i) => (
            <div key={i.imp.conceptId} className="grid gap-3 border-b border-line py-5 md:grid-cols-[200px_60px_1fr_auto] md:items-baseline md:gap-6">
              <span className="text-[15px] font-bold text-mj-navy-dark">{conceptName(i.imp.conceptId)}</span>
              <span className="tnum text-[20px] font-bold">
                {i.ev.score}
              </span>
              <p className="text-[14px] text-mj-navy-dark">{i.imp.reason}</p>
              <span className="text-[13px] text-text-sub">
                {i.imp.resources[0].file} <span className="tnum">{i.imp.resources[0].pages}</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
