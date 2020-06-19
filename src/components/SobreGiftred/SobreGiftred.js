import React from 'react';
import logo from '../../assets/img/logos/Logo.png';
import { Link } from 'react-router-dom';
import './SobreGiftred.css';

const SobreGiftred = () => {
    return (
        <div className="auth">
            <div className="card col-12">
                <Link to="/" ><img className="logoqs" src={logo} alt="logo" />
                </Link>
                <p className='formato'> En busca de ayudar a la economía de negocios locales en México y Latinoamérica que son los más afectados en estos tiempos de pandemia, se están buscando alternativas para obtener ventas y flujo de entrada para poder mantener su negocio a flote. Considerando que el distanciamiento social es la nueva normalidad y el flujo de personas en las calles es mínima y ya no se visitan establecimientos con tanta frecuencia buscamos crear una alternativa para ayudar a estos negocios que dependen tanto el flujo de personas. Esta Alternativa llamada GIFTRED, es una apuesta al mercado de las GiftCards electrónicas. Sabemos que actualmente estas se utilizan mucho en form de prepago y por empresas muy grandes como Apple, Spotify, Amazon, Best Buy, por nombrar algunas. Sabemos que existen muchos beneficios para un negocio en cuanto a manejar Gift Cards para sus clientes o futuros clientes. Por un lado y el más importante en estos tiempos, las gift cards general flujo de efectivo inmediato por adelantado para los negocios prometiendo un servicio o un producto a futuro. Al consumidor le gusta la idea de utilizar Gift Cards como forma de pago  y no directamente efectivo o transacciones bancarias ya que se percibe como más seguro y conveniente. El uso de Gift Cards, incrementa las ventas, y el consumo, por lo general terminan gastando más de lo que tienen en su Gift Card. También crea una interacción con clientes y con futuros clientes. Manejar Gift Cards genera datos útiles y da la posibilidad de crear estrategias de marketing y branding y al ofrecer Giftcards electrónicas, se opta por una alternativa verde en comparación a los plásticos convencionales.

                Partiendo de estos beneficios surge la idea de implementar el uso de Gift Cards electrónicas  para negocios locales pequeños. Es una excelente manera de que los negocios puedan  disponer de efectivo inmediato. A través de GIFTRED, cualquier negocio puede registrarse en la App, crear y asignar un valor para la Gift Card para venderla y cualquier persona puede comprar Gift Cards de los negocios registrados participantes ya sea para uso personal o como regalo. La idea es que con ayuda de las localidades a las cual pertenecen estos negocios, brinden el apoyo a estos establecimientos a los que normalmente acudirían y ayuden a promocionar y a darlos a conocer.

                Adicionalmente, sabemos que muchas familias de escasos recursos también están pasando por momentos difíciles por lo que parte de la propuesta de GIFTRED es ofrecer un donativo mediante una comisión opcional para el consumidor o saldo remanente de su Gift Card Electrónica  para ayudar a familias necesitadas comprandoles despensas ropa y otras formas de apoyo que también ofrezcan los establecimientos registrados.</p>
            </div>
        </div>
    )
}

export default SobreGiftred
