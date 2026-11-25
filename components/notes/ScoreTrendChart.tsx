"use client";

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { SessionRecord } from "@/data/types";
import { scoreColor } from "@/lib/score";
import { colors } from "@/lib/theme";

type Point = { date: string; score: number; label: string };

function Dot(props: { cx?: number; cy?: number; payload?: Point; index?: number; last: number }) {
  const { cx, cy, payload, index, last } = props;
  if (cx === undefined || cy === undefined || !payload) return null;
  const isLast = index === last;
  return (
    <g>
      <circle cx={cx} cy={cy} r={isLast ? 6 : 4} fill={scoreColor(payload.score)} stroke="#fff" strokeWidth={2} />
      {isLast && (
        <text x={cx} y={cy - 12} textAnchor="middle" fontSize={12} fontWeight={700} fill={colors.navy}>
          {payload.score}
        </text>
      )}
    </g>
  );
}

export function ScoreTrendChart({ records }: { records: SessionRecord[] }) {
  const data: Point[] = [...records]
    .reverse()
    .map((r) => ({ date: r.date, score: r.score, label: `${r.subject} · ${r.topic}${r.retry ? " (재설명)" : ""}` }));

  return (
    <ResponsiveContainer width="100%" height={210}>
      <LineChart data={data} margin={{ top: 20, right: 16, bottom: 0, left: -20 }}>
        <CartesianGrid vertical={false} stroke={colors.line} />
        <XAxis dataKey="date" tickLine={false} axisLine={{ stroke: colors.line }} tick={{ fill: colors.textSub, fontSize: 11 }} ticks={data.filter((_, i) => (data.length - 1 - i) % 2 === 0).map((d) => d.date)} interval={0} />
        <YAxis domain={[40, 100]} ticks={[40, 60, 80, 100]} tickLine={false} axisLine={false} tick={{ fill: colors.textSub, fontSize: 11 }} />
        <Tooltip
          formatter={(v: number) => [`${v}점`, "종합 이해도"]}
          labelFormatter={(_, p) => (p?.[0]?.payload as Point | undefined)?.label ?? ""}
          contentStyle={{ fontSize: 12, borderColor: colors.line, borderRadius: 6 }}
        />
        <Line
          type="monotone"
          dataKey="score"
          stroke={colors.navy}
          strokeWidth={2}
          dot={(p) => <Dot key={p.index} {...p} last={data.length - 1} />}
          activeDot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
