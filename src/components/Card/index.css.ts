import { style } from "@vanilla-extract/css";

export const Card = style({
  color: "white",
  textAlign: "center",
  height: "100%",
});

export const CardImage = style({
  width: "100%",
  maxHeight: "30vh",
  borderRadius: "8px",
  objectFit: "cover",
});
