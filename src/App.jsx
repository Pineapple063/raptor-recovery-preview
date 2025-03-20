import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Services from './pages/Services';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FullScreenLoader from './components/FullScreenLoader';
import ScrollToHashElement from './components/ScrollToHashElement';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minLoadingTime = 1000; // 1 second
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(minLoadingTime - elapsedTime, 0);
      setTimeout(() => setLoading(false), remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  console.log("loading: ", loading);
  return (
    <>
      
      <Router>
        {/* <RouteChangeHandler setLoading={setLoading} /> */}
        <FullScreenLoader loading={loading}/>
        <ScrollToHashElement />
        <Routes>
          <Route index element={<Home loading={loading}/>} />
          <Route path="/home" element={<Home loading={loading}/>} />
          <Route path="/services/:serviceType" element={<Services loading={loading}/>} />
          <Route path="/faq" element={<FAQs loading={loading}/>} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  )
}

// function RouteChangeHandler({ setLoading }) {
//   const location = useLocation();

//   useEffect(() => {
//     setLoading(true); // Show loading on route change

//     const minLoadingTime = 1000; // 1 second


//     const timeout = setTimeout(() => {
//       setLoading(false); // Hide loading after a delay
//     }, minLoadingTime);

//     return () => clearTimeout(timeout);
//   }, [location.pathname, setLoading]);

//   return null;
// }


export default App
