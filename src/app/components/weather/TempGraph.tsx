"use client";

export default function TempGraph() {
  const temps = [66, 68, 70, 73, 73, 71];

  const width = 1000;
  const height = 140;

  const chartTop = 20;
  const chartBottom = 110;
  const chartHeight = chartBottom - chartTop;

  let min = Math.min(...temps) - 2;
  let max = Math.max(...temps) + 2;

  const step = width / (temps.length - 1);

  const points = temps.map((t, i) => {
    const n = (t - min) / (max - min);
    const eased = Math.pow(n, 1.2); // tasteful exaggeration
    const y = chartBottom - eased * chartHeight;
    const x = i * step;
    return { x, y };
  });

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <div className="relative w-full h-32">
      {/* horizon glow */}
      <div className="pointer-events-none absolute inset-x-20 bottom-9 h-px bg-gradient-to-r from-transparent via-amber-300/55 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-amber-400/22 to-transparent blur-xl" />

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="absolute inset-x-0 bottom-6 h-[120px] w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="curve" x1="0" y1="0" x2={width} y2="0">
            <stop offset="0%" stopColor="rgba(253,230,138,0.45)" />
            <stop offset="55%" stopColor="rgba(251,191,36,0.75)" />
            <stop offset="100%" stopColor="rgba(251,191,36,1)" />
          </linearGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        {/* faint baseline */}
        <line
          x1="0"
          x2={width}
          y1={chartBottom}
          y2={chartBottom}
          stroke="rgba(255,255,255,0.08)"
        />

        {/* connector line */}
        <path
          d={path}
          stroke="url(#curve)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.75"
          style={{ transition: "d 0.65s ease-out" }}
        />

        {/* glowing dots */}
        {points.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x}
              cy={p.y}
              r="8"
              fill="rgba(251,191,36,0.22)"
              filter="url(#softGlow)"
              style={{ transition: "all 0.45s ease-out" }}
            />
            <circle
              cx={p.x}
              cy={p.y}
              r="3.8"
              fill="rgb(251,191,36)"
              style={{ transition: "all 0.45s ease-out" }}
            />
          </g>
        ))}

        {/* elegant temperature bars (shortened) */}
        {points.map((p, i) => (
          <line
            key={`bar-${i}`}
            x1={p.x}
            x2={p.x}
            y1={chartBottom - 14}
            y2={p.y}
            stroke="rgba(251,191,36,0.45)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ transition: "all 0.45s ease-out" }}
          />
        ))}

        {/* ticks (subtle) */}
        {points.slice(1, -1).map((p, i) => (
          <line
            key={`tick-${i}`}
            x1={p.x}
            y1={height}
            x2={p.x}
            y2={chartBottom - 10}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
