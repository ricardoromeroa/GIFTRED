import React, { useState } from 'react';
import negocio1 from '../../assets/img/negocio1.png';
import { Link } from 'react-router-dom';
import './Giftcard.css';
import axios from 'axios';



const Giftcard = () => {

    const [monto, setMonto] = useState('');
    const [donativo, setDonativo] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    

    const handleMonto = (e) => {
        console.log(e.target.value);
        setMonto(e.target.value);  
    }

    const handleDonativo = (e) => {
        console.log(e.target.value);
        setDonativo(e.target.value);  
    }

    const handleNombre = (e) => {
        console.log(e.target.value);
        setNombre(e.target.value);  
    }

    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);  
    }

    const createGiftcard = () => {
        setLoading(true);
        if (monto.length >0
            && nombre.lenght > 0
            && donativo.length > 0
            && email.length > 0) {
            
            const body = {
                monto: monto,
                donativo: donativo,
                nombre: nombre,
                email: email,
            }    

            axios.post("" , body)
            .then(() => {
                prompt("Felicidades! has comprado y enviado la gift por el monto de" + { monto } + "pesos a " + { nombre });
            })
            .catch (() => {
                setLoading(false);
                setError('Información incompleta');
            });

            } else {
                setLoading(false);
                setError('Verificar que la información esté completa');
        }
    };

    return (
        <div className="giftcard">
        <div className="card col-12">
            <Link to="/" className="logo"><img src={negocio1} alt="logo" />
            </Link>
            

            <div className="form-group">
                <label to="exampleInputEmail1">Monto de GiftCard</label>
                <input onChange={handleMonto} value={monto} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="montoHelp"
                    placeholder="Ingresa Monto" />
                <small id="montoHelp" className="form-text text-muted">Todas las transacciones son seguras.</small>
            </div>
            <div className="form-group">
                <label to="exampleInputEmail1">Monto de Donación</label>
                <input onChange={handleDonativo} value={donativo} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="montoHelp"
                    placeholder="Ingresa Monto para donativo" />
                <small id="montoHelp" className="form-text text-muted">Todas las transacciones son seguras.</small>
            </div>
            <div className="form-group">
                <label to="exampleInputEmail1">Su Nombre</label>
                <input onChange={handleNombre} value={nombre} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="nombreHelp"
                    placeholder="Ingrese nombre de destinatario de Giftcard" />
                <small id="nombreHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label to="exampleInputEmail1">Correo Electrónico</label>
                <input onChange={handleEmail} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Ingresa tu Correo Electrónico" />
                <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu información personal con alguien más.</small>
            </div>
            
            <div className="text-danger">
                {error}
            </div>

            {
                loading &&
                <div className="spinner-border text-info" role="status">
                </div>
            }
            <button onClick={() => createGiftcard()} type="submit" className="btn btn-danger"> Comprar </button>
        </div>
    </div>
    )
}

export default Giftcard
