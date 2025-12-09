export default function GlassShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-5xl rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-2xl p-10">
      {children}
    </div>
  );
}
