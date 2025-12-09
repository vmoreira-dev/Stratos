export default function MetricsBar() {
  return (
    <div className="w-full grid grid-cols-3 gap-6">
      {[
        { label: "Wind", value: "8 mph" },
        { label: "Humidity", value: "64%" },
        { label: "Precip", value: "0%" },
      ].map((item) => (
        <div
          key={item.label}
          className="
            flex flex-col items-center justify-center
            rounded-2xl
            bg-white/10
            border border-white/20
            py-6
          "
        >
          <span className="text-white text-sm">
            {item.value}
          </span>
          <span className="text-white/60 text-xs mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
