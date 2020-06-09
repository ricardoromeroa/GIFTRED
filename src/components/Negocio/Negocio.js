import React from 'react';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import NegocioStyles from './Negocio.css';




const Negocio=()=>{

    const submitNegocio=(e)=>{
        e.preventDefault();
        let valuesFormulario={
            nombreNegocio:document.getElementById("nombreNegocioInput").value,
            giro:document.getElementById("giroNegocioInput").value,
            telefonoNegocio:document.getElementById("giroNegocioInput").value,
            plazoVencimiento:document.getElementById("plazoVencimientoInput").value,
            calleNegocio:document.getElementById("calleInput").value,
            ciudadNegocio:document.getElementById("ciudadInput").value,
            estadoNegocio:document.getElementById("estadoInput").value,
            cpNegocio:document.getElementById("cpInput").value,
            paisNegocio:document.getElementById("paisSelect").value,
            nombreResponsable:document.getElementById("nombreInput").value,
            correoResponsable:document.getElementById("correoResponsableInput").value,
            telefonoNegocio:document.getElementById("telefonoResponsableInput").value,
            password:document.getElementById("passwordInput").value,
            correoNegocio:document.getElementById("correoNegocioInput").value
        }
        console.log(valuesFormulario);
    }


    return (
        <React.Fragment>
            <NavBar/>
            <form>
                <header>
                    <nav id="headerForm"class="navbar navbar-light bg-light">
                        <span id="titleRegistro"class="navbar-brand mb-0 h1">Registro</span>
                    </nav>
                </header>
                <div id="formWraper">
                    <div id="negocioSection">
                        <h5 class="h5">Informacion Del Negocio</h5>
                        <div class="row">
                            <div class="col-sm">
                                <label for="nombreNegocioInput">Nombre</label>
                                <input type="text" class="form-control" id="nombreNegocioInput" placeholder="Tacos Chuchita"/>
                            </div>
                            <div class="col-sm">
                                <label for="giroNegocioInput">Giro</label>
                                <input type="text" class="form-control" id="giroNegocioInput" placeholder="Comida rapida"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <label for="telefonoNegocioInput">Telefono</label>
                                <input type="tel" class="form-control" id="telefonoNegocioInput" placeholder="1112223343"/>
                            </div>
                        </div>
                        <div class="divider"></div>
                    </div>
                    <div id="giftcardConfigSection">
                        <h5 class="h5">Configuraciones para Giftcards</h5>
                        <div class="row">
                            <div class="col-sm">
                                <label for="plazoVencimientoInput">Plazo de Vencimiento</label>
                                <input type="date" class="form-control" id="plazoVencimientoInput"/>
                            </div>
                        </div>
                        <div class="divider"></div>
                    </div>
                    <div id="direccionSection">
                        <h5 class="h5">Direccion</h5>
                        <div class="row">
                            <div class="col-sm">
                                <label for="calleInput">Calle</label>
                                <input type="text" class="form-control" id="calleInput" placeholder="Moctezuma"/>
                            </div>
                            <div class="col-sm">
                                <label for="ciudadInput">Ciudad</label>
                                <input type="text" class="form-control" id="ciudadInput" placeholder="monterrey"/>
                            </div>    
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <label for="estadoInput">Estado</label>
                                <input type="text" class="form-control" id="estadoInput" placeholder="Nuevo Leon"/>
                            </div>
                            <div class="col-sm">
                                <label for="cpInput">Codigo Postal</label>
                                <input type="number" class="form-control" id="cpInput"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <label for="paisSelect">Pais</label>
                                <select class="form-control" id="paisSelect">
                                    <option>Mexico</option>
                                    <option>Colombia</option>
                                    <option>Canada</option>
                                    <option>Peru</option>
                                    <option>Guatemala</option>
                                </select>
                            </div>
                        </div>
                        <div class="divider"></div>
                    </div>
                    <div id="responsableSection">
                        <h5 class="h5">Responsable</h5>
                        <div class="row">
                            <div class="col-sm">
                                <label for="nombreInput">Nombre</label>
                                <input type="text" class="form-control" id="nombreInput" placeholder="Hector Gabriel" />
                            </div>
                            <div class="col-sm">
                                <label for="correoResponsableInput">Correo</label>
                                <input type="email" class="form-control" id="correoResponsableInput" placeholder="name@example.com"/>
                            </div>
                            <div class="col-sm">
                                <label for="telefonoResponsableInput">Telefono</label>
                                <input type="email" class="form-control" id="telefonoResponsableInput" placeholder="35416321"/>
                            </div>
                        </div>

                        <div class="divider"></div>
                    </div>
                    <div id="cuentaSection">
                        <h5 class="h5">Informacion de Cuenta</h5>
                        <div class="row">
                            <div class="col-sm">
                                <label for="passwordInput">Contraseña</label>
                                <input type="password" class="form-control" id="passwordInput" />
                            </div>
                            <div class="col-sm">
                                <label for="correoNegocioInput">Correo del Negocio</label>
                                <input type="email" class="form-control" id="correoNegocioInput" placeholder="name@example.com"/>
                            </div>
                        </div>

                        <div class="divider"></div>
                    </div>
                    <button type="button" class="btn btn-danger" onClick={submitNegocio}>Registrarse</button>
                </div>
            </form>
            <Footer/>
        </React.Fragment>
        
    )
}
export default Negocio;