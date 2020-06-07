import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LandingMain from '../../components/LandingMain/LandingMain'
import Cards from '../../components/Cards/Cards'
import HelpSection from '../../components/HelpSection/HelpSection'
import CarouselSection from '../../components/CarouselSection/CarouselSection'
import Footer from '../../components/Footer/Footer'



const MainContainer = () => {
    return (
        <div>
            <Navbar />
            <LandingMain />
            <Cards />
            <HelpSection />
            <CarouselSection />
            <Footer />
            
        </div>
    )
}

export default MainContainer
