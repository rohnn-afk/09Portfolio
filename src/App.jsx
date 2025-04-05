import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Header from './Pages/Header'
import Projects from './Pages/Projects'
import { useEffect, useState } from 'react';
import Contactme from './Pages/Contactme';

function App() {

  const [isScreenSupported, setIsScreenSupported] = useState(true);

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
    <div id='#'
    className='flex relative flex-col  items-center bg-white dark:bg-black text-black dark:text-white overflow-hidden font-manrope'>
    <Navbar isScreenSupported={isScreenSupported} />
    <Header/>
    <Home isScreenSupported={isScreenSupported}/>
    <Projects/>
    <Contactme/>
   
    </div>
    </>
  )
}

export default App
