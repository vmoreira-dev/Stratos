const METRICS = [
  { label: "Wind", value: "8 mph" },
  { label: "Humidity", value: "64%" },
  { label: "Precip", value: "0%" },
];

export default function MetricsBar() {
  return (
    <section className="w-full grid grid-cols-3 gap-6 pt-2">
      {METRICS.map((m) => (
        <div
          key={m.label}
          className="
            rounded-2xl
            bg-white/8
            border border-white/15
            backdrop-blur-md
            py-4
            flex flex-col items-center justify-center
          "
        >
          <span className="text-xs opacity-55 uppercase tracking-wide">
            {m.label}
          </span>
          <span className="mt-1 text-lg font-medium">{m.value}</span>
        </div>
      ))}
    </section>
  );
}
