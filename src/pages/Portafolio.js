import React, { useEffect } from 'react'
import '../css/Portafolio.css'
import Aos from 'aos';
import '../App.css'
import 'aos/dist/aos.css';
import tatuaje from '../img/11.jpg'
import tatuaje2 from '../img/99.jpg'
import tatuaje3 from '../img/tattoTradi3.png'
import tatuaje4 from '../img/tattoTradi4.png'
import tatuaje5 from '../img/22.jfif'
import tatuaje6 from '../img/33.jpg'
import tatuaje7 from '../img/44.jpg'
import tatuaje8 from '../img/55.jpg'
import tatuaje9 from '../img/12.png'
import tatuaje10 from '../img/13.png'
import tatuaje11 from '../img/14.png'
import tatuaje12 from '../img/10.png'
import tatuajeNuevo1 from '../img/Agregado1.jpg'
import tatuajeNuevo2 from '../img/Agregado2.jpg'
import tatuajeNuevo3 from '../img/Agregado3.jpg'
import tatuajeNuevo4 from '../img/Agregado4.jpg'
import FooterUno from '../components/FooterUno'
import HeaderUno from '../components/HeaderUno';
import BtnVolver from '../components/BtnVolver';

const Portafolio = () => {

    useEffect(() => {
        Aos.init();
    }, []);

return (
    <div className='App' style={{backgroundColor:'rgba(0, 0, 0, 1)'}}>
        <HeaderUno/>
        <div className="danger">
            <p><strong> Lo que sé hacer ⬇</strong></p>
        </div>
        <div className="gallery">
            <div className="gallery-item">
                <img data-aos="fade-up" src={tatuaje} alt="Tattoo 1" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-right" src={tatuaje2} alt="Tattoo 2" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-left" src={tatuaje6} alt="Tattoo 3" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-up" src={tatuaje4} alt="Tattoo 4" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-right" src={tatuaje5} alt="Tattoo 5" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-left" src={tatuaje3} alt="Tattoo 7" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-up" src={tatuaje7} alt="Tattoo 8" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-right" src={tatuaje8} alt="Tattoo 6" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-left" src={tatuaje9} alt="Tattoo 3" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-up" src={tatuaje10} alt="Tattoo 4" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-right" src={tatuaje11} alt="Tattoo 5" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-left" src={tatuaje12} alt="Tattoo 7" />
            </div>
             <div className="gallery-item">
                <img data-aos="fade-right" src={tatuajeNuevo1} alt="Tattoo 3" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-up" src={tatuajeNuevo2} alt="Tattoo 4" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-right" src={tatuajeNuevo3} alt="Tattoo 5" />
            </div>
            <div className="gallery-item">
                <img data-aos="fade-left" src={tatuajeNuevo4} alt="Tattoo 7" />
            </div>
    </div>
        <BtnVolver/>
        <hr></hr>
        <FooterUno/>
    </div>
)
}

export default Portafolio
