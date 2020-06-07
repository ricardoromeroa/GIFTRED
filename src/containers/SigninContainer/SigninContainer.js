import React from 'react';
import Signin from '../../components/Signin/Signin';
import './SigninContainer.css'
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer'

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
