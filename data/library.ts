import type { Subject } from "./types";

// 학생이 직접 만든 과목 폴더와 업로드한 강의자료 (학교 시스템과 연동하지 않음)
export const subjects: Subject[] = [
  {
    id: "os",
    name: "운영체제",
    lastStudied: "10.02",
    recentScore: 85,
    files: [
      { id: "os-01", name: "OS_01_운영체제개요.pdf", topic: "운영체제 개요", pages: 24, uploadedAt: "09.29", status: "analyzed", conceptCount: 4, sessions: 1, score: 85 },
      { id: "os-06", name: "OS_06_프로세스와스레드.pdf", topic: "프로세스와 스레드", pages: 32, uploadedAt: "10.15", status: "analyzed", conceptCount: 5, sessions: 0 },
      { id: "os-07", name: "OS_07_프로세스동기화.pdf", topic: "프로세스 동기화", pages: 28, uploadedAt: "10.15", status: "analyzing", sessions: 0 },
    ],
  },
  {
    id: "ds",
    name: "자료구조",
    lastStudied: "10.09",
    recentScore: 81,
    files: [
      { id: "ds-02", name: "DS_02_배열과리스트.pdf", topic: "배열과 리스트", pages: 18, uploadedAt: "09.10", status: "analyzed", conceptCount: 3, sessions: 1, score: 88 },
      { id: "ds-03", name: "DS_03_연결리스트.pdf", topic: "연결 리스트", pages: 22, uploadedAt: "09.17", status: "analyzed", conceptCount: 4, sessions: 2, score: 81 },
      { id: "ds-04", name: "DS_04_스택과큐.pdf", topic: "스택과 큐", pages: 20, uploadedAt: "09.29", status: "analyzed", conceptCount: 4, sessions: 1, score: 79 },
      { id: "ds-05", name: "DS_05_트리.pdf", topic: "트리", pages: 41, uploadedAt: "10.08", status: "analyzed", conceptCount: 6, sessions: 1, score: 81 },
      { id: "ds-06", name: "DS_06_그래프.pdf", topic: "그래프", pages: 30, uploadedAt: "10.14", status: "analyzed", conceptCount: 5, sessions: 0 },
    ],
  },
  {
    id: "nw",
    name: "컴퓨터네트워크",
    lastStudied: "10.14",
    recentScore: 64,
    files: [
      { id: "nw-02", name: "NW_02_OSI7계층.pdf", topic: "OSI 7계층", pages: 26, uploadedAt: "09.25", status: "analyzed", conceptCount: 7, sessions: 1, score: 72 },
      { id: "nw-04", name: "NW_04_TCP와UDP.pdf", topic: "TCP와 UDP", pages: 35, uploadedAt: "10.13", status: "analyzed", conceptCount: 5, sessions: 1, score: 64 },
    ],
  },
];

// 홈 화면에서 선택된 과목과 자료
export const selectedSubjectId = "os";
export const selectedFileId = "os-06";
