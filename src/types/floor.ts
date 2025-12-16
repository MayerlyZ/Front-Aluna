export type ZoneStatus = "ok" | "warning" | "danger";

export interface ZoneDevices {
  temperature: number;
  fanPower: number; // 0–100 %
  fanSpeed: number; // 0–7
  lightLevel: number; // 0–4
}

export interface ZoneState {
  id: string;
  name: string;
  status: ZoneStatus;
  devices: ZoneDevices;
}

export interface FloorState {
  id: string;
  name: string;
  zones: ZoneState[];
}
