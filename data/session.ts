import type { Message } from "./types";

// 1차 설명 세션 대화. 컨텍스트 스위칭·멀티스레딩 장단점은 일부러 설명이 부족하게 구성했다.
export const messages: Message[] = [
  {
    id: "m1", no: 1, role: "mentee",
    text: "선배, 이번 주 운영체제 진도를 못 따라가서요. 프로세스랑 스레드 좀 설명해 주실 수 있어요?",
  },
  {
    id: "m2", no: 2, role: "student", conceptId: "process",
    text: "응, 프로세스부터 보자. 프로세스는 실행 중인 프로그램이야. 디스크에 있던 프로그램이 메모리에 올라가서 실행되면 그때부터 프로세스라고 불러. 그리고 프로세스마다 코드, 데이터, 힙, 스택으로 된 자기만의 메모리 공간을 따로 가져.",
  },
  {
    id: "m3", no: 3, role: "mentee", conceptId: "process", isFollowUp: true,
    text: "그럼 같은 프로그램을 두 번 실행하면요? 그것도 프로세스 하나예요?",
  },
  {
    id: "m4", no: 4, role: "student", conceptId: "process",
    text: "아니, 그러면 프로세스가 두 개 생기는 거야. 크롬 창 두 개 띄우는 거랑 비슷해. 프로그램은 같아도 메모리 공간이 서로 독립적이라서 한쪽이 죽어도 다른 쪽엔 영향이 없어.",
  },
  {
    id: "m5", no: 5, role: "mentee", conceptId: "pcb",
    text: "오 그렇구나. 근데 운영체제는 그 많은 프로세스를 어떻게 구분해요?",
  },
  {
    id: "m6", no: 6, role: "student", conceptId: "pcb",
    text: "그래서 PCB라는 게 있어. Process Control Block인데, 프로세스마다 하나씩 있는 신분증 같은 거야. 안에 프로세스 ID(PID)랑 지금 실행 중인지 대기 중인지 같은 상태 정보가 들어 있어.",
  },
  {
    id: "m7", no: 7, role: "mentee", conceptId: "pcb", isFollowUp: true,
    text: "PCB에는 그 두 개 말고 또 뭐가 들어가요?",
  },
  {
    id: "m8", no: 8, role: "student", conceptId: "pcb",
    text: "음… 메모리 정보 같은 것도 들어가는 걸로 알아. 정확히 다 외우진 못했는데, 프로세스 관리에 필요한 정보는 거의 다 있다고 보면 돼.",
  },
  {
    id: "m9", no: 9, role: "mentee", conceptId: "thread",
    text: "그럼 스레드는 프로세스랑 뭐가 달라요?",
  },
  {
    id: "m10", no: 10, role: "student", conceptId: "thread",
    text: "스레드는 프로세스 안에서 실제로 실행되는 흐름 단위야. 한 프로세스에 스레드가 여러 개 있을 수 있는데, 스레드끼리는 코드, 데이터, 힙 영역을 공유하고 스택만 각자 따로 가져. 그래서 프로세스를 새로 만드는 것보다 스레드를 만드는 게 훨씬 가벼워.",
  },
  {
    id: "m11", no: 11, role: "mentee", conceptId: "thread", isFollowUp: true,
    text: "스택은 왜 따로 가져야 해요? 그것까지 같이 쓰면 더 가볍지 않아요?",
  },
  {
    id: "m12", no: 12, role: "student", conceptId: "thread",
    text: "스레드마다 호출하는 함수가 다르니까 지역 변수나 함수 호출 기록이 따로 있어야 하거든. 스택을 같이 쓰면 실행 흐름이 서로 섞여버려.",
  },
  {
    id: "m13", no: 13, role: "mentee", conceptId: "context",
    text: "아하. 그럼 CPU는 하나인데 프로세스 여러 개가 동시에 돌아가는 건 어떻게 해요?",
  },
  {
    id: "m14", no: 14, role: "student", conceptId: "context",
    text: "그게 컨텍스트 스위칭이야. CPU가 프로세스를 빠르게 바꿔가면서 실행하니까 우리 눈엔 동시에 도는 것처럼 보이는 거지.",
  },
  {
    id: "m15", no: 15, role: "mentee", conceptId: "context", isFollowUp: true,
    text: "그럼 바꾸기 전에 하던 작업은 어떻게 기억해요? 다시 돌아오면 처음부터 다시 해요?",
  },
  {
    id: "m16", no: 16, role: "student", conceptId: "context",
    text: "음… 그건 CPU가 알아서 기억해 두는 거 아닐까? 정확히 어디에 저장되는지는 잘 모르겠어. 아무튼 엄청 빨라서 거의 티가 안 나.",
  },
  {
    id: "m17", no: 17, role: "mentee", conceptId: "multithread",
    text: "마지막으로, 멀티스레딩은 왜 쓰는 거예요?",
  },
  {
    id: "m18", no: 18, role: "student", conceptId: "multithread",
    text: "하나의 프로그램에서 여러 작업을 동시에 하려고. 카톡에서 파일 받는 동안에도 채팅 칠 수 있잖아. 그리고 스레드끼리 메모리를 공유하니까 데이터 주고받기도 편하고 자원도 아낄 수 있어.",
  },
  {
    id: "m19", no: 19, role: "mentee", conceptId: "multithread", isFollowUp: true,
    text: "메모리를 같이 쓰면 오히려 문제가 생기는 경우는 없어요?",
  },
  {
    id: "m20", no: 20, role: "student", conceptId: "multithread",
    text: "음, 딱히 없지 않을까? 같이 쓰니까 더 효율적인 거라 장점이 훨씬 큰 것 같아.",
  },
];

// /session 화면은 "컨텍스트 스위칭 검증 중" 시점의 스냅샷을 보여준다.
export const sessionSnapshot = {
  lastMessageId: "m16",
  doneConceptIds: ["process", "pcb", "thread"],
  activeConceptId: "context",
  elapsed: "12분 40초",
};

export const messageNo = (id: string) => messages.find((m) => m.id === id)?.no ?? 0;
