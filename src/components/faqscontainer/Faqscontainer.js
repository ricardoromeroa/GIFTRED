import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'
import Faqs from '../Faqs/Faqs'
import './Faqscontainer.css';

const Faqscontainer = () => {
    return (
        <div>
            <Navbar />
            <section className="fondo">
                <div className="container">
                    <Faqs />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Faqscontainer
