/* eslint-disable default-case */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./SignupEmpresa.css";
import logo from '../../assets/img/logos/Logo.png'


const SignupEmpresa = () => {
    const [nombreNegocio, setNombreNegocio] = useState('');
    const [emailNegocio, setEmailNegocio] = useState('');
    const [telNegocio, setTelNegocio] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [password, setPassword] = useState('');

    const handleInput = (e) => {
        switch (e.target.name) {
            case "inputNombreNegocio":
                setNombreNegocio(e.target.value)
                break;
                case "emailNegocio":
                setEmailNegocio(e.target.value)
                break;
            case "ubicacion":
                setUbicacion(e.target.value)
                break;
                case "telNegocio":
                    setTelNegocio(e.target.value)
                    break;
            case "password":
                setPassword(e.target.value)
                break;
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const jsonSend = {
            nombre_negocio: nombreNegocio,
            email_negocio: emailNegocio,
            ubicacion: ubicacion,
            password,
        }
        // Hacer una peticion post al backend para registrar un usuario
        try {
            await axios.post('http://localhost:3000/api/v1/registerbusiness', jsonSend);
            alert('Successful signup');
        } catch (error) {
            alert('Error');
        }
    }

    return (
            <div className="auth">
                <div onSubmit={handleSubmit} className="card col-12">
                    <Link to="/" className="logosi"><img className="logosi" src={logo} alt="logo" /><h2 className="h2cye">Empresa</h2>
                    </Link>
                    <div className="form-group">
                        <label>Nombre del Negocio</label>
                        <input
                            type="text"
                            id="nombreNegocio"
                            name="inputNombreNegocio"
                            placeholder="Ingresa nombre del negocio"
                            className="form-control"
                            value={nombreNegocio}
                            onChange={handleInput} />
                        <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu información personal con alguien más.</small>
                    </div>
                    <div className="form-group">
                        <label>Email del Negocio</label>
                        <input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="type your email"
                            className="form-control"
                            value={emailNegocio}
                            onChange={handleInput} />
                    </div>
                    <div className="form-group">
                        <label>Teléfono de Contacto</label>
                        <input
                            type="number"
                            name="telNegocio"
                            id="inputTelNegocio"
                            placeholder="Ingresa número de teléfono de contacto"
                            className="form-control"
                            value={telNegocio}
                            onChange={handleInput} />
                    </div>
                    
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="type your password here"
                            className="form-control"
                            value={password}
                            onChange={handleInput} />
                    </div>
                    <button onClick={() => handleSubmit()} type="submit" className="btn btn-primary"> Registrate </button>

                    
                </div>
            </div>
    );
}
export default SignupEmpresa;