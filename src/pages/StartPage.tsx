import { CSSProperties, useEffect } from "react";
import Button from "../components/Button/Button.tsx";
import VolumetricCanvas from "../components/Canvas/VolumetricCanvas.tsx";
import {
  flex1,
  flexHorizontal,
  flexJustifyContent,
  flexVertical,
} from "../styles/Layout/index.css.ts";
import { Gray, Title } from "../styles/Font/index.css.ts";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Swing } from "../styles/Animation/index.css.ts";
import Layout from "./Layout.tsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const StartPage = () => {
  const navigate = useNavigate();

  // 스크롤 이벤트 핸들러
  const handleScroll = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      // 아래로 스크롤
      window.scrollTo({
        top: document.body.scrollHeight, // 페이지 맨 아래로 스크롤
        behavior: "smooth", // 부드러운 스크롤
      });
    } else {
      // 위로 스크롤
      window.scrollTo({
        top: 0, // 페이지 맨 위로 스크롤
        behavior: "smooth", // 부드러운 스크롤
      });
    }
  };

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener("wheel", handleScroll); // 모든 스크롤 이벤트 감지
    return () => {
      window.removeEventListener("wheel", handleScroll); // 컴포넌트 언마운트 시 이벤트 해제
    };
  }, []);

  return (
    <Layout header={false}>
      <VolumetricCanvas
        style={{
          height: "40%",
        }}
      />
      <article className={flex1}>
        <section className={flexVertical}>
          <figure
            className={flexVertical}
            style={
              assignInlineVars({
                [flexJustifyContent]: "normal",
              }) as CSSProperties
            }
          >
            <div className={Title}>점심메뉴를 고르는 것은 힘들다</div>
            <div>
              주변에 어떤 음식점들이 있는지도 알아야 당기는 메뉴들도 쉽게 찾을
              수 있을텐데 말이죠. 특히 회사를 다니시는 직장인들 같은 경우 모두의
              의견을 종합하여 메뉴를 선정해야 하기 때문에 더더욱 난이도가 쉽지
              않습니다.
            </div>
            <div className={Title}>그래서 준비한 나침반</div>
            <div>네 가지 의미를 가지고 만들었습니다.</div>
            <article className={flexVertical}>
              <div className={flexVertical}>
                <strong className={Title}>N</strong>
                <span className={Gray}>ew restaurant</span>
              </div>
              <div className={clsx(flexHorizontal)}>
                <div
                  className={flexVertical}
                  style={
                    assignInlineVars({
                      [flexJustifyContent]: "flex-start",
                    }) as CSSProperties
                  }
                >
                  <strong className={Title}>W</strong>
                  <span className={Gray}>eb</span>
                </div>
                <img
                  className={Swing}
                  style={{
                    width: "6rem",
                    willChange: "transform",
                  }}
                  src={"/compass-needle.png"}
                  alt={"나침반 바늘 이미지"}
                />
                <div className={clsx(flexVertical)}>
                  <strong className={Title}>E</strong>
                  <span className={Gray}>asy solution</span>
                </div>
              </div>
              <div className={flexVertical}>
                <strong className={Title}>S</strong>
                <span className={Gray}>top wasting time</span>
              </div>
            </article>
          </figure>
        </section>
      </article>

      <Button onClick={() => navigate("/roulette")}>오늘의 점심 고르기</Button>
    </Layout>
  );
};

export default StartPage;
