import React from 'react';
import Signin from '../../components/Signin/Signin';
import './SigninContainer.css'

const SigninContainer = () => {
    return (
        <div>
            <section className="fondo">
                <div className="container">
                    <Signin />
                </div>
            </section>
        </div>
    )
}

export default SigninContainer
