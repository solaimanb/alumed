import React, { useEffect, useState } from "react";
import { Img } from "./index";
import { motion, useAnimation } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="container flex justify-between items-center py-2 z-[1]">
        <motion.img
          src="images/logo.png"
          alt="alumed"
          className=""
          initial={{ scale: 1 }}
          animate={controls}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        <Img src="images/img_megaphone.svg" alt="megaphone_one" className="" />
      </div>
    </div>
  );
}

export default Navbar;
