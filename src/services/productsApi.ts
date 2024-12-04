import axios from "axios";
import { Product } from "../utils/types";

const PRODUCT_BASE_API_URL = import.meta.env.VITE_PRODUCT_BACKEND_URL || "";
if (!PRODUCT_BASE_API_URL) {
  throw new Error("VITE_BACKEND_URL is not defined");
}
const axiosInstance = axios.create({ baseURL: PRODUCT_BASE_API_URL });

export const getProducts = async (page: number): Promise<Product[]> => {
  try {
    const { data } = await axiosInstance.get(`/products?page=${page}&limit=10`);
    return data.products;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error: ", error.message);
    } else {
      console.error("Non-Axios error: ", error);
    }
    throw error;
  }
};

export const getProduct = async (id: string): Promise<Product> => {
  try {
    const { data } = await axiosInstance.get(`/products/${id}`);
    return data.product;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error: ", error.message);
    } else {
      console.error("Non-Axios error: ", error);
    }
    throw error;
  }
};
