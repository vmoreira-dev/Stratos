export default function ForecastRow() {
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {["Mon", "Tue", "Wed", "Thu"].map((day) => (
        <div
          key={day}
          className="flex flex-col items-center justify-center rounded-xl bg-white/10 border border-white/20 py-4"
        >
          <span className="text-white text-sm">{day}</span>
          <span className="text-white/60 text-xs mt-1">68°</span>
        </div>
      ))}
    </div>
  );
}
