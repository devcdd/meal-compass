import { useState } from "react";
import { FlexHorizontal } from "../../styles/Layout/index.css.ts";
import XIcon from "../Icon/XIcon.tsx";
import { SmallIcon } from "../../styles/Icon/index.css.ts";
import { SubTitle } from "../../styles/Font/index.css.ts";
import ListIcon from "../Icon/ListIcon.tsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {isOpen && (
        <section
          style={{
            zIndex: 3,
            position: "absolute",
            backgroundColor: "#191a1c",
            width: "100%",
            height: "100%",
            right: isOpen ? 0 : "100%",
            transition: "right 0.5s ease-in-out", // 부드러운 애니메이션 효과
          }}
        >
          <section style={{ padding: "10px", height: "100%" }}>
            <div
              className={FlexHorizontal}
              style={{ justifyContent: "end" }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <XIcon className={SmallIcon} onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div className={SubTitle} onClick={() => navigate("/main")}>
              List
            </div>
            <div className={SubTitle} onClick={() => navigate("/roulette")}>
              Roulette
            </div>
          </section>
        </section>
      )}

      <header
        className={FlexHorizontal}
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
