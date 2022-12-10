import React, { useState, useEffect } from 'react'



const StandardFetch = () => {
    const [data, setData] = useState("");
    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then(response => response.json())
            .then(data => setData(data));
    }, [])

    return (
        <div>
            <h1 className='display-4 color-danger'> This is Standard Fetch</h1>
            <h3>List of products</h3>
            <hr />
            {data && data?.map(product => <div className='display-6' key={product.id}>{product.id}. {product.title}</div>)}
        </div>
    )
}

export default StandardFetch