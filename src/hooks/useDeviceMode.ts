import { useState } from "react";

export type DeviceType = "iphone" | "ipad";

export function useDeviceMode() {
  const [deviceType, setDeviceType] = useState<DeviceType>("iphone");

  const toggleDevice = (): void => {
    setDeviceType((prev) => (prev === "iphone" ? "ipad" : "iphone"));
  };

  return {
    deviceType,
    toggleDevice,
    isIPhone: deviceType === "iphone",
    isIPad: deviceType === "ipad",
  };
}
