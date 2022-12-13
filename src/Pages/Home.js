import React from 'react'
import { useQuery } from 'react-query'
import { getProducts } from '../api/apiProducts'


const Home = () => {
    const { isLoading, isError, data, error } = useQuery("products", getProducts);
    return (
        <>
            <h1 className='display-2'>use Query</h1>
            <h2>List of Products</h2>
            <hr />
            {isLoading && <h1>Loading...</h1>}
            {data?.map(product => <div className='display-6' key={product.id}>{product.id}. {product.title}</div>)}
            {isError && <h2>{error.message}</h2>}
        </>
    )
}

export default Home

