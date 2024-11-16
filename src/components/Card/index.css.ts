import { style } from "@vanilla-extract/css";

export const Card = style({
  color: "white",
  textAlign: "center",
  height: "100%",
});

export const MiniCard = style({
  display: "flex",
  height: "150px",
  gap: "20px",
  padding: "10px",
  boxSizing: "border-box",
  borderRadius: "8px",
  borderBottom: "1px solid #333",
});

export const CardImage = style({
  maxHeight: "20vh",
  borderRadius: "8px",
  objectFit: "cover",
});

export const MiniCardImage = style({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  objectFit: "cover",
});
