import React from 'react'
import './LandingMain.css'
import {Link} from 'react-router-dom'

const LandingMain = () => {
    return (
      <React.Fragment>
        <header className="masthead">
            <div className="h-100 bg-img">
                <div className="row h-100">
<<<<<<< HEAD
=======
                    <div className="col-lg-7 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="lm-h1 mb-5">Apoya a los negocios de tu localidad</h1>
                            <h3 className="lm-h3 mb-5">GiftCards para apoyar a pequeños negocios</h3>
                            <h5 className="lm-h5 mb-5">Con la situación económica actual, buscamos maneras de ayudar a los negocios locales. Con GIFTRED cualquier negocio se puede registrar para ofrecer Gift Cards Electronicas y cualquiera puede comprarlas para apoyar</h5>
                            <a href="/directorio" className="btn btn-light btn-xl js-scroll-trigger">Compra GiftCard</a>
                            <Link to="/negocio-register" className="btn btn-light btn-xl js-scroll-trigger">Registra Negocio</Link>
                        </div>
                    </div>
>>>>>>> 1a0b5a099c6536ee81209bd6e67cc087e4aa74f3
                </div>
            </div>
            <h1 className="lm-h1 mb-5 absolute-h1">Apoya a los negocios de tu localidad</h1>
            <h3 className="lm-h3 mb-5 absolute-h3">GiftCards para apoyar a pequeños negocios</h3>
            <h5 className="lm-h5 mb-5 absolute-h5">Con la situación económica actual, buscamos maneras de ayudar a los negocios locales. Con GIFTRED cualquier negocio se puede registrar para ofrecer Gift Cards Electronicas y cualquiera puede comprarlas para apoyar</h5>
            <a href="/directorio" className="btn btn-light btn-xl js-scroll-trigger absolute-button-left">Compra GiftCard</a>
            <a href="/directorio" className="btn btn-light btn-xl js-scroll-trigger absolute-button-right">Registra Negocio</a>
        </header>
      </React.Fragment>
    )
}

export default LandingMain
