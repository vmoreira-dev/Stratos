import "./globals.css";

export const metadata = {
  title: "Stratos",
  description: "Glass weather interface",
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
          className="fixed inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/backgrounds/sky.webp')" }}
        />

        {/* Centered app shell */}
        <div className="min-h-screen w-full flex items-center justify-center px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
