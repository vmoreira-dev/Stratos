import WeatherCard from "./components/weather/WeatherCard";

export default function Page() {
  return (
    <main
      className="
        min-h-screen
        w-screen
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      <WeatherCard />
    </main>
  );
}
