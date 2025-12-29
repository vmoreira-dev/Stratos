"use client";

import { useState, useId } from "react";

export default function TempGraph({
  data,
  loading,
}: {
  data?: any;
  loading?: boolean;
}) {
  // fallback temps while loading
  let mids = [66, 68, 70, 73, 71];

  if (!loading && data?.days?.length >= 5) {
    mids = data.days.map((d: any) => d.temp);
  }

  const [active, setActive] = useState<number | null>(null);

  const width = 1000;
  const height = 160;

  const chartTop = 20;
  const chartBottom = 120;
  const chartHeight = chartBottom - chartTop;

  const min = Math.min(...mids) - 3;
  const max = Math.max(...mids) + 3;

  // keep glow away from walls
  const padX = 100;
  const col = (width - padX * 2) / (mids.length - 1);

  const y = (v: number) =>
    chartBottom - ((v - min) / (max - min)) * chartHeight;

  const glowId = useId();

  return (
    <div className="relative w-full h-44">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="absolute inset-0 w-full h-full"
        fill="none"
      >
        <defs>
          <filter
            id={glowId}
            filterUnits="userSpaceOnUse"
            x="-500"
            y="-500"
            width="2000"
            height="2000"
          >
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>

        {/* baseline */}
        <line
          x1="0"
          x2={width}
          y1={chartBottom}
          y2={chartBottom}
          stroke="rgba(255,255,255,0.08)"
        />

        {mids.map((t, i) => {
          const x = padX + i * col;
          const mid = y(t);

          return (
            <g
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{ cursor: "pointer" }}
            >
              {/* guide */}
              <line
                x1={x}
                x2={x}
                y1={chartTop}
                y2={chartBottom}
                stroke="rgba(255,255,255,0.06)"
              />

              {/* glow */}
              <circle
                cx={x}
                cy={mid}
                r={34}
                fill="rgba(255,200,110,0.55)"
                filter={`url(#${glowId})`}
                opacity={active === i ? 0.95 : 0.75}
              />

              {/* dot */}
              <circle
                cx={x}
                cy={mid}
                r={active === i ? 11 : 9}
                fill="rgba(255,205,120,0.55)"
              />

              {/* core */}
              <circle
                cx={x}
                cy={mid}
                r={active === i ? 4.5 : 3.6}
                fill="rgba(255,235,200,0.9)"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
