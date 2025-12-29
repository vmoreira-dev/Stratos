"use client";

import { useState, useMemo, useId } from "react";

type TempGraphProps = {
  data?: any;
  loading?: boolean;
};

export default function TempGraph({ data, loading }: TempGraphProps) {
  // ------- DATA -------
  const mids = useMemo(() => {
    if (data?.days?.length) {
      return data.days.slice(0, 5).map((d: any) => d.temp);
    }
    return [];
  }, [data]);

  const [active, setActive] = useState<number | null>(null);

  // ALWAYS call hooks before any returns (no mismatch BS)
  const glowId = useId();

  if (!mids.length) {
    return <div className="relative w-full h-44 opacity-60" />;
  }

  // ------- CHART GEOMETRY -------
  const width = 1000;
  const height = 180;

  // GIVE THE DOTS ROOM TO BREATHE 🔥
  const glowSpread = 30;      // matches your blur “radius”
  const chartTop = 45 + glowSpread * 0.25; // headroom
  const chartBottom = 135;
  const chartHeight = chartBottom - chartTop;

  const min = Math.min(...mids) - 3;
  const max = Math.max(...mids) + 3;

  const padX = width / 10;
  const col = (width - padX * 2) / (mids.length - 1);

  const y = (v: number) =>
    chartBottom - ((v - min) / (max - min || 1)) * chartHeight;

  return (
    <div className="relative w-full h-44 pointer-events-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          {/* MASSIVE BLEED SO GLOW NEVER CLIPS */}
          <filter
            id={glowId}
            filterUnits="userSpaceOnUse"
            x="-800"
            y="-800"
            width="3000"
            height="3000"
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

        {mids.map((t: number, i: number) => {
          const x = padX + i * col;
          const mid = y(t);
          const heat = (t - min) / (max - min || 1);

          const glowOpacity = 0.25 + heat * 0.55;
          const radius = 22 + heat * 14;

          return (
            <g
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{ cursor: "pointer" }}
            >
              {/* warm aura */}
              <circle
                cx={x}
                cy={mid}
                r={radius}
                fill={`rgba(255,200,110,${glowOpacity})`}
                filter={`url(#${glowId})`}
              />

              {/* gold core */}
              <circle
                cx={x}
                cy={mid}
                r={active === i ? 9.5 : 8}
                fill="rgba(255,210,130,0.95)"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
