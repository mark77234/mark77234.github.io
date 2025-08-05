import type { DeviceType } from "../../hooks/useDeviceMode";
import { Text } from "./Text";

interface DeviceToggleProps {
  deviceType: DeviceType;
  onToggle: () => void;
}

export default function DeviceToggle({
  deviceType,
  onToggle,
}: DeviceToggleProps) {
  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={onToggle}
        className="flex items-center gap-3 px-4 py-2 bg-gray-800/90 backdrop-blur-sm rounded-full border border-gray-600 hover:border-blue-500 transition-all duration-200 hover:bg-gray-700/90"
      >
        <div className="flex items-center gap-2">
          <div
            className={`w-6 h-10 rounded-lg border-2 ${
              deviceType === "iphone"
                ? "border-blue-400 bg-blue-400/20"
                : "border-gray-500"
            }`}
          >
            <div className="w-full h-1 bg-current rounded-full mt-1 opacity-60" />
          </div>

          <div
            className={`w-10 h-8 rounded-lg border-2 ${
              deviceType === "ipad"
                ? "border-blue-400 bg-blue-400/20"
                : "border-gray-500"
            }`}
          >
            <div className="w-full h-0.5 bg-current rounded-full mt-1 opacity-60" />
          </div>
        </div>

        <Text type="caption" className="text-gray-300 font-medium">
          {deviceType === "iphone" ? "iPhone" : "iPad"}
        </Text>
      </button>
    </div>
  );
}
