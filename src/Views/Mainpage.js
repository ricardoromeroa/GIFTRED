import React from 'react'
import Landing from '../components/Landing/Landing';
import Cards from '../components/Cards/Cards'
import HelpSection from '../components/HelpSection/HelpSection'
// import LandingNavbar from '../components/Navbar/LandingNavbar'
import Contacto from '../components/Contacto/Contacto'

const MainContainer = () => {
    return (
        <React.Fragment>
            
            <Landing/>
            <Cards />
            <HelpSection />
            <Contacto />
        </React.Fragment>
    )
}

export default MainContainer
