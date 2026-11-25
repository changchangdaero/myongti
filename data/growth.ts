import type { Growth } from "./types";

export const growth: Growth[] = [
  { conceptId: "process", before: 88, after: 90 },
  { conceptId: "pcb", before: 74, after: 84 },
  { conceptId: "thread", before: 81, after: 86 },
  {
    conceptId: "context",
    before: 42,
    after: 78,
    beforeText: "CPU가 프로세스를 빠르게 바꿔가면서 실행하니까 동시에 도는 것처럼 보이는 거지. 정확히 어디에 저장되는지는 잘 모르겠어.",
    afterText: [
      { text: "CPU가 실행할 프로세스를 바꾸는 게 컨텍스트 스위칭인데, " },
      { text: "바꾸기 전에 지금 프로세스의 PC랑 레지스터 값을 PCB에 저장하고, 다음 프로세스의 PCB에서 그 값을 다시 불러와.", added: true },
      { text: " 그래서 돌아와도 하던 데부터 이어서 할 수 있어. " },
      { text: "대신 전환하는 동안은 실제 작업을 못 하니까, 너무 자주 바뀌면 오버헤드가 커져.", added: true },
    ],
  },
  {
    conceptId: "multithread",
    before: 50,
    after: 82,
    beforeText: "메모리를 같이 쓰니까 더 효율적이라 딱히 문제는 없지 않을까?",
    afterText: [
      { text: "메모리를 공유해서 효율적이긴 한데, " },
      { text: "여러 스레드가 같은 변수를 동시에 고치면 경쟁 조건이 생겨서 결과가 꼬일 수 있어.", added: true },
      { text: " " },
      { text: "그래서 뮤텍스 같은 동기화가 필요하고, 한 스레드가 죽으면 프로세스 전체가 같이 죽을 수도 있어.", added: true },
    ],
  },
];

export const growthMeta = {
  firstDate: "10월 16일 1차 설명",
  retryDate: "10월 18일 재설명",
};
