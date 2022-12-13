import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="my-5 bg-warning text-white">
            <Link className="btn" to="/">Home</Link>
            <Link className="btn" to="/standard-fetch">Standard Fetch</Link>
            <Link className="btn" to="/fetch-with-axios">Fetch with Axios</Link>
            <Link className="btn" to="/people">People</Link>
            <Link className="btn" to="/abcd">Don't click</Link>
        </div>
    )
}

export default Navbar