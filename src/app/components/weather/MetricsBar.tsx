"use client";

import { useEffect, useState } from "react";

type Metrics = {
  wind: number;
  humidity: number;
  precip: number;
};

export default function MetricsBar() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => {
        // use the first forecast block (closest to now)
        const now = data.list[0];

        setMetrics({
          wind: Math.round(now.wind.speed),            // mph (already imperial)
          humidity: Math.round(now.main.humidity),     // %
          precip: Math.round((now.pop ?? 0) * 100),    // %
        });
      })
      .catch(() => {
        // fail silently — UI should never explode
        setMetrics({
          wind: 0,
          humidity: 0,
          precip: 0,
        });
      });
  }, []);

  if (!metrics) return null;

  return (
    <div
      className="
        mt-4
        flex
        items-center
        justify-between
        gap-10
        px-10
        py-5
        rounded-2xl
        bg-white/[0.04]
        ring-1 ring-white/10
        backdrop-blur-md
      "
    >
      <Metric label="Wind" value={`${metrics.wind} mph`} />
      <Metric label="Humidity" value={`${metrics.humidity}%`} />
      <Metric label="Precip" value={`${metrics.precip}%`} />
    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm tracking-wide text-white/60">
        {label}
      </span>
      <span className="text-lg font-light tracking-tight text-white/85">
        {value}
      </span>
    </div>
  );
}
