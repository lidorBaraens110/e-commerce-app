import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                רשימת הרכיבים
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item ">
                        <Link to="/" className="nav-link" >כל הפריטים</Link>
                    </li>
                    <li className="navbar-item ">
                        <Link to="/addItem" className="nav-link" >הוסף פריט</Link>
                    </li>
                    <li className="navbar-item ">
                        <Link to="/orderList" className="nav-link" >רשימת הזמנות</Link>
                    </li>
                    <li className="navbar-item ">
                        <Link to="/createCoupon" className="nav-link" >צור קופון</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default NavBar;