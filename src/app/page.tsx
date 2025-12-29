import WeatherCard from "./components/weather/WeatherCard";

export default function Page() {
  return (
    <div className="relative z-10 flex min-h-screen w-full items-center justify-center">
      <WeatherCard />
    </div>
  );
}
