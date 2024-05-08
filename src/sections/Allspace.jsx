import { motion, useAnimation } from "framer-motion";
import { Button, Text } from "components";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

function Allspace() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom, duration: 0.5 },
    }),
  };

  return (
    <motion.div className="md:flex-col lg:flex-row gap-y-4 container flex justify-between py-10">
      <div className="md:w-full w-1/2 mb-10">
        <div className="flex w-full">
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="gap-x-4 flex"
          >
            <Text size="4xl" as="p" className="text-2xl font-medium">
              If we make it, we
              <br />
              mean it.
            </Text>
          </motion.div>
        </div>
      </div>

      <div className="md:w-full flex w-1/2 gap-2">
        <div className="md:hidden lg:block w-1/2"></div>

        <div className="md:w-full gap-y-6 flex flex-col items-start w-1/2">
          <div className="flex flex-col">
            <div className="flex flex-col items-start">
              <motion.div
                ref={ref}
                custom={0.2}
                variants={variants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="gap-x-4 flex"
              >
                <Text size="md" as="p" className="font-bold">
                  Whatever the project, we build it well, we build it to last,
                  and we build it with you in mind.
                  <br />
                  <br />
                  With industrial space for rent in key Montreal locations, our
                  modern buildings&apos; durable, modular design will meet your
                  needs at scale. Whether you&apos;re in manufacturing,
                  distribution, or warehousing, our units offer customization,
                  ecological energy efficiency, and long-term use so you can you
                  thrive.
                </Text>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col items-start self-stretch">
            <motion.div
              ref={ref}
              custom={0.5}
              variants={variants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="gap-x-4 flex"
            >
              <Button shape="square" className="font-medium uppercase">
                All Our Spaces
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Allspace;
