import type { MaterialMapRow, ReviewItem, SessionRecord } from "./types";

// 내 설명 세션 기록 (최신순). 다른 학생 데이터 없이 나의 기록만 쌓인다.
export const sessionRecords: SessionRecord[] = [
  { id: "s10", date: "10.18", subject: "운영체제", topic: "프로세스와 스레드", retry: true, score: 84, followUps: 5 },
  { id: "s9", date: "10.16", subject: "운영체제", topic: "프로세스와 스레드", score: 67, followUps: 5 },
  { id: "s8", date: "10.14", subject: "컴퓨터네트워크", topic: "TCP와 UDP", score: 64, followUps: 4 },
  { id: "s7", date: "10.09", subject: "자료구조", topic: "트리", score: 81, followUps: 4 },
  { id: "s6", date: "10.02", subject: "운영체제", topic: "운영체제 개요", score: 85, followUps: 3 },
  { id: "s5", date: "09.30", subject: "자료구조", topic: "스택과 큐", score: 79, followUps: 3 },
  { id: "s4", date: "09.26", subject: "컴퓨터네트워크", topic: "OSI 7계층", score: 72, followUps: 4 },
  { id: "s3", date: "09.23", subject: "자료구조", topic: "연결 리스트", retry: true, score: 81, followUps: 3 },
  { id: "s2", date: "09.18", subject: "자료구조", topic: "연결 리스트", score: 75, followUps: 4 },
  { id: "s1", date: "09.11", subject: "자료구조", topic: "배열과 리스트", score: 88, followUps: 2 },
];

// 진단 결과의 '빠진 내용'이 모이는 다시 볼 개념 목록
export const reviewQueue: ReviewItem[] = [
  {
    id: "r1",
    concept: "컨텍스트 스위칭",
    subject: "운영체제",
    before: 42,
    score: 78,
    status: "recheck",
    note: "저장·복원 과정은 채웠어요. 오버헤드가 커지는 상황을 예시로 한 번 더 설명해 보세요.",
    reviewDate: "10.21",
  },
  {
    id: "r2",
    concept: "TCP 흐름 제어",
    subject: "컴퓨터네트워크",
    score: 52,
    status: "scheduled",
    note: "수신 윈도우 크기로 송신 속도를 조절하는 원리가 빠졌어요. (NW_04 p.17)",
    reviewDate: "10.20",
  },
  {
    id: "r3",
    concept: "트리 순회",
    subject: "자료구조",
    score: 63,
    status: "scheduled",
    note: "전위·중위·후위 순회의 차이는 맞지만, 활용 예시가 없었어요. (DS_05 p.22)",
    reviewDate: "10.23",
  },
  {
    id: "r4",
    concept: "멀티스레딩의 장단점",
    subject: "운영체제",
    before: 50,
    score: 82,
    status: "resolved",
    note: "경쟁 조건과 동기화 필요성까지 설명해서 해결됐어요.",
  },
];

// 과목 폴더별, 업로드한 자료별 최근 점수
export const materialMap: MaterialMapRow[] = [
  {
    subject: "운영체제",
    files: [{ topic: "운영체제 개요", score: 85 }, { topic: "프로세스와 스레드", score: 84 }, { topic: "프로세스 동기화" }],
  },
  {
    subject: "자료구조",
    files: [
      { topic: "배열과 리스트", score: 88 },
      { topic: "연결 리스트", score: 81 },
      { topic: "스택과 큐", score: 79 },
      { topic: "트리", score: 81 },
      { topic: "그래프" },
    ],
  },
  {
    subject: "컴퓨터네트워크",
    files: [{ topic: "OSI 7계층", score: 72 }, { topic: "TCP와 UDP", score: 64 }],
  },
];

export const historyStats = {
  filesUploaded: 10,
  conceptsDiagnosed: 32,
};
