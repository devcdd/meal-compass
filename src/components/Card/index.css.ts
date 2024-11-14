import { style } from "@vanilla-extract/css";

export const Card = style({
  color: "white",
  textAlign: "center",
  padding: "1rem",
  borderRadius: "8px",
  border: "4px solid #232939",
  height: "100%",
});

export const CardImage = style({
  width: "100%",
  height: "14rem",
  borderRadius: "8px",
  objectFit: "cover",
});
