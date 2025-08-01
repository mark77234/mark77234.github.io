import { useEffect, useState } from "react";
import { Text } from "../ui/text";
import { colors } from "../../styles/colors";

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
    <div
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: colors.dark[100],
          marginLeft: 40,
        }}
      >
        {time}
      </Text>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "20%",
          height: "25px",
          backgroundColor: "#111827",
          zIndex: 10,
          paddingLeft: "30px",
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>

      {/* 5G 텍스트 */}
      <Text
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: colors.dark[100],
          marginRight: 40,
        }}
      >
        5G
      </Text>
    </div>
  );
}
