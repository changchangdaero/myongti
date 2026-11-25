import type { Metadata } from "next";
import { TopNav } from "@/components/layout/TopNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "명티 MJ-Tee",
  description: "AI 멘티에게 설명하며 내 이해를 객관화하는 학습 서비스",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-sans">
        <TopNav />
        <main className="mx-auto max-w-[1200px] px-6 pb-20 pt-10 lg:px-10">{children}</main>
      </body>
    </html>
  );
}
