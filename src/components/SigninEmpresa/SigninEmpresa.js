import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext'; 
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./SigninEmpresa.css";
import logo from '../../assets/img/logos/Logo.png'



const SigninEmpresa = () => {
    const { setTokenInLocalStorage, isAuth } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    if (isAuth) return <Redirect to="/" />


    const handleSubmit = async (e) => {
        e.preventDefault();
        const jsonSend = { email, password }
        try {
            const axiosRes = await axios.post('https://roar-backend.herokuapp.com/api/v1/login', jsonSend);
            const { token } = axiosRes.data;
            setTokenInLocalStorage(token);
            alert('Succesful login');
        } catch (error) {
            alert('Error on login');
        }
    };

    return (
        <React.Frgment className="auth">
            <div onSubmit={handleSubmit} className="card col-12">
                <Link to="/" className="logosi"><img className="logosi" src={logo} alt="logo" /><h2 className="h2cye">Empresa</h2>
                </Link>
                

                <div className="form-group">
                    <label to="exampleInputEmail1">Correo Electrónico</label>
                    <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    type="email"
                    name="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    placeholder="Ingresa tu Correo Electrónico" />
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu información personal con alguien más.</small>
                </div>

                <div className="form-group">
                    <label to="exampleInputPassword1">Contraseña</label>
                    <input 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    type="password" 
                    className="form-control"
                    name="password" 
                    id="exampleInputPassword1" 
                    placeholder="Ingresa tu Contraseña" />
                </div>

                <div className="text-danger">
                    {error}
                </div>


                {
                    loading &&
                    <div className="spinner-border text-info" role="status">
                    </div>
                }
                <button onClick={() => handleSubmit()} type="submit" className="btn btn-primary"> Accede a GIFTRED </button>

                <p className="registro">No te has registrado? <Link to="/signupempresa">Registrate Aquí</Link></p>
            </div>
        </React.Frgment>

    )


}

export default SigninEmpresa
