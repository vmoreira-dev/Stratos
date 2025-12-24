import { NextResponse } from "next/server";

const API_KEY = process.env.OPENWEATHER_API_KEY!;
const LAT = 40.7128;
const LON = -74.0060;

export async function GET() {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&units=imperial&appid=${API_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Weather fetch failed" }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
