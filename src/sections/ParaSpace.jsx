import React, { useEffect, useRef } from "react";
import { Img, Text } from "components";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

function ParaSpace() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [1, 0.5], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const widthProgress = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  useEffect(() => {
    if (scaleProgress.get() <= 0.1) {
      sectionRef.current.style.position = "static";
    } else {
      sectionRef.current.style.position = "sticky";
    }
  }, [scaleProgress]);

  return (
    <div className="space-y-6">
      <motion.div
        ref={sectionRef}
        className="sticky top-0 px-2 py-10 bg-gray-400"
      >
        <div className="gap-y-2 container flex flex-col">
          <div className="bg-blue_gray-900 w-full p-px divide-y" />

          {/* Space 1 */}
          <div className="sm:flex-col flex items-start justify-between gap-4">
            <motion.div
              ref={ref}
              style={{
                scale: scaleProgress,
                opacity: opacityProgress,
                width: widthProgress,
              }}
              className="sm:w-full w-1/2"
            >
              <Img
                src="images/img_e268c527_c537_4_112x112.png"
                alt="e268c527c537fou"
                className="object-cover w-full"
              />
            </motion.div>

            <div className="flex-co sm:w-full flex items-center justify-between w-1/2">
              <div className="w-1/2">
                <Text size="xl" as="p" className="">
                  1M ft<sup className="">2</sup>
                </Text>
              </div>

              <div className="w-1/2">
                <Text size="lg" as="p" className="!text-[17.07px]">
                  Industrial space serving Montreal
                </Text>
              </div>
            </div>
          </div>

          <div className="bg-blue_gray-900 w-full p-px divide-y" />

          {/* Space 2 */}
          <div className="sm:flex-col flex items-start justify-between gap-5">
            <motion.div
              ref={ref}
              style={{
                scale: scaleProgress,
                opacity: opacityProgress,
              }}
              transition={{
                delay: 0.5,
              }}
              className="sm:w-full w-1/2"
            >
              <Img
                src="images/img_f1dd5e07_f49a_4_462x684.png"
                alt="e268c527c537fou"
                className="object-cover w-full"
              />
            </motion.div>

            <div className="sm:w-full flex justify-between w-1/2">
              <div className="w-1/2">
                <Text size="xl" as="p" className="">
                  10 Corporate Tenants
                </Text>
              </div>

              <div className="w-1/2">
                <Text size="lg" as="p" className="">
                  Including leaders from across multiple industries
                </Text>
              </div>
            </div>
          </div>

          <div className="bg-blue_gray-900 w-full p-px divide-y" />

          {/* Space 3 */}
          <div className="sm:flex-col flex items-start justify-between gap-4">
            <motion.div
              ref={ref}
              style={{
                scale: scaleProgress,
                opacity: opacityProgress,
              }}
              transition={{
                delay: 1,
              }}
              className="sm:w-full w-1/2"
            >
              <Img
                src="images/img_b6604227_f47a_4_112x112.png"
                alt="e268c527c537fou"
                className="object-cover w-full"
              />
            </motion.div>

            <div className="sm:w-full flex items-start justify-start w-1/2">
              <div className="w-1/2">
                <Text size="xl" as="p" className="">
                  5 Buildings
                </Text>
              </div>

              <div className="flex flex-col items-start w-1/2">
                <Text size="lg" as="p" className="">
                  from 20,000 ft²
                </Text>

                <Text size="lg" as="p" className="">
                  to 200,000 ft²
                </Text>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container flex justify-end gap-4 px-2 mx-auto">
        <div className="md:hidden block w-1/2"></div>

        <div className="md:w-full flex w-1/2 gap-4">
          <div className="w-1/2">
            <Text size="lg" as="p" className="font-bold">
              Our industrial tenants include leaders and innovators from across
              diverse sectors. And their trust is something we work hard for.
            </Text>
          </div>

          <div className="w-1/2">
            <Text size="lg" as="p" className="font-bold">
              It&apos;s all about dedication to the people we work with &ndash;
              whether that means collaborating to optimize a space or showing
              our commitment with a 10- to 25-year lease.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParaSpace;
