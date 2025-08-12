import type { ReactNode } from "react";

interface IPadProps {
  children: ReactNode;
  className?: string;
}

export default function IPad({ children, className = "" }: IPadProps) {
  return (
    <div
      className={`relative w-full max-w-2xl h-full max-h-[85vh] aspect-[4/3] p-3 sm:p-4 md:p-5 lg:p-6 bg-dark rounded-[20px] sm:rounded-[24px] md:rounded-[30px] flex flex-col overflow-hidden flex-shrink-0 ${className}`}
    >
      <div className="bg-blue-100 w-full h-full rounded-[16px] sm:rounded-[20px] md:rounded-[25px] overflow-hidden relative">
        {children}
        <HomeIndicator />
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute left-1/2 bottom-2 sm:bottom-3 md:bottom-4 transform -translate-x-1/2 w-24 sm:w-28 md:w-32 h-0.5 sm:h-0.5 md:h-1 bg-black rounded-sm opacity-25 z-10" />
  );
}
