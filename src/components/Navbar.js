import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="my-5 bg-warning text-white">
            <Link className="btn" to="/">Home</Link>
            <Link className="btn" to="/menu">Menu</Link>
            <Link className="btn" to="/contact">Contact</Link>
            <Link className="btn" to="/abcd">Don't click</Link>
        </div>
    )
}

export default Navbar