import Layout from "./Layout.tsx";
import { useRestaurantListQuery } from "../hooks/api/useRestaurantListQuery.ts";
import { flexVertical } from "../styles/Layout/index.css.ts";
import RestaurantMiniCard from "../components/Card/RestaurantMiniCard.tsx";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const restaurantListQuery = useRestaurantListQuery();
  const navigate = useNavigate();

  return (
    <Layout scrollable>
      <main className={flexVertical} style={{ overflowY: "auto" }}>
        <section>
          {restaurantListQuery.data?.map((restaurant) => (
            <RestaurantMiniCard
              restaurant={restaurant}
              onClick={() => navigate(`/detail/${restaurant.id}`)}
            />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default MainPage;
