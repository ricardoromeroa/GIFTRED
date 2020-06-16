import React from 'react';
import Signin from '../Signin/Signin';
import './SigninContainer.css'
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'

const SigninContainer = () => {
    return (
        <div>
            <Navbar />
            <section className="fondo">
                <div className="container">
                    <Signin />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default SigninContainer
