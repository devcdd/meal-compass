import { style } from "@vanilla-extract/css";

export const RouletteScreen = style({
  overflow: "hidden",
  minHeight: "2.5rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  color: "black",
});

export const RouletteItem = style({
  minHeight: "2.5rem",
  fontWeight: "bold",
  color: "#333",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
