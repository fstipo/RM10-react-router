import React from 'react'
import { useFetchData } from '../hooks/useFetchData'

const Home = () => {
    const { isLoading, isError, data, error } = useFetchData()
    return (
        <>
            <h1>use Query</h1>
            {isLoading && <h1>Loading ...</h1>}
            {isError && <h1>{error.message}</h1>}
            {data && data?.data.map(product => <div key={product.id}>{product.title}</div>)}
        </>
    )
}

export default Home