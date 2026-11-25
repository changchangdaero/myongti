"use client";

import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { colors } from "@/lib/theme";

export function ScoreRadarChart({ data }: { data: { name: string; score: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <RadarChart data={data} outerRadius="72%" margin={{ top: 8, right: 24, bottom: 8, left: 24 }}>
        <PolarGrid stroke={colors.line} />
        <PolarAngleAxis dataKey="name" tick={{ fill: colors.navyDark, fontSize: 12, fontWeight: 500 }} />
        <PolarRadiusAxis domain={[0, 100]} tickCount={5} tick={false} axisLine={false} />
        <Radar
          dataKey="score"
          stroke={colors.navy}
          strokeWidth={2}
          fill={colors.sky}
          fillOpacity={0.22}
          dot={{ r: 3.5, fill: colors.navy, strokeWidth: 0 }}
          isAnimationActive={false}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
