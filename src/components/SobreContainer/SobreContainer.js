import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'
import SobreGiftred from '../SobreGiftred/SobreGiftred'
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
