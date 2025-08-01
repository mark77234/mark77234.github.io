import React from "react";

type FontWeight = "regular" | "medium" | "bold";

interface TextProps {
  children: React.ReactNode;
  fontWeight?: FontWeight;
  fontSize?: string | number;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

const fontMap: Record<FontWeight, string> = {
  regular: "Pretendard-Regular",
  medium: "Pretendard-Medium",
  bold: "Pretendard-Bold",
};

export const Text: React.FC<TextProps> = ({
  children,
  fontWeight = "regular",
  fontSize = "1rem",
  color = "inherit",
  style,
  className,
}) => {
  return (
    <span
      className={className}
      style={{
        fontFamily: fontMap[fontWeight],
        fontWeight:
          fontWeight === "bold" ? 700 : fontWeight === "medium" ? 500 : 400,
        fontSize,
        color,
        ...style,
      }}
    >
      {children}
    </span>
  );
};
