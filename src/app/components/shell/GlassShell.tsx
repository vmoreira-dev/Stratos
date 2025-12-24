"use client";

export default function GlassShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        relative
        w-full max-w-5xl h-[420px]
        rounded-3xl
        bg-neutral-900/95
        shadow-[0_60px_140px_rgba(0,0,0,0.7)]
        overflow-hidden
      "
    >
      {children}
    </div>
  );
}
