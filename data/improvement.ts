import type { Improvement } from "./types";

// 다시 볼 자료는 학생이 업로드한 파일 안에서만 찾는다.
export const improvements: Improvement[] = [
  {
    conceptId: "context",
    reason: "‘하던 작업을 어떻게 기억하냐’는 꼬리질문에 답하지 못했어요. 상태를 PCB에 저장·복원하는 과정과, 전환 자체가 비용(오버헤드)이라는 점이 빠져 있어요.",
    resources: [
      { file: "OS_06_프로세스와스레드.pdf", pages: "p.18–22", label: "컨텍스트 스위칭" },
      { file: "OS_06_프로세스와스레드.pdf", pages: "p.8–11", label: "PCB 구성 요소 (PC·레지스터)" },
    ],
    selfCheck: "프로세스 A에서 B로 전환될 때, 무엇을 어디에 저장하고 어디서 꺼내오나요?",
    reviewDate: "10월 18일",
  },
  {
    conceptId: "multithread",
    reason: "장점만 설명했고, ‘공유하면 문제가 없냐’는 질문에 문제가 없다고 답했어요. 공유 자원 때문에 생기는 경쟁 조건과 동기화 필요성을 다시 정리해 보세요.",
    resources: [
      { file: "OS_06_프로세스와스레드.pdf", pages: "p.24–27", label: "멀티스레딩의 장단점" },
      { file: "OS_07_프로세스동기화.pdf", pages: "p.2–6", label: "경쟁 조건 (다음 자료)" },
    ],
    selfCheck: "두 스레드가 같은 변수에 동시에 +1을 하면 결과가 왜 달라질 수 있나요?",
    reviewDate: "10월 18일",
  },
  {
    conceptId: "pcb",
    reason: "PID와 상태 정보 외의 구성 요소를 구체적으로 말하지 못했어요.",
    resources: [{ file: "OS_06_프로세스와스레드.pdf", pages: "p.8–11", label: "PCB 구조" }],
    selfCheck: "PCB에 프로그램 카운터가 꼭 있어야 하는 이유는?",
    reviewDate: "10월 22일",
  },
];
