import { Img, Text, Button } from "components";
import React from "react";
import { motion } from "framer-motion";

function HowWe() {
  return (
    <div className="px-2 py-10 bg-gray-400">
      <div className="container mx-auto">
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

        <div className="flex flex-col w-full mb-[200px]  mx-auto">
          <div className="bg-blue_gray-800">
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

          <div className=" flex flex-col items-start mt-4">
            <motion.div
              className="w-full"
              // initial={{ translateX: -900 }}
              // whileInView={{
              //   translateX: 0,
              //   transition: { duration: 0.3, delay: 0.2 },
              // }}
            >
              <Text size="9xl" as="p" className="uppercase">
                <span className="inline-block">Innovation</span>
                <div className="flex items-center justify-between w-full">
                  <span className="flex-grow w-full">thrives</span>
                  <span className="w-full ml-auto text-right">here</span>
                </div>
              </Text>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWe;
