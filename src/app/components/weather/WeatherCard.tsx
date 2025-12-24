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
        max-w-[1100px]
        min-h-[460px]
        rounded-3xl
        overflow-hidden
        bg-white/[0.04]
        backdrop-blur-2xl
        shadow-[0_40px_120px_rgba(0,0,0,0.65)]
        ring-1 ring-white/10
      "
    >
      {/* Top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-64 w-96 bg-amber-400/20 blur-[120px]" />
        <div className="absolute top-0 right-0 h-48 w-64 bg-sky-400/10 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative px-12 py-10 grid grid-cols-5 gap-10">
          {/* Left: temp + city */}
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
