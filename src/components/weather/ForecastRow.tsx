export default function ForecastRow() {
  return (
    <div className="w-full grid grid-cols-4 gap-6">
      {["Sat", "Sun", "Mon", "Tue"].map((day) => (
        <div
          key={day}
          className="
            flex flex-col items-center justify-center
            rounded-2xl
            bg-white/10
            border border-white/20
            py-6
          "
        >
          <span className="text-white text-sm">{day}</span>
          <span className="text-white/70 text-xs mt-1">70°</span>
        </div>
      ))}
    </div>
  );
}
