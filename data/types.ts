// 학생이 직접 만든 과목 폴더와, 그 안에 올린 강의자료
export interface MaterialFile {
  id: string;
  name: string;
  topic: string;
  pages: number;
  uploadedAt: string;
  status: "analyzed" | "analyzing";
  conceptCount?: number;
  sessions: number;
  score?: number;
}

export interface Subject {
  id: string;
  name: string;
  lastStudied?: string;
  recentScore?: number;
  files: MaterialFile[];
}

// AI가 업로드 자료에서 추출한 개념. pages는 근거가 된 자료 위치
export interface Concept {
  id: string;
  name: string;
  short: string;
  pages: string;
}

export interface Message {
  id: string;
  no: number;
  role: "mentee" | "student";
  text: string;
  conceptId?: string;
  isFollowUp?: boolean;
}

export interface Evidence {
  messageId: string;
  quote: string;
  // credited: 점수에 반영된 설명, questionable: 감점 근거가 된 설명
  kind: "credited" | "questionable";
  note?: string;
}

// 빠진 내용과, 그 내용이 나오는 업로드 자료의 쪽수
export interface MissingPoint {
  text: string;
  page: string;
}

export interface Evaluation {
  conceptId: string;
  score: number;
  summary: string;
  evidences: Evidence[];
  missing: MissingPoint[];
}

export interface Resource {
  file: string;
  pages: string;
  label: string;
}

export interface Improvement {
  conceptId: string;
  reason: string;
  resources: Resource[];
  selfCheck: string;
  reviewDate: string;
}

export interface TextSegment {
  text: string;
  added?: boolean;
}

export interface Growth {
  conceptId: string;
  before: number;
  after: number;
  beforeText?: string;
  afterText?: TextSegment[];
}

export interface SessionRecord {
  id: string;
  date: string;
  subject: string;
  topic: string;
  retry?: boolean;
  score: number;
  followUps: number;
}

export type ReviewStatus = "recheck" | "scheduled" | "resolved";

export interface ReviewItem {
  id: string;
  concept: string;
  subject: string;
  before?: number;
  score: number;
  status: ReviewStatus;
  note: string;
  reviewDate?: string;
}

export interface MaterialMapRow {
  subject: string;
  files: { topic: string; score?: number }[];
}
