import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../utils/constant";
import { getProduct, getProducts } from "../../services/productsApi";
import { Product } from "../../utils/types";

export const useProducts = (page: number) => {
  return useQuery<Product[]>({
    queryKey: [QUERY_KEYS.PRODUCTS, page],
    queryFn: () => getProducts(page),
    placeholderData: keepPreviousData,
  });
};

export const useProduct = (id: string) => {
  return useQuery<Product>({
    queryKey: [QUERY_KEYS.PRODUCT, id],
    queryFn: () => getProduct(id),
    // enabled: false,
  });
};
