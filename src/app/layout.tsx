import "./globals.css";

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
