import "./globals.css";

export const metadata = {
  title: "Stratos",
  description: "Animated glass weather interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-hidden text-white">
        {/* Sky background */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center brightness-75 saturate-125"
          style={{
            backgroundImage: "url('/backgrounds/sky.webp')",
          }}
        />

        {/* App center */}
        <div className="min-h-screen w-full flex items-center justify-center px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
