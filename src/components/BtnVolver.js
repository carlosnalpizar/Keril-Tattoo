import React from 'react'
import '../css/BtnVolver.css';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

const BtnVolver = () => {
return (
    <div>
        <Link to= "/">
                <button className='btn2 contacto2'>⬅</button>
        </Link>
    </div>
)
}

export default BtnVolver
