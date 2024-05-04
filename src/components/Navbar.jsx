import React, { useEffect, useState } from "react";
import { Img } from "./index";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isScrolled) {
      controls.start({ height: 25 });
    } else {
      controls.start({ height: 65 });
    }
  }, [isScrolled, controls]);

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={isScrolled ? "hidden" : "visible"}
      className="fixed z-50 w-full"
    >
      <div className="container flex justify-between items-center py-2 z-[1] overflow-hidden">
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
    </motion.div>
  );
}

export default Navbar;
