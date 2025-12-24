"use client";

export default function TempGraph() {
  return (
    <div className="relative w-full h-32">
      {/* horizon glow */}
      <div className="pointer-events-none absolute inset-x-20 bottom-9 h-px bg-gradient-to-r from-transparent via-amber-300/55 to-transparent" />

      {/* subtle bleed */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-amber-400/22 to-transparent blur-xl" />

      <svg
        viewBox="0 0 1000 140"
        className="absolute inset-x-0 bottom-6 h-[120px] w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="curve" x1="0" y1="0" x2="1000" y2="0">
            <stop offset="0%" stopColor="rgba(253,230,138,0.45)" />
            <stop offset="55%" stopColor="rgba(251,191,36,0.75)" />
            <stop offset="100%" stopColor="rgba(251,191,36,1)" />
          </linearGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        {/* glow pass */}
        <path
          d="
            M0 92
            C 180 104, 300 96, 420 98
            C 560 100, 700 86, 820 74
            C 900 66, 960 62, 1000 60
          "
          stroke="url(#curve)"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.35"
          filter="url(#softGlow)"
        />

        {/* core curve */}
        <path
          d="
            M0 92
            C 180 104, 300 96, 420 98
            C 560 100, 700 86, 820 74
            C 900 66, 960 62, 1000 60
          "
          stroke="url(#curve)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* ticks */}
        {[160, 320, 480, 640, 800].map((x) => (
          <line
            key={x}
            x1={x}
            y1={140}
            x2={x}
            y2={96}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
