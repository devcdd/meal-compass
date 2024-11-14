import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../utils/common.ts";
import { QUERY_KEY_FACTORY } from "../../constants";
import { IRestaurant } from "../../types";

export const useRestaurantListQuery = () => {
  const restaurantListQuery = useQuery<
    IRestaurant[],
    IRestaurant[],
    IRestaurant[]
  >({
    queryKey: [QUERY_KEY_FACTORY.RESTAURANT_LIST],
    queryFn: async () => {
      const response = await supabase.from("restaurantList").select();
      return response.data as IRestaurant[];
    },
    select: (data) => data || [],
    // staleTime: 1000 * 60 * 60,
    // enabled: false,
  });

  return restaurantListQuery;
};
