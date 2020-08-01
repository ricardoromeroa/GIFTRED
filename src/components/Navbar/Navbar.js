import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logos/Logogr1.png';
import './Navbar.css';
import styles from '../../assets/jss/material-dashboard-react/components/navBar.js';
import { makeStyles } from '@material-ui/core/styles';


//Material Ui Core imports
import PropTypes from 'prop-types';
import { 
    AppBar,
    Toolbar,
    CssBaseline,
    useScrollTrigger,
    Fab,
    Zoom,
    Breadcrumbs,
    Link,
} from '@material-ui/core';
import {
    KeyboardArrowUp,
    Home, 
} from '@material-ui/icons';

const useStyles = makeStyles(styles);

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
            {children}
        </div>
        </Zoom>
    );
};

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};  

export default function Navbar(props) {
    const classes = useStyles();

    const { isAuth, user } = useContext(AuthContext);
    
    const PublicNavbar = () => {
        return (
            <header>
                <CssBaseline />
                <AppBar className={ classes.blueBg } >
                    <Toolbar>
                        <NavLink to="/">
                            <img src={logo} alt="giftred" className={ classes.logo } href="#page-top" />
                        </NavLink>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/home" className={classes.link}>
                                <Home className={classes.icon} />
                                Inicio
                            </Link>
                            <Link
                                color="inherit"
                                href="/about"
                                className={classes.link}
                            >
                                Sobre Nosotros
                            </Link>
                        </Breadcrumbs>
                    </Toolbar>
                </AppBar>
                <Toolbar id="back-to-top-anchor" />
                <ScrollTop {...props}>
                    <Fab className= { classes.redBg } color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                    </Fab>
                </ScrollTop>
                {/* <nav 
                id="navbarWeb" 
                className="navbar navbar-expand-lg navbar-light" 
                id="mainNav">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="giftred" className="navbar-brand js-scroll-trigger" href="#page-top" />
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Quienes Somos</NavLink>
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

                            <li className="nav-item">             
                            <NavLink className="nav-link" to="/dashboard-user">Dashboard User</NavLink>
                        </li>
                        </ul>
                    </div>
                    <NavLink className="btn-primary nav-item5" to="/download">Descarga la App</NavLink>
                </nav> */}
            </header >
        )
    }

    const AuthNavbar = () => {
        return (
            <header>
                <nav 
                id="navbarWeb" 
                className="navbar navbar-expand-lg navbar-light" 
                id="mainNav">
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
