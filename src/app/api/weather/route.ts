import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const key = process.env.OPENWEATHER_KEY;

  if (!lat || !lon) {
    return NextResponse.json({ error: "Missing coords" }, { status: 400 });
  }

  if (!key) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  try {
    // current weather
    const currentReq = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`
    );

    // 5-day forecast
    const forecastReq = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`
    );

    const [currentRes, forecastRes] = await Promise.all([
      currentReq,
      forecastReq,
    ]);

    const current = await currentRes.json();
    const forecast = await forecastRes.json();

    return NextResponse.json({
      current: {
        temp: Math.round(current.main.temp),
        humidity: current.main.humidity,
        wind: Math.round(current.wind.speed),
      },
      days: forecast.list
        .filter((_: any, i: number) => i % 8 === 0) // one per day
        .slice(0, 5)
        .map((f: any) => ({
          day: new Date(f.dt * 1000).toLocaleDateString("en-US", {
            weekday: "short",
          }),
          temp: Math.round(f.main.temp),
        })),
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
