export default function Header() {
  return (
    <header className="w-full flex items-center justify-between">
      <h1 className="text-white text-xl font-semibold tracking-wide">Stratos</h1>

      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur" />
        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur" />
      </div>
    </header>
  );
}
