import { style } from "@vanilla-extract/css";

export const PageLayout = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "760px",
  height: "100vh",
  padding: "10px",
  boxSizing: "border-box",
  textAlign: "center",
  backgroundColor: "#191a1c",
});

export const FlexVerticalLayout = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  gap: "10px",
});

export const FlexVerticalSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
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
