import { FloorState } from "@/types/floor";

export async function getFloorState(floorId: string): Promise<FloorState> {
  // 🔥 MOCK DATA — REPLACE WITH REAL ENDPOINT
  return {
    id: floorId,
    name: "Riwi · Piso 5",
    zones: [
      {
        id: "Classrooms_Western",
        name: "Aula · Ala Occidental",
        status: "warning",
        devices: {
          temperature: 27,
          fanPower: 80,
          fanSpeed: 5,
          lightLevel: 3,
        },
      },
      {
        id: "Classrooms_East",
        name: "Aula · Ala Oriental",
        status: "ok",
        devices: {
          temperature: 24,
          fanPower: 40,
          fanSpeed: 2,
          lightLevel: 1,
        },
      },
    ],
  };
}
