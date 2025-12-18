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
        w-full max-w-5xl
        rounded-3xl
        bg-white/15
        backdrop-blur-2xl
        border border-white/25
        shadow-[0_24px_80px_rgba(0,0,0,0.35)]
        ring-1 ring-white/20
        p-10
        space-y-10
        overflow-hidden
        ripple-surface
      "
      onMouseEnter={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        e.currentTarget.style.setProperty(
          "--ripple-x",
          `${e.clientX - rect.left}px`
        );
        e.currentTarget.style.setProperty(
          "--ripple-y",
          `${e.clientY - rect.top}px`
        );

        // retrigger animation cleanly
        e.currentTarget.classList.remove("ripple-surface");
        void e.currentTarget.offsetWidth;
        e.currentTarget.classList.add("ripple-surface");
      }}
    >
      {children}
    </div>
  );
}
