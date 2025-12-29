"use client";

type ForecastDay = {
  dt: number;
  day: string;
  temp: number;
};

type ForecastRowProps = {
  data?: {
    days?: ForecastDay[];
  };
};

export default function ForecastRow({ data }: ForecastRowProps) {
  const days = data?.days ?? [];

  return (
    <div className="relative mt-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="grid grid-cols-5 gap-0 text-center">
        {(days.length ? days : Array.from({ length: 5 })).map(
          (d: any, i: number) => (
            <div key={d?.dt ?? i} className="relative space-y-2">
              <div className="absolute left-1/2 top-[-28px] h-6 w-px -translate-x-1/2 bg-white/15" />

              <div className="text-xs text-white/60 tracking-wide">
                {d?.day ?? "—"}
              </div>

              <div className="text-lg font-medium text-white">
                {d?.temp !== undefined ? `${d.temp}°` : "—"}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
