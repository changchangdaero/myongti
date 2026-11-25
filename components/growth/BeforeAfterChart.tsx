"use client";

import { Bar, BarChart, CartesianGrid, LabelList, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { colors } from "@/lib/theme";

export function BeforeAfterChart({ data }: { data: { name: string; before: number; after: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={330}>
      <BarChart data={data} barGap={4} barCategoryGap="26%" margin={{ top: 24, right: 8, bottom: 0, left: -16 }}>
        <CartesianGrid vertical={false} stroke={colors.line} />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={{ stroke: colors.line }}
          tick={{ fill: colors.navyDark, fontSize: 12, fontWeight: 500 }}
        />
        <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} tickLine={false} axisLine={false} tick={{ fill: colors.textSub, fontSize: 12 }} />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="square"
          iconSize={10}
          wrapperStyle={{ fontSize: 12, color: colors.textSub, top: -4 }}
        />
        <Bar dataKey="before" name="1차 설명" fill={colors.gray} radius={[3, 3, 0, 0]} isAnimationActive={false}>
          <LabelList dataKey="before" position="top" style={{ fill: colors.textSub, fontSize: 12 }} />
        </Bar>
        <Bar dataKey="after" name="재설명" fill={colors.navy} radius={[3, 3, 0, 0]} isAnimationActive={false}>
          <LabelList dataKey="after" position="top" style={{ fill: colors.navy, fontSize: 12, fontWeight: 700 }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
