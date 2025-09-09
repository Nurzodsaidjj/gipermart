import { request } from "../../../config/data/data";
import { useQuery } from "@tanstack/react-query";

export const useGetCatalog = (category) => {
  return useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      if (!category) return [];

      const res = await request.get(`/catalog`, {
        params: { category },
      });
      return res.data; // bu array bo'lishi kerak
    },
    enabled: !!category,
  });
};
