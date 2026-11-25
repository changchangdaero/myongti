"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mj-theme");
    const next = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("mj-theme", next ? "dark" : "light");
  };

  return (
    <button type="button" onClick={toggle} aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"} className="flex h-10 w-10 items-center justify-center rounded border border-line transition hover:bg-mj-navy hover:text-white dark:hover:text-black">
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
