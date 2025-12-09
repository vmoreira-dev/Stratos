export default function GlassShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-5xl rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-6 space-y-6">
      {children}
    </div>
  );
}
