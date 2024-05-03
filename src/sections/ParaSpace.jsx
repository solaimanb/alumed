import React from "react";
import { Img, Text } from "components";

function ParaSpace() {
  return (
    <div className="space-y-6">
      <div className="px-2 py-10 bg-gray-400">
        <div className="gap-y-2 flex flex-col w-full max-w-[1390px] mx-auto">
          <div className="bg-blue_gray-900 w-full p-px divide-y" />

          <div className="md:flex-col flex items-start justify-between gap-4">
            <div className="w-1/2">
              <Img
                src="images/img_e268c527_c537_4_112x112.png"
                alt="e268c527c537fou"
                className="object-cover w-full"
              />
            </div>

            <div className="flex-co flex items-center justify-between w-1/2">
              <div className="w-1/2">
                <Text size="xl" as="p" className="">
                  1M ft<sup className="">2</sup>
                </Text>
              </div>

              <div className="w-1/2">
                <Text size="lg" as="p" className="!text-[17.07px]">
                  Industrial space serving Montreal
                </Text>
              </div>
            </div>
          </div>

          <div className="bg-blue_gray-900 w-full p-px divide-y" />

          <div className="md:flex-col flex items-start justify-between gap-5">
            <div className="w-1/2">
              <Img
                src="images/img_f1dd5e07_f49a_4_462x684.png"
                alt="e268c527c537fou"
                className="object-cover w-full"
              />
            </div>

            <div className="flex justify-between w-1/2">
              <div className="w-1/2">
                <Text size="xl" as="p" className="">
                  10 Corporate Tenants
                </Text>
              </div>

              <div className="w-1/2">
                <Text size="lg" as="p" className="">
                  Including leaders from across multiple industries
                </Text>
              </div>
            </div>
          </div>

          <div className="bg-blue_gray-900 w-full p-px divide-y" />

          <div className="md:flex-col flex items-start justify-between gap-4">
            <div className="w-1/2">
              <Img
                src="images/img_b6604227_f47a_4_112x112.png"
                alt="e268c527c537fou"
                className="object-cover w-full"
              />
            </div>

            <div className="flex items-start justify-start w-1/2">
              <div className="w-1/2">
                <Text size="xl" as="p" className="">
                  5 Buildings
                </Text>
              </div>

              <div className="flex flex-col items-start w-1/2">
                <Text size="lg" as="p" className="">
                  from 20,000 ft²
                </Text>

                <Text size="lg" as="p" className="">
                  to 200,000 ft²
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end w-full gap-4 mx-auto max-w-[1390px] px-2">
        <div className="md:hidden block w-1/2"></div>

        <div className="md:w-full flex w-1/2 gap-4">
          <div className="w-1/2">
            <Text size="lg" as="p" className="font-bold">
              Our industrial tenants include leaders and innovators from across
              diverse sectors. And their trust is something we work hard for.
            </Text>
          </div>

          <div className="w-1/2">
            <Text size="lg" as="p" className="font-bold">
              It&apos;s all about dedication to the people we work with &ndash;
              whether that means collaborating to optimize a space or showing
              our commitment with a 10- to 25-year lease.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParaSpace;
