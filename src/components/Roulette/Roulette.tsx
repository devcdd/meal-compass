import { useEffect, useMemo, useState } from "react";
import { RouletteScreen, RouletteItem } from "./Roulette.css.ts";
import { IRestaurant } from "../../types";
import { sleep } from "../../utils/common.ts";
import RestaurantCard from "../Card/RestaurantCard.tsx";
// import Slider from "react-slick";
// import Button from "../Button/Button.tsx";
// import { RouletteSlider } from "../../styles/ThirdParty/index.css.ts";
import { Flex1, FlexVerticalLayout } from "../../styles/Layout/index.css.ts";
import RouletteIcon from "../Icon/RouletteIcon.tsx";
import clsx from "clsx";
import { Gray, SubTitle } from "../../styles/Font/index.css.ts";

const RouletteStartMessage = "룰렛을 돌려주세요";

interface RouletteProps {
  list?: IRestaurant[];
  isClicked: boolean;
}

const Roulette = (props: RouletteProps) => {
  const [randomPick, setRandomPick] = useState(0);
  const [debouncedResult, setDebouncedResult] = useState<
    Partial<IRestaurant>[]
  >([]);

  // const settings = useMemo(() => {
  //   return {
  //     dots: true,
  //     // accessibility: true,
  //     infinite: debouncedResult.length > 1,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };
  // }, [debouncedResult]);

  const inflatedList = useMemo(() => {
    if (!props.list || props.list.length === 0)
      return [{ id: -1, name: RouletteStartMessage }];

    // 원본 배열을 랜덤하게 섞기
    const shuffledList = [...props.list];
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }

    // 길이가 200이 될 때까지 부풀리기
    const extendedList = [{ id: -1, name: RouletteStartMessage }];
    while (extendedList.length < 100) {
      extendedList.push(...(shuffledList as IRestaurant[]));
    }

    return extendedList;
  }, [props.list]);

  const spinRoulette = async () => {
    if (!props.isClicked || inflatedList.length <= 1) return;

    const randomNumber = Math.floor(Math.random() * (60 - 20 + 1)) + 20;

    setRandomPick(0);
    await sleep(500); // 첫 번째 대기 시간

    setRandomPick(randomNumber);
    await sleep(2000); // 두 번째 대기 시간

    setDebouncedResult([inflatedList[randomNumber], ...debouncedResult]);
  };

  useEffect(() => {
    spinRoulette();
  }, [props.isClicked, inflatedList.length, inflatedList, debouncedResult]);

  if (inflatedList.length === 0) return <div>Loading...</div>;

  return (
    <section className={FlexVerticalLayout}>
      {debouncedResult.length >= 1 ? (
        <RestaurantCard restaurant={debouncedResult[0] as IRestaurant} />
      ) : (
        <section
          className={clsx(Flex1, FlexVerticalLayout)}
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <RouletteIcon
            style={{
              width: "80%",
              fill: "gray",
            }}
          />
          <span className={clsx(SubTitle, Gray)}>룰렛을 돌려주세요 !</span>
        </section>
      )}

      <article className={RouletteScreen}>
        <section
          style={{
            height: "2.5rem",
            transform: `translateY(-${randomPick * 2.5}rem)`,
            transition: randomPick !== 0 ? "transform 2s ease-in-out" : "",
          }}
        >
          {inflatedList.map((item, index) => (
            <div key={index} className={RouletteItem}>
              {item.name}
            </div>
          ))}
        </section>
      </article>

      {/*{debouncedResult.length > 0 && (*/}
      {/*  <Slider {...settings} className={RouletteSlider}>*/}
      {/*    {debouncedResult.map((restaurant) => (*/}
      {/*      <RestaurantCard key={restaurant.id} restaurant={restaurant} />*/}
      {/*    ))}*/}
      {/*  </Slider>*/}
      {/*)}*/}
    </section>
  );
};

export default Roulette;
