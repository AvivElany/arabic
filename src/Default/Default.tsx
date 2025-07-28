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
import Namach from '../pages/Namach/Namach';
import Arrest from '../pages/Arrest/Arrest';
import Checkpost from '../pages/Checkpost/Checkpost';
import Contact from '../components/Contact/Contact';

// pages

export default function Default() {

  const location = useLocation();
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3500);
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
              <Route path="/namach" element={<Namach />} />
              <Route path="/arrest" element={<Arrest />} />
              <Route path="/checkpost" element={<Checkpost />} />
              <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Top />
          <Footer />
        </>
      )}
    </div>
  )
}