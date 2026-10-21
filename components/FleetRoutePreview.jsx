"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const routePath =
  "M 82 270 C 160 270 181 104 276 120 S 365 280 456 205 S 595 82 720 122";

export function TruckIcon({ className = "h-7 w-7" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 32"
      fill="none"
      className={className}
    >
      <path
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h22A2.5 2.5 0 0 1 30 5.5V22H3V5.5Z"
        fill="currentColor"
        fillOpacity=".2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M30 11h8.5l6.5 7v4H30V11Z"
        fill="currentColor"
        fillOpacity=".32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M34 14v4h6.5l-3.7-4H34Z"
        fill="currentColor"
        fillOpacity=".35"
      />
      <circle cx="12" cy="24" r="4" fill="currentColor" stroke="#171c21" strokeWidth="2" />
      <circle cx="37" cy="24" r="4" fill="currentColor" stroke="#171c21" strokeWidth="2" />
      <path d="M8 9h16M8 14h11" stroke="currentColor" strokeOpacity=".65" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DriverIcon({ className = "h-6 w-6", x, y }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 40"
      x={x}
      y={y}
      fill="none"
      className={className}
    >
      <circle cx="16" cy="8" r="5" fill="currentColor" />
      <path
        d="M8 35v-8l2-11a6 6 0 0 1 12 0l2 11v8h-5l-1-8h-4l-1 8H8Z"
        fill="currentColor"
        fillOpacity=".75"
      />
      <path d="m10 20-5 8m17-8 5 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function StopMarker({ stop, selected, onSelect }) {
  return (
    <motion.button
      type="button"
      aria-label={`Show route stop ${stop.label}`}
      aria-pressed={selected}
      onClick={onSelect}
      whileHover={{ y: -5, scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      className={`absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:h-10 sm:w-10 ${
        selected
          ? "border-accent bg-accent text-primary shadow-[0_0_24px_rgba(0,255,153,0.45)]"
          : "border-white/30 bg-[#202831] text-white"
      }`}
      style={{ left: `${stop.x / 8}%`, top: `${stop.y / 3.6}%` }}
    >
      {stop.label}
    </motion.button>
  );
}

export default function FleetRoutePreview() {
  const [activeStop, setActiveStop] = useState("A");
  const reduceMotion = useReducedMotion();
  const stops = [
    { label: "A", x: 276, y: 120, detail: "Pickup point" },
    { label: "B", x: 456, y: 205, detail: "Delivery stop" },
    { label: "C", x: 720, y: 122, detail: "Final destination" },
  ];
  const activeStopDetails = stops.find((stop) => stop.label === activeStop);

  return (
    <section
      aria-labelledby="fleet-route-heading"
      className="interactive-card mb-10 overflow-hidden rounded-2xl p-5 sm:p-7"
    >
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Fleet route preview
          </p>
          <h2 id="fleet-route-heading" className="mt-1 text-xl font-semibold sm:text-2xl">
            One trip. Every stop in order.
          </h2>
        </div>
        <p className="rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-xs text-accent">
          Illustrative route animation
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#11171b]">
        <svg
          viewBox="0 0 800 360"
          role="img"
          aria-label="Schematic route from the driver to three destination stops"
          className="h-auto w-full text-accent"
        >
          <defs>
            <pattern id="fleet-route-grid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M 36 0 L 0 0 0 36" fill="none" stroke="white" strokeOpacity=".045" strokeWidth="1" />
            </pattern>
            <filter id="fleet-route-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <rect width="800" height="360" fill="url(#fleet-route-grid)" />
          <path
            d={routePath}
            fill="none"
            stroke="white"
            strokeOpacity=".12"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <motion.path
            d={routePath}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#fleet-route-glow)"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: reduceMotion ? 0 : 1.8, ease: "easeInOut" }}
          />
          {stops.map((stop) => (
            <circle
              key={`route-point-${stop.label}`}
              cx={stop.x}
              cy={stop.y}
              r="13"
              fill="#11171b"
              stroke="currentColor"
              strokeWidth="3"
            />
          ))}
          <motion.g
            initial={reduceMotion ? false : { x: 82, y: 270 }}
            animate={
              reduceMotion
                ? { x: 82, y: 270 }
                : {
                    x: [82, 175, 276, 365, 456, 595, 720, 82],
                    y: [270, 225, 120, 170, 205, 130, 122, 270],
                  }
            }
            transition={{
              duration: 15,
              times: [0, 0.12, 0.25, 0.38, 0.5, 0.72, 0.88, 1],
              ease: "easeInOut",
              repeat: reduceMotion ? 0 : Infinity,
              repeatDelay: 0.7,
            }}
            style={{ color: "#00ff99" }}
          >
            <TruckIcon className="h-5 w-8 drop-shadow-[0_0_10px_rgba(0,255,153,0.55)]" />
          </motion.g>
          <motion.g
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "#a5d8ff" }}
          >
            <DriverIcon className="h-7 w-6" x={34} y={232} />
          </motion.g>
        </svg>

        <div className="absolute inset-0" aria-label="Route stop controls">
          {stops.map((stop) => (
            <StopMarker
              key={stop.label}
              stop={stop}
              selected={activeStop === stop.label}
              onSelect={() => setActiveStop(stop.label)}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80">
          <TruckIcon className="h-4 w-6 text-accent" />
          Vehicle
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80">
          <DriverIcon className="h-4 w-4 text-sky-200" />
          Driver
        </span>
      </div>
      <p className="mt-3 min-h-6 text-sm text-white/65" aria-live="polite">
        <span className="font-semibold text-accent">Stop {activeStop}:</span>{" "}
        {activeStopDetails.detail}. Select a marker to explore the route.
      </p>
    </section>
  );
}
