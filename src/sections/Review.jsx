import React from "react";
import { Img, Text, Button, Input } from "components";

function Review() {
  return (
    <div>
      {" "}
      <div className="flex flex-col pt-[25px] gap-[312px] px-[25px] md:gap-[234px] sm:gap-[156px] sm:pt-5 sm:px-5">
        <div className="w-full mx-auto max-w-[1390px]">
          <div className="flex flex-col pt-5 gap-5">
            <div className="flex md:flex-col gap-5">
              <div className="flex w-full px-14 py-[73px] md:p-5 bg-gray-200">
                <Img
                  src="images/img_2dad569c_e390_4_83x166.png"
                  alt="2dad569ce390fou"
                  className="w-[75%] object-cover"
                />
              </div>
              <div className="flex w-full px-14 py-[73px] md:p-5 bg-gray-200">
                <Img
                  src="images/img_beacbbd4_78b6_4_83x166.png"
                  alt="beacbbd478b6fou"
                  className="w-[75%] object-cover"
                />
              </div>
              <div className="flex w-full px-14 py-[73px] md:p-5 bg-gray-200">
                <Img
                  src="images/img_2c26bc69_6046_4_83x166.png"
                  alt="2c26bc696046fou"
                  className="w-[75%] object-cover"
                />
              </div>
              <div className="flex w-full px-14 py-[73px] md:p-5 bg-gray-200">
                <Img
                  src="images/img_373f13b0_bc24_4_83x166.png"
                  alt="373f13b0bc24fou"
                  className="w-[75%] object-cover"
                />
              </div>
            </div>
            <div className="flex md:flex-col justify-between gap-5">
              <div className="flex justify-center w-[24%] md:w-full px-14 py-[73px] md:p-5 bg-gray-200">
                <Img
                  src="images/img_f7ebe438_1c42_4_83x166.png"
                  alt="f7ebe4381c42fou"
                  className="w-[75%] object-cover"
                />
              </div>
              <div className="flex justify-center w-[24%] md:w-full px-14 py-[73px] md:p-5 bg-gray-200">
                <Img
                  src="images/img_75ebc6b7_c4b6_4_83x166.png"
                  alt="75ebc6b7c4b6fou"
                  className="w-[75%] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-[-179px] pb-[352px] px-[352px] md:pb-5 md:px-5 relative">
            <div className="mb-[124px]">
              <div className="pb-5">
                <div className="pb-[135px] md:pb-5">
                  <div>
                    <Text
                      size="2xl"
                      as="p"
                      className="text-center !text-[41.38px] leading-[45px]"
                    >
                      <>
                        “Two of our major logistics centres
                        <br />
                        are with Alumed. Undeniably, their
                        <br />
                        human approach and desire to
                        <br />
                        work together makes all the
                        <br />
                        difference for us.”
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col items-center pt-[21px] gap-[19px] sm:pt-5 border-blue_gray-900 border-t border-solid">
                <div className="flex sm:self-stretch flex-1">
                  <Text
                    as="p"
                    className="w-[80%] uppercase !font-normal leading-[13px]"
                  >
                    <>
                      Benoit Hudon
                      <br />
                      President & CEO, DRAKKAR Aerospace & Ground Transportation
                    </>
                  </Text>
                </div>
                <div className="flex justify-between w-[15%] sm:w-full gap-5">
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
        </div>
      </div>
    </div>
  );
}

export default Review;
