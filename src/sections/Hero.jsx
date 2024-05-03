import { Img, Text } from "components";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Hero() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log("Allspace is in view");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="h-screen md:h-auto bg-blue_gray-900 bg-[url(/images/img_div_home_hero_810x1440.png)] bg-cover bg-no-repeat">
      <div className="h-screen md:h-auto bg-[url(/images/img_group_42.png)] bg-cover bg-no-repeat">
        <div className="md:pb-5 sm:mt-auto container flex flex-col justify-between h-screen px-2">
          {/* ---------- Hero Top Section ---------- */}
          <div className="md:mt-auto lg:mt-0">
            <div className="md:justify-start relative flex justify-end mr-12">
              <div className="flex flex-col items-start">
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
                    size="7xl"
                    as="p"
                    className="!text-white-A700 uppercase sm:text-5xl whitespace-nowrap  !font-medium"
                  >
                    The Passion
                  </Text>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { x: 10 },
                    visible: {
                      x: "100%",
                      transition: { duration: 0.5, ease: "easeIn" },
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
                    background: "white",
                    zIndex: 20,
                  }}
                />

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -400,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.7,
                      duration: 0.7,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Text
                    size="7xl"
                    as="p"
                    className="!font-medium !text-white-A700 uppercase sm:text-5xl relative whitespace-nowrap"
                  >
                    is Built-in
                  </Text>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ---------- Hero Bottom Section ---------- */}
          <div className="lg:mt-auto">
            <div className="md:hidden flex items-center justify-between gap-4 py-2">
              <div className="flex items-center justify-between w-8/12 gap-4 py-2">
                <div className="flex items-start gap-12">
                  <div className="">
                    <Text
                      as="p"
                      className="!text-white-A700 uppercase !font-normal leading-[13px] w-full"
                    >
                      <span className="">
                        Press enter to open
                        <br />
                        loading doors
                      </span>
                    </Text>
                  </div>

                  <div className="flex">
                    <Text
                      size="xs"
                      as="p"
                      className="w-[11%] !text-white-A700 uppercase !text-[11.98px] leading-[13px]"
                    >
                      <>
                        Trucks
                        <br />
                        /1
                      </>
                    </Text>
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <Text as="p" className="!text-white-A700 !text-[13.48px]">
                    Real-estate development that&apos;s
                  </Text>
                  <Text as="p" className="!text-white-A700 !text-[13.36px]">
                    driven by purpose
                  </Text>
                </div>
              </div>

              <div className="w-1/12"></div>

              <div className="flex justify-end w-1/12">
                <Img
                  src="images/img_svg.svg"
                  alt="svg_one"
                  className="self-start h-[34px] md:w-full"
                />
              </div>
            </div>

            <div className="flex flex-col mt-auto pb-[38px] gap-5 sm:pb-5">
              <div className="h-[2px] bg-white-A700" />

              <div className="lg:flex-col flex justify-between gap-5">
                <div className="md:hidden flex flex-row justify-center w-full">
                  <Img
                    src="images/img_image_156x215.png"
                    alt="image_one"
                    className="w-[38%] max-h-44 sm:w-full object-cover mr-4"
                  />

                  <div className=" flex flex-col justify-between w-full">
                    <div className="flex flex-col items-start gap-2">
                      <a
                        href="https://edifis.ca/en/spaces/ymx-1/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text
                          as="p"
                          className="!text-white-A700 !text-[13.71px]"
                        >
                          Featured space
                        </Text>
                      </a>

                      <div className="flex items-center">
                        <a
                          href="https://edifis.ca/en/spaces/ymx-1/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Text
                            size="md"
                            as="p"
                            className="!text-white-A700 !text-[16.92px]"
                          >
                            YMX 1
                          </Text>
                        </a>
                        <Img
                          src="images/img_arrow_left.svg"
                          alt="arrowleft_one"
                          className="h-[12px]"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between gap-5">
                      <div className="flex items-center self-start">
                        <Img
                          src="images/img_checkmark.svg"
                          alt="checkmark_one"
                          className="h-[15px]"
                        />
                        <a
                          href="https://edifis.ca/en/spaces/ymx-1/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Text
                            as="p"
                            className="!text-white-A700 !text-[13.48px]"
                          >
                            Available for rent
                          </Text>
                        </a>
                      </div>

                      <a
                        href="https://edifis.ca/en/spaces/ymx-1/"
                        target="_blank"
                        rel="noreferrer"
                        className="self-end"
                      >
                        <Text
                          as="p"
                          className="!text-white-A700 !text-[13.59px]"
                        >
                          Mirabel
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between w-full gap-5">
                  <div className="flex flex-col items-start">
                    <motion.div>
                      <Text
                        size="md"
                        as="p"
                        className="!text-white-A700 !text-[16.92px] font-bold"
                      >
                        At ALUMED, we bring passion and purpose to everything we
                        build &ndash; from industrial spaces that make room for
                        bold ideas to residential and mixed-used projects that
                        help communities grow.
                      </Text>
                    </motion.div>
                  </div>

                  <div className="md:hidden flex flex-col items-start w-full py-[5px]">
                    <a
                      href="https://edifis.ca/en/spaces/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text as="p" className="!text-white-A700 !text-[13.83px]">
                        Our Spaces
                      </Text>
                    </a>

                    <div className="self-stretch h-[1px] mb-1 mt-[3px] bg-white-A700" />
                    <a
                      href="https://edifis.ca/en/expertise/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-[-2px] relative"
                    >
                      <Text as="p" className="!text-white-A700 !text-[13.83px]">
                        Our Expertise
                      </Text>
                    </a>
                    <div className="self-stretch h-[1px] mb-1 mt-[3px] bg-white-A700" />
                    <a
                      href="https://edifis.ca/en/about-us/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-[-3px] relative"
                    >
                      <Text as="p" className="!text-white-A700 !text-[13.48px]">
                        About Us
                      </Text>
                    </a>
                    <div className="self-stretch h-[1px] mb-1 mt-1 bg-white-A700" />
                    <a
                      href="https://edifis.ca/en/contact/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-[-3px] relative"
                    >
                      <Text as="p" className="!text-white-A700 !text-[13.48px]">
                        Contact Us
                      </Text>
                    </a>
                    <div className="self-stretch h-[1px]  mt-1 mb-[42px] bg-white-A700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
