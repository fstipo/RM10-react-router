import axios from "axios";

const url = "http://localhost:4000";
const productsApi = axios.create({ baseURL: url });

export const getProducts = async () => {
    const response = await productsApi.get("/products");
    return response.data;
}