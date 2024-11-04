import { style } from "@vanilla-extract/css";

export const Card = style({
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "1rem",
  borderRadius: "8px",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  maxWidth: "300px",
  margin: "0 auto",
  marginTop: "10px",
  transition: "transform 0.3s ease",
  transform: "scale(1)",
});
