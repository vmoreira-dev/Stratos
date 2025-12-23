"use client";

export default function GlassShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        relative
        w-full max-w-5xl
        rounded-2xl
        bg-neutral-900
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        p-8
        space-y-10
        overflow-hidden
      "
    >
      {/* ambient atmosphere layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0))",
          animation: "atmosphere 48s ease-in-out infinite",
        }}
      />

      {/* content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* scoped animation */}
      <style jsx>{`
        @keyframes atmosphere {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
