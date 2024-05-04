import { motion, useAnimation, useInView } from "framer-motion";
import { Button, Text } from "components";
import { useEffect, useRef } from "react";

function Allspace() {
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: true });

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
      className="md:flex-col lg:flex-row gap-y-4 container flex justify-between py-10"
    >
      <div className="md:w-full w-1/2 mb-10">
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

      <div className="md:w-full flex w-1/2 gap-2">
        <div className="md:hidden lg:block w-1/2"></div>

        <div className="md:w-full gap-y-6 flex flex-col items-start w-1/2">
          <div className="flex flex-col">
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
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={spaceControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Button shape="square" className="font-medium uppercase">
                All Our Spaces
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allspace;
