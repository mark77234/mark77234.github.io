import { useEffect, useState } from "react";

export default function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");

      hours = hours % 12;
      hours = hours === 0 ? 12 : hours;
      const hourStr = String(hours).padStart(2, "0");
      setTime(`${hourStr}:${minutes} `);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative flex flex-row items-center justify-between mt-2.5">
      <span className="text-sm font-semibold text-gray-800 ml-10">{time}</span>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/5 h-6 bg-bg z-10 pl-7 rounded-full flex justify-center items-center" />

      <span className="text-sm font-semibold text-gray-800 mr-10">5G</span>
    </div>
  );
}
