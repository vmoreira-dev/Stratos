export default function ForecastRow() {
  return (
    <div className="grid grid-cols-5 gap-4 mb-8">
      {["Sat", "Sun", "Mon", "Tue", "Wed"].map((day) => (
        <div
          key={day}
          className="rounded-xl bg-white/10 p-4 text-center"
        >
          <div className="text-sm opacity-70">{day}</div>
          <div className="text-lg">70°</div>
        </div>
      ))}
    </div>
  );
}
