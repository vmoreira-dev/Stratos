"use client";

export default function MetricsBar({
  data,
  loading,
}: {
  data?: any;
  loading?: boolean;
}) {
  const wind = loading || !data ? "--" : data.current.wind;
  const humidity = loading || !data ? "--" : data.current.humidity;
  const precip = "--"; // forecast API doesn't give exact %

  return (
    <div
      className="
        mt-4 flex items-center justify-between gap-10
        px-10 py-5 rounded-2xl bg-white/[0.04]
        ring-1 ring-white/10 backdrop-blur-md
      "
    >
      <Metric label="Wind" value={`${wind} mph`} />
      <Metric label="Humidity" value={`${humidity}%`} />
      <Metric label="Precip" value={`${precip}%`} />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm tracking-wide text-white/60">{label}</span>
      <span className="text-lg font-light tracking-tight text-white/85">
        {value}
      </span>
    </div>
  );
}
