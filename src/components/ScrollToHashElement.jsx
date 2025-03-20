import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHashElement() {
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash) {
        setTimeout(() => {
          const element = document.getElementById(location.hash.substring(1));
          const header = document.querySelector(".nav-header"); // Adjust selector based on your header's class
  
          if (element) {
            const headerHeight = header ? header.offsetHeight : 0; // Get header height dynamically
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            
            window.scrollTo({
              top: elementPosition - headerHeight - 10, // Offset by header height + small padding
              behavior: "smooth",
            });
          }
        }, 100); // Small delay ensures the element exists before scrolling
      }
    }, [location]);
  
    return null;
  }

export default ScrollToHashElement;