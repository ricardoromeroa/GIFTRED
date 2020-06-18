import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Navbar.css';

const Navbar = () => {
    
    return (
        <header>
            <nav id="navbarWeb" className="navbar navbar-expand-lg navbar-light " id="mainNav">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo}  alt="giftred" className="navbar-brand js-scroll-trigger" href="#page-top"/>
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/directorio">Directorio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/quienes_somos">Quienes Somos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/faqs">FAQs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signin">Sign In</NavLink>
                        </li>
                        <li className="nav-item">             
                            <NavLink className="nav-link" to="/dashboard-user">Dashboard User</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    )
}
// eslint-disable-next-line

export default Navbar
