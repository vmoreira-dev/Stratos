export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-sm tracking-[0.35em] uppercase opacity-70">
          Stratos
        </h1>
      </div>

      <div className="flex items-center gap-3 text-xs opacity-70">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300"></span>
        </span>
        <span>Live</span>
      </div>
    </header>
  );
}
