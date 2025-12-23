"use client";

import { useEffect, useState } from "react";

import GlassShell from "./components/shell/GlassShell";
import Header from "./components/header/Header";
import CurrentTemp from "./components/weather/CurrentTemp";
import TempGraph from "./components/weather/TempGraph";
import ForecastRow from "./components/weather/ForecastRow";
import MetricsBar from "./components/weather/MetricsBar";

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  // time awareness (quiet, no drama)
  const hour = new Date().getHours();
  const isNight = hour < 6 || hour > 19;

  // keyboard gesture: D toggles details
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "d") {
        setExpanded(v => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <main
      className={`min-h-screen w-full flex items-center justify-center px-6 transition-colors duration-700 ${
        isNight ? "bg-black" : "bg-neutral-900"
      }`}
    >
      <GlassShell>
        <Header />
        <CurrentTemp />

        <div className="mt-6 h-px bg-white/10" />

        <button
          onClick={() => setExpanded(v => !v)}
          className="mt-4 text-[11px] tracking-wide text-white/40 hover:text-white/70 transition"
          aria-expanded={expanded}
        >
          {expanded ? "Hide details" : "Show details"}
        </button>

        {expanded && (
          <section
            className="space-y-6"
            style={{
              animation: "reveal 240ms ease-out both",
            }}
          >
            <TempGraph />
            <ForecastRow />
            <MetricsBar />
          </section>
        )}

        {/* local animation, scoped to this file */}
        <style jsx>{`
          @keyframes reveal {
            from {
              opacity: 0;
              transform: translateY(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </GlassShell>
    </main>
  );
}
