import { Send } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ChatLog } from "@/components/session/ChatLog";
import { ConceptChecklist } from "@/components/session/ConceptChecklist";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { concepts, source } from "@/data/concepts";
import { messages, sessionSnapshot } from "@/data/session";

export default function SessionPage() {
  const lastIndex = messages.findIndex((m) => m.id === sessionSnapshot.lastMessageId);
  const visible = messages.slice(0, lastIndex + 1);
  const followUps = visible.filter((m) => m.isFollowUp).length;
  const done = sessionSnapshot.doneConceptIds.length;

  return (
    <>
      <PageHeader step={[1, 2]} title="AI 멘티에게 설명하기" />

      <div className="grid min-h-[680px] gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <Card className="flex min-h-0 flex-col">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line px-6 py-4 md:px-8">
            <span className="text-[15px] font-bold text-mj-navy-dark">
              AI 멘티
              <span className="ml-3 text-[13px] font-normal text-text-sub">{source.fileName} 기준으로 질문해요</span>
            </span>
            <span className="text-[13px] text-text-sub">
              꼬리질문 <span className="tnum font-bold text-mj-navy-dark">{followUps}</span>
              <span className="tnum ml-4">{sessionSnapshot.elapsed.replace("분 ", ":").replace("초", "")}</span>
            </span>
          </div>

          <ChatLog messages={visible} />

          <div className="border-t border-line px-5 py-4">
            <div className="flex items-center gap-3 rounded border border-mj-navy px-4 py-2">
              <span className="flex-1 text-[14px] text-text-sub">메시지를 입력하세요…</span>
              <span className="tnum text-[11px] text-text-sub">0/1000</span>
              <span className="flex h-9 w-9 items-center justify-center rounded bg-mj-navy text-white dark:text-black">
                <Send size={15} />
              </span>
            </div>
          </div>
        </Card>

        <div className="flex min-h-0 flex-col">
          <div className="mb-1 flex items-baseline justify-between border-b-2 border-mj-navy-dark pb-3">
            <h2 className="text-[15px] font-bold text-mj-navy-dark">학습 진행</h2>
            <span className="tnum text-[13px] text-text-sub">
              <b className="text-mj-navy-dark">{done}</b>/{concepts.length}
            </span>
          </div>
          <ConceptChecklist
            concepts={concepts}
            doneIds={sessionSnapshot.doneConceptIds}
            activeId={sessionSnapshot.activeConceptId}
          />

          <div className="mt-6 border-l-2 border-mj-navy pl-4 text-[13px] leading-6 text-text-sub">
            <b className="block text-mj-navy-dark">설명 팁</b>
            정의뿐 아니라 이유와 예시를 함께 설명해 보세요.
          </div>

          <div className="mt-auto">
            <Button href="/result" className="w-full py-3.5">
              설명 마치고 진단받기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
