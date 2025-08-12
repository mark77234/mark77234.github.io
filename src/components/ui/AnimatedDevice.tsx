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
    <div className="relative w-full h-full flex justify-center items-center">
      {/* 단일 디바이스 컨테이너 - 크기가 부드럽게 변화 */}
      <div
        className={`transition-all duration-700 ease-in-out bg-dark flex flex-col overflow-hidden flex-shrink-0 ${
          isIPhone
            ? "w-full max-w-sm h-full max-h-[85vh] aspect-[9/19.5] p-2 sm:p-3 md:p-4 rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
            : "w-full max-w-2xl h-full max-h-[85vh] aspect-[4/3] p-3 sm:p-4 md:p-5 lg:p-6 rounded-[20px] sm:rounded-[24px] md:rounded-[30px]"
        }`}
      >
        <div
          className={`bg-gradient-to-br from-blue-400 via-blue-300 to-purple-300 w-full h-full overflow-hidden relative transition-all duration-700 ease-in-out ${
            isIPhone
              ? "rounded-[20px] sm:rounded-[28px] md:rounded-[36px]"
              : "rounded-[16px] sm:rounded-[20px] md:rounded-[25px]"
          }`}
        >
          {children}

          {/* 홈 인디게이터 */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 bg-black rounded-sm opacity-25 z-10 transition-all duration-700 ease-in-out ${
              isIPhone
                ? "bottom-2 sm:bottom-3 md:bottom-4 w-20 sm:w-24 md:w-30 h-0.5 sm:h-0.5 md:h-1"
                : "bottom-2 sm:bottom-3 md:bottom-4 w-24 sm:w-28 md:w-32 h-0.5 sm:h-0.5 md:h-1"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
