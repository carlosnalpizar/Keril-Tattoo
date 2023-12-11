import React, { useEffect, useState } from 'react';
import '../css/Tips.css';
import Aos from 'aos';
import "aos/dist/aos.css"

const Tips = () => {
  //Uso del AOS library
    useEffect(()=>{
        Aos.init()
    },[])
    // ......

const [showCareTips, setShowCareTips] = useState(false);
const [showPreparationTips, setShowPreparationTips] = useState(false);

const toggleCareTips = () => {
    setShowCareTips(!showCareTips);
};

const togglePreparationTips = () => {
    setShowPreparationTips(!showPreparationTips);
};

return (
    <div className="container2">
    <div>
        <ol className={`gradient-list ${showPreparationTips ? 'show-tips' : ''}`}>
        <li onClick={togglePreparationTips}>Tips antes del tatuaje ▾</li>
        {showPreparationTips && (
            <>
            <li data-aos="fade-left">Consúltame sobre el diseño, tamaño y ubicación del tatuaje.</li>
            <li data-aos="fade-right">Asegúrate de estar bien descansado y haber comido antes de la cita para evitar mareos.</li>
            <li data-aos="fade-left">Evita el consumo excesivo de alcohol o sustancias antes del tatuaje.</li>
            <li data-aos="fade-right">Considera la ubicación del tatuaje.</li>
            <li data-aos="fade-left">Comunica cualquier alergia o sensibilidad a los productos utilizados en el proceso.</li>
            <li data-aos="fade-right">Lleva ropa cómoda y que permita el acceso fácil a la zona del tatuaje.</li>
            <li data-aos="fade-left">Asegúrate de tener tiempo suficiente para la cita y para la recuperación.</li>
            </>
        )}
        </ol>
    </div>
    <div>
        <ol className={`gradient-list ${showCareTips ? 'show-tips' : ''}`}>
        <li onClick={toggleCareTips}>Tips después del tatuaje ▾</li>
        {showCareTips && (
            <>
            <li data-aos="fade-right">Lava suavemente el tatuaje con agua y jabón de 2 a 3 veces por día.</li>
            <li data-aos="fade-left">Cuando aparezca el grano, aplica una fina capa de crema hidratante 2 veces por día.</li>
            <li data-aos="fade-right">Evita rascar o frotar el área del tatuaje, incluso si comienza a picar.</li>
            <li data-aos="fade-left">Protege tu tatuaje del sol directo con ropa o protector solar.</li>
            <li data-aos="fade-right">No sumerjas tu tatuaje en agua durante mucho tiempo, especialmente en piscinas o jacuzzis.</li>
            </>
        )}
        </ol>
    </div>
    </div>
);
};

export default Tips;


