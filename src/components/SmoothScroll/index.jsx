import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  // Get height information content reference:
  const contentRef = React.useRef();
  const [contentHeight, setContentHeight] = React.useState(0);
  const [windowHeight, setWindowHeight] = React.useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current !== null) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  // Intercept default scroll behavior:
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.0001,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (latest === 0) {
      setIsLoading(false);
    }
  });

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - windowHeight);
  });

  return (
    <div className="border border-red-400">
      <div style={{ height: contentHeight }}></div>

      <motion.div
        ref={contentRef}
        style={{ y: isLoading ? 0 : y, opacity: isLoading ? 0 : 1 }}
        className="fixed top-0 flex flex-col w-screen transition-opacity duration-200 ease-in-out border border-green-400"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SmoothScroll;
