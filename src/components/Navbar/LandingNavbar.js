/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logos/Logogr.png';
import './Navbar.css';

const LandingNavbar = () => {

    return (
        <main className="container">
            <header className="mainHeader">
                <h2 className="hidden">GIFTRED</h2>
                <nav className="mainNav">
                    <h2 className="hidden">GIFTRED Navigation</h2>
                    <NavLink to="#">
                        <img src={logo} alt="Giftred Logo" className="giftredLogo" /> 
                    </NavLink>
                        <ul className="navList">
                            <li><a href="#overview" className="navLink navOv">Quienes Somos</a></li>
                            <li><a href="#forIndividuals" className="navLink navInd">Para Clientes</a></li>
                            <li><a href="#forRetailers" className="navLink navEnt">For Negocios</a></li>
                            <li><a href="/faqs" target="_blank" className="navLink">FAQS</a></li>
                        </ul>
                    <a href="#getGiftred" className="getGiftred">
                        <img src="images/Icon-Browser.png" alt="Browser icon" className="browserIcon" />
                            <h4>GIFTRED APP</h4>
                            <div className="butLine"></div>
                        <img src="images/iconMain-1.png" alt="download icon" className="downloadIcon" />
                    </a>
                </nav>
            </header>
        </main>
    )
}


export default LandingNavbar