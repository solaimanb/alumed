import React, { useEffect, useRef, useState } from "react";
import { Text, Img, Button, Input } from "./index";
import { motion, useAnimation, useScroll } from "framer-motion";
import { Canvas } from "react-three-fiber";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();

  const controls = useAnimation();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolled) {
      controls.start({ height: 35 });
    } else {
      controls.start({ height: 85 });
    }
  }, [isScrolled, controls]);

  return (
    <div className="fixed w-full">
      <div className="flex  justify-between items-start gap-5 py-[17px] z-[1] opacity-0.88 mx-auto  max-w-[1390px] px-2">
        <motion.img
          src="images/logo.png"
          alt="alumed"
          className="h-[85px] sm:h-[33px] mb-0.5 sm:flex-1 sm:px-3"
          initial={{ scale: 1 }}
          animate={controls}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        <Img
          src="images/img_megaphone.svg"
          alt="megaphone_one"
          className="h-[16px] sm:w-full mt-2"
        />
      </div>
    </div>
  );
}

export default Navbar;
