import '../css/BtnContactar.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import cala from '../img/calaca1.png'
import cala2 from '../img/calaca2.png'
import cala3 from '../img/calaca3.png'

const BtnContactar = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="btn-container">
            <img alt='' src={cala} className="calavera-img calavera1" />
            <img alt='' src={cala2} className="calavera-img" />
            <img alt='' src={cala3} className="calavera-img" />

            <div style={{ marginTop: '20%' }}>
                <a href="https://walink.co/ceb578">
                    <button className='btn contacto'>Agendar | Cotizar</button>
                </a>
                <Link to="Portafolio">
                    <button className='btn contacto'>Mi Portafolio</button>
                </Link>
            </div>
        </div>
    );
};

export default BtnContactar;

