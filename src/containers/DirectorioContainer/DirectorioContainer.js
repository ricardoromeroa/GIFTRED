import React from 'react';
import Directorio from '../../components/Directorio/Directorio';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const DirectorioContainer = () => {
  return (
      <div>
          <Navbar/>
          <Directorio/>
          <Footer/>
      </div>
  )
};

export default DirectorioContainer;