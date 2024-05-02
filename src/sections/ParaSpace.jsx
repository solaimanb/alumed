import React from "react";
import { Img, Text, Button, Input } from "components";

function ParaSpace() {
  return (
    <div>
      {" "}
      <div className="Z pb-[25px] px-[25px] sm:pb-5 sm:px-5 bg-gray-400">
        <div className="w-full mb-[125px] pt-12 mx-auto md:pt-5 max-w-[1390px]">
          <div className="h-[310px] md:h-auto relative">
            <div className="w-full">
              <div>
                <div className="h-[154px] border-blue_gray-900 border-t border-solid" />
                <div className="mt-[-153px] py-[13px] relative bg-gray-400">
                  <div className="flex flex-col  gap-[21px]">
                    <div className="flex md:flex-col justify-between items-start gap-5">
                      <Img
                        src="images/img_e268c527_c537_4_112x112.png"
                        alt="e268c527c537fou"
                        className="w-[112px] md:w-full mt-1.5 object-cover"
                      />
                      <div className="flex flex-col items-end w-[49%] md:w-full">
                        <div className="flex self-start">
                          <Text size="xl" as="p" className="!text-[39.19px]">
                            1M ft²
                          </Text>
                        </div>
                        <div className="flex flex-col items-start mt-[-41px] relative">
                          <Text size="lg" as="p" className="!text-[17.07px]">
                            Industrial space serving
                          </Text>
                          <Text size="lg" as="p" className="!text-[17.37px]">
                            Montreal
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-[154px] border-blue_gray-900 border-t border-solid" />
                <div className="mt-[-153px] py-[13px] relative bg-gray-400">
                  <div className="flex flex-col  gap-[21px]">
                    <div className="flex md:flex-col justify-between items-start gap-5">
                      <Img
                        src="images/img_f1dd5e07_f49a_4_462x684.png"
                        alt="e268c527c537fou"
                        className="w-[112px] md:w-full mt-1.5 object-cover"
                      />
                      <div className="flex flex-col items-end w-[49%] md:w-full">
                        <div className="flex self-start">
                          <Text size="xl" as="p" className="!text-[39.19px]">
                            10 Corporate  Tenants
                          </Text>
                        </div>
                        <div className="flex flex-col items-start mt-[-41px] relative">
                          <Text size="lg" as="p" className="!text-[17.07px]">
                            Including leaders from
                          </Text>
                          <Text size="lg" as="p" className="!text-[17.37px]">
                            across multiple industries
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-[154px] border-blue_gray-900 border-t border-solid" />
                <div className="mt-[-153px] py-[13px] relative bg-gray-400">
                  <div className="flex flex-col  gap-[21px]">
                    <div className="flex md:flex-col justify-between items-start gap-5">
                      <Img
                        src="images/img_b6604227_f47a_4_112x112.png"
                        alt="e268c527c537fou"
                        className="w-[112px] md:w-full mt-1.5 object-cover"
                      />
                      <div className="flex flex-col items-end w-[49%] md:w-full">
                        <div className="flex self-start">
                          <Text size="xl" as="p" className="!text-[39.19px]">
                            5 Buildings
                          </Text>
                        </div>
                        <div className="flex flex-col items-start mt-[-41px] relative">
                          <Text size="lg" as="p" className="!text-[17.07px]">
                            from 20,000 ft²
                          </Text>
                          <Text size="lg" as="p" className="!text-[17.37px]">
                            to 200,000 ft²
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col self-end justify-end w-full gap-5 mx-auto max-w-[1390px] pt-10 pb-52">
        <div className="flex flex-col items-start ">
          <Text size="lg" as="p" className="!text-[17.07px]">
            Our industrial tenants include leaders
          </Text>
          <Text size="lg" as="p" className="!text-[17.07px]">
            and innovators from across diverse
          </Text>
          <Text size="md" as="p" className="!text-[16.77px]">
            sectors. And their trust is something we
          </Text>
          <Text size="md" as="p" className="mb-[22px] !text-[16.92px]">
            work hard for.
          </Text>
        </div>
        <div className="flex flex-col items-start justify-center">
          <Text size="md" as="p" className="!text-[16.92px]">
            It’s all about dedication to the people we
          </Text>
          <Text size="md" as="p" className="!text-[16.92px]">
            work with – whether that means
          </Text>
          <Text size="md" as="p" className="!text-[16.92px]">
            collaborating to optimize a space or
          </Text>
          <Text size="md" as="p" className="!text-[16.92px]">
            showing our commitment with a 10- to
          </Text>
          <Text size="md" as="p" className="mb-0.5 !text-[16.77px]">
            25-year lease.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default ParaSpace;
