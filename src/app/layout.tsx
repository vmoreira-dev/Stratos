import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stratos",
  description: "Glass weather interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen w-full overflow-hidden text-white antialiased">
        {/* Sky background (must be an <img> for transform animation to be visible) */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <img
            src="/backgrounds/sky.webp"
            alt=""
            className="
              h-full w-full object-cover
              animate-sky-drift
              will-change-transform
              select-none pointer-events-none
            "
            draggable={false}
          />
          {/* Optional: slight vignette to boost contrast (helps readability) */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Centered app shell */}
        <div className="min-h-screen w-full flex items-center justify-center px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
