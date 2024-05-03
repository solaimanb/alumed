import Navbar from "components/Navbar";
import { useInView, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Allspace from "sections/Allspace";
import Footer from "sections/Footer";
import Hero from "sections/Hero";
import HowWe from "sections/HowWe";
import ParaSpace from "sections/ParaSpace";
import Review from "sections/Review";
import SpaceSwiper from "sections/SpaceSwiper";

import { motion } from "framer-motion";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress: completionProgress } = useScroll();

  return (
    <>
      <Helmet>
        <title>Alumed</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <div className=" w-full bg-gray-100">
        <Navbar />
        <Hero />
        <Allspace />
        <SpaceSwiper />
        <HowWe />
        <ParaSpace />
        <Review />

        <Footer />
      </div>
    </>
  );
};
export default Home;
