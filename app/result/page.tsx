import { PageHeader } from "@/components/layout/PageHeader";
import { AiDisclaimer } from "@/components/result/AiDisclaimer";
import { ConceptScoreRow } from "@/components/result/ConceptScoreRow";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { concepts } from "@/data/concepts";
import { evaluationMeta, evaluations, overallScore } from "@/data/evaluation";
import { getLevel, levelColor, levelLabel, type Level } from "@/lib/score";

export default function ResultPage() {
  const rows = concepts.map((c) => ({ concept: c, evaluation: evaluations.find((e) => e.conceptId === c.id)! }));
  const counts = rows.reduce(
    (acc, r) => ({ ...acc, [getLevel(r.evaluation.score)]: acc[getLevel(r.evaluation.score)] + 1 }),
    { good: 0, normal: 0, weak: 0 } as Record<Level, number>,
  );
  // 스크린샷 한 화면에 들어오도록 가장 낮은 개념의 근거만 기본으로 펼친다.
  const lowestId = rows.reduce((a, b) => (a.evaluation.score < b.evaluation.score ? a : b)).concept.id;

  return (
    <>
      <PageHeader step={3} title="이해도 진단 결과" right={<Button href="/improve">보완 학습 보기</Button>} />

      <AiDisclaimer />

      <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr]">
        <div>
          <p className="text-[13px] text-text-sub">종합 이해도</p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="tnum text-[80px] font-bold leading-none text-mj-navy">{overallScore}</span>
            <span className="tnum text-[18px] text-text-sub">/100</span>
          </p>
          <p className="mt-4 text-[14px] text-mj-navy-dark">
            {(["good", "normal", "weak"] as Level[]).map((l, i) => (
              <span key={l}>
                {i > 0 && <span className="mx-2 text-line">|</span>}
                {levelLabel[l]}{" "}
                <b className="tnum" style={{ color: levelColor[l] }}>
                  {counts[l]}
                </b>
              </span>
            ))}
          </p>
          <p className="mt-8 border-l-2 border-mj-navy pl-4 text-[14px] leading-6">기본 개념은 이해했지만 문맥 교환과 멀티스레딩 설명을 보완해야 합니다.</p>
          <dl className="mt-2 space-y-1 text-[12px] text-text-sub">
            <div className="flex justify-between">
              <dt>평가 기준 자료</dt>
              <dd className="text-mj-navy-dark">{evaluationMeta.sourceFile}</dd>
            </div>
            <div className="flex justify-between">
              <dt>진단</dt>
              <dd className="tnum">
                {evaluationMeta.evaluatedAt} · 대화 {evaluationMeta.messageCount} · 꼬리질문 {evaluationMeta.followUpCount}
              </dd>
            </div>
          </dl>
        </div>

        <Card>
          <CardHeader
            title="개념별 진단"
            right={
              <span className="text-[12px] text-text-sub">
                <span className="mr-1 inline-block h-2.5 w-[2px] bg-mj-sky align-middle" /> 인정
                <span className="ml-3 mr-1 inline-block h-2.5 w-[2px] bg-coral align-middle" /> 감점
              </span>
            }
          />
          <ul>
            {rows.map((r) => (
              <ConceptScoreRow
                key={r.concept.id}
                name={r.concept.name}
                evaluation={r.evaluation}
                defaultOpen={r.concept.id === lowestId}
              />
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
