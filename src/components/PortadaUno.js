import React, { useEffect } from 'react'
import ImagenPortada from '../img/fondoTattoo.png'
import IconoCR from '../img/iconoCR.png'
import '../css/PortadaUno.css'
import Aos from 'aos';
import "aos/dist/aos.css";

const PortadaUno = () => {
    //Uso de AOS library
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
  //.......
    return (
    <div>
        <div className="hero">
        <img src={ImagenPortada} alt="Imagen de fondo"></img>
        <div className="hero-overlay">
        <h1 data-aos="fade-up">¡Keril Tattoo!</h1>
        <p data-aos="fade-up">Me dedico a proporcionarte obras maestras únicas en tu viaje hacia la expresión artística en la piel.</p>
        <img src={IconoCR} alt='' style={{ width: '50px', height: '40px' }}/>
        </div>
        </div>
    </div>
    )
}

export default PortadaUno

