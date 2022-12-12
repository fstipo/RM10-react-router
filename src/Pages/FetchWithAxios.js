import React, { useEffect, useState } from 'react'
import axios from 'axios'


const FetchWithAxios = () => {
    const [data, setData] = useState("")
    useEffect(() => {
        axios.get("http://localhost:4000/reviews")
            .then((data) => setData(data.data))
    }
        , [])

    return (
        <>
            <h1>Fetch with AXIOS</h1>
            <h3>List of Reviews</h3>
            {data && data.map(review => <div className='display-6' key={review.id}>{review.id}. {review.comment}.</div>)}
        </>
    )
}

export default FetchWithAxios