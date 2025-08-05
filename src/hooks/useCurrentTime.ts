import { useEffect, useState } from "react";

export function useCurrentTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");

      // 12시간 형식으로 변환
      hours = hours % 12;
      hours = hours === 0 ? 12 : hours;
      const hourStr = String(hours).padStart(2, "0");

      setTime(`${hourStr}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}
