import { useState, useEffect, useRef } from "react";

const ServiceSlide = ({ service, images, titles, text }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const textRefs = useRef([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % titles.length);
    }, 5000);
  
    return () => {
      clearTimeout(timerId);
    };
  }, [currentSlide, titles.length]);

  useEffect(() => {
      const updateMaxHeight = () => {
        // Compute the height of each text element
      const heights = textRefs.current.map(el => (el ? el.offsetHeight : 0));
      // Set the container's height to the tallest element
      setMaxHeight(Math.max(...heights));
      };
      updateMaxHeight();
        window.addEventListener("resize", updateMaxHeight);
        window.scrollTo(0, 0);
        return () => window.removeEventListener("resize", updateMaxHeight);
    
  }, []);

  return (
    <div className={`service-slider ${service}`}>
      <div className="service-slider-title">
        {service.charAt(0).toUpperCase() + service.slice(1)}
      </div>
      <div className="service-slider-content">
        <div className="service-slider-image">
          {images.length === 1 ? <img src={images[0]} className="active" /> : images.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt="Service" 
              className={index === currentSlide ? "active" : ""}
            />
          ))}
        </div>
        <div 
          className="service-slider-text-container"
          style={{ height: maxHeight + 8 }} // Fixed height based on max text height
        >
          {titles.map((title, index) => (
            <div
              key={index}
              ref={el => textRefs.current[index] = el} // Store ref for each text slide
              className={`service-slider-text ${index === currentSlide ? "active" : ""}`}
            >
              <h3>{title}</h3>
              <p>{text[index]}</p>
            </div>
          ))}
        </div>
        <div className="service-slider-navigation">
          {Array.from({ length: titles.length }, (_, index) => (
            <div
              key={index}
              className={`service-slider-navigation-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide;