import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Portafolio from './pages/Portafolio';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  useEffect(() => {
    Aos.init();

    window.scrollTo(0, 0); 
  }, [location.pathname]); 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Portafolio" element={<Portafolio />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
