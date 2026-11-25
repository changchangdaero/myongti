import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { conceptName } from "@/data/concepts";
import { evaluations } from "@/data/evaluation";

export default async function AppealPage({ params }: { params: Promise<{ conceptId: string }> }) {
  const { conceptId } = await params;
  const evaluation = evaluations.find((item) => item.conceptId === conceptId) ?? evaluations[0];
  const credited = evaluation.evidences.find((item) => item.kind === "credited");
  const questionable = evaluation.evidences.find((item) => item.kind === "questionable");

  return (
    <div className="mx-auto max-w-[840px]">
      <Link href="/result" className="mb-10 inline-flex items-center gap-2 text-[14px] font-bold underline-offset-4 hover:underline"><ArrowLeft size={16} /> 진단 결과</Link>
      <header className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-mj-navy pb-8">
        <div><p className="text-[12px] font-bold tracking-[0.16em] text-text-sub">APPEAL REVIEW</p><h1 className="mt-3 text-[40px] font-bold tracking-[-0.04em]">평가 재검토</h1><p className="mt-3 text-text-sub">평가 근거를 확인하고 납득되지 않는 이유를 알려주세요.</p></div>
        <div className="text-right"><p className="text-[13px] text-text-sub">{conceptName(evaluation.conceptId)}</p><p className="tnum mt-1 text-[36px] font-bold">{evaluation.score}<span className="text-[14px] font-normal text-text-sub"> / 100</span></p></div>
      </header>

      <section className="py-10">
        <h2 className="mb-4 text-[18px] font-bold">현재 평가 근거</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <blockquote className="border border-line p-5"><Quote size={18} /><p className="mt-4 text-[14px] leading-7">“{credited?.quote}”</p><footer className="mt-4 text-[12px] font-bold text-text-sub">인정한 설명</footer></blockquote>
          <blockquote className="border-2 border-mj-navy p-5"><Quote size={18} /><p className="mt-4 text-[14px] leading-7">“{questionable?.quote ?? evaluation.summary}”</p><footer className="mt-4 text-[12px] font-bold">감점한 이유 · {questionable?.note ?? evaluation.summary}</footer></blockquote>
        </div>
      </section>

      <section className="border-t border-line pt-9">
        <label htmlFor="appeal" className="text-[20px] font-bold">왜 이 평가가 납득되지 않나요?</label>
        <p className="mt-2 text-[13px] text-text-sub">설명했다고 생각하는 내용과 대화 위치를 구체적으로 적어주세요.</p>
        <textarea id="appeal" maxLength={500} rows={6} placeholder="예: 두 번째 답변에서 독립된 주소 공간을 설명했어요." className="mt-5 w-full resize-none rounded border border-mj-navy bg-transparent p-5 text-[15px] leading-7 placeholder:text-text-sub/60" />
        <div className="mt-2 flex justify-between text-[12px] text-text-sub"><span>재검토 결과는 이력에 남으며 개념당 한 번 요청할 수 있습니다.</span><span className="tnum">0/500</span></div>
        <div className="mt-8 flex justify-end"><Button>다시 검토 요청 <ArrowRight size={16} /></Button></div>
      </section>
    </div>
  );
}
