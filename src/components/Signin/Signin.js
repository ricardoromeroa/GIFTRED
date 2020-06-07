import React from 'react'
import { useHistory } from "react-router-dom"
import { Link } from 'react-router-dom';
import axios from "axios";
import "./Signin.css"


const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const Auth = () => {
        setLoading(true);
        if (email === "perfil@giftred.com"
            && password === "giftred123") {
            const body = {
                email: email,
                password: password
            }
            axios.post(`https://`, body)
                .then(() => {
                    history.push("/perfil");
                })
                .catch(() => {
                    setLoading(false);
                    setError("correo o contraseña incorrecta");
                });
        } else {
            setLoading(false);
            setError("Asegurate que eres usuario registrado");
        }
    };

    return (
        <div className="auth">
            <div className="card col-12">
                <Link to="/" className="logo"><img src={logo} alt="logo" />
                </Link>

                <div className="form-group">
                    <label for="exampleInputEmail1">Correo Electrónico</label>
                    <input onChange={handleEmail} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Ingresa tu Correo Electrónico" />
                    <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu información personal con alguien más.</small>
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input onChange={handlePassword} value={password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingresa tu Contraseña" />
                </div>

                <div className="text-danger">
                    {error}
                </div>


                {
                    loading &&
                    <div className="spinner-border text-info" role="status">
                    </div>
                }
                <button onClick={() => logIn()} type="submit" className="btn btn-primary"> Accede a HIVE </button>

                <p className="registro">No te has registrado? <Link to="/signup">Registrate Aquí</Link></p>
            </div>
        </div>

    )


}

export default Signin
