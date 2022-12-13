import React from 'react'
import { useQuery } from 'react-query'
import { getPeople } from "../api/apiProducts"
import moment from 'moment/moment'

const People = () => {
    const { isLoading, isError, data: people, error } = useQuery("people", getPeople, {
        select: people => people.map(el => { return { ...el, changedAt: moment().format(" MMM Do YYYY, h:mm:ss a") } })
    });
    // if (isLoading) {
    //     <h2>Loading...</h2>
    // }
    // else if (isError) {
    //     <h2 className='display-5'>{error.message}</h2>
    // }
    // console.log(people?.map(el => el.changedAt = moment().format(" MMM Do YYYY, h:mm:ss a")));

    return (
        <>
            <div className='display-2'>People</div>
            <hr />
            {console.log(people)}
            {people?.map(el => <div>
                <span className='me-2'>id:</span>  <span className='me-5'>{el.id}</span>
                <span className='me-5'>date:{el.changedAt}</span>
                <span className='me-5'>name:{el.name}</span>
            </div>)}
            {isError && <h2 className='display-3'>{error.message}</h2>}

        </>
    )
}

export default People



