import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer'
import SobreGiftred from '../../components/SobreGiftred/SobreGiftred'
import './SobreContainer.css';

const SobreContainer = () => {
    return (
        <div>
            <Navbar />
            <section className="fondo">
                <div className="container">
                    <SobreGiftred />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default SobreContainer
