import React from 'react';
import SignupEmpresa from '../SignupEmpresa/SignupEmpresa';
import "./SignupEmpresaContainer.css"

const SignupEmpresaContainer = () => {
    return (
        <div>
        <section className="fondo">
            <div className="container">
                <SignupEmpresa />
            </div>
        </section>
    </div>
    )
}

export default SignupEmpresaContainer;