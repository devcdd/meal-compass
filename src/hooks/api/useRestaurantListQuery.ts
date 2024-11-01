import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../utils/common.ts";
import { QUERY_KEY_FACTORY } from "../../constants";

export const useRestaurantListQuery = () => {
  const restaurantListQuery = useQuery({
    queryKey: [QUERY_KEY_FACTORY.RESTAURANT_LIST],
    queryFn: async () => {
      const response = await supabase.from("restaurantList").select();
      return response;
    },
  });

  return restaurantListQuery;
};
