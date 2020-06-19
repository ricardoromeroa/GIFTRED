import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logos/Logogr.png';
import './Navbar.css';

const Navbar = () => {
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light " id="mainNav">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo}  alt="giftred" className="navbar-brand js-scroll-trigger" href="#page-top"/>
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/quienes_somos">Quienes Somos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/clientes">Para Clientes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/empresas">Para Empresas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/faqs">FAQS</NavLink>
                        </li>
                    </ul>  
                </div>
                <NavLink className="btn-primary nav-item5" to="/download">Descarga la App</NavLink>
            </nav>
        </header >
    )
}
// eslint-disable-next-line

export default Navbar
