"use client";

export default function MetricsBar({
  data,
  loading,
}: {
  data?: any;
  loading?: boolean;
}) {
  if (loading || !data) return null;

  const wind = Math.round(data.current?.wind_speed ?? 0);
  const humidity = Math.round(data.current?.humidity ?? 0);
  const precip = Math.round((data.daily?.[0]?.pop ?? 0) * 100);

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
