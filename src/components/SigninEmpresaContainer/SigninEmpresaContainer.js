import React from 'react';
import SigninEmpresa from '../SigninEmpresa/SigninEmpresa';
import './SigninEmpresaContainer.css'
// import Navbar from "../Navbar/Navbar";
// import Footer from '../Footer/Footer'

const SigninEmpresaContainer = () => {
    return (
        <div>
            <section className="fondo">
                <div className="container">
                    <SigninEmpresa />
                </div>
            </section>
        </div>
    )
}

export default SigninEmpresaContainer
