import React from 'react';
import { NavLink } from 'react-router-dom'
import './Directorio.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Directorio = () => {
  return (
    <div classNameName='d-block container'>
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text cyan lighten-2" id="basic-text1"><i><FontAwesomeIcon icon={ faSearch } /></i></span>
        </div>
        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
        <NavLink to="/giftcard"><button className="btn btn-primary btn-xl js-scroll-trigger absolute-button-left">GiftCard</button></NavLink>
      </div>
    </div>
  )
};

export default Directorio;
