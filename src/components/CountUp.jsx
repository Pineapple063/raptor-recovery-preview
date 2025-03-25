import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const CountUp = ({ targetNumber, Class, afterText, isStatic }) => {
    const count1 = useMotionValue(0); // For "24"
    const count2 = useMotionValue(0); // For "7"
    const rounded1 = useTransform(count1, (latest) => Math.floor(latest));
    const rounded2 = useTransform(count2, (latest) => Math.floor(latest));
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible && !isStatic) {
            if (targetNumber === "24/7") {
                // Animate both "24" and "7" at the same time
                animate(count1, 24, { duration: 2, ease: "easeOut" });
                animate(count2, 7, { duration: 2, ease: "easeOut" });
            } else if (typeof targetNumber === 'number') {
                count1.set(0);
                animate(count1, targetNumber, { duration: 2, ease: "easeOut" });
            }
        }
    }, [isVisible, count1, count2, targetNumber, isStatic]);

    return (
        <div className={Class}>
            <motion.span
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                {targetNumber === "24/7" ? (
                    <>
                        {/* Animate both numbers simultaneously */}
                        <motion.span>{rounded1}</motion.span>/
                        <motion.span>{rounded2}</motion.span>
                    </>
                ) : (
                    isStatic ? targetNumber : rounded1
                )}
            </motion.span>
            {afterText}
        </div>
    );
};

export default CountUp;
