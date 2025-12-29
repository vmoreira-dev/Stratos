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
    const currentReq = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`
    );

    const forecastReq = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`
    );

    const [currentRes, forecastRes] = await Promise.all([
      currentReq,
      forecastReq,
    ]);

    const current = await currentRes.json();
    const forecast = await forecastRes.json();

    const tzOffsetMs = (forecast.city?.timezone ?? 0) * 1000;

    // today's local date
    const todayKey = new Date(Date.now() + tzOffsetMs)
      .toISOString()
      .slice(0, 10);

    // bucket entries by date, choose the one closest to 12:00 local
    const buckets: Record<string, any[]> = {};

    for (const item of forecast.list) {
      const local = new Date(item.dt * 1000 + tzOffsetMs);
      const key = local.toISOString().slice(0, 10);

      if (!buckets[key]) buckets[key] = [];
      buckets[key].push(item);
    }

    const days = Object.keys(buckets)
      .filter((k) => k >= todayKey) // only today+
      .slice(0, 5) // limit before mapping
      .map((k) => {
        const items = buckets[k];

        // 12:00 reference time
        const noon = new Date(k + "T12:00:00.000Z").getTime();

        // choose the item closest to noon local
        const best = items.reduce((a, b) =>
          Math.abs(a.dt * 1000 - noon) < Math.abs(b.dt * 1000 - noon) ? a : b
        );

        const local = new Date(best.dt * 1000 + tzOffsetMs);

        return {
          dt: best.dt,
          day: local.toLocaleDateString("en-US", { weekday: "short" }),
          temp: Math.round(best.main.temp),
        };
      });

    return NextResponse.json({
      current: {
        temp: Math.round(current.main.temp),
        humidity: current.main.humidity,
        wind: Math.round(current.wind.speed),
      },
      days,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
