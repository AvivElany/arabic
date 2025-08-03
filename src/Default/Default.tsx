import './Default.css'

import { useEffect, useState } from 'react'
import {  Route, Routes, useLocation } from 'react-router-dom'
import { useScrollToTop } from '../hooks/useScrollToTop'

// components
import SayHallo from '../components/SayHallo/SayHallo';
import Navbar from '../components/NavBar/Navbar';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Footer from '../components/Footer/Footer';
import Arrest from '../pages/Arrest/Arrest';
import Checkpost from '../pages/Checkpost/Checkpost';
import Contact from '../components/Contact/Contact';
import ScrollToTopButton from '../components/ScrollToTop/ScrollToTop';
import Space from '../components/Space/Space';
import Vocabulary from '../pages/Vocabulary/Vocabulary';
import ArabicAlphabetTable from '../pages/ArabicAlphabetTable/ArabicAlphabetTable';
import Suspect from '../pages/Suspect/Suspect';
import CombatInterrogation from '../pages/CombatInterrogation/CombatInterrogation';
import DevPage from '../pages/DevPage/DevPage';

// pages

export default function Default() {

  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Use the custom hook for scroll to top
  useScrollToTop();

  useEffect(() => {
    // Show loading screen only on first visit
    if (!hasLoaded) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setHasLoaded(true);
      }, 3500);
    }
  }, [hasLoaded]);

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
              <Route path="/suspect" element={<Suspect />} />
              <Route path="/arrest" element={<Arrest />} />
              <Route path="/checkpost" element={<Checkpost />} />
              <Route path="/vocabulary" element={<Vocabulary />} />
              <Route path="/arabic-alphabet" element={<ArabicAlphabetTable />} />
              <Route path="/combat-interrogation" element={<CombatInterrogation />} />
              <Route path="/DevPage" element={<DevPage />} />
              <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
            </Routes>
            <ScrollToTopButton />
            <Footer />
            <Space />
          </>
        )}
    </div>
  )
}