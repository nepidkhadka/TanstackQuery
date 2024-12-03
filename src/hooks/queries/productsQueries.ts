import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../utils/constant";
import { getProducts } from "../../services/productsApi";
import { Product } from "../../utils/types";

export const useProducts = (page: number) => {
  return useQuery<Product[]>({
    queryKey: [QUERY_KEYS.PRODUCTS, page],
    queryFn: () => getProducts(page),
    placeholderData: keepPreviousData,
  });
};
