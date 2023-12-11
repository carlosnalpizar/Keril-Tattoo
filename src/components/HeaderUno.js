import React from 'react'
import logo from '../img/logo-no-background.png'
import '../css/HeaderUno.css'
import { Link } from 'react-router-dom'
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
const HeaderUno = () => {
    return (
        <div className='MyHeader'>
            <div className="header-content">
            <div className="header-section">
                <Link to='/'>
                <img src={logo} alt=''></img>
                </Link>
            </div>
            </div>
        </div>
        )
}

export default HeaderUno

