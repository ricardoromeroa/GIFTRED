import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CardDetails from './CardDetails';

export default function CardData() {

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
  }, [])

  // Temporalmente datos desde SWAPI
  return (
    <CardDetails
      name={nameUser}
      gender={genderUser}
      mass={massUser}
    />
  )
}