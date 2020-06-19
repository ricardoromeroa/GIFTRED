import React from 'react';
import './Cards.css';
import adduser from '../../assets/icons/user-plus.svg';
import giftbox from '../../assets/icons/ticket.svg';
import money from '../../assets/icons/coin-dollar.svg';



const Cards = () => {
    return (
        <section className="container">
            <h3 className="mainct">GIFTRED. Revolucionando los certificados de regalo</h3>
            <div className="card-group">
                <div className="cards icons col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="card-body">
                        <img src={adduser} className="icon-size" alt="Reigstro" />
                        <h5 className="card-title">Registrate</h5>
                        <p className="card-text text-cards">Llena tu registro con toda la información solicitada. </p>
                    </div>
                </div>
                <div className="cards icons col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="card-body">
                        <img src={giftbox} className="icon-size" alt="Buscar" />
                        <h5 className="card-title">Conéctate</h5>
                        <p className="card-text text-cards"> Ingresa como Cliente o Empresa </p>
                    </div>
                </div>
                <div className="cards icons col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="card-body">
                        <img src={money} className="icon-size" alt="Enlace" />
                        <h5 className="card-title">Ofrece o Compra</h5>
                        <p className="card-text text-cards">Apoya a tus tiendas favoritas</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards
