import type { Concept } from "./types";

// 이번 세션의 기준 자료
export const source = {
  subject: "운영체제",
  fileName: "OS_06_프로세스와스레드.pdf",
  topic: "프로세스와 스레드",
};

// AI가 기준 자료에서 추출하고, 학생이 확인한 개념
export const concepts: Concept[] = [
  { id: "process", name: "프로세스 정의", short: "프로세스 정의", pages: "p.3–5" },
  { id: "pcb", name: "PCB", short: "PCB", pages: "p.8–11" },
  { id: "thread", name: "프로세스와 스레드의 차이", short: "스레드와의 차이", pages: "p.13–16" },
  { id: "context", name: "컨텍스트 스위칭", short: "컨텍스트 스위칭", pages: "p.18–22" },
  { id: "multithread", name: "멀티스레딩의 장단점", short: "멀티스레딩", pages: "p.24–27" },
];

export const conceptShort = (id: string) => concepts.find((c) => c.id === id)?.short ?? id;
export const conceptName = (id: string) => concepts.find((c) => c.id === id)?.name ?? id;
