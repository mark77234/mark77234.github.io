import { useCurrentTime } from "../../hooks/useCurrentTime";
import type { DeviceType } from "../../hooks/useDeviceMode";

interface StatusBarProps {
  deviceType?: DeviceType;
}

export default function StatusBar({ deviceType = "iphone" }: StatusBarProps) {
  const time = useCurrentTime();

  return (
    <div
      className={`w-full relative flex items-center justify-between mt-2.5 ${
        deviceType === "ipad" ? "px-12" : "px-10"
      }`}
    >
      <StatusBarText>{time}</StatusBarText>
      <NotchArea deviceType={deviceType} />
      <StatusBarText>5G</StatusBarText>
    </div>
  );
}

function StatusBarText({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-sm font-semibold text-gray-800">{children}</span>
  );
}

function NotchArea({ deviceType }: { deviceType: DeviceType }) {
  const width = deviceType === "ipad" ? "w-1/3" : "w-1/4";

  return (
    <div
      className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${width} h-6 bg-gray-900 rounded-full`}
    />
  );
}
