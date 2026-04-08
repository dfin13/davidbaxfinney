"use client";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { trait: "Task Orientation", self: 85, others: 55 },
  { trait: "Decisiveness", self: 90, others: 70 },
  { trait: "Directness", self: 88, others: 62 },
  { trait: "Social Energy", self: 55, others: 90 },
  { trait: "Expressiveness", self: 45, others: 88 },
  { trait: "Relationship Focus", self: 60, others: 85 },
];

export default function StyleComparisonChart() {
  return (
    <div className="w-full h-72 sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
          <PolarGrid stroke="#E2E8F0" />
          <PolarAngleAxis
            dataKey="trait"
            tick={{ fontSize: 11, fill: "#64748B", fontFamily: "Inter, sans-serif" }}
          />
          <Tooltip
            contentStyle={{
              background: "#0B1221",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              fontSize: "12px",
              fontFamily: "Inter, sans-serif",
            }}
            labelStyle={{ color: "#F8FAFC", fontWeight: 600, marginBottom: 4 }}
            itemStyle={{ color: "#D4A843", fontWeight: 500 }}
          />
          <Radar
            name="Self-Perception"
            dataKey="self"
            stroke="#1E3A5F"
            fill="#1E3A5F"
            fillOpacity={0.25}
            strokeWidth={2}
          />
          <Radar
            name="How Others See Me"
            dataKey="others"
            stroke="#C8983A"
            fill="#C8983A"
            fillOpacity={0.2}
            strokeWidth={2}
          />
          <Legend
            wrapperStyle={{ fontSize: "12px", fontFamily: "Inter, sans-serif", paddingTop: "12px" }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
