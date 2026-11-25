import type { ReactNode } from "react";

// 화면당 1~2개만 쓰는 상자. 테두리만 쓰고 그림자는 쓰지 않는다.
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-md border border-line bg-white dark:bg-black ${className}`}>{children}</div>;
}

export function CardHeader({ title, right }: { title: string; right?: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 px-6 pb-2 pt-5">
      <h2 className="text-[15px] font-bold text-mj-navy-dark">{title}</h2>
      {right}
    </div>
  );
}

// 상자 없이 제목 아래 굵은 선 하나로 구분하는 영역
export function Section({
  title,
  right,
  children,
  className = "",
}: {
  title: string;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mb-3 flex items-baseline justify-between gap-4 border-b-2 border-mj-navy-dark pb-2">
        <h2 className="text-[15px] font-bold text-mj-navy-dark">{title}</h2>
        {right}
      </div>
      {children}
    </section>
  );
}
