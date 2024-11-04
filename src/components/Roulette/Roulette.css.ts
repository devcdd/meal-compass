import { style } from "@vanilla-extract/css";

export const rouletteContainer = style({
  overflow: "hidden",
  height: "100px", // 각 숫자의 높이와 동일하게 설정
  width: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  color: "black",
});

export const rouletteNumber = style({
  minHeight: "100px",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
