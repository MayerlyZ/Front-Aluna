"use client";

import { ZoneState } from "@/types/floor";

interface Props {
  zone: ZoneState | null;
  onClose: () => void;
}

export default function ZoneDetailsPanel({ zone, onClose }: Props) {
  if (!zone) return null;

  return (
    <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{zone.name}</h2>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="mt-6 space-y-3 text-sm">
        <p>🌡 Temp: {zone.devices.temperature}°C</p>
        <p>🌀 Fan Power: {zone.devices.fanPower}%</p>
        <p>🌀 Speed: {zone.devices.fanSpeed}/7</p>
        <p>💡 Light: {zone.devices.lightLevel}/4</p>
      </div>

      <button className="mt-6 w-full rounded-xl bg-cyan-500/20 py-3">
        View 360°
      </button>
    </div>
  );
}
