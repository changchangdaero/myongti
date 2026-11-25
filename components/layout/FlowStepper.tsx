import { Check } from "lucide-react";

const steps = ["설명", "꼬리질문 검증", "개념별 수치화", "보완 학습", "재설명"];

// current: 강조할 단계 번호(1부터). 배열이면 여러 단계를 함께 강조한다.
export function FlowStepper({ current }: { current?: number | number[] }) {
  const active = current === undefined ? [] : Array.isArray(current) ? current : [current];
  const max = active.length ? Math.max(...active) : 0;
  const min = active.length ? Math.min(...active) : 0;

  return (
    <ol className="flex items-center">
      {steps.map((label, i) => {
        const n = i + 1;
        const isActive = active.includes(n);
        const isDone = n < min;
        return (
          <li key={label} className="flex items-center">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-bold ${
                  isActive
                    ? "bg-mj-navy text-white"
                    : isDone
                      ? "border border-mj-navy bg-white text-black dark:bg-black dark:text-white"
                      : "border border-line bg-white text-text-sub dark:bg-black"
                }`}
              >
                {isDone ? <Check size={13} strokeWidth={3} /> : n}
              </span>
              <span
                className={`text-[13px] ${
                  isActive ? "font-bold text-mj-navy" : isDone ? "text-mj-navy-dark" : "text-text-sub"
                }`}
              >
                {label}
              </span>
            </div>
            {n < steps.length && <span className={`mx-3 hidden h-px w-10 sm:block ${n < max ? "bg-mj-navy" : "bg-line"}`} />}
          </li>
        );
      })}
    </ol>
  );
}
