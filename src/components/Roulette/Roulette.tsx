import { FC, useEffect, useMemo, useState } from "react";
import { rouletteContainer, rouletteNumber } from "./Roulette.css.ts";

interface RouletteProps {
  list: {
    id: number;
    name: string;
  }[];
  isClicked: boolean;
}

const Roulette: FC = (props: RouletteProps) => {
  const [randomPick, setRandomPick] = useState(0);

  const inflatedList = useMemo(() => {
    // 원본 배열을 랜덤하게 섞기
    const shuffledList = [...props.list];
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }

    // 길이가 200이 될 때까지 부풀리기
    const extendedList = [{ id: -1, name: "룰렛을 돌려주세요" }];
    while (extendedList.length < 200) {
      extendedList.push(...shuffledList);
    }

    return extendedList;
  }, [props.list]);

  useEffect(() => {
    if (!props.isClicked) return;
    const randomPick =
      Math.floor(Math.random() * inflatedList.length - 101) + 100;
    setRandomPick(0);
    setTimeout(() => {
      setRandomPick(randomPick);
    }, 1000);
  }, [props.isClicked]);

  return (
    <section className={rouletteContainer}>
      <article
        style={{
          height: "50px",
          transform: `translateY(-${randomPick * 50}px)`,
          transition: randomPick !== 0 ? "transform 2s ease-in-out" : "",
        }}
      >
        {inflatedList?.map((item, index) => (
          <div key={index} className={rouletteNumber}>
            {item.name}
          </div>
        ))}
      </article>
    </section>
  );
};

export default Roulette;
