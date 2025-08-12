import type { ReactNode } from "react";

interface PhoneProps {
  children: ReactNode;
  className?: string;
}

export default function Phone({ children, className = "" }: PhoneProps) {
  return (
    <div
      className={`relative w-full max-w-sm h-full max-h-[85vh] aspect-[9/19.5] p-2 sm:p-3 md:p-4 bg-dark rounded-[24px] sm:rounded-[32px] md:rounded-[40px] flex flex-col overflow-hidden flex-shrink-0 ${className}`}
    >
      <div className="bg-blue-100 w-full h-full rounded-[20px] sm:rounded-[28px] md:rounded-[36px] overflow-hidden relative">
        {children}
        <HomeIndicator />
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute left-1/2 bottom-2 sm:bottom-3 md:bottom-4 transform -translate-x-1/2 w-20 sm:w-24 md:w-30 h-0.5 sm:h-0.5 md:h-1 bg-black rounded-sm opacity-25 z-10" />
  );
}
