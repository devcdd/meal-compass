import { createVar, style } from "@vanilla-extract/css";

export const navbarRight = createVar();

export const NavbarContainer = style({
  zIndex: 3,
  position: "absolute",
  right: navbarRight,
  backgroundColor: "#191a1c",
  width: "100%",
  height: "100%",
  transition: "right 0.5s ease-in-out", // 부드러운 애니메이션 효과
  boxSizing: "border-box",
  padding: "10px",
});
