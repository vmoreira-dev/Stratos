"use client";

export default function TempGraph() {
  return (
    <div className="relative w-full h-40">
      {/* horizon glow */}
      <div className="pointer-events-none absolute inset-x-20 bottom-8 h-[1.5px] bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />

      {/* atmospheric bleed */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-amber-400/30 via-amber-300/12 to-transparent blur-3xl" />

      <svg
        viewBox="0 0 1000 200"
        className="absolute inset-x-0 bottom-6 h-[140px] w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gold-core" x1="0" y1="0" x2="1000" y2="0">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="45%" stopColor="#fde68a" />
            <stop offset="75%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          <linearGradient id="gold-glow" x1="0" y1="0" x2="1000" y2="0">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          <filter id="blur-heavy" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="20" />
          </filter>

          <filter id="blur-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        <path
          d="M0 120 C 200 140, 360 110, 520 120 C 700 130, 840 95, 1000 90"
          stroke="url(#gold-glow)"
          strokeWidth="30"
          strokeLinecap="round"
          opacity="0.3"
          filter="url(#blur-heavy)"
        />

        <path
          d="M0 120 C 200 140, 360 110, 520 120 C 700 130, 840 95, 1000 90"
          stroke="url(#gold-glow)"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.55"
          filter="url(#blur-soft)"
        />

        <path
          d="M0 120 C 200 140, 360 110, 520 120 C 700 130, 840 95, 1000 90"
          stroke="url(#gold-core)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {[180, 360, 520, 700, 860].map((x) => (
          <line
            key={x}
            x1={x}
            y1={200}
            x2={x}
            y2={138}
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
