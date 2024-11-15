import { FlexVerticalLayout } from "../styles/Layout/index.css.ts";
import Roulette from "../components/Roulette/Roulette.tsx";
import Button from "../components/Button/Button.tsx";
import { useRestaurantListQuery } from "../hooks/api/useRestaurantListQuery.ts";
import { useRoulette } from "../hooks/util/useRoulette.ts";
import Layout from "./Layout.tsx";
// import { useNavigate } from "react-router-dom";

const RoulettePage = () => {
  const restaurantListQuery = useRestaurantListQuery();
  const { isClicked, handleSpin } = useRoulette();
  // const navigate = useNavigate();

  return (
    <Layout>
      <section className={FlexVerticalLayout}>
        <Roulette
          list={restaurantListQuery?.data || []}
          isClicked={isClicked}
        />
        <Button onClick={handleSpin}>
          버튼을 눌러 식당을 추천 받아보세요!
        </Button>
        {/*<Button onClick={() => navigate("/main")}>*/}
        {/*  음식점 리스트 보러 가기*/}
        {/*</Button>*/}
      </section>
    </Layout>
  );
};

export default RoulettePage;
