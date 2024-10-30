import { style } from "@vanilla-extract/css";

export const rouletteContainer = style({
  overflow: "hidden",
  height: "50px", // 각 숫자의 높이와 동일하게 설정
  width: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  color: "black",
});

export const rouletteNumber = style({
  minHeight: "50px",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const button = style({
  marginTop: "20px",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff",
  backgroundColor: "#007bff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s",
  ":hover": {
    backgroundColor: "#0056b3",
  },
  ":disabled": {
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
  },
});

export const resultText = style({
  marginTop: "20px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#007bff",
});
