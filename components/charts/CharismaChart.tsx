"use client";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
} from "recharts";

const davidPoint = [{ x: 6.36, y: 3.64, name: "David Finney" }];

type CustomDotProps = {
  cx?: number;
  cy?: number;
};

const CustomDot = ({ cx = 0, cy = 0 }: CustomDotProps) => (
  <g>
    <circle cx={cx} cy={cy} r={14} fill="#C8983A" opacity={0.15} />
    <circle cx={cx} cy={cy} r={8} fill="#C8983A" opacity={0.4} />
    <circle cx={cx} cy={cy} r={5} fill="#C8983A" />
    <circle cx={cx} cy={cy} r={2.5} fill="white" />
  </g>
);

const tooltipContentStyle = {
  background: "#0B1221",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "10px",
  padding: "10px 14px",
  fontSize: "12px",
  fontFamily: "Inter, sans-serif",
  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
};

const tooltipLabelStyle = {
  color: "#F8FAFC",
  fontWeight: 600,
  marginBottom: 4,
};

const tooltipItemStyle = {
  color: "#D4A843",
  fontWeight: 500,
};

export default function CharismaChart() {
  return (
    <div className="w-full">
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 30, bottom: 36, left: 24 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              type="number"
              dataKey="x"
              domain={[0, 10]}
              name="Warmth"
              tick={{ fontSize: 11, fill: "#64748B", fontFamily: "Inter, sans-serif" }}
              tickLine={false}
              axisLine={{ stroke: "#E2E8F0" }}
            >
              <Label
                value="← Low Warmth · High Warmth →"
                offset={-16}
                position="insideBottom"
                style={{ fill: "#64748B", fontSize: 10, fontFamily: "Inter, sans-serif" }}
              />
            </XAxis>
            <YAxis
              type="number"
              dataKey="y"
              domain={[0, 10]}
              name="Confidence"
              tick={{ fontSize: 11, fill: "#64748B", fontFamily: "Inter, sans-serif" }}
              tickLine={false}
              axisLine={{ stroke: "#E2E8F0" }}
            >
              <Label
                value="← Low · High Confidence →"
                angle={-90}
                position="insideLeft"
                offset={14}
                style={{ fill: "#64748B", fontSize: 10, fontFamily: "Inter, sans-serif" }}
              />
            </YAxis>
            {/* Quadrant dividers */}
            <ReferenceLine x={5} stroke="#CBD5E1" strokeDasharray="5 4" />
            <ReferenceLine y={5} stroke="#CBD5E1" strokeDasharray="5 4" />

            <Tooltip
              cursor={{ strokeDasharray: "3 3", stroke: "#94A3B8" }}
              contentStyle={tooltipContentStyle}
              labelStyle={tooltipLabelStyle}
              itemStyle={tooltipItemStyle}
              formatter={(value: number, name: string) => [
                `${(value as number).toFixed(2)} / 10`,
                name,
              ]}
              labelFormatter={() => "David Finney"}
            />
            <Scatter name="David Finney" data={davidPoint} shape={<CustomDot />} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Quadrant legend */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="bg-slate-50 rounded-xl border border-slate-100 p-3 text-center">
          <p className="text-xs font-semibold text-slate-700 mb-0.5">High Warmth, Lower Confidence</p>
          <p className="text-xs text-slate-500">Trusted but less commanding</p>
        </div>
        <div className="bg-gold-400/10 rounded-xl border border-gold-400/25 p-3 text-center">
          <p className="text-xs font-semibold text-gold-700 mb-0.5">★ Charismatic Zone</p>
          <p className="text-xs text-slate-600">David&apos;s position — warmth 6.36, confidence 3.64</p>
        </div>
      </div>
    </div>
  );
}
