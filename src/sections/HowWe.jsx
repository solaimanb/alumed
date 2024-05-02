import { Img, Text, Button, Input } from "components";
import React from "react";
import { motion } from "framer-motion";
function HowWe() {
  return (
    <div>
      {" "}
      <div className="mt-[60px] p-[23px] sm:p-5 bg-gray-400">
        <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1390px]">
          <div className="flex w-full pb-[469px] md:pb-5">
            <Text size="md" as="p" className="!text-[18px] font-semibold ">
              How we work.
            </Text>
          </div>
          <div className="flex flex-col w-full pb-[38px] gap-[175px] md:gap-[131px] sm:gap-[87px] sm:pb-5">
            <div className="flex flex-col gap-[5px]">
              <div className="flex">
                <Text size="3xl" as="p" className="w-[77%] leading-[68px]">
                  <>
                    It’s all built on our
                    <br />
                    strengths
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-end w-[30%] md:w-full">
                <div className="flex flex-col items-end justify-center h-[42px] w-[32%] md:w-full md:h-auto mr-[25px] p-px md:mr-0 z-[1] bg-[url(/images/defaultNoData.png)] bg-cover bg-no-repeat">
                  <div className="h-px w-[20px] mt-[19px] mb-5 bg-blue_gray-900" />
                </div>
                <Button
                  shape="square"
                  className="w-full mt-[-22px] uppercase relative "
                >
                  How We Work
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col self-start gap-2">
              <div className="flex flex-col items-start">
                <Text as="p" className="!text-[14px] font-bold">
                  Our strengths in real-estate give your ambitions space
                </Text>
                <Text as="p" className="!text-[14px] font-bold">
                  to grow. From planning and building to long-term
                </Text>
                <Text as="p" className="!text-[14px] font-bold">
                  leases, we’re with you at every stage.
                </Text>
              </div>
              <div className="flex flex-col items-start">
                <Text as="p" className="!text-[14px] font-bold">
                  Discover our expertise in durable development, quality
                </Text>
                <Text as="p" className="!text-[14px] font-bold">
                  construction, and building management of industrial
                </Text>
                <Text as="p" className="!text-[14px] font-bold">
                  spaces.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-[200px]  mx-auto  max-w-[1390px]">
          <div className="bg-blue_gray-800">
            <div className="self-start h-[760px] md:h-[400px] opacity-0.55 relative bg-cover bg-no-repeat">
              <video
                src="/images/pif.mp4"
                autoPlay
                muted
                loop
                className="absolute w-full object-cover h-full z-[-1] "
              />
              <div className="flex md:flex-col justify-between items-center gap-5 px-5 h-full py-5">
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
          <div className="h-[348px] relative sm:h-[80px] ">
            <div className="flex flex-col items-start h-max left-[0.00px] bottom-0 top-0 my-auto sm:my-0  absolute">
              <motion.div
                initial={{ translateX: -900 }}
                whileInView={{
                  translateX: 0,
                  transition: { duration: 0.3, delay: 0.2 },
                }}
              >
                <Text
                  size="10xl"
                  as="p"
                  className="uppercase text-[161.4px] sm:text-5xl"
                >
                  Innovation
                </Text>

                <Text
                  size="9xl"
                  as="p"
                  className="mt-[-45px] sm:mt-[0px] uppercase text-[159.94px] sm:text-5xl relative"
                >
                  thrives
                </Text>
              </motion.div>
            </div>
            <motion.div
              initial={{ translateX: -900 }}
              whileInView={{
                translateX: 0,
                transition: { duration: 0.3, delay: 0.2 },
              }}
            >
              <Text
                size="11xl"
                as="p"
                className="bottom-[0.00px]  right-[2.39px] m-auto uppercase text-[165.6px] sm:top-[48px]  absolute"
              >
                here
              </Text>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWe;
