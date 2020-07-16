import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logos/Logogr.png';
import './Navbar.css';

const Navbar = () => {
    const { isAuth, user } = useContext(AuthContext);
    
    const PublicNavbar = () => {
        return (
            <header>
                <nav  
                className="navbar navbar-expand-lg navbar-light"> 
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="giftred" className="navbar-brand js-scroll-trigger" href="#page-top" />
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
                                <NavLink className="nav-link" to="/negocios">Para Empresas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/faqs">FAQS</NavLink>
                            </li>

                            {/* <li className="nav-item">             
                            <NavLink className="nav-link" to="/dashboard-user">Dashboard User</NavLink>
                        </li> */}
                        </ul>
                    </div>
                    <NavLink className="btn-primary nav-item5" to="/download">Descarga la App</NavLink>
                </nav>
            </header >
        )
    }

    const AuthNavbar = () => {
        return (
            <header>
                <nav 
                className="navbar navbar-expand-lg navbar-light"> 
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="giftred" className="navbar-brand js-scroll-trigger" href="#page-top" />
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/logout">Hola {user.first_name}!</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/logout">Logout</NavLink>
                            </li>
                            {/* <li className="nav-item">             
                            <NavLink className="nav-link" to="/dashboard-user">Dashboard User</NavLink>
                        </li> */}
                        </ul>
                    </div>
                    <NavLink className="btn-primary nav-item5" to="/download">Descarga la App</NavLink>
                </nav>
            </header >
        )
    }

    return (
        <React.Fragment>
            {isAuth ? AuthNavbar() : PublicNavbar()}
        </React.Fragment>
    );
}

    export default Navbar;