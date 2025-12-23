"use client";

export default function TempGraph() {
  return (
    <div className="relative h-20 overflow-hidden rounded-xl border border-white/10">
      {/* animated temperature trace */}
      <svg
        viewBox="0 0 300 80"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 50 C 40 45, 80 55, 120 48, 160 40, 200 42, 240 38, 300 44"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: 600,
            strokeDashoffset: 600,
            animation: "trace 2.2s ease-out forwards",
          }}
        />
      </svg>

      {/* subtle gradient energy */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-energy" />

      <style jsx>{`
        @keyframes trace {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes energy {
          0% {
            transform: translateX(-30%);
          }
          100% {
            transform: translateX(130%);
          }
        }

        .animate-energy {
          animation: energy 6s linear infinite;
        }
      `}</style>
    </div>
  );
}
