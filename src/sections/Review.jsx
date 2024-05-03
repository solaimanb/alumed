import React from "react";
import { Img, Text } from "components";

// Client Brands:
import Client1 from "/images/img_2dad569c_e390_4_83x166.png";
import Client2 from "/images/img_beacbbd4_78b6_4_83x166.png";
import Client3 from "/images/img_2c26bc69_6046_4_83x166.png";
import Client4 from "/images/img_373f13b0_bc24_4_83x166.png";
import Client5 from "/images/img_f7ebe438_1c42_4_83x166.png";
import Client6 from "/images/img_75ebc6b7_c4b6_4_83x166.png";

const clients = [
  { src: Client1, alt: "airbus" },
  { src: Client2, alt: "foliot_furniture" },
  { src: Client3, alt: "syscomax" },
  { src: Client4, alt: "drakkar" },
  { src: Client5, alt: "xtreme" },
  { src: Client6, alt: "nse" },
];

function Review() {
  return (
    <div className="w-full mx-auto container px-2 md:mt-20 mt-40">
      {/* Client Brands Image Map */}
      <div className="md:grid-cols-2 sm:w-full md:w-[65%] w-[80%] grid grid-cols-4 gap-4 mx-auto">
        {clients.slice(0, -1).map((image, index) => (
          <div key={index} className="flex w-full p-10 bg-gray-200">
            <Img
              src={image.src}
              alt={image?.alt}
              className="object-cover w-[80%] mx-auto"
            />
          </div>
        ))}

        <div className="md:col-span-2 md:hidden grid" />
        <div className="md:col-span-2 md:hidden grid" />

        {clients.slice(-1).map((image, index) => (
          <div key={index} className="flex w-full p-10 bg-gray-200">
            <Img
              src={image.src}
              alt={image?.alt}
              className="object-cover w-[80%] mx-auto"
            />
          </div>
        ))}
      </div>

      {/* Review Slider */}
      <div className=" sm:w-full md:w-[65%] w-[40%] mx-auto mt-10 space-y-4">
        <div>
          <Text
            size=""
            as="p"
            className="md:text-3xl text-4xl font-normal tracking-tighter text-center"
          >
            “Two of our major logistics centres are with Alumed. Undeniably,
            their human approach and desire to work together makes all the
            difference for us.”
          </Text>
        </div>

        <div className="bg-blue_gray-900 w-full p-px divide-y" />

        <div className="flex items-center">
          <div className="w-2/3">
            <Text as="p" className="w-[90%] uppercase !font-normal leading-3">
              Benoit Hudon
              <br />
              President & CEO, DRAKKAR Aerospace & Ground Transportation
            </Text>
          </div>

          <div className="flex justify-between w-1/3 gap-4">
            <Img
              src="images/img_arrow_left_blue_gray_900.svg"
              alt="arrowleft_five"
              className="h-[60px] rotate-180"
            />

            <Img
              src="images/img_arrow_left_blue_gray_900.svg"
              alt="arrowleft_seven"
              className="h-[60px] mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
