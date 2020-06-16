import React from 'react'
import './Landing.css'

const LandingMain = () => {
    return (
      <React.Fragment>
        <header className="masthead">
            <div className="h-100 bg-img">
                <div className="row h-100">
                </div>
            </div>
            <h1 className="lm-h1 mb-5 absolute-h1">Apoya a los negocios de tu localidad</h1>
            <h3 className="lm-h3 mb-5 absolute-h3">GiftCards para apoyar a pequeños negocios</h3>
            <h5 className="lm-h5 mb-5 absolute-h5">Con la situación económica actual, buscamos maneras de ayudar a los negocios locales. Con GIFTRED cualquier negocio se puede registrar para ofrecer Gift Cards Electronicas y cualquiera puede comprarlas para apoyar</h5>
            <a href="/directorio" className="btn btn-light btn-xl js-scroll-trigger absolute-button-left">Compra GiftCard</a>
            <a href="/negocio-register" className="btn btn-light btn-xl js-scroll-trigger absolute-button-right">Registra Negocio</a>
        </header>
      </React.Fragment>
    )
}

export default LandingMain
