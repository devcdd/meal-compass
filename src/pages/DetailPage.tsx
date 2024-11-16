import Layout from "./Layout.tsx";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantDetailQuery } from "../hooks/api/useRestaurantDetailQuery.ts";
import RestaurantCard from "../components/Card/RestaurantCard.tsx";

const DetailPage = () => {
  const { id } = useParams();
  const restaurantDetailQuery = useRestaurantDetailQuery(id);

  useEffect(() => {
    console.log(
      "%cDetailPage.tsx:12 - %crestaurantDetailQuery.data = ",
      "color:yellow;",
      "color:lightgreen; font-weight:bold",
      restaurantDetailQuery.data,
    );
  }, [restaurantDetailQuery.data]);

  return (
    <Layout scrollable>
      {restaurantDetailQuery.data && (
        <RestaurantCard detail restaurant={restaurantDetailQuery.data} />
      )}
    </Layout>
  );
};

export default DetailPage;
