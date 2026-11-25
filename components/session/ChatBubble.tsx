import { conceptName } from "@/data/concepts";
import type { Message } from "@/data/types";

export function ChatBubble({ message }: { message: Message }) {
  if (message.role === "student") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[70%]">
          <p className="tnum mb-1 text-right text-[11px] text-text-sub">#{message.no}</p>
          <div className="rounded-md rounded-tr-none bg-mj-navy px-4 py-3 text-[15px] leading-relaxed text-white dark:text-black">
            {message.text}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[70%]">
      <p className="mb-1 text-[11px] text-text-sub">
        <span className="tnum">#{message.no}</span>
        {message.isFollowUp && (
          <span className="ml-2 font-bold text-mj-sky">꼬리질문 — {conceptName(message.conceptId ?? "")}</span>
        )}
      </p>
      <div
        className={`rounded-md rounded-tl-none border px-4 py-3 text-[15px] leading-relaxed text-mj-navy-dark ${
          message.isFollowUp ? "border-2 border-mj-navy" : "border-line"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
