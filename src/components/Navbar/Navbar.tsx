import React from "react";
import { FlexHorizontal } from "../../styles/Layout/index.css.ts";

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <>
      <header
        className={FlexHorizontal}
        style={{ width: "100%", justifyContent: "space-between" }}
      >
        <div style={{ width: "10px" }}>=</div>
        <div>Meal Compass</div>
        <div style={{ width: "10px" }}>=</div>
      </header>
      <section
        style={{
          position: "absolute",
          backgroundColor: "#fff",
          width: "100%",
          height: "100%",
          right: "-100%",
          transition: "right 0.5s ease-in-out", // 부드러운 애니메이션 효과
        }}
      ></section>
    </>
  );
};

export default Navbar;
