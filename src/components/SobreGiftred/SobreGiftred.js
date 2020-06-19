import React from 'react';
import logo from '../../assets/img/logos/Logo.png';
import hh from '../../assets/img/logos/hhgr.png'
import { Link } from 'react-router-dom';
import './SobreGiftred.css';

const SobreGiftred = () => {
    return (
        <div className="auth">
            <div className="card col-12">
                <Link to="/" ><img className="logoqs" src={logo} alt="logo" />
                </Link>

                <h6 className= 'formato'> Con GIFTRED buscamos ayuar a la economia de negocios locales en México y Latinomérica.</h6>
                <h6 className= 'formato'> Esta Plataforma es una alternativa para ayudar a los negocios especialmente durante esta etapa de pandemia donde se ven mas afectados.</h6>
                <h6 className= 'formato'> Apostamos al mercado global de  las GiftCard Electrónicas porque sabemos que actualmente son muy utilizadas y cuentan con muchos beneficios que pueden ser de gran ayuda para la situación actual.</h6>

                <h3 className= 'formato titleqs1'> ¿Qué beneficios tienen para los negocios locales?</h3>

                <h4 className= 'h3qs'> Flujo de efectivo al instante</h4>
                <p className= 'formato'> Al momento de comprar una giftcard, el negocio está recibiendo el dinero de la compra al instante, con la promesa de venta o servicio al cliente para cuando lo desee.</p>

                <h4 className= 'h3qs'> Nuevos Clientes</h4>
                <p className= 'formato'> Es una excelente manera de recomendar tu negocio o ser recomendado y atraer nuevos clientes. </p>

                <h4 className= 'h3qs'> Estrategia de Marketing</h4>
                <p className= 'formato'> Es un plus para darse a conocer como negocio y hacerse notar en el mercado como estrategia de marketing. </p>

                <h4 className= 'h3qs'> Incremento en Ventas </h4>
                <p className= 'formato'> Está comprobado que al utilizar giftcards, el cliente termina gastando más de lo que contiene su giftcard. </p>

                <h6 className= 'formato2'> Al final, sabemos que las Gift cards permiten a los negocios crecer y establecer su nombre y marca a travez de generar interacción y lealtad con clientes frecuentes y clientes potenciales.</h6>

                <h6 className= 'formato3'> Existe muchas maneras de sacarle provecho a esta alternativa, y creemos que es una opcion muy viable y conveniente para ayudar a los negocios locales a sobrellevar esta crisis y en un futuro cosechar frutos y generar ingresos extras con esta herramienta.  </h6>

                <h5 className= 'h5qs'> Ayudémonos todos</h5>
                <p className= 'formato'> GIFTRED pretende fomentar el apoyo dentro de nuestras mismas localidades, ayudarnos entre todos y ayudar a los mas necesitados. Por esto mismo tambien contamos con donaciones al momento de hacer compra de giftcards para ayudar a comunidades y de escasos recursos. </p>

                <Link to="/" ><img className="hhgr" src={hh} alt="logo" />
                </Link>

            </div>
        </div>
    )
}

export default SobreGiftred
