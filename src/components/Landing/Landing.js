import React from 'react'
import  { NavLink } from 'react-router-dom';
import './Landing.css'

const LandingMain = () => {
  return (
    <React.Fragment>
      <section className="masthead">
        <div className="h-100 bg-img">
          <div className="row h-100">
          </div>
        </div>
        <div className="fondotitle">
            <h3 className="title"> GIFT CARDS ELECTRONICAS PARA NEGOCIOS LOCALES </h3>
          {/* <h3 className="h3 lm-h3 mb-5 absolute-h3">GiftCards para apoyar a pequeños negocios</h3> */}
            <h5 className="title2">Plataforma para conectar al cliente con sus negocios locales favoritos</h5>
          
        </div>
        <div className="mainbuttons">
          <NavLink to="/dashboard_user" ><button className="btn btn-primary btn-xl js-scroll-trigger absolute-button-left">Clientes</button></NavLink>
          <NavLink to="/negocios"><button className="btn btn-primary btn-xl js-scroll-trigger absolute-button-right">Negocios</button></NavLink>
        </div>
      </section>
    </React.Fragment>
  )
}

export default LandingMain
