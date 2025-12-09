export default function Home() {
  return (
    <div className="w-full max-w-5xl rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-10 text-white">
      <h1 className="text-5xl font-semibold text-center">Stratos</h1>

      <div className="mt-10 text-center">
        <div className="text-8xl font-light">72°</div>
        <div className="opacity-70 mt-2">New York</div>
      </div>
    </div>
  );
}
