import { CSSProperties, useState } from "react";
import {
  flexHorizontal,
  flexJustifyContent,
  flexVertical,
} from "../../styles/Layout/index.css.ts";
import XIcon from "../Icon/XIcon.tsx";
import { SmallIcon } from "../../styles/Icon/index.css.ts";
import { SubTitle } from "../../styles/Font/index.css.ts";
import ListIcon from "../Icon/ListIcon.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarContainer, navbarRight } from "./Navbar.css.ts";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {isOpen && (
        <aside
          className={NavbarContainer}
          style={
            assignInlineVars({
              [navbarRight]: isOpen ? "0" : "-100%",
            }) as CSSProperties
          }
        >
          <section>
            <header
              className={flexHorizontal}
              style={
                assignInlineVars({
                  [flexJustifyContent]: "end",
                }) as CSSProperties
              }
            >
              <XIcon className={SmallIcon} onClick={() => setIsOpen(!isOpen)} />
            </header>
            <article
              className={flexVertical}
              style={
                assignInlineVars({
                  [flexJustifyContent]: "space-evenly",
                }) as CSSProperties
              }
            >
              <figure
                className={SubTitle}
                onClick={() => {
                  if (location.pathname !== "/main") {
                    navigate("/main");
                    return;
                  }
                  setIsOpen(false);
                }}
              >
                음식점 리스트
              </figure>
              <div
                className={SubTitle}
                onClick={() => {
                  if (location.pathname !== "/roulette") {
                    navigate("/roulette");
                    return;
                  }
                  setIsOpen(false);
                }}
              >
                룰렛 돌리기
              </div>
            </article>
          </section>
        </aside>
      )}

      <header
        className={flexHorizontal}
        style={{
          width: "100%",
          height: "30px",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div style={{ width: "1.8rem" }} />
        <div>Meal Compass</div>
        <ListIcon className={SmallIcon} onClick={() => setIsOpen(true)} />
      </header>
    </>
  );
};

export default Navbar;
