import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json({ error: "Missing coords" }, { status: 400 });
  }

  const key = process.env.OPENWEATHER_KEY;

  if (!key) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("OpenWeather error:", text);
      return NextResponse.json({ error: "Upstream fail" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);

  } catch (err) {
    console.error("Fatal weather error:", err);
    return NextResponse.json({ error: "Server blew up" }, { status: 500 });
  }
}
