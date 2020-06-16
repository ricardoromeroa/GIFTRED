import React from 'react';
import Giftcard from '../Giftcard/Giftcard'
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'

import "./GiftcardContainer.css";
// import axios from 'axios';


const GiftcardContainer = () => {

    // const [Giftcard, setGiftcard] = useState({});
    // //const key 

    // const getGiftcard = () => {
    //     axios.get("")
    //     .then(({data}) => setGiftcard(data));
    // }

    // useEffect(() => {
    //     getGiftcard();
    // }, [])


    return (
        <div>
            <Navbar />
            <section className="fondo">

                <div className="container">
                    <Giftcard />

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default GiftcardContainer
