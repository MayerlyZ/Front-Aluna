"use client";

import { useEffect, useState } from "react";
import FloorMap from "@/components/admin/FloorMap";
import ZoneDetailsPanel from "@/components/admin/ZoneDetailsPanel";
import { getFloorState } from "@/services/floor/floor.service";
import type { FloorState, ZoneState } from "@/types/floor";

export default function AdminPage() {
  const [floor, setFloor] = useState<FloorState | null>(null);
  const [selected, setSelected] = useState<ZoneState | null>(null);

  useEffect(() => {
    getFloorState("floor-5").then(setFloor);
  }, []);

  if (!floor) {
    return <div className="p-10 text-white/40">Loading map…</div>;
  }

  return (
    <div className="grid grid-cols-[1fr_360px] gap-6 p-6">
      <FloorMap
        data={floor}
        selectedId={selected?.id ?? null}
        onSelect={setSelected}
      />

      <ZoneDetailsPanel zone={selected} />
    </div>
  );
}
