import React from 'react';
import './Cards.css';
import adduser from '../../assets/icons/adduser.png';
import giftbox from '../../assets/icons/giftbox.png';
import money from '../../assets/icons/money.png';


const Cards = () => {
    return (
        <section className="container">
            <h3 className="mainct">ÚNETE A LA RED</h3>      
                <div className="card-group">
                    <div className="icons col-12 col-sm-12 col-md-6 col-lg-4">
                        <img src={adduser} className="icon-size" alt="Reigstro" />
                        <div className="card-body">
                            <h5 className="card-title">Crea una cuenta</h5>
                            <p className="card-text text-cards">Llena tu registro con toda la información solicitada. </p>
                        </div>
                    </div>
                    <div className="icons col-12 col-sm-12 col-md-6 col-lg-4">
                        <img src={giftbox} className="icon-size" alt="Buscar" />
                        <div className="card-body">
                            <h5 className="card-title">Genera tus GiftCards</h5>
                            <p className="card-text text-cards"> Recibiras un codigo QR único que podrás compartir con tus clientes 
                        </p>
                        </div>
                    </div>
                    <div className="icons col-12 col-sm-12 col-md-6 col-lg-4">
                        <img src={money} className="icon-size" alt="Enlace"/>
                        <div className="card-body">
                            <h5 className="card-title">Recibe Dinero</h5>
                            <p className="card-text text-cards">Su dinero se reflejará en su cuenta bancaria al dia siguiente de la compra del cliente</p>
                        </div>
                    </div>
                </div>        
        </section>
    )
}

export default Cards
