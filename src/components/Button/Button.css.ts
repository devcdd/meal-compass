import { style } from "@vanilla-extract/css";

export const MCButton = style({
  padding: "10px 20px",
  fontSize: "1rem",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s",
  userSelect: "none",
  ":hover": {
    backgroundColor: "#0056b3",
  },
  ":disabled": {
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
  },
});
