export default function ForecastRow() {
  return (
    <div className="flex justify-between text-center text-white/70">
      {["Sat", "Sun", "Mon", "Tue", "Wed"].map((day) => (
        <div key={day} className="space-y-1">
          <div className="text-xs">{day}</div>
          <div className="text-sm font-medium">72°</div>
        </div>
      ))}
    </div>
  );
}
