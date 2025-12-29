"use client";

import { useEffect, useState } from "react";
import CurrentTemp from "./CurrentTemp";
import TempGraph from "./TempGraph";
import ForecastRow from "./ForecastRow";
import MetricsBar from "./MetricsBar";

const cities = {
  Boston: { lat: 42.3601, lon: -71.0589 },
  "New York": { lat: 40.7128, lon: -74.006 },
  "Los Angeles": { lat: 34.0522, lon: -118.2437 },
};

const DEFAULT_CITY = "Boston" as const;

export default function WeatherCard() {
  const [mounted, setMounted] = useState(false);

  // 👇 Boston is the *true* default
  const [city, setCity] = useState<string>(DEFAULT_CITY);

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // ensure server + first client render match
  useEffect(() => {
    setMounted(true);
  }, []);

  // fetch after mount + city change
  useEffect(() => {
    if (!mounted) return;

    const c = cities[city];
    setLoading(true);

    fetch(`/api/weather?lat=${c.lat}&lon=${c.lon}`)
      .then((r) => r.json())
      .then((d) => setData(d))
      .finally(() => setLoading(false));
  }, [city, mounted]);

  // prevent hydration mismatch
  if (!mounted) return null;

  return (
    <section
      key={city} // 👈 forces a clean remount if default ever changes
      className="
        group
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
      {/* glass washes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/12 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 via-transparent to-amber-400/20" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-amber-500/30 to-transparent" />
      </div>

      {/* watermark + dropdown */}
      <div className="absolute left-14 top-10 z-20 flex items-center gap-4">
        <span className="font-sans text-lg tracking-[0.22em] text-white/65 uppercase">
          {city}
        </span>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="
            bg-black/30
            text-sm
            px-4
            py-1.5
            rounded-xl
            text-white/80
            ring-1 ring-white/20
            backdrop-blur-md
            transition
            opacity-0
            pointer-events-none
            group-hover:opacity-100
            group-hover:pointer-events-auto
            group-hover:ring-white/40
          "
        >
          {Object.keys(cities).map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* content */}
      <div className="relative z-10 h-full px-14 py-12 flex flex-col">
        <div className="flex justify-end">
          <CurrentTemp data={data} loading={loading} />
        </div>

        <div className="flex flex-1 justify-center mt-6">
          <div className="w-[78%] flex flex-col gap-8">
            <TempGraph key={city} data={data} loading={loading} />
            <ForecastRow data={data} loading={loading} />
          </div>
        </div>

        <div className="mt-6">
          <MetricsBar data={data} loading={loading} />
        </div>
      </div>
    </section>
  );
}
