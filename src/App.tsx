import { useEffect, useState } from 'react';
import Contactme from './Pages/Contactme';
import MinimalScrollLines from './assets/Backgroundscroll';
import Header from './Pages/Header'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Projects from './Pages/Projects'

function App() {

  const [isScreenSupported, setIsScreenSupported] = useState(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

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

    <>
    <div className='relative isolate flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-white font-manrope text-black dark:bg-black dark:text-white'>
    <MinimalScrollLines />
    <div className="relative z-10 flex w-full flex-col items-center">
      <Navbar isScreenSupported={isScreenSupported} />
      <Header/>
      <Home isScreenSupported={isScreenSupported}/>
      <Projects/>
      <Contactme/>
    </div>
   
    </div>
    </>
  )
}

export default App
