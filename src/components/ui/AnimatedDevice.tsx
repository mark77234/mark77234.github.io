import type { ReactNode } from "react";
import type { DeviceType } from "../../hooks/useDeviceMode";

interface AnimatedDeviceProps {
  deviceType: DeviceType;
  children: ReactNode;
}

export default function AnimatedDevice({
  deviceType,
  children,
}: AnimatedDeviceProps) {
  const isIPhone = deviceType === "iphone";

  return (
    <div className="relative">
      {/* 단일 디바이스 컨테이너 - 크기가 부드럽게 변화 */}
      <div
        className={`transition-all duration-700 ease-in-out bg-dark rounded-[40px] flex flex-col overflow-hidden flex-shrink-0 ${
          isIPhone
            ? "w-[48vh] h-[85vh] p-4 max-md:w-[300px] max-md:h-[600px]"
            : "w-[65vh] h-[85vh] p-6 max-md:w-[400px] max-md:h-[500px]"
        }`}
        style={{
          borderRadius: isIPhone ? "40px" : "30px",
          transition: "all 0.7s ease-in-out",
        }}
      >
        <div
          className="bg-gradient-to-br from-blue-400 via-blue-300 to-purple-300 w-full h-full overflow-hidden relative transition-all duration-700 ease-in-out"
          style={{
            borderRadius: isIPhone ? "40px" : "25px",
            transition: "border-radius 0.7s ease-in-out",
          }}
        >
          {children}

          {/* 홈 인디게이터 */}
          {/* <div
            className={`absolute left-1/2 bottom-4 transform -translate-x-1/2 h-1 bg-black rounded-sm opacity-25 z-10 transition-all duration-700 ease-in-out ${
              isIPhone ? "w-30" : "w-32"
            }`}
          /> */}
        </div>
      </div>
    </div>
  );
}
