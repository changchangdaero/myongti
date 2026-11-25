import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary: "border border-mj-navy bg-mj-navy text-white hover:bg-white hover:text-black dark:text-black dark:hover:bg-black dark:hover:text-white",
  secondary: "border border-mj-navy bg-white text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded px-6 py-3 text-[14px] font-bold transition-colors ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls}>
      {children}
    </button>
  );
}
