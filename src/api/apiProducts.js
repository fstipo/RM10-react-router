import axios from "axios";

const url = "http://localhost:4000";
const productsApi = axios.create({ baseURL: url });

export const getProducts = async () => {
    const response = await productsApi.get("/products");
    return response.data;
}

// People
const url2 = 'https://es-demo.azurewebsites.net/v1'
const peopleApi = axios.create({ baseURL: url2 });

export const getPeople = async () => {
    const response = await peopleApi.get("/People");
    return response.data;
}