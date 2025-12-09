export default function GlassShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        w-full max-w-5xl
        rounded-3xl
        bg-white/15
        backdrop-blur-2xl
        border border-white/25
        shadow-[0_24px_80px_rgba(0,0,0,0.35)]
        ring-1 ring-white/20
        p-10
        space-y-10
      "
    >
      {children}
    </div>
  );
}
