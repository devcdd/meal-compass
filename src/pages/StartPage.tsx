import Roulette from "../components/Roulette/Roulette.tsx";
import Button from "../components/Button/Button.tsx";
import { useRoulette } from "../hooks/useRoulette.ts";
import VolumetricCanvas from "../components/Canvas/VolumetricCanvas.tsx";

const StartPage = () => {
  const { isClicked, handleSpin } = useRoulette();

  const list = Array.from({ length: 10 }, (_, i) => ({
    name: `Item ${i + 1}`,
    id: i + 1,
  }));

  return (
    <main>
      <VolumetricCanvas />
      <Roulette list={list} isClicked={isClicked} />
      <Button onClick={handleSpin}>오늘의 메뉴를 랜덤하게 골라보세요 !</Button>
    </main>
  );
};

export default StartPage;
