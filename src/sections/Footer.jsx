import React, { useEffect, useRef } from "react";
import { Img, Text, Button, Input } from "components";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion, useAnimation, useInView, useScroll } from "framer-motion";

const navLinks = [
  { href: "https://edifis.ca/en/spaces/", text: "Our Spaces" },
  { href: "https://edifis.ca/en/expertise/", text: "Our Expertise" },
  { href: "https://edifis.ca/en/about-us/", text: "About Us" },
  { href: "https://edifis.ca/en/contact/", text: "Contact Us" },
];

function Footer() {
  const { ref, inView } = useRef(null);
  const controls = useAnimation();
  const isInView = useInView({ ref, once: false });
  const { scrollYProgress: completionProgress } = useScroll();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen mt-40 space-y-40">
      <div className="container">
        <div className="bg-blue_gray-900 w-full p-px my-4 divide-y" />

        {/* Footer Top Section */}
        <div className="flex items-start justify-between gap-4">
          {/* Social Links */}
          <div className="md:w-2/6 sm:hidden w-6/12">
            <div className="flex items-center gap-2">
              <Button
                size="xs"
                variant="fill"
                shape="circle"
                className="w-[40px] !rounded-[20px]"
              >
                <FaFacebook className="text-white-A700" />
              </Button>

              <Button
                size="xs"
                variant="fill"
                shape="circle"
                className="w-[40px] !rounded-[20px]"
              >
                <FaLinkedin className="text-white-A700" />
              </Button>

              <Button
                size="xs"
                variant="fill"
                shape="circle"
                className="w-[40px] !rounded-[20px]"
              >
                <FaInstagram className="text-white-A700" />
              </Button>
            </div>
          </div>

          {/* Email Field */}
          <div className="md:w-2/6 sm:hidden flex flex-col self-start w-3/12 gap-6">
            <div className="flex flex-col items-start">
              <Text size="lg" as="p" className="font-bold">
                Get updates on new projects and property availabilities
              </Text>
            </div>

            <Input
              shape="square"
              type="email"
              name="email"
              placeholder={`Enter your email`}
              suffix={
                <Img
                  src="images/img_arrowleft_blue_gray_900_1.svg"
                  alt="arrow_left"
                />
              }
              className="gap-[35px] focus:!shadow-none"
            />
          </div>

          {/* Footer Navigation */}
          <div className="md:w-2/6 sm:w-full w-3/12">
            <div className="flex flex-col items-start w-full space-y-1">
              {navLinks.map((link, index) => (
                <div key={index} className="w-full">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={index !== 0 ? "mt-[-2px] relative" : ""}
                  >
                    <Text as="p" className="!text-[14px] font-bold">
                      {link.text}
                    </Text>
                  </a>

                  <div ref={ref} className="w-full">
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.5,
                          ease: "easeInOut",
                        },
                      }}
                      className="progress-bar self-stretch h-[1px] mb-1 mt-[3px] bg-blue_gray-900 w-full"
                    />

                    <motion.div
                      className="progress-bar"
                      style={{ scaleX: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact us button */}
        <div className="py-10">
          <div className="flex justify-between gap-4">
            <Img
              src="images/img_64b58eba_4d83_4_215x215.png"
              alt="64b58eba4d83fou"
              className="sm:h-44 h-80 md:w-1/3 sm:w-1/2 object-cover"
            />

            <div className="flex w-1/2">
              <div className="flex flex-col items-start space-y-4">
                <Text
                  size="xl"
                  as="p"
                  className="sm:text-2xl mt-auto font-semibold"
                >
                  Find space to push ideas forward with us.
                </Text>

                <Text size="lg" as="p" className="sm:hidden mt-auto font-bold">
                  Contact us about leasing an industrial property.
                </Text>

                <div className="sm:w-full border">
                  <Button
                    shape="square"
                    className="w-full mt-auto font-semibold uppercase"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>

            <div className="sm:hidden flex">
              <a
                href="https://edifis.ca/fr/"
                target="_blank"
                rel="noreferrer"
                className="self-end"
              >
                <Text size="lg" as="p" className="!text-[17.52px]">
                  Français
                </Text>
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Email Field : from MD screen to UP */}
        <div className="sm:flex flex-col self-start hidden w-full gap-4">
          <div className="sm:hidden flex flex-col items-start">
            <Text size="md" as="p" className="font-bold">
              Get updates on new projects and property availabilities
            </Text>
          </div>

          <Input
            shape="square"
            type="email"
            name="email"
            placeholder={`Enter your email`}
            suffix={
              <Img
                src="images/img_arrowleft_blue_gray_900_1.svg"
                alt="arrow_left"
              />
            }
            className=""
          />
        </div>
      </div>

      {/* Secondary Social Links : on SM screen */}
      <div className="sm:block container hidden mx-auto mt-20">
        <div className="bg-blue_gray-900 w-full p-px my-2 divide-y" />

        <div className="flex items-center justify-between px-2">
          <div>
            <a
              href="https://edifis.ca/fr/"
              target="_blank"
              rel="noreferrer"
              className="self-end"
            >
              <Text size="lg" as="p" className="!text-[17.52px]">
                Français
              </Text>
            </a>
          </div>

          <div className="flex items-center gap-2 border">
            <Button
              size="xs"
              variant="fill"
              shape="circle"
              className="w-[40px] !rounded-[20px]"
            >
              <FaFacebook className="text-white-A700" />
            </Button>

            <Button
              size="xs"
              variant="fill"
              shape="circle"
              className="w-[40px] !rounded-[20px]"
            >
              <FaLinkedin className="text-white-A700" />
            </Button>

            <Button
              size="xs"
              variant="fill"
              shape="circle"
              className="w-[40px] !rounded-[20px]"
            >
              <FaInstagram className="text-white-A700" />
            </Button>
          </div>
        </div>
      </div>

      <motion.div className="flex flex-col justify-between">
        <motion.div
          style={{ scaleY: completionProgress }}
          className="bg-blue_gray-900 absolute w-full h-full origin-bottom"
          transition={{ duration: 0.1 }}
        />

        {/* Footer Bottom */}
        <div className="relative flex flex-col justify-between min-h-screen space-y-20">
          <div className="">
            <div className="bg-blue_gray-900 w-full p-px divide-y" />

            <div className="container flex justify-center">
              <Text
                size="lg"
                as="p"
                className="!text-white-A700 !text-[18vw] mix-blend-exclusion font-bold"
              >
                Alumed
              </Text>

              <sup className="!text-white-A700 text-[3vw] font-semibold mix-blend-exclusion md:mt-10 mt-20">
                TM
              </sup>
            </div>
          </div>

          {/* Plus Signs */}
          <div className="opacity-10 container flex justify-between">
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white-A700"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            ))}
          </div>

          <footer className="container flex flex-col pb-4 mx-auto">
            <div className="bg-white-A700 w-full p-px my-4 divide-y" />

            <div className="flex items-center justify-between mt-auto">
              <Text as="div" className="self-end !text-white-A700">
                &copy; {new Date().getFullYear()} Alumed
              </Text>

              <div className="flex self-end">
                <Text
                  as="div"
                  className="flex gap-1 items-centers !text-white-A700"
                >
                  Website by
                  <a
                    href="https://discord.com/users/624127969534672896"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold"
                  >
                    Vixingo
                  </a>
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
