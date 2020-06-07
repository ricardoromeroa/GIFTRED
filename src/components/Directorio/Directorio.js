import React from 'react';
import './Directorio.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {  faFacebook , faInstagram , faTwitter } from '@fortawesome/free-brands-svg-icons';
import giftCard from '../../assets/img/negocio1.png';
// import notFimg from '../../assets/png/notFimg.png';
import { Link } from 'react-router-dom';

const cardLink = "/";
const socialLink = "/";

const Directorio = () => {
  return (
    <div className='d-block container'>
      <div id='searcher'>
         <form className='form-group row'>
          <div className="mx-sm-10 col-10 fixed-div-form">
            <label htmlFor='inputPassword2' className="sr-only"></label>
            <input type="text" className="form-control" id="inputPassword2" placeholder="Ingresa tu direccion o tu ciudad"></input>
          </div>
          <button type="submit" className="btn btn-primary col-2 fixed-button"><FontAwesomeIcon icon={ faSearch } /></button>
         </form>
      </div>
      <div className="container">
        <ul className='card-columns'>
          <li className='card hovereffect'>
              <img className="card-img-top img-fluid img-responsive" src={ giftCard }></img>
              <div className="card-body overlay">
                <Link to={ cardLink }><h2 className="card-title text-center">Comprar</h2></Link>
                <p className="icon-links">
                  <a href={socialLink}><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                  <a href={socialLink}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                  <a href={socialLink}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                </p>
              </div>
              <div className="card-footer">
                <h4 className="text-muted">Casa Rios</h4>
              </div>
          </li>
          <li className='card hovereffect'>
              <img className="card-img-top img-fluid img-responsive" src={giftCard} ></img>
              <div className="card-body overlay">
                <Link to={ cardLink }><h2 className="card-title text-center">Comprar</h2></Link>
                <p className="icon-links">
                  <a href={socialLink}><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                  <a href={socialLink}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                  <a href={socialLink}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                </p>
              </div>
              <div className="card-footer">
                <h4 className="text-muted">Restaurante Colins</h4>
              </div>
          </li>
          <li className='card hovereffect'>
              <img className="card-img-top img-fluid img-responsive" src={ giftCard } ></img>
              <div className="card-body overlay">
                <Link to={ cardLink }><h2 className="card-title text-center">Comprar</h2></Link>
                <p className="icon-links">
                  <a href={socialLink}><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                  <a href={socialLink}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                  <a href={socialLink}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                </p>
              </div>
              <div className="card-footer">
                <h4 className="text-muted">Howlin' Ray's</h4>
              </div>
          </li>
          <li className='card hovereffect'>
              <img className="card-img-top img-fluid img-responsive" src={ giftCard } ></img>
              <div className="card-body overlay">
                <Link to={ cardLink }><h2 className="card-title text-center">Comprar</h2></Link>
                <p className="icon-links">
                  <a href={socialLink}><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                  <a href={socialLink}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                  <a href={socialLink}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                </p>
              </div>
              <div className="card-footer">
                <h4 className="text-muted">Howlin' Ray's</h4>
              </div>
          </li>
          <li className='card hovereffect'>
              <img className="card-img-top img-fluid img-responsive" src={ giftCard } ></img>
              <div className="card-body overlay">
                <Link to={ cardLink }><h2 className="card-title text-center">Comprar</h2></Link>
                <p className="icon-links">
                  <a href={socialLink}><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                  <a href={socialLink}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                  <a href={socialLink}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                </p>
              </div>
              <div className="card-footer">
                <h4 className="text-muted">Howlin' Ray's</h4>
              </div>
          </li>
          <li className='card hovereffect'>
              <img className="card-img-top img-fluid img-responsive" src={ giftCard } ></img>
              <div className="card-body overlay">
                <Link to={ cardLink }><h2 className="card-title text-center">Comprar</h2></Link>
                <p className="icon-links">
                  <a href={socialLink}><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                  <a href={socialLink}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                  <a href={socialLink}><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                </p>
              </div>
              <div className="card-footer">
                <h4 className="text-muted">Howlin' Ray's</h4>
              </div>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Directorio;
