import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserDetails from './UserDetails';

export default function UserData() {

  // Temporalmente datos desde SWAPI
  const [massUser, setMassUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [genderUser, setGenderUser] = useState('');

  // Temporalmente datos desde SWAPI
 useEffect(() => {
  axios.get('https://swapi.dev/api/people/1')
  .then((res) => {
  
    setNameUser(res.data.name);
    setGenderUser(res.data.gender);
    setMassUser(res.data.mass);
  })
  .catch((error) => console.log(error));
 },[])
 
  // Temporalmente datos desde SWAPI
    return(
      <React.Fragment>
        <UserDetails
                name={nameUser}
                gender={genderUser}
                mass={massUser}
                />
      </React.Fragment>
    )
}