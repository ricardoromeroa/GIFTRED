import React from 'react'
import imagen1 from '../../assets/img/logos/Logogr2.png'
import './Contacto.css'



const Contacto = () => {
    return (

        <div>>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imagen1} className="d-block w-100" alt="..." />
                </div>
            </div>
            <div className="buttonc">
                <button className="btn btn-danger" href onClick="return false" >Contáctanos</button>
            </div>
        </div>



    )
}

export default Contacto
