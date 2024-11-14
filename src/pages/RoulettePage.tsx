import { FlexVerticalLayout } from "../styles/Layout/index.css.ts";
import Roulette from "../components/Roulette/Roulette.tsx";
import Button from "../components/Button/Button.tsx";
import { useRestaurantListQuery } from "../hooks/api/useRestaurantListQuery.ts";
import { useRoulette } from "../hooks/util/useRoulette.ts";

const RoulettePage = () => {
  const restaurantListQuery = useRestaurantListQuery();
  const { isClicked, handleSpin } = useRoulette();

  return (
    <>
      <section className={FlexVerticalLayout}>
        <Button onClick={handleSpin}>
          버튼을 눌러 식당을 추천 받아보세요!
        </Button>
        <Roulette
          list={restaurantListQuery?.data || []}
          isClicked={isClicked}
        />
        <Button>음식점 리스트 보러 가기</Button>
      </section>
    </>
  );
};

export default RoulettePage;
