"use client";

export default function CurrentTemp({
  data,
  loading,
}: {
  data?: any;
  loading?: boolean;
}) {
  if (loading || !data?.current?.temp) {
    return (
      <div className="font-sans text-6xl font-light tracking-[-0.02em] leading-none text-white/60">
        --°
      </div>
    );
  }

  return (
    <div className="font-sans text-6xl font-light tracking-[-0.02em] leading-none text-white/90">
      {Math.round(data.current.temp)}°
    </div>
  );
}
