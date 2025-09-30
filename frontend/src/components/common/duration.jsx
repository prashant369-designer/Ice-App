// src/components/ScrollReveal.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollReveal = ({ children, duration = 1.5, delay = 0 }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration, delay },
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls, duration, delay, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
