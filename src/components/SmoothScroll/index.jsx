import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SmoothScroll({ children }) {
  const { scrollYProgress } = useScroll();

  // Use framer motion's useSpring() hook to smooth the scrollYProgress value
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.0001,
  });

  // The height of the content in pixels
  const [contentHeight, setContentHeight] = useState(0);

  // The value to transform the content to
  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - window.innerHeight);
  });

  // A reference to hold the value of the content
  const contentRef = useRef(null);

  // Reset the `contentHeight` value when the children change, or when the window resizes
  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        // setContentHeight(contentRef.current.scrollHeight);
        setContentHeight(contentRef.current.clientHeight);
      }
    };

    // Call the resize handler once, initially
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  return (
    <>
      {/**
       * An invisible div with the actual height of the content.
       * This will expand the height of the body and trigger the default browser scrollbar.
       */}
      <div style={{ height: contentHeight }} className="bg-gray-100" />

      {/**
       * The content.  If it exceeds the height of the viewport, translate its y-position to the top.
       * Its position is fixed by default and moves when the user scrolls.
       */}
      {/* <motion.div
        className="fixed top-0 flex flex-col w-screen"
        style={{ y }}
        ref={contentRef}
      > */}

      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 flex flex-col w-screen transition-opacity"
      >
        {children}
      </motion.div>
    </>
  );
}

// import {
//   useMotionValueEvent,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import React, { useEffect } from "react";
// import { motion } from "framer-motion";

// const SmoothScroll = ({ children }) => {
//   const [isLoading, setIsLoading] = React.useState(true);

//   // Get height information content reference:
//   const contentRef = React.useRef();
//   const [contentHeight, setContentHeight] = React.useState(0);
//   const [windowHeight, setWindowHeight] = React.useState(0);
//   const [isBottom, setIsBottom] = React.useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (contentRef.current !== null) {
//         setContentHeight(contentRef.current.scrollHeight);
//       }
//       setWindowHeight(window.innerHeight);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [contentRef]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isBottom =
//         window.innerHeight + window.scrollY >= document.body.scrollHeight;
//       setIsBottom(isBottom);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Intercept default scroll behavior:
//   const { scrollYProgress } = useScroll();
//   const smoothProgress = useSpring(scrollYProgress, {
//     mass: 0.1,
//     stiffness: 100,
//     damping: 20,
//     restDelta: 0.0001,
//   });

//   useMotionValueEvent(smoothProgress, "change", (latest) => {
//     if (latest === 0) {
//       setIsLoading(false);
//     }
//   });

//   const y = useTransform(smoothProgress, (value) => {
//     return value * -(contentHeight - windowHeight);
//   });

//   return (
//     <div className="">
//       <div
//         style={{ height: contentHeight }}
//         className="border border-green-400"
//       ></div>

//       <motion.div
//         ref={contentRef}
//         style={{ y: isLoading ? 0 : y, opacity: isLoading ? 0 : 1 }}
//         className="fixed top-0 flex flex-col w-screen transition-opacity duration-200 ease-in-out"
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };

// export default SmoothScroll;
