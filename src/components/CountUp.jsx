import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";


const CountUp = ({ targetNumber, Class }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.floor(latest));
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.5 } // Adjust threshold as needed
        );
    
        if (ref.current) observer.observe(ref.current);
    
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
          count.set(0);
          animate(count, targetNumber, { duration: 2, ease: "easeOut" });
        }
    }, [isVisible, count, targetNumber]);

    return (
        <motion.span
            className={Class}
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            {rounded}
        </motion.span>
    );

};

export default CountUp;