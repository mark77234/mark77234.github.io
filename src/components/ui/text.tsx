import React from "react";

type FontWeight = "regular" | "medium" | "bold";

type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "small"
  | "display"
  | "title"
  | "accent";

interface TextProps {
  children: React.ReactNode;
  type?: TextType;
  fontWeight?: FontWeight;
  fontSize?: string | number;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
  as?: React.ElementType;
}

const fontMap: Record<FontWeight, string> = {
  regular: "Pretendard-Regular",
  medium: "Pretendard-Medium",
  bold: "Pretendard-Bold",
};

const typeStyles: Record<
  TextType,
  {
    fontSize: string;
    fontWeight: FontWeight;
    lineHeight: string;
    element: React.ElementType;
    className?: string;
  }
> = {
  display: {
    fontSize: "4rem",
    fontWeight: "bold",
    lineHeight: "1.1",
    element: "h1",
    className: "text-white tracking-tight",
  },
  h1: {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: "1.2",
    element: "h1",
    className: "text-white",
  },
  h2: {
    fontSize: "2.25rem",
    fontWeight: "bold",
    lineHeight: "1.3",
    element: "h2",
    className: "text-white",
  },
  h3: {
    fontSize: "1.875rem",
    fontWeight: "medium",
    lineHeight: "1.4",
    element: "h3",
    className: "text-white",
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: "medium",
    lineHeight: "1.4",
    element: "h4",
    className: "text-white",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    lineHeight: "1.4",
    element: "h2",
    className: "text-blue-400",
  },
  subtitle1: {
    fontSize: "1.25rem",
    fontWeight: "medium",
    lineHeight: "1.5",
    element: "h3",
    className: "text-gray-200",
  },
  subtitle2: {
    fontSize: "1.125rem",
    fontWeight: "medium",
    lineHeight: "1.5",
    element: "h4",
    className: "text-gray-300",
  },
  body1: {
    fontSize: "1rem",
    fontWeight: "regular",
    lineHeight: "1.6",
    element: "p",
    className: "text-gray-300",
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: "regular",
    lineHeight: "1.6",
    element: "p",
    className: "text-gray-400",
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: "regular",
    lineHeight: "1.5",
    element: "span",
    className: "text-gray-500",
  },
  small: {
    fontSize: "0.625rem",
    fontWeight: "regular",
    lineHeight: "1.4",
    element: "span",
    className: "text-gray-500",
  },
  accent: {
    fontSize: "1.125rem",
    fontWeight: "medium",
    lineHeight: "1.5",
    element: "span",
    className: "text-blue-400",
  },
};

export const Text: React.FC<TextProps> = ({
  children,
  type,
  fontWeight,
  fontSize,
  color,
  style,
  className,
  as,
}) => {
  const typeConfig = type ? typeStyles[type] : null;

  const Element = as || typeConfig?.element || "span";

  const finalFontWeight = fontWeight || typeConfig?.fontWeight || "regular";
  const finalFontSize = fontSize || typeConfig?.fontSize || "1rem";
  const finalClassName = `${typeConfig?.className || ""} ${
    className || ""
  }`.trim();

  return (
    <Element
      className={finalClassName}
      style={{
        fontFamily: fontMap[finalFontWeight],
        fontWeight:
          finalFontWeight === "bold"
            ? 700
            : finalFontWeight === "medium"
              ? 500
              : 400,
        fontSize: finalFontSize,
        lineHeight: typeConfig?.lineHeight || "1.5",
        color,
        ...style,
      }}
    >
      {children}
    </Element>
  );
};
