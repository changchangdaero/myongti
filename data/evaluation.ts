import { source } from "./concepts";
import type { Evaluation } from "./types";

// 평가 기준은 업로드한 자료(source.fileName)다. 빠진 내용마다 자료 쪽수를 함께 남긴다.
export const evaluations: Evaluation[] = [
  {
    conceptId: "process",
    score: 88,
    summary: "정의와 독립된 메모리 공간을 예시와 함께 정확히 설명했어요.",
    evidences: [
      { messageId: "m2", kind: "credited", quote: "디스크에 있던 프로그램이 메모리에 올라가서 실행되면 그때부터 프로세스라고 불러." },
      { messageId: "m4", kind: "credited", quote: "메모리 공간이 서로 독립적이라서 한쪽이 죽어도 다른 쪽엔 영향이 없어." },
    ],
    missing: [{ text: "프로세스 상태(준비·실행·대기) 전이", page: "p.6" }],
  },
  {
    conceptId: "pcb",
    score: 74,
    summary: "PCB의 역할은 맞게 설명했지만 구성 요소를 일부만 말했어요.",
    evidences: [
      { messageId: "m6", kind: "credited", quote: "프로세스 ID(PID)랑 지금 실행 중인지 대기 중인지 같은 상태 정보가 들어 있어." },
      { messageId: "m8", kind: "questionable", quote: "정확히 다 외우진 못했는데, 프로세스 관리에 필요한 정보는 거의 다 있다고 보면 돼.", note: "구체적인 항목 없이 뭉뚱그린 설명" },
    ],
    missing: [
      { text: "프로그램 카운터(PC)와 CPU 레지스터 값", page: "p.9" },
      { text: "스케줄링 정보(우선순위 등)", page: "p.10" },
    ],
  },
  {
    conceptId: "thread",
    score: 81,
    summary: "공유 영역과 스택 분리의 이유까지 논리적으로 설명했어요.",
    evidences: [
      { messageId: "m10", kind: "credited", quote: "스레드끼리는 코드, 데이터, 힙 영역을 공유하고 스택만 각자 따로 가져." },
      { messageId: "m12", kind: "credited", quote: "스레드마다 호출하는 함수가 다르니까 지역 변수나 함수 호출 기록이 따로 있어야 하거든." },
    ],
    missing: [{ text: "스레드마다 PC·레지스터를 따로 가진다는 점", page: "p.14" }],
  },
  {
    conceptId: "context",
    score: 42,
    summary: "‘빠르게 바꾼다’는 현상만 설명하고, 전환 과정과 비용은 설명하지 못했어요.",
    evidences: [
      { messageId: "m14", kind: "credited", quote: "CPU가 프로세스를 빠르게 바꿔가면서 실행하니까 우리 눈엔 동시에 도는 것처럼 보이는 거지." },
      { messageId: "m16", kind: "questionable", quote: "정확히 어디에 저장되는지는 잘 모르겠어. 아무튼 엄청 빨라서 거의 티가 안 나.", note: "꼬리질문에 답하지 못했고, 오버헤드를 간과함" },
    ],
    missing: [
      { text: "실행 중이던 상태를 PCB에 저장하고 다음 프로세스의 PCB에서 복원하는 과정", page: "p.19–20" },
      { text: "전환하는 동안 실제 작업을 못 하는 오버헤드가 생긴다는 점", page: "p.21" },
    ],
  },
  {
    conceptId: "multithread",
    score: 50,
    summary: "장점은 예시와 함께 설명했지만, 단점을 전혀 다루지 않았어요.",
    evidences: [
      { messageId: "m18", kind: "credited", quote: "카톡에서 파일 받는 동안에도 채팅 칠 수 있잖아." },
      { messageId: "m20", kind: "questionable", quote: "음, 딱히 없지 않을까? 같이 쓰니까 더 효율적인 거라 장점이 훨씬 큰 것 같아.", note: "공유 자원 문제를 부정함" },
    ],
    missing: [
      { text: "여러 스레드가 공유 자원에 동시에 접근할 때의 경쟁 조건(Race Condition)", page: "p.26" },
      { text: "동기화(뮤텍스·세마포어)의 필요성", page: "p.27" },
      { text: "한 스레드의 오류가 프로세스 전체에 영향을 줄 수 있다는 점", page: "p.25" },
    ],
  },
];

export const overallScore = Math.round(
  evaluations.reduce((sum, e) => sum + e.score, 0) / evaluations.length,
);

export const evaluationMeta = {
  evaluatedAt: "2026.10.16 14:32",
  messageCount: 20,
  followUpCount: 5,
  sourceFile: source.fileName,
};
