import React from 'react'
import './LandingMain.css'

const LandingMain = () => {
    return (
        <header className="masthead">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-7 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="lm-h1 mb-5">Apoya a los negocios de tu localidad</h1>
                            <h3 className="lm-h3 mb-5">GiftCards para apoyar a pequeños negocios</h3>
                            <h5 className="lm-h5 mb-5">Con la situación económica actual, buscamos maneras de ayudar a los negocios locales. Con GIFTRED cualquier negocio se puede registrar para ofrecer Gift Cards Electronicas y cualquiera puede comprarlas para apoyar</h5>
                            <a href="/giftcard" className="btn btn-light btn-xl js-scroll-trigger">Compra GiftCard</a>
                            <a href="/directorio" className="btn btn-light btn-xl js-scroll-trigger">Registra Negocio</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default LandingMain
