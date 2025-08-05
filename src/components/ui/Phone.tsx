import type { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export default function Phone({ children, className = "" }: PhoneMockupProps) {
  return (
    <div
      className={`relative w-[48vh] h-[85vh] p-4 bg-dark rounded-[40px] flex flex-col overflow-hidden flex-shrink-0 max-md:w-[300px] max-md:h-[600px] ${className}`}
    >
      <div className="bg-blue-100 w-full h-full rounded-[40px] overflow-hidden relative">
        {children}
        <HomeIndicator />
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 w-30 h-1 bg-black rounded-sm opacity-25 z-10" />
  );
}
