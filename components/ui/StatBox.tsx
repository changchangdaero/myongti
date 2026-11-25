import type { ReactNode } from "react";

export function StatBox({ label, value, sub }: { label: string; value: ReactNode; sub?: ReactNode }) {
  return (
    <div className="px-6 py-4 first:pl-0">
      <p className="text-[13px] text-text-sub">{label}</p>
      <div className="mt-1 text-[36px] font-bold leading-tight tracking-tight text-mj-navy-dark">{value}</div>
      {sub && <div className="mt-1 text-[13px] text-mj-navy-dark">{sub}</div>}
    </div>
  );
}
