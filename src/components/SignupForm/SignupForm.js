/* eslint-disable default-case */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./SignupForm.css";
import logo from '../../assets/img/logos/Logo.png'


const SignupForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInput = (e) => {
        switch (e.target.name) {
            case "inputFirstName":
                setFirstName(e.target.value)
                break;
            case "lastName":
                setLastName(e.target.value)
                break;
            case "email":
                setEmail(e.target.value)
                break;
            case "password":
                setPassword(e.target.value)
                break;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const jsonSend = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
        }
        // Hacer una peticion post al backend para registrar un usuario
        try {
            await axios.post('http://localhost:3000/api/v1/register', jsonSend);
            alert('Successful signup');
        } catch (error) {
            alert('Error');
        }
    }

    return (
        <React.Frgment className="auth">
            <div onSubmit={handleSubmit} className="card col-12">
                <Link to="/" className="logosi"><img className="logosi" src={logo} alt="logo" /><h2 className="h2cye">Empresa</h2>
                </Link>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="inputFirstName"
                        placeholder="type your first name"
                        value={firstName}
                        onChange={handleInput} />
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu información personal con alguien más.</small>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="inputLastname"
                        placeholder="type your last name"
                        value={lastName}
                        onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="type your email"
                        value={email}
                        onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="type your password here"
                        value={password}
                        onChange={handleInput} />
                </div>
                <button onClick={() => handleSubmit()} type="submit" className="btn btn-primary"> Accede a GIFTRED </button>

                <p className="registro">No te has registrado? <Link to="/signupempresa">Registrate Aquí</Link></p>
            </div>
        </React.Frgment>
    );
}
export default SignupForm;