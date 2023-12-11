import React, { useEffect } from 'react';
import './App.css';
import FooterUno from './components/FooterUno';
import HeaderUno from './components/HeaderUno';
import CardUno from './components/CardUno';
import PortadaUno from './components/PortadaUno';
import BtnContactar from './components/BtnContactar';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Tips from './components/Tips';

function Home() {
  //Uso de AOS library
        useEffect(()=>{
        Aos.init()
    },[])
  //.......

    return (
        <div className='App'>
        <HeaderUno/>
        <PortadaUno/>
        <CardUno/>
        <Tips/>
        <BtnContactar/>
        <hr></hr>
        <FooterUno/>
        </div>
    );
}

export default Home;