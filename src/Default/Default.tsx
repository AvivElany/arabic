import './Default.css'

import { useEffect, useState } from 'react'
import {  Route, Routes, useLocation } from 'react-router-dom'

// components
import SayHallo from '../components/SayHallo/SayHallo';
import Navbar from '../components/NavBar/Navbar';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Footer from '../components/Footer/Footer';
import Top from '../components/Top/Top';

// pages

export default function Default() {

  const location = useLocation();
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 9000);
  }, []);

  return (
    <div className='Default'>
      {loading ? (
        <div className="loader">
          <SayHallo />
        </div>
      ) : (
        <>
          <Navbar />

          <Routes location={location}>
            <Route path="/" element={<Home />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Top />
          <Footer />
        </>
      )}
    </div>
  )
}