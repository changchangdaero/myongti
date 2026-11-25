import Link from "next/link";
import type { ReviewItem, ReviewStatus } from "@/data/types";
import { scoreColor } from "@/lib/score";
import { colors } from "@/lib/theme";

const statusStyle: Record<ReviewStatus, { label: string; color: string }> = {
  recheck: { label: "재확인", color: colors.sky },
  scheduled: { label: "복습 예정", color: colors.coral },
  resolved: { label: "해결", color: colors.textSub },
};

export function ReviewQueue({ items }: { items: ReviewItem[] }) {
  return (
    <ul>
      {items.map((item) => {
        const resolved = item.status === "resolved";
        const st = statusStyle[item.status];
        return (
          <li
            key={item.id}
            className={`grid grid-cols-[1fr_90px_140px] items-center gap-6 border-t border-line px-6 py-3 ${
              resolved ? "text-text-sub" : ""
            }`}
          >
            <div className="min-w-0">
              <p className={`text-[15px] ${resolved ? "text-text-sub line-through" : "font-bold text-mj-navy-dark"}`}>
                {item.concept}
                <span className="ml-2 text-[12px] font-normal text-text-sub no-underline">{item.subject}</span>
              </p>
              <p className={`mt-0.5 truncate text-[13px] ${resolved ? "text-text-sub" : "text-mj-navy-dark"}`}>{item.note}</p>
            </div>

            <div className="tnum text-right">
              {item.before !== undefined && <span className="text-[13px] text-text-sub">{item.before}→</span>}
              <b className="text-[22px]" style={{ color: resolved ? colors.textSub : scoreColor(item.score) }}>
                {item.score}
              </b>
            </div>

            <div className="text-right text-[13px]">
              <p className="flex items-center justify-end gap-1.5" style={{ color: st.color }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: st.color }} />
                {st.label}
              </p>
              {!resolved && (
                <Link href="/session" className="text-[12px] text-mj-navy-dark underline underline-offset-2">
                  <span className="tnum">{item.reviewDate}</span> 다시 설명
                </Link>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
