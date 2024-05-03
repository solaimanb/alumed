import React from "react";

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { Img, Text } from "components";

function SpaceSwiper() {
  return (
    <div className="mb-12">
      <div className="container">
        <div className="flex items-center justify-between gap-4">
          <div className="sm:hidden w-1/4">
            <Text as="p" className="uppercase !font-normal text-base">
              1 / 2
            </Text>
          </div>

          <div className="sm:hidden w-1/4"></div>

          <div className="border-t-blue_gray-900 sm:w-full md:w-2/4 flex items-center justify-between w-2/6 border-t-2">
            <div className="gap-x-3 flex items-center">
              <Img
                src="images/img_button_previous.svg"
                alt="buttonprevious"
                className="w-8"
              />
              <Img
                src="images/img_arrow_left_blue_gray_900.svg"
                alt="arrowleft_three"
                className="w-8"
              />
            </div>

            <div className="sm:block hidden">
              <Text as="p" className="uppercase !font-normal">
                1 / 2
              </Text>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        loop
        navigation
        className="md:h-auto container"
      >
        <SwiperSlide>
          <div className="md:h-auto relative w-full h-full border border-black">
            <video
              src="/images/ymx1.mp4"
              autoPlay
              muted
              loop
              className="object-cover w-full h-full"
            />

            <div className="flex flex-col w-[68%] bottom-[19.84px] left-[20.00px] m-auto absolute">
              <div className="h-[200px] w-[25%] md:h-auto z-[1] relative">
                <Img
                  src="images/img_svg_blue_gray_900.svg"
                  alt="svg_one"
                  className="h-[12px] mt-[19px] mr-5 md:mr-0"
                />

                <div className="h-[200px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-gray-100 absolute" />
              </div>

              <div className="flex sm:flex-col items-start mt-[-1px] relative">
                <div className="sm:self-stretch p-[19px] bg-gray-100 flex-1">
                  <div className="flex flex-col items-start gap-[153px] md:gap-[114px] sm:gap-[76px]">
                    <a
                      href="https://edifis.ca/en/spaces/ymx-1/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text size="md" as="p" className="!text-[16.92px]">
                        YMX 1
                      </Text>
                    </a>
                    <div className="flex self-stretch justify-between gap-5">
                      <div className="flex items-center">
                        <Img
                          src="images/img_checkmark.svg"
                          alt="available_for"
                          className="h-[15px]"
                        />
                        <a
                          href="https://edifis.ca/en/spaces/ymx-1/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Text as="p" className="!text-[13.48px]">
                            Available for rent
                          </Text>
                        </a>
                      </div>
                      <a
                        href="https://edifis.ca/en/spaces/ymx-1/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text as="p" className="!text-[13.59px]">
                          Mirabel
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="h-[150px] w-[40px] ml-[-1px] sm:ml-0 relative bg-gray-100" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[799px] w-full md:h-auto relative">
            <video
              src="/images/ymx3.mp4"
              autoPlay
              muted
              loop
              className="object-cover w-full h-full"
            />
            <div className="flex flex-col items-end w-[94%] bottom-[19.84px] right-0 left-0 m-auto absolute">
              <div className="h-[60px] w-[52%] md:h-auto z-[1] relative">
                <Img
                  src="images/img_svg_blue_gray_900.svg"
                  alt="svg_one"
                  className="h-[12px] mt-[23px] mr-5 md:mr-0"
                />
                <div className="h-[60px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-gray-100 absolute" />
              </div>
              <div className="self-stretch mt-[-1px] p-[19px] relative bg-gray-100">
                <div className="flex flex-col items-start gap-[153px] md:gap-[114px] sm:gap-[76px]">
                  <a
                    href="https://edifis.ca/en/spaces/ymx-3/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text size="md" as="p" className="!text-[16.92px]">
                      YMX 3
                    </Text>
                  </a>
                  <div className="flex self-stretch justify-between gap-5">
                    <div className="flex items-center">
                      <Img
                        src="images/img_close.svg"
                        alt="close_one"
                        className="self-start h-[15px]"
                      />
                      <a
                        href="https://edifis.ca/en/spaces/ymx-3/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text as="p" className="!text-[13.59px]">
                          Occupied until 2028
                        </Text>
                      </a>
                    </div>
                    <a
                      href="https://edifis.ca/en/spaces/ymx-3/"
                      target="_blank"
                      rel="noreferrer"
                      className="self-start"
                    >
                      <Text as="p" className="!text-[13.59px]">
                        Mirabel
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[799px] w-full md:h-auto relative">
            <video
              src="/images/ymx1.mp4"
              autoPlay
              muted
              loop
              className="object-cover w-full h-full"
            />

            <div className="flex flex-col w-[68%] bottom-[19.84px] left-[20.00px] m-auto absolute">
              <div className="h-[200px] w-[25%] md:h-auto z-[1] relative">
                <Img
                  src="images/img_svg_blue_gray_900.svg"
                  alt="svg_one"
                  className="h-[12px] mt-[19px] mr-5 md:mr-0"
                />
                <div className="h-[200px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-gray-100 absolute" />
              </div>
              <div className="flex sm:flex-col items-start mt-[-1px] relative">
                <div className="sm:self-stretch p-[19px] bg-gray-100 flex-1">
                  <div className="flex flex-col items-start gap-[153px] md:gap-[114px] sm:gap-[76px]">
                    <a
                      href="https://edifis.ca/en/spaces/ymx-1/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text size="md" as="p" className="!text-[16.92px]">
                        Immeuble Foliot
                      </Text>
                    </a>
                    <div className="flex self-stretch justify-between gap-5">
                      <div className="flex items-center">
                        <Img
                          src="images/img_checkmark.svg"
                          alt="available_for"
                          className="h-[15px]"
                        />
                        <a
                          href="https://edifis.ca/en/spaces/ymx-1/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Text as="p" className="!text-[13.48px]">
                            Available for rent
                          </Text>
                        </a>
                      </div>
                      <a
                        href="https://edifis.ca/en/spaces/ymx-1/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text as="p" className="!text-[13.59px]">
                          Mirabel
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="h-[150px] w-[40px] ml-[-1px] sm:ml-0 relative bg-gray-100" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SpaceSwiper;
