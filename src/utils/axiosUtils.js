import axios from "axios";
const url = "http://localhost:4000"

const client = axios.create({ baseURL: url });
export const request = ({ ...options }) => {
    const onSuccess = response => response;
    const onError = error => error;
    return client(options).then(onSuccess).catch(onError)
}
