import React from 'react';
import SignupForm from '../SignupForm/SignupForm';
import "./SignupContainer.css"

const SignupContainer = () => {
    return (
        <div>
        <section className="fondo">
            <div className="container">
                <SignupForm />
            </div>
        </section>
    </div>
    )
}

export default SignupContainer;