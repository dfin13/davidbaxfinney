"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Networking", score: 94 },
  { name: "Achievement", score: 80 },
  { name: "Fun & Variety", score: 80 },
  { name: "Helping Others", score: 74 },
  { name: "Money & Opportunity", score: 70 },
  { name: "Creativity", score: 58 },
  { name: "Tradition", score: 56 },
  { name: "Ideas & Technology", score: 60 },
  { name: "Fame & Visibility", score: 30 },
  { name: "Stability", score: 35 },
];

const getColor = (score: number) => {
  if (score >= 80) return "#C8983A";
  if (score >= 60) return "#2563EB";
  return "#94A3B8";
};

export default function MotivatorChart() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 20, bottom: 0, left: 120 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F1F5F9" />
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fontSize: 11, fill: "#64748B", fontFamily: "Inter, sans-serif" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 11, fill: "#475569", fontFamily: "Inter, sans-serif" }}
            tickLine={false}
            axisLine={false}
            width={115}
          />
          <Tooltip
            cursor={{ fill: "rgba(0,0,0,0.03)" }}
            contentStyle={{
              background: "#0B1221",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
              fontSize: "12px",
              fontFamily: "Inter, sans-serif",
            }}
            labelStyle={{ color: "#F8FAFC", fontWeight: 600, marginBottom: 4 }}
            itemStyle={{ color: "#D4A843", fontWeight: 500 }}
            formatter={(value: number) => [`${value}/100`, "Score"]}
          />
          <Bar dataKey="score" radius={[0, 4, 4, 0]} maxBarSize={20}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.score)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
