import { colors } from "./theme";

export type Level = "good" | "normal" | "weak";

export function getLevel(score: number): Level {
  if (score >= 80) return "good";
  if (score >= 60) return "normal";
  return "weak";
}

export const levelLabel: Record<Level, string> = {
  good: "충분",
  normal: "보통",
  weak: "보완 필요",
};

export const levelColor: Record<Level, string> = {
  good: colors.navy,
  normal: colors.sky,
  weak: colors.coral,
};

export function scoreColor(score: number) {
  return levelColor[getLevel(score)];
}
