import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer'
import Faqs from '../../components/Faqs/Faqs'
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
