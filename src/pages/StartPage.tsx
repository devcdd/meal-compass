import { useEffect } from "react";
import Roulette from "../components/Roulette/Roulette.tsx";
import Button from "../components/Button/Button.tsx";
import { useRoulette } from "../hooks/useRoulette.ts";
import VolumetricCanvas from "../components/Canvas/VolumetricCanvas.tsx";
import ScrollPrompt from "../components/Prompt/ScrollPrompt.tsx";

const StartPage = () => {
  const { isClicked, handleSpin } = useRoulette();

  const list = Array.from({ length: 10 }, (_, i) => ({
    name: `Item ${i + 1}`,
    id: i + 1,
  }));

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
    <main>
      <div style={{ height: "100vh" }}>
        <VolumetricCanvas />
        <div
          style={{
            marginTop: "2rem",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Meal Compass
        </div>
        <div
          style={{
            textAlign: "center",
            margin: "1rem 0",
          }}
        >
          <div>오늘 뭐 먹을지 고민이라면?</div>
          <div>랜덤하게 음식점을 골라보세요.</div>
        </div>
        <ScrollPrompt />
      </div>
      <section style={{ height: "100vh" }}>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <Roulette list={list} isClicked={isClicked} />
          <Button onClick={handleSpin}>
            오늘의 메뉴를 랜덤하게 골라보세요!
          </Button>
        </div>
      </section>
    </main>
  );
};

export default StartPage;
