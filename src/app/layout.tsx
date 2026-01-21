import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stratos",
  description: "Precision-built systems. No noise.",
  applicationName: "Stratos",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full text-white">

        {/* === FULLSCREEN BACKGROUND === */}
        <div className="fixed inset-0 z-0">
          <img
            src="/backgrounds/stratos-horizon.webp"
            alt=""
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* === APP CONTENT === */}
        <main className="relative z-10 min-h-screen flex items-center justify-center">
          {children}
        </main>

      </body>
    </html>
  );
}
