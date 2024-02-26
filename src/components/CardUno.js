import React, { useEffect } from 'react';
import '../css/CardUno.css'
import FotoTattoo1 from '../img/imgBx2.jpg'
import FotoTattoo2 from '../img/imgBx3.jpg'
import FotoTattoo3 from '../img/imgBx6.jpg'
import FotoKeril from '../img/ActualizacionPerfil.jpg'
import Aos from 'aos';
import "aos/dist/aos.css"

const CardUno = () => {

    //Uso del AOS library
    useEffect(()=>{
        Aos.init()
    },[])
    // ......

    return (
<div>
    <div className="container">
        <div data-aos="fade-up" className="card card-bg-2">
            <div className="imgBx">
                <img src={FotoKeril} alt=""></img>
            </div>
            <div className="content">
                <h2>¡Hola!</h2>
                <p>Soy Keril Lizano, un apasionado tatuador con un profundo compromiso por tu expresión artística en la piel. Mi enfoque se basa en la creación de obras maestras únicas que reflejen tu individualidad y estilo. A través de mi experiencia y habilidades en el arte del tatuaje, estoy aquí para ayudarte a transformar tus ideas en tatuajes significativos y personalizados. Juntos, exploraremos tu visión y trabajaré contigo para plasmarla en un diseño que sea verdaderamente tuyo, guiándote hacia un viaje de autodescubrimiento y expresión creativa</p>
            </div>
        </div>

        <div data-aos="fade-up" className="card card-bg-1">
            <div className="imgBx">
                <img src={FotoTattoo2} alt=""></img>
            </div>
            <div className="content">
                <h2>Mi estilo</h2>
                <p>Me especializo en el arte del tatuaje tradicional. Mi enfoque distintivo radica en la creación de diseños atemporales, todos cuidadosamente ejecutados con un tamaño equilibrado y detallado. Cada tatuaje que creo es una expresión única de la rica tradición del arte del tatuaje, capturando la esencia clásica con meticulosidad. Con pasión y compromiso, trabajo para ofrecer piezas que trasciendan el tiempo, cada una reflejando la autenticidad y la elegancia en cada trazo.</p>
            </div>
        </div>

        <div data-aos="fade-up" className="card card-bg-3">
            <div className="imgBx">
                <img src={FotoTattoo3} alt=""></img>
            </div>
            <div className="content">
                <h2>Clientes</h2>
                <p> En mi estudio, tu experiencia es clave. Busco crear un ambiente acogedor y profesional. Inicio cada proyecto con una conversación detallada para entender tus ideas. Durante el proceso creativo, mantengo una comunicación abierta para asegurar cada detalle. Mi objetivo es ofrecer un tatuaje excepcional y hacer que todo el proceso sea memorable. Estoy aquí para responder preguntas, brindar orientación y garantizar tu completa satisfacción. Tu confianza es invaluable, y trabajar juntos para crear una obra única es mi prioridad.</p>
            </div>
        </div>

    </div>
</div>
    )
}

export default CardUno
