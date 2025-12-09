export default function MetricsBar() {
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      {[
        { label: "Wind", value: "12 mph" },
        { label: "Humidity", value: "64%" },
        { label: "Precip", value: "10%" },
      ].map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center justify-center rounded-xl bg-white/10 border border-white/20 py-4"
        >
          <span className="text-white text-sm">{item.value}</span>
          <span className="text-white/60 text-xs mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
