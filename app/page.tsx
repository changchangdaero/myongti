import { ArrowRight, Clock3 } from "lucide-react";
import Link from "next/link";

const courses = ["운영체제", "자료구조"];
const topics = [
  { title: "프로세스와 스레드", description: "프로세스, 스레드, 문맥 교환", active: true },
  { title: "CPU 스케줄링", description: "스케줄링 기준과 알고리즘", active: false },
  { title: "메모리 관리", description: "가상 메모리와 페이지 교체", active: false },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1040px]">
      <section className="border-b-2 border-mj-navy pb-12 pt-6">
        <p className="mb-5 text-[12px] font-bold tracking-[0.18em] text-text-sub">TEACH TO LEARN</p>
        <h1 className="max-w-[720px] text-[44px] font-bold leading-[1.15] tracking-[-0.045em] md:text-[56px]">배운 내용을<br />직접 설명해 보세요.</h1>
        <p className="mt-6 max-w-[620px] text-[17px] leading-7 text-text-sub">처음 배우는 AI 멘티에게 설명하고, 꼬리질문과 근거 기반 진단으로 내가 정말 이해했는지 확인합니다.</p>
      </section>
      <section className="grid gap-10 border-b border-line py-12 md:grid-cols-[180px_1fr]">
        <div><p className="tnum text-[12px] font-bold text-text-sub">01</p><h2 className="mt-2 text-[20px] font-bold">강의 선택</h2></div>
        <div className="grid gap-3 sm:grid-cols-2">
          {courses.map((course, index) => <button key={course} type="button" className={`flex min-h-20 items-center justify-between rounded border p-5 text-left text-[17px] font-bold transition ${index === 0 ? "border-mj-navy bg-mj-navy text-white dark:text-black" : "border-line hover:border-mj-navy"}`}>{course}<span className="tnum text-[12px] opacity-60">0{index + 1}</span></button>)}
        </div>
      </section>
      <section className="grid gap-10 py-12 md:grid-cols-[180px_1fr]">
        <div><p className="tnum text-[12px] font-bold text-text-sub">02</p><h2 className="mt-2 text-[20px] font-bold">주제 선택</h2></div>
        <div>
          <div className="divide-y divide-line border-y border-mj-navy">
            {topics.map((topic, index) => <button key={topic.title} type="button" className={`group flex w-full items-center gap-5 py-5 text-left ${topic.active ? "font-bold" : "text-text-sub"}`}><span className="tnum text-[12px]">0{index + 1}</span><span className="flex-1"><span className="block text-[17px]">{topic.title}</span><span className="mt-1 block text-[13px] font-normal text-text-sub">{topic.description}</span></span><ArrowRight size={18} className={topic.active ? "" : "opacity-30 transition group-hover:translate-x-1 group-hover:opacity-100"} /></button>)}
          </div>
          <div className="mt-8 rounded border-2 border-mj-navy p-7">
            <div className="flex flex-wrap items-start justify-between gap-6"><div><p className="text-[12px] font-bold tracking-[0.14em] text-text-sub">선택한 주제</p><h3 className="mt-2 text-[28px] font-bold tracking-[-0.03em]">프로세스와 스레드</h3></div><span className="flex items-center gap-2 text-[13px] text-text-sub"><Clock3 size={15} /> 약 15분</span></div>
            <div className="mt-7 border-t border-line pt-6"><p className="mb-4 text-[13px] font-bold">점검할 핵심 개념</p><ol className="grid gap-3 sm:grid-cols-3">{["프로세스", "스레드", "문맥 교환"].map((concept, index) => <li key={concept} className="flex items-center gap-3 border-l-2 border-mj-navy pl-3 text-[14px]"><span className="tnum text-[11px] text-text-sub">0{index + 1}</span>{concept}</li>)}</ol></div>
            <div className="mt-8 flex justify-end"><Link href="/session" className="inline-flex min-h-12 items-center gap-3 rounded border border-mj-navy bg-mj-navy px-7 font-bold text-white transition hover:bg-white hover:text-black dark:text-black dark:hover:bg-black dark:hover:text-white">설명 시작하기 <ArrowRight size={17} /></Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
