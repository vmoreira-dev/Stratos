"use client";

export default function ForecastRow({
  data,
  loading,
}: {
  data?: any;
  loading?: boolean;
}) {
  const days =
    !loading && data?.days?.length
      ? data.days
      : [
          { day: "Sat", temp: 66 },
          { day: "Sun", temp: 68 },
          { day: "Mon", temp: 70 },
          { day: "Tue", temp: 73 },
          { day: "Wed", temp: 71 },
        ];

  return (
    <div className="relative mt-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="grid grid-cols-5 gap-8 text-center">
        {days.map((d: any) => (
          <div key={d.day} className="relative space-y-2">
            <div className="absolute left-1/2 top-[-28px] h-6 w-px -translate-x-1/2 bg-white/15" />
            <div className="text-xs text-white/50 tracking-wide">{d.day}</div>
            <div className="text-lg font-medium text-white">{d.temp}°</div>
          </div>
        ))}
      </div>
    </div>
  );
}
