import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function TopNav() {
  return (
    <header className="border-b border-line bg-white dark:bg-black">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-baseline gap-3" aria-label="명티 홈">
          <span className="text-[22px] font-bold tracking-[-0.04em]">명티</span>
          <span className="text-[11px] font-bold tracking-[0.18em] text-text-sub">MJ—TEE</span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
