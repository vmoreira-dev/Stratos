import GlassShell from "./components/shell/GlassShell";
import Header from "./components/header/Header";
import CurrentTemp from "./components/weather/CurrentTemp";
import TempGraph from "./components/weather/TempGraph";
import ForecastRow from "./components/weather/ForecastRow";
import MetricsBar from "./components/weather/MetricsBar";


<div className="fixed top-0 left-0 bg-red-500 text-white p-4 z-50">
  TAILWIND IS ALIVE
</div>



export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl">
      TAILWIND IS 100% ALIVE
    </div>
  );
}

