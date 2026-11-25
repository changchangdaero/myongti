import Link from "next/link";
import { BeforeAfterChart } from "@/components/growth/BeforeAfterChart";
import { ExplanationDiff } from "@/components/growth/ExplanationDiff";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Card";
import { StatBox } from "@/components/ui/StatBox";
import { conceptName, conceptShort } from "@/data/concepts";
import { growth, growthMeta } from "@/data/growth";
import { getLevel } from "@/lib/score";

const avg = (xs: number[]) => Math.round(xs.reduce((a, b) => a + b, 0) / xs.length);

function FromTo({ from, to, fromClass = "text-text-sub/60" }: { from: number; to: number; fromClass?: string }) {
  return (
    <span className="tnum">
      <span className={fromClass}>{from}</span>
      <span className="mx-2 text-[22px] font-normal text-text-sub">→</span>
      <span className="text-mj-navy">{to}</span>
    </span>
  );
}

export default function GrowthPage() {
  const before = avg(growth.map((g) => g.before));
  const after = avg(growth.map((g) => g.after));
  const top = [...growth].sort((a, b) => b.after - b.before - (a.after - a.before))[0];
  const weakBefore = growth.filter((g) => getLevel(g.before) === "weak").length;
  const weakAfter = growth.filter((g) => getLevel(g.after) === "weak").length;
  const diffs = growth.filter((g) => g.afterText);

  return (
    <>
      <PageHeader
        step={5}
        title="성장 확인"
        description={`${growthMeta.firstDate} → ${growthMeta.retryDate}`}
        right={
          <Link href="/notes" className="text-[14px] text-mj-navy-dark underline underline-offset-4">
            학습 기록에 저장됨
          </Link>
        }
      />

      <div className="mb-10 grid grid-cols-2 border-y border-line md:grid-cols-4 md:divide-x md:divide-line">
        <StatBox label="종합 이해도" value={<FromTo from={before} to={after} />} sub={<b className="tnum text-mj-sky">+{after - before}</b>} />
        <StatBox
          label="가장 많이 오른 개념"
          value={<span className="text-[24px]">{conceptName(top.conceptId)}</span>}
          sub={
            <span className="tnum">
              {top.before} → {top.after} <b className="text-mj-sky">+{top.after - top.before}</b>
            </span>
          }
        />
        <StatBox label="보완 필요 개념" value={<FromTo from={weakBefore} to={weakAfter} fromClass="text-coral" />} />
        <StatBox label="꼬리질문에 답한 수" value={<FromTo from={2} to={5} />} sub={<span className="tnum text-text-sub">/ 5</span>} />
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)]">
        <Section title="개념별 점수">
          <BeforeAfterChart
            data={growth.map((g) => ({ name: conceptShort(g.conceptId), before: g.before, after: g.after }))}
          />
        </Section>

        <Section
          title="달라진 설명"
          right={
            <span className="text-[12px] text-text-sub">
              <span className="underline decoration-mj-sky decoration-2 underline-offset-4">밑줄</span> 새로 채운 내용
            </span>
          }
        >
          <div className="space-y-7 pt-2">
            {diffs.map((g) => (
              <ExplanationDiff key={g.conceptId} name={conceptName(g.conceptId)} growth={g} />
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
