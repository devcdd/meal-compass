import { style, keyframes } from "@vanilla-extract/css";

const swing = keyframes({
  "0%": { transform: "rotate(30deg)" },
  "50%": { transform: "rotate(-30deg)" },
  "100%": { transform: "rotate(30deg)" },
});

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Swing = style({
  width: "6rem",
  animation: `${swing} 1.5s infinite`,
  transformOrigin: "center",
});

export const Rotate = style({
  animation: `${rotate} 2s linear infinite`,
});
