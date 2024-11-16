import { flexVertical } from "../styles/Layout/index.css.ts";
import Roulette from "../components/Roulette/Roulette.tsx";
import Button from "../components/Button/Button.tsx";
import { useRestaurantListQuery } from "../hooks/api/useRestaurantListQuery.ts";
import { useRoulette } from "../hooks/util/useRoulette.ts";
import Layout from "./Layout.tsx";

const RoulettePage = () => {
  const restaurantListQuery = useRestaurantListQuery();
  const { isClicked, handleSpin } = useRoulette();

  return (
    <Layout>
      <section className={flexVertical}>
        <Roulette
          list={restaurantListQuery?.data || []}
          isClicked={isClicked}
        />
        <Button onClick={handleSpin}>
          버튼을 눌러 식당을 추천 받아보세요!
        </Button>
      </section>
    </Layout>
  );
};

export default RoulettePage;
