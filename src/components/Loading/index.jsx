import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="bg-blue_gray-900 text-white-A700 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatType: "reverse",
        }}
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
