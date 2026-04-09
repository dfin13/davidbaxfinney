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

// Scale: -10 to +10. Baseline (midpoint) is 0, not 5.
// Warmth +6.36 and Confidence +3.64 — both above baseline → Charismatic Zone.
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
      {/* Quadrant labels — shown above chart for context */}
      <div className="grid grid-cols-2 gap-1.5 mb-3 text-center text-[10px] font-semibold">
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-slate-500">
          Authoritative
          <span className="block text-[9px] font-normal text-slate-400">High confidence, lower warmth</span>
        </div>
        <div className="rounded-lg border border-gold-400/35 bg-gold-400/8 px-2 py-1.5 text-gold-700">
          ★ Charismatic Zone
          <span className="block text-[9px] font-normal text-gold-600">High warmth + high confidence</span>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-slate-400">
          Below Baseline
          <span className="block text-[9px] font-normal text-slate-400">Both dimensions sub-zero</span>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5 text-slate-500">
          Approachable
          <span className="block text-[9px] font-normal text-slate-400">High warmth, lower confidence</span>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 30, bottom: 36, left: 24 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              type="number"
              dataKey="x"
              domain={[-10, 10]}
              ticks={[-10, -5, 0, 5, 10]}
              name="Warmth"
              tick={{ fontSize: 11, fill: "#64748B", fontFamily: "Inter, sans-serif" }}
              tickLine={false}
              axisLine={{ stroke: "#E2E8F0" }}
            >
              <Label
                value="Warmth  (−10 to +10)"
                offset={-16}
                position="insideBottom"
                style={{ fill: "#64748B", fontSize: 10, fontFamily: "Inter, sans-serif" }}
              />
            </XAxis>
            <YAxis
              type="number"
              dataKey="y"
              domain={[-10, 10]}
              ticks={[-10, -5, 0, 5, 10]}
              name="Confidence"
              tick={{ fontSize: 11, fill: "#64748B", fontFamily: "Inter, sans-serif" }}
              tickLine={false}
              axisLine={{ stroke: "#E2E8F0" }}
            >
              <Label
                value="Confidence  (−10 to +10)"
                angle={-90}
                position="insideLeft"
                offset={14}
                style={{ fill: "#64748B", fontSize: 10, fontFamily: "Inter, sans-serif" }}
              />
            </YAxis>

            {/* Baseline midpoint lines — 0 is the true center of the scale */}
            <ReferenceLine
              x={0}
              stroke="#94A3B8"
              strokeWidth={1.5}
              strokeDasharray="4 3"
              label={{ value: "baseline", position: "insideTopLeft", fontSize: 9, fill: "#94A3B8", dy: -4 }}
            />
            <ReferenceLine
              y={0}
              stroke="#94A3B8"
              strokeWidth={1.5}
              strokeDasharray="4 3"
            />

            <Tooltip
              cursor={{ strokeDasharray: "3 3", stroke: "#94A3B8" }}
              contentStyle={tooltipContentStyle}
              labelStyle={tooltipLabelStyle}
              itemStyle={tooltipItemStyle}
              formatter={(value: number, name: string) => [
                `+${(value as number).toFixed(2)} (above baseline)`,
                name,
              ]}
              labelFormatter={() => "David Finney — Charismatic Zone"}
            />
            <Scatter name="David Finney" data={davidPoint} shape={<CustomDot />} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Summary bar */}
      <div className="mt-3 bg-gold-400/10 border border-gold-400/25 rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-gold-400 shrink-0" />
          <span className="text-xs font-semibold text-navy-900">David Finney — Charismatic Zone</span>
        </div>
        <div className="flex gap-4 text-xs text-slate-600">
          <span>Warmth <strong className="text-gold-600">+6.36</strong></span>
          <span>Confidence <strong className="text-navy-800">+3.64</strong></span>
          <span className="text-slate-400">scale: −10 to +10</span>
        </div>
      </div>
    </div>
  );
}
