import Layout from "./Layout.tsx";
import { useRestaurantListQuery } from "../hooks/api/useRestaurantListQuery.ts";
import { flexVertical } from "../styles/Layout/index.css.ts";
import RestaurantMiniCard from "../components/Card/RestaurantMiniCard.tsx";

const MainPage = () => {
  const restaurantListQuery = useRestaurantListQuery();

  return (
    <Layout>
      <main className={flexVertical} style={{ overflowY: "auto" }}>
        <section>
          {restaurantListQuery.data?.map((restaurant) => (
            <RestaurantMiniCard restaurant={restaurant} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default MainPage;
