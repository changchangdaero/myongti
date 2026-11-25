import { PageHeader } from "@/components/layout/PageHeader";
import { MaterialMap } from "@/components/notes/MaterialMap";
import { ReviewQueue } from "@/components/notes/ReviewQueue";
import { ScoreTrendChart } from "@/components/notes/ScoreTrendChart";
import { SessionLog } from "@/components/notes/SessionLog";
import { Card, CardHeader, Section } from "@/components/ui/Card";
import { historyStats, materialMap, reviewQueue, sessionRecords } from "@/data/history";

export default function NotesPage() {
  const pending = reviewQueue.filter((r) => r.status !== "resolved").length;

  return (
    <>
      <PageHeader
        title="학습 기록"
        breadcrumb={["학습 기록"]}
        right={
          <p className="text-[14px] text-text-sub">
            올린 자료 <b className="tnum text-[20px] text-mj-navy-dark">{historyStats.filesUploaded}</b>
            <span className="mx-3 text-line">|</span>
            설명 <b className="tnum text-[20px] text-mj-navy-dark">{sessionRecords.length}</b>회
            <span className="mx-3 text-line">|</span>
            진단한 개념 <b className="tnum text-[20px] text-mj-navy-dark">{historyStats.conceptsDiagnosed}</b>
            <span className="mx-3 text-line">|</span>
            다시 볼 개념 <b className="tnum text-[20px] text-coral">{pending}</b>
          </p>
        }
      />

      <div className="grid grid-cols-[1fr_360px] gap-12">
        <div className="space-y-10">
          <Card>
            <CardHeader title="다시 볼 개념" />
            <ReviewQueue items={reviewQueue} />
          </Card>

          <Section title="자료별 이해 지도">
            <MaterialMap rows={materialMap} />
          </Section>
        </div>

        <div className="space-y-10">
          <Section title="이해도 추이">
            <ScoreTrendChart records={sessionRecords} />
          </Section>

          <Section title="최근 설명">
            <SessionLog records={sessionRecords.slice(0, 4)} />
          </Section>
        </div>
      </div>
    </>
  );
}
