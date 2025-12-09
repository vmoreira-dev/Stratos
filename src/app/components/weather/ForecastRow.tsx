const MOCK_FORECAST = [
  { day: "Sat", temp: "70°" },
  { day: "Sun", temp: "68°" },
  { day: "Mon", temp: "72°" },
  { day: "Tue", temp: "75°" },
  { day: "Wed", temp: "71°" },
];

export default function ForecastRow() {
  return (
    <section className="w-full grid grid-cols-5 gap-4">
      {MOCK_FORECAST.map((d) => (
        <div
          key={d.day}
          className="
            rounded-2xl
            bg-white/10
            border border-white/20
            backdrop-blur-md
            py-4
            flex flex-col items-center justify-center
          "
        >
          <span className="text-xs opacity-60">{d.day}</span>
          <span className="mt-1 text-lg font-medium">{d.temp}</span>
        </div>
      ))}
    </section>
  );
}
