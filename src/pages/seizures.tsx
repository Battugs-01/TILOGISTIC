import { Button, Img, Line, List, PagerIndicator, Text } from "components";
import LaptopColumnicon from "components/LaptopColumnicon";
import React from "react";

const Seizures: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900_02 flex flex-col items-center justify-start max-w-full md:px-10 px-20 sm:px-5 py-[124px] w-full">
        <div className="flex flex-col md:gap-10 gap-[74px] items-center justify-start max-w-[1398px] mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-[41px] items-start justify-between w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[63px] h-[540px] justify-start pb-[132px] md:px-10 sm:px-5 px-[132px]"
              style={{ backgroundImage: "url('images/img_group5.svg')" }}
            >
              <Img
                className="h-[50px] md:ml-[0] ml-[309px] w-[50px]"
                src="images/img_close_yellow_700.svg"
                alt="close_One"
              />
              <div className="flex flex-row gap-[213px] items-start justify-end mb-[235px] md:ml-[0] ml-[777px] w-[29%] md:w-full">
                <Img
                  className="h-[50px] mb-2.5 w-[50px]"
                  src="images/img_close_yellow_700.svg"
                  alt="close_Two"
                />
                <Img
                  className="h-[50px] mt-2.5 w-[50px]"
                  src="images/img_close_yellow_700.svg"
                  alt="close_Three"
                />
              </div>
            </div>
            <Img
              className="sm:flex-1 h-[50px] md:h-auto md:mt-0 mt-[113px] object-cover sm:w-full w-px"
              src="images/img_mappin.png"
              alt="mappin"
            />
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
            orientation="horizontal"
          >
            <div className="bg-gradient2  flex flex-1 flex-col md:gap-10 gap-16 h-full items-start justify-start p-8 sm:px-5 rounded-lg w-full">
              <Button
                className="flex h-12 items-center justify-center rounded-[50%] w-12"
                shape="circle"
                color="red_A700"
                size="xs"
              >
                <Img src="images/img_signal.svg" alt="signal" />
              </Button>
              <div className="flex flex-col gap-[37px] items-start justify-start w-full">
                <div className="flex flex-col gap-2 h-[182px] md:h-auto items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtKrubSemiBold20"
                  >
                    БНХАУ-ААС
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[238px] md:max-w-full text-base text-blue_gray-50"
                    size="txtKrubRegular16"
                  >
                    Хятад улсын бүх хотуудаас өөрийн агентаар дамжуулан Эрээн
                    хотын агуулахадтатан цуглуулж Улаанбаатар хот хүртэл
                    тээвэрлэх түүвэр чингэлгийн тэээвэр
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-white-A700_7f text-xl w-full"
                    size="txtKrubLight20"
                  >
                    Энгийн чингэлэг:
                  </Text>
                  <Text
                    className="bg-clip-text bg-gradient  text-transparent text-xl w-full"
                    size="txtKrubSemiBold20Yellow700"
                  >
                    7 хоног тутам
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gradient2  flex flex-1 flex-col md:gap-10 gap-16 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
              <div className="bg-gray-200 flex flex-col h-12 items-center justify-start pb-[5px] rounded-[50%] w-12">
                <Img
                  className="h-[42px] rounded-tl-[24px] rounded-tr-[24px]"
                  src="images/img_settings.svg"
                  alt="settings"
                />
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="leading-[30.00px] max-w-[238px] md:max-w-full text-white-A700 text-xl uppercase"
                    size="txtKrubSemiBold20"
                  >
                    Европын улс, хотуудаас
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[238px] md:max-w-full text-base text-blue_gray-50"
                    size="txtKrubRegular16"
                  >
                    Хятад улсын бүх хотуудаас өөрийн агентаар дамжуулан Эрээн
                    хотын агуулахадтатан цуглуулж Улаанбаатар хот хүртэл
                    тээвэрлэх түүвэр чингэлгийн тэээвэр
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-white-A700_7f text-xl w-full"
                    size="txtKrubLight20"
                  >
                    Энгийн чингэлэг:
                  </Text>
                  <Text
                    className="bg-clip-text bg-gradient  text-transparent text-xl w-full"
                    size="txtKrubSemiBold20Yellow700"
                  >
                    7 хоног тутам
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gradient2  flex flex-1 flex-col md:gap-10 gap-16 h-full items-start justify-start p-8 sm:px-5 rounded-lg w-full">
              <Button
                className="flex h-12 items-center justify-center rounded-[50%] w-12"
                shape="circle"
                color="red_A700"
                size="xs"
              >
                <Img src="images/img_arrowleft.svg" alt="arrowleft" />
              </Button>
              <div className="flex flex-col gap-2 h-full items-start justify-start w-full">
                <Text
                  className="text-white-A700 text-xl w-full"
                  size="txtKrubSemiBold20"
                >
                  БНТУ-ААС
                </Text>
                <div className="flex flex-col h-36 md:h-auto items-start justify-start w-full">
                  <Text
                    className="leading-[24.00px] max-w-[238px] md:max-w-full text-base text-blue_gray-50"
                    size="txtKrubRegular16"
                  >
                    Хятад улсын бүх хотуудаас өөрийн агентаар дамжуулан Эрээн
                    хотын агуулахадтатан цуглуулж Улаанбаатар хот хүртэл
                    тээвэрлэх түүвэр чингэлгийн тэээвэр
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 h-full items-start justify-end w-full">
                  <Text
                    className="text-white-A700_7f text-xl w-full"
                    size="txtKrubLight20"
                  >
                    Энгийн чингэлэг:
                  </Text>
                  <Text
                    className="bg-clip-text bg-gradient  text-transparent text-xl w-full"
                    size="txtKrubSemiBold20Yellow700"
                  >
                    7 хоног тутам
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gradient2  flex flex-1 flex-col md:gap-10 gap-16 items-start justify-start p-8 sm:px-5 rounded-lg w-full">
              <Img className="h-12 w-12" src="images/img_kr.svg" alt="kr" />
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="leading-[30.00px] max-w-[238px] md:max-w-full text-white-A700 text-xl"
                    size="txtKrubSemiBold20"
                  >
                    ЕВРОПЫН УЛС, ХОТУУДААС
                  </Text>
                  <Text
                    className="leading-[24.00px] max-w-[238px] md:max-w-full text-base text-blue_gray-50"
                    size="txtKrubRegular16"
                  >
                    Хятад улсын бүх хотуудаас өөрийн агентаар дамжуулан Эрээн
                    хотын агуулахадтатан цуглуулж Улаанбаатар хот хүртэл
                    тээвэрлэх түүвэр чингэлгийн тэээвэр
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-white-A700_7f text-xl w-full"
                    size="txtKrubLight20"
                  >
                    Энгийн чингэлэг:
                  </Text>
                  <Text
                    className="bg-clip-text bg-gradient  text-transparent text-xl w-full"
                    size="txtKrubSemiBold20Yellow700"
                  >
                    7 хоног тутам
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default Seizures;
