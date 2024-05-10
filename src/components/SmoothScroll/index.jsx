import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SmoothScroll({ children }) {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.0001,
  });

  const [contentHeight, setContentHeight] = useState(0);

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - window.innerHeight);
  });

  const contentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.clientHeight);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  return (
    <div className="h-screen">
      {/**
       * An invisible div with the actual height of the content.
       * This will expand the height of the body and trigger the default browser scrollbar.
       */}
      <div
        style={{ height: contentHeight }}
        className="h-full min-h-screen border border-red-400"
      ></div>

      {/**
       * The content.  If it exceeds the height of the viewport, translate its y-position to the top.
       * Its position is fixed by default and moves when the user scrolls.
       */}
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 flex flex-col w-screen transition-opacity"
      >
        {children}
      </motion.div>
    </div>
  );
}
