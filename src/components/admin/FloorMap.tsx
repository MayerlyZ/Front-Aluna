"use client";

import { FloorState, ZoneState } from "@/types/floor";

interface Props {
  data: FloorState;
  selectedId: string | null;
  onSelect: (zone: ZoneState) => void;
}

const statusColor: Record<string, string> = {
  ok: "border-cyan-400",
  warning: "border-yellow-400",
  danger: "border-red-500",
};

export default function FloorMap({ data, selectedId, onSelect }: Props) {
  return (
    <div className="relative h-[520px] rounded-3xl border border-white/10 bg-black/40 p-8">
      {/* GRID = MAP */}
      <div className="grid h-full grid-cols-6 grid-rows-4 gap-6">
        {/* AULA OCCIDENTAL */}
        <ZoneBox
          zone={data.zones[0]}
          className="col-span-3 row-span-2"
          selected={selectedId === data.zones[0].id}
          onSelect={onSelect}
        />

        {/* AULA ORIENTAL */}
        <ZoneBox
          zone={data.zones[1]}
          className="col-span-2 row-span-1 col-start-4"
          selected={selectedId === data.zones[1].id}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}

/* -------------------- */
/* ZONE COMPONENT */
/* -------------------- */

interface ZoneProps {
  zone: ZoneState;
  className: string;
  selected: boolean;
  onSelect: (zone: ZoneState) => void;
}

function ZoneBox({ zone, className, selected, onSelect }: ZoneProps) {
  return (
    <div
      onClick={() => onSelect(zone)}
      className={`
        ${className}
        cursor-pointer rounded-2xl border-2
        ${statusColor[zone.status]}
        ${selected ? "ring-2 ring-white/40" : ""}
        transition hover:scale-[1.01]
      `}
    />
  );
}
