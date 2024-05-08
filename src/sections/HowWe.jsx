import { Img, Text, Button } from "components";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

function HowWe() {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const slideControls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 40 },
    show: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom, duration: 0.5 },
    }),
  };

  useEffect(() => {
    if (inView1) {
      slideControls.start("visible");
    }
  }, [inView1, slideControls]);

  const { scrollYProgress } = useScroll();

  const width = useTransform(
    scrollYProgress,
    [0, 1],
    inView2 ? ["100%", "0%"] : ["100%", "100%"]
  );

  return (
    <motion.div ref={ref1} className="py-10 bg-gray-400">
      <div className="container">
        <div className="md:flex-col gap-x-4 flex items-start justify-between w-full pb-10 mx-auto space-y-6">
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView1 ? "show" : "hidden"}
            className="flex w-full"
          >
            <Text size="md" as="p" className=" font-bold">
              How we work.
            </Text>
          </motion.div>

          <div className="space-y-28 flex flex-col w-full">
            <motion.div
              variants={variants}
              initial="hidden"
              animate={inView1 ? "show" : "hidden"}
              className="flex flex-col space-y-6"
            >
              <div className="flex">
                <Text size="4xl" as="p" className="font-bold">
                  It&apos;s all built on our strengths
                </Text>
              </div>

              <div className="">
                <Button size="xs" className="text-sm font-semibold uppercase">
                  How We Work
                </Button>
              </div>
            </motion.div>

            <motion.div
              custom={0.4}
              variants={variants}
              initial="hidden"
              animate={inView1 ? "show" : "hidden"}
              className="gap-x-4 flex pt-20"
            >
              <motion.div className="flex flex-col items-start">
                <Text as="p" className="!text-[14px] font-bold">
                  Our strengths in real-estate give your ambitions space to
                  grow. From planning and building to long-term leases,
                  we&apos;re with you at every stage.
                </Text>
              </motion.div>

              <motion.div className="flex flex-col items-start">
                <Text as="p" className="!text-[14px] font-bold">
                  Discover our expertise in durable development, quality
                  construction, and building management of industrial spaces.
                </Text>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div className="mb-28 flex flex-col w-full">
          {/* Video Section */}
          <div className="bg-blue_gray-800 mb-4">
            <div className="self-start h-[760px] md:h-[400px] opacity-0.55 relative bg-cover bg-no-repeat">
              <video
                src="/images/pif.mp4"
                autoPlay
                muted
                loop
                className="absolute w-full object-cover h-full z-[-1]"
              />

              <div className="md:hidden flex flex-row items-center justify-between h-full gap-4 p-4">
                <Text size="4xl" as="p" className="!text-white-A700 uppercase">
                  Push
                </Text>

                <Text
                  size="5xl"
                  as="p"
                  className="!text-white-A700 uppercase sm:text-5xl"
                >
                  ideas
                </Text>

                <Img
                  src="images/img_arrow_right.svg"
                  alt="arrowright_one"
                  className="md:w-full"
                />

                <Text
                  size="6xl"
                  as="p"
                  className="!text-white-A700 uppercase text-[76.05px] sm:text-5xl"
                >
                  forward
                </Text>
              </div>
            </div>
          </div>

          {/* Animated Text */}
          <motion.section ref={ref2} width={width} className="space-y-2">
            <div className="flex gap-4">
              <div className="relative">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -400,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                    },
                  }}
                  style={{ position: "relative" }}
                >
                  <Text
                    size="xl"
                    as="p"
                    className="w-fit md:text-lg !text-9xl font-medium uppercase"
                  >
                    Innovation
                  </Text>
                </motion.div>

                <motion.div
                  variants={{
                    initial: {
                      opacity: 1,
                    },
                    animate: {
                      opacity: 0,
                    },
                    hidden: { x: 10 },
                    visible: {
                      x: "100%",
                      width: 0,
                      transition: { duration: 0.7, ease: "easeIn" },
                    },
                  }}
                  initial="hidden"
                  animate={slideControls}
                  style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    zIndex: 20,
                  }}
                  className="bg-blue_gray-900"
                />
              </div>

              <div className="w-full"></div>
            </div>

            <div className="flex justify-between">
              <div className="relative">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -400,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                    },
                  }}
                  style={{ position: "relative" }}
                >
                  <Text
                    size="xl"
                    as="p"
                    className="w-fit md:text-lg font-medium uppercase !text-9xl"
                  >
                    thrives
                  </Text>
                </motion.div>

                <motion.div
                  variants={{
                    initial: {
                      opacity: 1,
                    },
                    animate: {
                      opacity: 0,
                    },
                    hidden: { x: 10 },
                    visible: {
                      x: "100%",
                      width: 0,
                      transition: { duration: 0.7, ease: "easeIn" },
                    },
                  }}
                  initial="hidden"
                  animate={slideControls}
                  style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    zIndex: 20,
                  }}
                  className="bg-blue_gray-900"
                />
              </div>

              <div className="relative">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -400,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.7,
                      ease: "easeInOut",
                    },
                  }}
                  style={{ position: "relative" }}
                >
                  <Text
                    size="xl"
                    as="p"
                    className="w-fit md:text-lg font-medium uppercase !text-9xl"
                  >
                    here
                  </Text>
                </motion.div>

                <motion.div
                  variants={{
                    initial: {
                      opacity: 1,
                    },
                    animate: {
                      opacity: 0,
                    },
                    hidden: { x: 10 },
                    visible: {
                      x: "100%",
                      width: 0,
                      transition: { duration: 0.7, ease: "easeIn" },
                    },
                  }}
                  initial="hidden"
                  animate={slideControls}
                  style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    zIndex: 20,
                  }}
                  className="bg-blue_gray-900"
                />
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HowWe;
