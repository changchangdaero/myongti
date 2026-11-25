"use client";

import { useEffect, useRef } from "react";
import type { Message } from "@/data/types";
import { ChatBubble } from "./ChatBubble";

// 스크린샷에 최근 꼬리질문이 보이도록 처음 렌더링 시 맨 아래로 스크롤한다.
export function ChatLog({ messages }: { messages: Message[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, []);

  return (
    <div ref={ref} className="min-h-[480px] flex-1 space-y-5 overflow-y-auto px-5 py-6 md:px-8">
      {messages.map((m) => (
        <ChatBubble key={m.id} message={m} />
      ))}
      <div className="flex w-fit items-center gap-1 rounded-md border border-line px-4 py-3.5" aria-label="AI 멘티가 답변을 작성 중입니다">
        <span className="h-1.5 w-1.5 rounded-full bg-text-sub" />
        <span className="h-1.5 w-1.5 rounded-full bg-text-sub/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-text-sub/30" />
      </div>
    </div>
  );
}
