import { style, keyframes } from "@vanilla-extract/css";

const swing = keyframes({
  "0%": { transform: "rotate(30deg)" },
  "50%": { transform: "rotate(-30deg)" },
  "100%": { transform: "rotate(30deg)" },
});

export const Swing = style({
  width: "6rem",
  animation: `${swing} 1.5s infinite`,
  transformOrigin: "center",
});
