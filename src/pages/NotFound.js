import React, { useEffect } from 'react'
import '../css/Portafolio.css'
import '../App.css'
import { Link } from 'react-router-dom';

const NotFound = () => {

return (
    <div className='App' style={{backgroundColor:'rgba(0, 0, 0, 1)'}}>
        <h1>ERROR 404 - No es lo que buscas</h1>
        <Link to= "/">
            <button className='btn2 contacto2' style={{borderColor:'rgb(95, 28, 78)'}}>REGRESAR ⬅</button>
        </Link>
    </div>
)
}

export default NotFound
