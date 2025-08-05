import type { ReactNode } from "react";

interface IPadProps {
  children: ReactNode;
  className?: string;
}

export default function IPad({ children, className = "" }: IPadProps) {
  return (
    <div
      className={`relative w-[65vh] h-[85vh] p-6 bg-dark rounded-[30px] flex flex-col overflow-hidden flex-shrink-0 max-md:w-[400px] max-md:h-[500px] ${className}`}
    >
      <div className="bg-blue-100 w-full h-full rounded-[25px] overflow-hidden relative">
        {children}
        <HomeIndicator />
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 w-32 h-1 bg-black rounded-sm opacity-25 z-10" />
  );
}
