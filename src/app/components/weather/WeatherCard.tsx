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
        shadow-[0_40px_120px_rgba(0,0,0,0.75)]
      "
    >
      {/* glass wash */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/12 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 via-transparent to-amber-400/20" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-amber-500/30 to-transparent" />
      </div>

      

      {/* city — hard pinned */}
      <div className="absolute left-14 top-10 z-20 text-lg font-medium text-white/80 tracking-wide">
        New York
      </div>

      {/* content */}
      <div className="relative z-10 h-full px-14 py-12 flex flex-col">
        {/* top-right temp */}
        <div className="flex justify-end">
          <CurrentTemp />
        </div>

        {/* middle */}
       <div className="flex flex-1 justify-center mt-6">
  <div className="w-[78%] flex flex-col gap-8">
    <TempGraph />
    <ForecastRow />
  </div>
</div>

        {/* bottom metrics */}
        <div className="mt-6">
          <MetricsBar />
        </div>
      </div>
    </section>
  );
}
