import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
// import { useHistory } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom';
import axios from "axios";
import "./Signin.css";
import logo from '../../assets/img/logos/Logo.png';



const Signin = () => {
    const { setTokenInLocalStorage, isAuth } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error] = useState("");
    const [loading] = useState(false);
    // const history = useHistory();

    if (isAuth) return <Redirect to="/" />




    const handleSubmit = async (e) => {
        e.preventDefault();
        const jsonSend = { email, password }
        try {
            const axiosRes = await axios.post('http://localhost:3000/api/v1/login', jsonSend);
            const { token } = axiosRes.data;
            setTokenInLocalStorage(token);
            alert('Succesful login');
        } catch (error) {
            alert('Error on login');
        }
    };

    return (
        <div className="auth">
            <div onSubmit={handleSubmit} className="card col-12">
                <Link to="/" className="logosi"><img className="logosi" src={logo} alt="logo" /> <h2 className="h2cye">Clientes</h2>
                </Link>


                <div className="form-group">
                    <label to="exampleInputEmail1">Correo Electrónico</label>
                    <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                        placeholder="Ingresa tu Correo Electrónico" />
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu información personal con alguien más.</small>
                </div>

                <div className="form-group">
                    <label to="exampleInputPassword1">Contraseña</label>

                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresa tu Contraseña" />
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

                <p className="registro">No te has registrado? <NavLink to="/signup">Registrate Aquí</NavLink></p>
            </div>
        </div>

    )


}

export default Signin
