import React from "react";
import { Img, Text, Button, Input } from "components";

function Footer() {
  return (
    <div>
      <div>
        <div>
          <div>
            <div className="w-full py-1.5 mx-auto md:p-5 border-blue_gray-900 border-t-2 border-b border-solid max-w-[1390px]">
              <div className="flex md:flex-col justify-between mt-[15px] gap-5">
                <div className="flex justify-center items-start w-[11%] md:w-full gap-2.5">
                  <Button
                    size="xs"
                    variant="fill"
                    shape="circle"
                    className="w-[40px] !rounded-[20px]"
                  >
                    <Img src="images/img_svg_white_a700.svg" />
                  </Button>
                  <Button
                    size="xs"
                    variant="fill"
                    shape="circle"
                    className="w-[40px] !rounded-[20px]"
                  >
                    <Img src="images/img_svg_white_a700_40x40.svg" />
                  </Button>
                  <Img
                    src="images/img_item_margin.svg"
                    alt="itemmargin_one"
                    className="h-[104px]"
                  />
                </div>
                <div className="flex md:flex-col justify-center items-center w-[49%] md:w-full gap-5">
                  <div className="flex flex-col self-start w-full gap-[20px]">
                    <div className="flex flex-col items-start">
                      <Text
                        size="md"
                        as="p"
                        className="!text-[16.92px]  font-bold"
                      >
                        Get updates on new projects and
                      </Text>
                      <Text
                        size="lg"
                        as="p"
                        className="!text-[17.07px]  font-bold"
                      >
                        property availabilities
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
                  <div className="w-full">
                    <div className="flex flex-col items-start w-full py-[5px]">
                      <a
                        href="https://edifis.ca/en/spaces/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text as="p" className=" !text-[14px] font-bold">
                          Our Spaces
                        </Text>
                      </a>
                      <div className="self-stretch h-[1px] mb-1 mt-[3px] bg-blue_gray-900" />
                      <a
                        href="https://edifis.ca/en/expertise/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-[-2px] relative"
                      >
                        <Text as="p" className=" !text-[14px] font-bold">
                          Our Expertise
                        </Text>
                      </a>
                      <div className="self-stretch h-[1px] mb-1 mt-[3px] bg-blue_gray-900" />
                      <a
                        href="https://edifis.ca/en/about-us/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-[-3px] relative"
                      >
                        <Text as="p" className="!text-[14px] font-bold">
                          About Us
                        </Text>
                      </a>
                      <div className="self-stretch h-[1px] mb-1 mt-1 bg-blue_gray-900" />
                      <a
                        href="https://edifis.ca/en/contact/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-[-3px] relative"
                      >
                        <Text as="p" className=" !text-[14px] font-bold">
                          Contact Us
                        </Text>
                      </a>
                      <div className="self-stretch h-[1px]  mt-1 mb-[42px] bg-blue_gray-900" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 sm:py-5">
                <div className="flex md:flex-col justify-between items-center mt-[246px] gap-5">
                  <Img
                    src="images/img_64b58eba_4d83_4_215x215.png"
                    alt="64b58eba4d83fou"
                    className="w-[215px] md:w-full object-cover"
                  />
                  <div className="flex sm:flex-col items-center w-[49%] md:w-full">
                    <div className="flex flex-col items-start w-[71%] sm:w-full">
                      <Text
                        size="2xl"
                        as="p"
                        className="!text-[41.38px] leading-[45px]"
                      >
                        <>
                          Find space to push ideas
                          <br />
                          forward with us.
                        </>
                      </Text>
                      <Text size="md" as="p" className="mt-5 !text-[16.92px]">
                        Contact us about leasing an industrial property.
                      </Text>
                      <div className="flex flex-col items-end w-[30%] md:w-full mt-[-1px] relative">
                        <Img
                          src="images/defaultNoData.png"
                          alt="aftermask_three"
                          className="h-[42px] w-[42px] mr-[23px] md:mr-0 z-[1] invisible"
                        />
                        <div className="flex flex-col self-stretch items-end mt-[-22px] relative">
                          <div className="h-px w-[19px] mr-[23px] md:mr-0 z-[1] bg-blue_gray-900" />
                          <Button
                            shape="square"
                            className="w-full mt-[-1px] uppercase relative"
                          >
                            Contact Us
                          </Button>
                        </div>
                      </div>
                    </div>
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
            </div>
          </div>
          <div className="h-[811px] md:h-auto bg-blue_gray-900 relative">
            <Img
              src="images/img_span_ui_icon.svg"
              alt="spanuiicon_one"
              className="h-[441px] w-full mt-[25px] md:p-5 max-w-[1430px]"
            />
            <div className="h-[811px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Img
                src="images/img_image_810x1440.png"
                alt="image_three"
                className="h-[810px] w-full object-cover"
              />
              <div className="h-[811px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Img
                  src="images/logo.png"
                  alt="before_one"
                  className="w-full left-0 bottom-40 right-0 top-0 m-auto  object-cover absolute"
                />
                <div className="flex flex-col w-full gap-[257px] bottom-[0.96px] right-0 left-0 m-auto md:gap-48 md:p-5 sm:gap-32 absolute max-w-[1430px]">
                  <div className="flex justify-between items-end pt-2 gap-5">
                    <Img
                      src="images/img_plus_white_a700.png"
                      alt="plus_one"
                      className="object-cover"
                    />
                    <Img
                      src="images/img_plus_white_a700.png"
                      alt="svg_seven"
                      className="object-cover"
                    />
                    <Img
                      src="images/img_plus_white_a700.png"
                      alt="svg_nine"
                      className="object-cover"
                    />
                    <Img
                      src="images/img_plus_white_a700.png"
                      alt="svg_eleven"
                      className="object-cover"
                    />
                    <Img
                      src="images/img_plus_white_a700.png"
                      alt="svg_thirteen"
                      className="object-cover"
                    />
                  </div>
                  <footer className="flex justify-between items-center w-[97%] md:w-full gap-5 py-[19px] border-white-A700 border-t border-solid">
                    <Text
                      as="p"
                      className="self-end !text-white-A700 !text-[13.36px]"
                    >
                      {new Date().getFullYear()} &copy; Alumed
                    </Text>

                    <div className="flex self-end">
                      <Text as="p" className="!text-white-A700 !text-[13.48px]">
                        Website by Vixingo
                      </Text>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
