import GlassShell from "./components/shell/GlassShell";
import Header from "./components/header/Header";
import CurrentTemp from "./components/weather/CurrentTemp";
import TempGraph from "./components/weather/TempGraph";
import ForecastRow from "./components/weather/ForecastRow";
import MetricsBar from "./components/weather/MetricsBar";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center px-6">
      <GlassShell>
        <Header />
        <CurrentTemp />
        <TempGraph />
        <ForecastRow />
        <MetricsBar />
      </GlassShell>
    </main>
  );
}
