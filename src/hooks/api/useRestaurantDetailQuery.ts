import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../utils/common.ts";
import { QUERY_KEY_FACTORY } from "../../constants";
import { IRestaurant } from "../../types";

export const useRestaurantDetailQuery = (id: string) => {
  const restaurantQuery = useQuery<IRestaurant, IRestaurant, IRestaurant>({
    queryKey: [QUERY_KEY_FACTORY.RESTAURANT],
    queryFn: async () => {
      const response = await supabase
        .from("restaurantList")
        .select()
        .eq("id", id.toString());
      return response.data[0] as IRestaurant;
    },
    select: (data) => data || null,
    enabled: !!id,
  });

  return restaurantQuery;
};
