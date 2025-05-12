import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const HomeService = ({image, title, description, containerClass}) => {

    const elementRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    
    useEffect(() => {
        const element = elementRef.current;
        if (!element) {
          // Element not rendered yet or component unmounted
          return;
        }
    
        const observer = new IntersectionObserver(
          ([entry]) => {
            // entry.isIntersecting is true when the element enters the viewport
            // and false when it leaves.
            setIsInView(entry.isIntersecting);
    
            // Optional: If you only want to trigger the animation once
            // and keep the class, uncomment the line below:
            if (entry.isIntersecting) {
               observer.unobserve(element);
         }
          },
          {
            // Options for the observer
            // threshold: A number between 0 and 1, indicating the percentage of the element
            // that must be visible to trigger the callback.
            // 0 means trigger as soon as even one pixel is visible.
            // 1 means trigger only when the entire element is visible.
            threshold: 0.4, // Trigger when 10% of the element is visible
            // root: The element that is used as the viewport for checking visibility.
            // Defaults to the browser viewport.
            // rootMargin: Margin around the root. Can be used to grow or shrink
            // the area used for intersections. e.g., '10px 20px 30px 40px'
          }
        );
    
        // Start observing the element
        observer.observe(element);
    
        // Cleanup function: stop observing when the component unmounts
        return () => {
          observer.unobserve(element);
          // or observer.disconnect();
        };
      }, []); // Empty dependency array means this effect runs only once after initial render
    
    const getLink = () => {
        switch(title) {
            case "Towing":
                return "/services/towing";
            case "Jump Start Service":
                return "/services/jump-start-service";
            case "Puncture Repair / Spare Wheel Fitting":
                return "/services/puncture-repair-and-spare-wheel-fitting";
            case "Fuel Delivery & Wrong Fuel Removal":
                return "/services/fuel-delivery-and-wrong-fuel-removal";
            case "Key Replacement & Lockout Assistance":
                return "/services/lockout-assistance";
            case "Battery Replacement":
                return "/services/battery-replacement";
            case "Diagnostics & Minor Repairs":
                return "/services/diagnostics-and-repair";
            case "Winching & Off-Road Recovery":
                return "/services/winching";
            case "Windscreen Replacement":
                return "/services/windscreen-replacement";
            case "Insurance & Warranty Assistance":
                return "/services/insurance-and-warranty-assistance";
            case "We Buy Scrap Cars for Cash":
                return "/services/scrap-car-buying";
            default:
                return "/services/towing";
        }
    }
    const link = getLink();
    

    
    return (
        <div ref={elementRef} className={`home-service ${containerClass} ${isInView ? 'is-visible' : ''}`}>
            <Link to={link}>
                <div className="service-image-container">
                    <img src={image}/>
                </div>
            </Link>
            <Link to={link}>
                
                <p className="service-title">{title}</p>
            </Link>
            <p className="service-description">{description}</p>
        </div>
    );

}

export default HomeService