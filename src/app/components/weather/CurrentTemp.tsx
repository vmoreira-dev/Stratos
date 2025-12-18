export default function CurrentTemp() {
  return (
    <section className="flex flex-col items-center justify-center py-4">
      <div
          style={{
            animation: "temp-float 40s ease-in-out infinite",
          }}
        >
          <h1 className="text-7xl font-light">72°</h1>
        </div>

      <div className="mt-3 text-sm tracking-wide opacity-70">New York</div>
    </section>
  );
}
