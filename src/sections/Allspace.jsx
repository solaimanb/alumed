import { motion, useAnimation, useInView } from "framer-motion";
import { Button, Text } from "components";
import { useEffect, useRef } from "react";

function Allspace() {
  const ref = useRef();
  const isInView = useInView(ref, { threshold: 0.5 });

  const spaceControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log("Allspace is in view");
      spaceControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="flex md:flex-col lg:flex-row justify-between mt-6 gap-5 mx-auto max-w-[1390px] px-2 w-full pb-20"
    >
      <div className="md:w-full w-3/6">
        <div className="flex w-full">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={spaceControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Text size="4xl" as="p" className="text-2xl font-medium">
              If we make it, we
              <br />
              mean it.
            </Text>
          </motion.div>
        </div>
      </div>

      <div className="md:hidden lg:block w-1/6"></div>

      <div className="md:w-full flex flex-col items-start w-2/6 gap-2">
        <div className="flex flex-col gap-[22px]">
          <div className="flex flex-col items-start">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={spaceControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Text size="md" as="p" className="font-bold">
                Whatever the project, we build it well, we build it to last, and
                we build it with you in mind.
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

        <div className="relative flex flex-col items-start self-stretch">
          <span
            style={{
              clipPath: "polygon(51% 0,102% 50%,100% 50%,100% 0)",
              width: "40px",
              height: "40px",

              transform: "translate(0%, 50%)",
              border: "1px solid #1b2c50",
              borderRadius: "100%",
            }}
            className="h-[42px] w-[42px] mr-[25px] md:mr-0 z-[1] hidden"
          />
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={spaceControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Button shape="square" className="relative font-medium uppercase">
              All Our Spaces
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Allspace;
