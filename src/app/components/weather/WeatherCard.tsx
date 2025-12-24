"use client";

import CurrentTemp from "./CurrentTemp";
import TempGraph from "./TempGraph";
import ForecastRow from "./ForecastRow";
import MetricsBar from "./MetricsBar";

export default function WeatherCard() {
  return (
    <section
      className="
        relative
        w-full
        max-w-[1100px]
        min-h-[460px]
        rounded-3xl
        overflow-hidden
        backdrop-blur-2xl
        ring-1 ring-white/15
        shadow-[0_40px_120px_rgba(0,0,0,0.7)]
      "
    >
      {/* ===== ATMOSPHERIC LIGHT (BEHIND CONTENT) ===== */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* top soft highlight */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent" />

        {/* cool → warm lateral wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 via-transparent to-amber-400/15" />

        {/* warm horizon glow */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-amber-500/25 to-transparent" />
      </div>

      {/* ===== CONTENT (ALWAYS ON TOP) ===== */}
      <div className="relative z-10 h-full px-12 py-10 grid grid-cols-5 gap-10">
        {/* Left: temp + city + metrics */}
        <div className="col-span-2 flex flex-col justify-between">
          <CurrentTemp />
          <MetricsBar />
        </div>

        {/* Right: graph + forecast */}
        <div className="col-span-3 flex flex-col justify-between">
          <TempGraph />
          <ForecastRow />
        </div>
      </div>
    </section>
  );
}
