import { createVar, style } from "@vanilla-extract/css";

export const flexJustifyContent = createVar();
export const flexGap = createVar();
export const flex = createVar();

export const pageLayoutHeight = createVar();

export const pageLayout = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "760px",
  padding: "10px",
  boxSizing: "border-box",
  textAlign: "center",
  backgroundColor: "#191a1c",
  height: pageLayoutHeight,
  vars: {
    [pageLayoutHeight]: "100vh",
  },
});

export const flexVertical = style({
  width: "100%",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: flexJustifyContent,
  gap: flexGap,
  flex: flex,

  vars: { [flexJustifyContent]: "flex-start", [flexGap]: "10px" },
});

export const flexHorizontal = style({
  vars: { [flexJustifyContent]: "space-between" },

  width: "100%",
  height: "100%",

  display: "flex",
  flexDirection: "row",
  justifyContent: flexJustifyContent,
  alignItems: "center",
  flex: flex,
});

export const flex1 = style({
  flex: 1,
});
