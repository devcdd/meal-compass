import { FlexVertical } from "../styles/Layout/index.css.ts";
import Roulette from "../components/Roulette/Roulette.tsx";
import Button from "../components/Button/Button.tsx";
import { useRestaurantListQuery } from "../hooks/api/useRestaurantListQuery.ts";
import { useRoulette } from "../hooks/util/useRoulette.ts";

const RoulettePage = () => {
  const restaurantListQuery = useRestaurantListQuery();
  const { isClicked, handleSpin } = useRoulette();

  return (
    <>
      <section className={FlexVertical}>
        <Button onClick={handleSpin}>
          버튼을 눌러 식당을 추천 받아보세요!
        </Button>
        <article>
          <Roulette
            list={restaurantListQuery?.data || []}
            isClicked={isClicked}
          />
        </article>
      </section>
    </>
  );
};

export default RoulettePage;
