import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/NavBar.css'

export default function NavBar() {
    return (
    <div className="NavBar">
        <Link className="NavBar-links"to='/'>End of the World</Link>
        <div className="navbar-link-container">
            <Link className="NavBar-links"to='/items'>Items</Link>
            <Link className="NavBar-links"to='/cart'>Checkout</Link>
        </div>
    </div>

    )
}
