import { Button, Img, Line, List, PagerIndicator, Text } from "components";
import LaptopColumnicon from "components/LaptopColumnicon";
import React from "react";

const Intro: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 md:h-[1483px] sm:h-[469px] h-[880px] md:px-5 relative w-full md:w-full">
        <div className="absolute bg-gray-900_04 md:h-[458px] h-[649px] inset-x-[0] mx-auto pl-5 py-5 top-[0] w-full">
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-[455px] inset-x-[0] items-center justify-start mx-auto p-[109px] md:px-10 sm:px-5 top-[6%] w-[98%]"
            style={{ backgroundImage: "url('images/img_group3.png')" }}
          >
            <div className="flex flex-col gap-3 items-center justify-start max-w-[776px] mb-[102px] w-full">
              <div className="bg-white-A700_1e flex flex-col items-start justify-start px-5 py-2 w-auto">
                <Text
                  className="text-white-A700 text-xs tracking-[-0.29px] uppercase w-auto"
                  size="txtKrubBold12"
                >
                  Бид хэрхэн ажилдаг вэ?
                </Text>
              </div>
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 tracking-[-1.73px]"
                size="txtKrubRegular36"
              >
                <span className="text-white-A700 font-krub font-normal">
                  Бид{" "}
                </span>
                <span className="text-white-A700 font-krub font-bold">
                  бүтээгдэхүүн
                </span>
                <span className="text-white-A700 font-krub font-normal">
                  {" "}
                  &{" "}
                </span>
                <span className="text-white-A700 font-krub font-bold">
                  үйлчилгээгээ
                </span>
                <span className="text-white-A700 font-krub font-normal">
                  <>
                    {" "}
                    сэтгэл зүрхээ
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-krub font-bold">
                  шингээж
                </span>
                <span className="text-white-A700 font-krub font-normal">
                  {" "}
                  бүтээдэг{" "}
                </span>
                <span className="text-white-A700 font-krub font-bold">
                  хамт олон
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[38px] inset-x-[0] items-center justify-start mx-auto md:px-10 px-20 sm:px-5 w-full">
          <List
            className="md:flex-1 sm:flex-col flex-row gap-[38px] grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
              <Img
                className="h-[469px] md:h-auto object-cover w-full"
                src="images/img_02.png"
                alt="Two"
              />
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
              <Img
                className="h-[469px] md:h-auto object-cover w-full"
                src="images/img_03.png"
                alt="Three"
              />
            </div>
          </List>
          <div className="bg-white-A700 h-[469px] relative w-[23%] md:w-full">
            <Img
              className="h-[469px] m-auto object-cover w-full"
              src="images/img_03.png"
              alt="Three_Two"
            />
            <Img
              className="absolute h-[469px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_5.png"
              alt="Five_Two"
            />
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start w-[23%] md:w-full">
            <Img
              className="h-[469px] md:h-auto object-cover w-full"
              src="images/img_6.png"
              alt="Six_Two"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
