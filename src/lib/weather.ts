// lib/weather.ts

const API_KEY = process.env.OPENWEATHER_KEY;

export async function getWeather(lat: number, lon: number) {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) throw new Error("Weather fetch failed");

  return res.json();
}
