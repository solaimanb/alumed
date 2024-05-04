import { Img, Text, Button } from "components";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function HowWe() {
  const ref = useRef();
  const isInView = useInView(ref, {
    triggerOnce: true,
  });

  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log("Element is in view");
      slideControls.start("visible");
    } else {
      slideControls.start("hidden");
    }
  }, [isInView, slideControls]);

  return (
    <div className="py-10 bg-gray-400">
      <div className="container">
        <div className="md:flex-col gap-x-4 flex items-start justify-between w-full pb-10 mx-auto space-y-6">
          <div className="flex w-full">
            <Text size="md" as="p" className=" font-bold">
              How we work.
            </Text>
          </div>

          <div className="space-y-28 flex flex-col w-full">
            <div className="flex flex-col space-y-6">
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
            </div>

            <div className="gap-x-4 flex pt-20">
              <div className="flex flex-col items-start">
                <Text as="p" className="!text-[14px] font-bold">
                  Our strengths in real-estate give your ambitions space to
                  grow. From planning and building to long-term leases,
                  we&apos;re with you at every stage.
                </Text>
              </div>

              <div className="flex flex-col items-start">
                <Text as="p" className="!text-[14px] font-bold">
                  Discover our expertise in durable development, quality
                  construction, and building management of industrial spaces.
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mb-40">
          <div className="bg-blue_gray-800 mb-4">
            <div className="self-start h-[760px] md:h-[400px] opacity-0.55 relative bg-cover bg-no-repeat">
              <video
                src="/images/pif.mp4"
                autoPlay
                muted
                loop
                className="absolute w-full object-cover h-full z-[-1] "
              />

              <div className="sm:hidden md:flex-col flex items-center justify-between h-full gap-4 px-2">
                <Text
                  size="4xl"
                  as="p"
                  className="!text-white-A700 uppercase text-[72.03px]"
                >
                  Push
                </Text>
                <Text
                  size="5xl"
                  as="p"
                  className="!text-white-A700 uppercase text-[73.82px] sm:text-5xl"
                >
                  ideas
                </Text>
                <Img
                  src="images/img_arrow_right.svg"
                  alt="arrowright_one"
                  className="h-[44px] md:w-full"
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

          <section ref={ref}>
            <div className="flex gap-4">
              <div ref={ref} className="relative">
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
                  <Text size="9xl" as="p" className="w-fit uppercase">
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
                  <Text size="9xl" as="p" className="w-fit uppercase">
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
                  <Text size="9xl" as="p" className="w-fit uppercase">
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
          </section>
        </div>
      </div>
    </div>
  );
}

export default HowWe;
