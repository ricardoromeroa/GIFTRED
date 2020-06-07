import React from 'react';
import logo from '../../assets/img/logo1.png';
import { Link } from 'react-router-dom';
import './Faqs.css';

const Faqs = () => {
    return (
        <div className="auth">
            <div className="card col-12">
                <Link to="/" className="logo"><img src={logo} alt="logo" />
                </Link>
            </div>
        </div>
    )
}

export default Faqs
