import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { source } from "@/data/concepts";
import { FlowStepper } from "./FlowStepper";

export function PageHeader({
  title,
  description,
  breadcrumb = [source.subject, source.fileName],
  step,
  right,
}: {
  title: string;
  description?: string;
  breadcrumb?: string[];
  step?: number | number[];
  right?: ReactNode;
}) {
  return (
    <div className="mb-6">
      <div className="mb-5 flex flex-col justify-between gap-4 border-b border-line pb-4 lg:flex-row lg:items-center">
        <div className="overflow-x-auto pb-1"><FlowStepper current={step} /></div>
        <div className="flex items-center gap-1 text-[13px] text-text-sub">
          {breadcrumb.map((b, i) => (
            <span key={b} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={14} />}
              <span className={i === breadcrumb.length - 1 ? "text-mj-navy-dark" : ""}>{b}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-[28px] font-bold tracking-[-0.02em] text-mj-navy-dark">{title}</h1>
          {description && <p className="mt-1 text-[15px] text-text-sub">{description}</p>}
        </div>
        {right}
      </div>
    </div>
  );
}
