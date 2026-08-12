import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Contactme from './Pages/Contactme';
import MinimalScrollLines from './assets/Backgroundscroll';
import Header from './Pages/Header'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Projects from './Pages/Projects'
import EzyrCaseStudy from './Pages/EzyrCaseStudy';
import ExperienceSection from './components/ExperienceSection';

type PortfolioPageProps = {
  isScreenSupported: boolean;
};

const PortfolioPage = ({ isScreenSupported }: PortfolioPageProps) => (
  <>
    <Navbar isScreenSupported={isScreenSupported} />
    <Header />
    <Home isScreenSupported={isScreenSupported} />
    <ExperienceSection />
    <Projects />
    <Contactme />
  </>
);

function App() {
  const [isScreenSupported, setIsScreenSupported] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.hash, location.pathname]);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsScreenSupported(width >= 786); // Only checking width now
    };

    checkScreenSize(); // Initial check on load
    window.addEventListener("resize", checkScreenSize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Cleanup listener
    };
  }, []);



  return (
    <MotionConfig reducedMotion="user">
      <div className='relative isolate flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-white font-manrope text-black dark:bg-black dark:text-white'>
        <MinimalScrollLines />
        <div className="relative z-10 flex w-full flex-col items-center">
          <Routes>
            <Route path="/" element={<PortfolioPage isScreenSupported={isScreenSupported} />} />
            <Route path="/experience/ezyr" element={<EzyrCaseStudy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </MotionConfig>
  )
}

export default App
