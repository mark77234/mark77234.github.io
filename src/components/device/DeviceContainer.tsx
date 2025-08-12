import { useState } from "react";
import type { DeviceType } from "../../hooks/useDeviceMode";
import Apps from "./HomeScreen";

interface DeviceContainerProps {
  deviceType: DeviceType;
}

type AppType =
  | "home"
  | "Photos"
  | "Settings"
  | "Safari"
  | "Messages"
  | "Mail"
  | "Music"
  | "Maps"
  | "Phone"
  | "Calculator"
  | "Camera";

export default function DeviceContainer({ deviceType }: DeviceContainerProps) {
  const [currentApp, setCurrentApp] = useState<AppType>("home");

  const handleAppClick = (appName: string) => {
    setCurrentApp(appName as AppType);
  };

  const renderCurrentApp = () => {
    switch (currentApp) {
      case "home":
      default:
        return <Apps deviceType={deviceType} onAppClick={handleAppClick} />;
    }
  };

  return <div className="w-full h-full">{renderCurrentApp()}</div>;
}
