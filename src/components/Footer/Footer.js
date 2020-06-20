import React from 'react';
import './Footer.css';
import fb from '../../assets/icons/fb.png';
import ig from '../../assets/icons/ig.png';
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
// import { faHome } from "@fontawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="contact" id="contact">
            <div className="container">
                <h2>
                    <i className="fas fa-heart"></i>
                </h2>
                <ul className="list-inline list-social">
                    <li className="list-inline-item social-twitter">
                        <img className="icon-size" src={ fb } alt='..' href="/">
                            
                        </img>
                    </li>
                    <li className="list-inline-item social-facebook">
                        <img className="icon-size" src={ ig } alt='..' url="https://www.instagram.com/giftredla">
                            
                        </img>
                    </li>
                    <li className="list-inline-item social-google-plus">
                        <a href="/" alt='..' >
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="container">
                <p className="footer-text">&copy; Gift-Red 2020. All Rights Reserved.</p>
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="/">Privacy</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="/">Terms</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="/">FAQ</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
