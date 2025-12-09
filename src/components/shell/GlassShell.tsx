export default function GlassShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="
      w-full max-w-5xl
      rounded-3xl
      bg-white/10
      backdrop-blur-2xl
      border border-white/20
      shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]
      p-10
      space-y-10
    ">
      {children}
    </div>
  );
}
