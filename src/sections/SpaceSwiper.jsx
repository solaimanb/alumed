import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SpaceSwiper() {
  const videos = ["/images/ymx1.mp4", "/images/ymx3.mp4", "/images/ymx1.mp4"];

  return (
    <div className="mb-12">
      <div className="container">
        <div className="swiper-pagination"></div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        loop
        navigation
        pagination={{ clickable: true }}
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SpaceSwiper;
