import { style } from "@vanilla-extract/css";

export const PageLayout = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  padding: "20px",
  boxSizing: "border-box",
  textAlign: "center",
});

export const FlexVertical = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  gap: "10px",
});

export const FlexHorizontal = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const Flex1 = style({
  flex: 1,
});
