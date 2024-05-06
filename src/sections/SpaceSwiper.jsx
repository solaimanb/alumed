import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Img, Text } from "components";
import { FaCheck, FaLongArrowAltRight } from "react-icons/fa";

function SpaceSwiper() {
  const videos = ["/images/ymx1.mp4", "/images/ymx3.mp4", "/images/ymx1.mp4"];

  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && nextButtonRef.current && prevButtonRef.current) {
      const swiperEl = swiperRef.current.swiper;
      const nextButtonEl = nextButtonRef.current;
      const prevButtonEl = prevButtonRef.current;

      nextButtonEl.addEventListener("click", () => {
        swiperEl.slideNext();
      });

      prevButtonEl.addEventListener("click", () => {
        swiperEl.slidePrev();
      });

      return () => {
        nextButtonEl.removeEventListener("click", () => {
          swiperEl.slideNext();
        });

        prevButtonEl.removeEventListener("click", () => {
          swiperEl.slidePrev();
        });
      };
    }
  }, []);

  return (
    <div className="mb-12">
      <div className="container">
        {/* Slide numbers */}
        <div className="border-blue_gray-900 sm:border-t sm:py-0 md:gap-12 flex items-center w-full gap-0 py-2">
          {/* Small Screen Swiper Pagination Buttons */}
          <div className="sm:flex items-center hidden w-1/2">
            <div className="flex items-center justify-between gap-4">
              <button onClick={() => swiperRef.current.swiper.slidePrev()}>
                <Img
                  src="images/img_arrow_left_blue_gray_900.svg"
                  alt="arrowleft_five"
                  className="rotate-180"
                />
              </button>

              <button
                onClick={() => swiperRef.current.swiper.slideNext()}
                className=""
              >
                <Img
                  src="images/img_arrow_left_blue_gray_900.svg"
                  alt="arrowleft_seven"
                  className="mt-1"
                />
              </button>
            </div>

            <div className="w-2/3"></div>
          </div>

          {/* Swiper Pagination Counter */}
          <div className="sm:justify-end flex w-1/2">
            <div>
              {currentSlide + 1} / {videos.length}
            </div>
          </div>

          <div className="sm:hidden flex flex-row items-center justify-between w-1/2">
            <div className="md:hidden w-1/2" />

            {/* Swiper Pagination Buttons */}
            <div className="border-t-blue_gray-900 md:border-t sm:hidden sm:border-t-0 md:w-full flex items-center w-1/2 border-t">
              <div className="flex items-center justify-between w-1/3 gap-4">
                <button ref={prevButtonRef}>
                  <Img
                    src="images/img_arrow_left_blue_gray_900.svg"
                    alt="arrowleft_five"
                    className="rotate-180"
                  />
                </button>

                <button ref={nextButtonRef}>
                  <Img
                    src="images/img_arrow_left_blue_gray_900.svg"
                    alt="arrowleft_seven"
                    className="mt-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        // loop
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        navigation
        pagination={{
          clickable: true,
        }}
        scrollbar
        className="container"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative w-full h-full">
              <video
                src={video}
                autoPlay
                muted
                loop
                className="object-cover w-full h-full"
              />

              <div className="absolute bottom-0 flex w-full p-4 h-[40%]">
                <div className="flex flex-col justify-between bg-white-A700 w-full p-2 h-[80%] mt-auto">
                  <Text as="p" size="lg" className="font-bold">
                    YMX {index + 1}
                  </Text>

                  <Text className="flex items-center gap-1">
                    <FaCheck size={12} />
                    Available for rent
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-end justify-between w-full p-2">
                  <span>
                    <FaLongArrowAltRight />
                  </span>

                  <Text className="flex items-center gap-1">Alumed</Text>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SpaceSwiper;
