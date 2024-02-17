import { Button, Img, Line, Text } from "components";
import React from "react";

const Menu: React.FC = () => {
  return (
    <div className="bg-gray-100 h-auto md:px-5 relative w-full">
      <div className="m-auto w-full">
        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[825px] items-center justify-start w-full">
            <div></div>
            <div className="bg-white-A700 flex md:flex-col flex-row font-rubik md:gap-10 gap-[109px] items-center md:pr-10 pr-20 sm:pr-5 w-full">
              <div className="h-[100vh] relative w-[50%] md:w-full">
                <div className="absolute bg-gradient1 inset-y-[0] left-[0] my-auto w-[94%]"></div>
                <div className="absolute bg-white-A700 h-[58vh] inset-y-[0] my-auto right-[0] w-[94%] md:w-full">
                  <Img
                    className="h-[60vh] m-auto object-cover w-full"
                    src="images/img_background.png"
                    alt="background_One"
                  />
                  <div className="absolute bg-white-A700 bottom-[0] h-[108px] sm:h-[207px] inset-x-[0] mx-auto w-[64%] sm:w-full">
                    <div className="h-[108px] m-auto w-full">
                      <div className="bg-gradient h-[108px] m-auto w-full"></div>
                      <Img
                        className="absolute h-[108px] inset-y-[0] my-auto right-[0]"
                        src="images/img_background_white_a700.svg"
                        alt="background_Three"
                      />
                    </div>
                    <div className="absolute flex sm:flex-col flex-row gap-[19px] h-full inset-[0] items-center justify-start m-auto w-auto">
                      <Img
                        className="h-20 w-[65px] ml-2"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                        <Text
                          className="md:text-5xl text-8xl text-gray-900_01 w-auto"
                          size="txtRubikRomanRegular96"
                        >
                          10
                        </Text>
                        <Text
                          className="max-w-[178px] md:max-w-full text-gray-900_01 text-xl uppercase"
                          size="txtRubikRomanRegular20"
                        >
                          жилийн ажлын туршлага
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[60vh] sm:w-full">
                <div className="flex flex-col gap-[58px] items-center justify-start w-[96%] md:w-full">
                  <div className="flex flex-col gap-[18px] w-full sm:w-full">
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 uppercase w-auto"
                      size="txtRubikRomanSemiBold35"
                    >
                      Бид юу хийдэг вэ?
                    </Text>
                    <Text
                      className="leading-[151.52%] max-w-[486px] md:max-w-full text-blue_gray-500 text-xl"
                      size="txtKrubMedium20"
                    >
                      Бид бизнес эрхлэгчдийн гадаад худалдааны тээвэрлэлтийг
                      зохион байгуулж, ОУ-ын стандарт, МУ-ын хууль тогтоомжийн
                      хүрээнд хөнгөвчлөх, зуучлах цогц үйлчилгээг үзүүлэгч
                      үндэсний компани юм.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                    <div className="flex flex-col pb-[15px]  sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl uppercase w-auto"
                        size="txtRubikRomanSemiBold24"
                      >
                        БИдний давуу тал
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                      <Button
                        className="flex h-[63px] items-center justify-center rounded-[31px] w-[63px]"
                        size="lg"
                        variant="gradient"
                        color="yellow_700_orange_100"
                      >
                        <Img src="images/img_thumbsup.svg" alt="thumbsup" />
                      </Button>
                      <Text
                        className="flex-1 max-w-[419px] md:max-w-full text-gray-900_01 text-xl"
                        size="txtRubikRomanRegular20"
                      >
                        Хөрөнгө оруулалтын чадавхитай үндэсний компани
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                      <Button
                        className="flex h-[63px] items-center justify-center rounded-[31px] w-[63px]"
                        size="lg"
                        variant="gradient"
                        color="yellow_700_orange_100"
                      >
                        <Img
                          className="h-6"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                      </Button>
                      <Text
                        className="flex-1 max-w-[419px] md:max-w-full text-gray-900_01 text-xl"
                        size="txtRubikRomanRegular20"
                      >
                        Харилцагчийн тав тухыг хангасан өөрийн эзэмшлийн
                        терминалын талбай
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                      <Button
                        className="flex h-[63px] items-center justify-center rounded-[31px] w-[63px]"
                        size="lg"
                        variant="gradient"
                        color="yellow_700_orange_100"
                      >
                        <Img
                          className="h-[22px]"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                      </Button>
                      <Text
                        className="flex-1 max-w-[419px] md:max-w-full text-gray-900_01 text-xl"
                        size="txtRubikRomanRegular20"
                      >
                        Терминалын үйлчилгээний мэргэшсэн, чадварлаг ажилтнууд
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[450px] inset-[0] justify-center m-auto w-[515px]"
                  src="images/img_pattern.svg"
                  alt="pattern"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute font-rubik h-[1059px] inset-x-[0] mx-auto top-[0] w-full">
          <Img
            className="h-[850px] m-auto object-cover w-full"
            src="images/img_rectangle1.png"
            alt="rectangleOne"
          />
          <div className="absolute bg-black-900_26 flex flex-col items-center justify-start left-[5%] p-10 sm:px-5 rounded-[22px] top-[18%] w-auto">
            <div className="flex flex-col gap-2 w-[571px] sm:w-full">
              <div className="flex flex-row items-center justify-start w-[24%] md:w-full">
                <Line className="bg-gradient  h-[23px] w-1" />
                <Text
                  className="bg-gray-900_7f justify-center px-[9px] py-0.5 text-sm text-white-A700 w-auto"
                  size="txtRubikRomanRegular14"
                >
                  Ти Ай Ложистик
                </Text>
              </div>
              <div className="flex flex-col font-krub gap-6 items-start justify-start w-[50%px] sm:w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-[50%px] sm:w-full">
                  <Text
                    className="md:text-5xl text-6xl text-white-A700"
                    size="txtRubikRomanBold60"
                  >
                    <span className="text-white-A700 font-rubik text-left font-bold">
                      <>
                        ТЭЭВЭР ЗУУЧЛАЛЫН
                        <br />
                        ЦОГЦ
                      </>
                    </span>
                    <span className="text-red-700 font-rubik text-left font-bold ml-2">
                      ШИЙДЭЛ
                    </span>
                  </Text>
                  <Text
                    className="leading-[151.52%] max-w-[90%] md:max-w-full text-base text-white-A700"
                    size="txtKrubMedium16"
                  >
                    Олон жилийн туршлагатай манай хамт олон харилцагч таны ачааг
                    дэлхийн өнцөг булан бүрээс гадаад агентын өргөн сүлжээгээ
                    ашиглан тээвэрлэлтийн бүхий л чиглэлд хүссэн хэмжээгээр
                    далай, төмөр зам, авто зам зэрэг сувгуудаар улс хооронд
                    тээвэрлэх ачаа тээврийн үйлчилгээг санал болгож байна.
                  </Text>
                </div>
                <Button className="relative bg-gradient flex flex-row gap-2.5 md:px-10 sm:px-5 px-[45px] overflow-hidden py-[19px] w-auto hover:bg-white-A700 transition-all duration-300 ease-in-out">
                  <Text
                    className="text-base text-blue_gray-900 w-auto"
                    size="txtKrubSemiBold16"
                  >
                    Каталог татах
                  </Text>
                  <div className="absolute -bottom-7 -right-8 bg-white-A700 h-[50px] rotate-[-108deg] rounded-full w-[38%]"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-gray-900_4f inset-x-[0] max-w-[80%] mx-auto md:px-10 px-20 sm:px-5 top-[0]">
        <div className="flex md:flex-col items-center space-around w-full">
          <div className="flex flex-1 md:flex-col flex-row gap-[25px] w-auto md:w-full">
            <Text
              className="text-white-A700 text-sm w-auto"
              size="txtKrubSemiBold12"
            >
              Нүүр
            </Text>
            <Line className="bg-white-A700_7f h-3 rotate-0 w-px mt-1" />
            <Text
              className="text-white-A700 text-sm w-auto"
              size="txtKrubSemiBold12"
            >
              Бидний тухай
            </Text>
            <Line className="bg-white-A700_7f h-3 rotate-[0deg] w-px mt-1" />
            <Text
              className="text-white-A700 text-sm w-auto"
              size="txtKrubSemiBold12"
            >
              Бүтээгдэхүүн үйлчилгээ
            </Text>
            <Line className="bg-white-A700_7f h-3 rotate-[0deg] w-px mt-1" />

            <Text
              className="text-white-A700 text-sm w-auto"
              size="txtKrubSemiBold12"
            >
              Мэдээ мэдээлэл
            </Text>
            <Line className="bg-white-A700_7f h-3 rotate-[0deg] w-px mt-1" />
            <Text
              className="text-white-A700 text-sm w-auto"
              size="txtKrubSemiBold12"
            >
              Холбоо барих
            </Text>
          </div>
          <div className="flex sm:flex-1 sm:flex-col font-inter gap-4 items-center w-auto sm:w-full">
            <Button
              className="flex items-center justify-center rounded-lg w-10"
              color="white_A700_26"
              onClick={() =>
                window.open("https://www.facebook.com/TILogisticMN/", "_blank")
              }
            >
              <Img src="images/img_facebook.svg" alt="facebook_One" />
            </Button>
            <Button
              className="flex h-[39px] items-center justify-center rounded-lg w-[39px]"
              color="white_A700_26"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/tilogistic/?originalSubdomain=mn",
                  "_blank"
                )
              }
            >
              <Img
                className="h-[19px]"
                src="images/img_link.svg"
                alt="link_One"
              />
            </Button>
            <div className="bg-white-A700_26 flex flex-col items-center justify-center p-2.5 rounded-lg shadow-bs1 w-auto">
              <Img className="h-5 w-10" src="images/img_mn.svg" alt="mn_One" />
            </div>
            <Button
              className="!text-blue_gray-900 border border-solid border-white-A700 cursor-pointer font-semibold min-w-[198px] text-center text-lg hover:bg-[#ffb629] transition-all duration-300 ease-in-out"
              shape="square"
              color="white_A700"
              size="xl"
            >
              Үнийн санал авах
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
