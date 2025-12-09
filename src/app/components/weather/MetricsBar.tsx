export default function MetricsBar() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="rounded-xl bg-white/10 p-4 text-center">
        <div className="text-sm opacity-70">Wind</div>
        <div className="text-lg">8 mph</div>
      </div>

      <div className="rounded-xl bg-white/10 p-4 text-center">
        <div className="text-sm opacity-70">Humidity</div>
        <div className="text-lg">64%</div>
      </div>

      <div className="rounded-xl bg-white/10 p-4 text-center">
        <div className="text-sm opacity-70">Precip</div>
        <div className="text-lg">0%</div>
      </div>
    </div>
  );
}
