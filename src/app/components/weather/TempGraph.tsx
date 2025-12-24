"use client";

export default function TempGraph() {
  return (
    <div className="relative h-40 w-full">
      {/* === GLOW AURA === */}
      <div className="pointer-events-none absolute inset-0">
        {/* warm glow following curve */}
        <div className="absolute bottom-8 left-1/4 h-24 w-72 bg-amber-400/30 blur-[80px]" />
        <div className="absolute bottom-10 right-1/4 h-20 w-56 bg-amber-300/25 blur-[70px]" />
      </div>

      {/* === SVG CURVE === */}
      <svg
        viewBox="0 0 1000 200"
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* soft under-glow */}
        <path
          d="M0 130 C 180 150, 320 110, 500 120 C 680 130, 820 90, 1000 80"
          stroke="url(#glow)"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* main curve */}
        <path
          d="M0 130 C 180 150, 320 110, 500 120 C 680 130, 820 90, 1000 80"
          stroke="url(#line)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* vertical tick lights */}
        {[150, 320, 500, 680, 820].map((x) => (
          <line
            key={x}
            x1={x}
            y1={200}
            x2={x}
            y2={120}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
          />
        ))}

        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="1000" y2="0">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="50%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>

          <linearGradient id="glow" x1="0" y1="0" x2="1000" y2="0">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
