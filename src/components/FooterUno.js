import React, { useEffect } from 'react'
import '../css/FooterUno.css'
import IconoInsta from '../img/ig.png'
import IconoWts from '../img/whats.png'
import IconoLady from '../img/logo-no-background.png'
import IconoMail from '../img/mail.png'
import IconoWaze from '../img/waze.png'
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from 'react-router-dom'

<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>

const FooterUno = () => {

  useEffect(()=>{
    Aos.init()
},[])

  return (
      <div className='MyFooter'>
      <div className="footer-content">
      <div className="footer-section2">
        <Link to='/'>
          <img src={IconoLady} alt=''></img>
          </Link>
        </div>
        <div className="footer-section">
        <a href="https://www.instagram.com/keril_tattoo">
        <img src={IconoInsta} alt='' />
        </a>
        <a href="https://walink.co/c1c7a1">
          <img src={IconoWts} alt='' />
        </a>
        <a href="mailto:kerillizano@icloud.com">
          <img src={IconoMail} alt='' />
        </a>
        <a href="https://waze.com/ul/hd1gcrynx4">
        <img src={IconoWaze} alt='' />
        </a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Dev by Lenin. Todos los derechos reservados.</p>
      </div>
    </div>

  )
}

export default FooterUno




