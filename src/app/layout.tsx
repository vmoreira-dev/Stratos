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
      <body className="min-h-screen w-full overflow-hidden">
        {/* Background */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/backgrounds/sky.webp')",
          }}
        />

        {/* Global glass atmosphere */}
        <div className="min-h-screen w-full flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
