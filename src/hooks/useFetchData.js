
import axios from 'axios'
import { request } from '../utils/axiosUtils'
import { useQuery } from 'react-query'

const onSuccess = (data) => data;

const fetchData = () => request({ url: "/products" })
export const useFetchData = (onError, onSuccess) => useQuery("products", fetchData)

