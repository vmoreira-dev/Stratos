"use client";

export default function CurrentTemp() {
  // mock value for now — wire to real data later
  const temp = 72;

  // map temperature → hue (cold → warm)
  const hue = Math.min(40, Math.max(200 - temp * 2, 0));

  return (
    <section className="flex items-end justify-between py-4">
      <div className="space-y-1">
        <div className="text-sm text-white/70">
          New York
        </div>
      </div>

      <div
        className="text-6xl font-medium tracking-tight"
        style={{
          color: `hsl(${hue}, 60%, 70%)`,
          animation: "temp-breathe 6s ease-in-out infinite",
        }}
      >
        {temp}°
      </div>

      {/* scoped animation */}
      <style jsx>{`
        @keyframes temp-breathe {
          0% {
            opacity: 0.92;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.92;
          }
        }
      `}</style>
    </section>
  );
}
