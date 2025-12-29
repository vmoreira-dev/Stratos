"use client";

export default function CurrentTemp({
  data,
  loading,
}: {
  data?: any;
  loading?: boolean;
}) {
  return (
    <div className="font-sans text-6xl font-light tracking-[-0.02em] leading-none text-white/90">
      {loading || !data ? "--" : `${data.current.temp}°`}
    </div>
  );
}
