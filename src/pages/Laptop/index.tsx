import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import LaptopBlogpostcard from "components/LaptopBlogpostcard";
import LaptopColumnicon from "components/LaptopColumnicon";
import LaptopFeaturetab from "components/LaptopFeaturetab";
import LaptopFeaturetab1 from "components/LaptopFeaturetab1";

const LaptopPage: React.FC = () => {
  const laptopColumniconPropList = [
    {},
    {
      supportingtext:
        "Тээвэр логистикийн салбарт олон улсын түвшинд өрсөлдөхүйц цогц үйлчилгээ нэвтрүүлсэн компани байж харилцагчдынхаа бизнесийн амжилтад хувь нэмрээ оруулна.",
      titletext: "ЭРХЭМ ЗОРИЛГО",
    },
    {
      supportingtext:
        "Өөриймсөг сэтгэлгээ, үнэнч шударга зарчим Бие биенээ хүндэтгэж, ил тод байдлыг эрхэмлэж, аливаад хариуцлагатай, сэтгэл гарган, зөв хандлагаар уялдаа холбоотой хамтран ажиллах, гар нийлсэн бүтээлч хамт олон",
      titletext: "ҮНЭТ ЗҮЙЛС",
    },
  ];
  const laptopBlogpostcardPropList = [
    {},
    { image: "images/img_image_280x336.png" },
    { image: "images/img_image_1.png" },
    { image: "images/img_image_2.png" },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const laptopBlogpostcardPropList1 = [
    {},
    { image: "images/img_image_280x336.png" },
    { image: "images/img_image_1.png" },
    { image: "images/img_image_2.png" },
  ];

  return (
    <>
      <div className="flex flex-col font-krub items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="bg-gray-900 flex md:flex-col md:gap-10 items-center justify-between px-20 md:px-5 py-[18px] w-full">
          <Img
            className="sm:flex-1 h-[65px] md:h-auto object-cover w-[164px] sm:w-full"
            src="images/img_download1.png"
            alt="downloadOne"
          />
          <div className="flex flex-row gap-[18px] items-center justify-center">
            <Img className="h-[63px]" src="images/img_close.svg" alt="close" />
            <Text
              className="leading-[135.02%] text-sm text-white-A700"
              size="txtKrubMedium14"
            >
              <>
                Даваа - Бямба 9.00 - 18.00
                <br />
                Ням амарна
              </>
            </Text>
          </div>
          <div className="flex flex-row gap-3.5 items-center justify-center">
            <Img
              className="h-[63px] w-[63px]"
              src="images/img_lock.svg"
              alt="lock"
            />
            <a
              href="mailto:contact@hvcargologistics.com"
              className="font-medium leading-[135.02%] text-sm text-white-A700"
              target="_blank"
              rel="noreferrer"
            >
              <Text>
                <>
                  И-мэйл
                  <br />
                  contact@logistics.com
                </>
              </Text>
            </a>
          </div>
          <div className="flex flex-row gap-3.5 items-end justify-center">
            <Button
              className="border border-indigo-900_01 border-solid flex h-[63px] items-center justify-center mb-[5px] rounded-[31px] w-[63px]"
              color="indigo_900"
              size="xl"
            >
              <Img src="images/img_call.svg" alt="call" />
            </Button>
            <Text
              className="leading-[135.02%] mt-[11px] text-sm text-white-A700"
              size="txtKrubMedium14"
            >
              <>
                Утасны дугаар
                <br />
                +976 77110707
              </>
            </Text>
          </div>
        </header>
        <div className="bg-gray-100 h-[1788px] md:h-[2052px] md:px-5 relative w-full">
          <div className="h-[1788px] md:h-[2052px] m-auto w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[825px] items-center justify-start w-full">
                <div className="bg-gray-900_4f flex flex-col items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 w-full">
                  <div className="flex flex-col items-center justify-start w-full"></div>
                </div>
                <div className="bg-white-A700 flex md:flex-col flex-row font-rubik md:gap-10 gap-[109px] items-center justify-start max-w-[1440px] md:pr-10 pr-20 sm:pr-5 w-full">
                  <div className="h-[897px] relative w-[701px] md:w-full">
                    <div className="absolute bg-gradient1  h-[897px] inset-y-[0] left-[0] my-auto w-[94%]"></div>
                    <div className="absolute bg-white-A700 h-[518px] inset-y-[0] my-auto right-[0] w-[94%] md:w-full">
                      <Img
                        className="h-[518px] m-auto object-cover w-full"
                        src="images/img_background.png"
                        alt="background_One"
                      />
                      <div className="absolute bg-white-A700 bottom-[0] h-[108px] sm:h-[207px] inset-x-[0] mx-auto w-[64%] sm:w-full">
                        <div className="h-[108px] m-auto w-full">
                          <div className="bg-gradient  h-[108px] m-auto w-full"></div>
                          <Img
                            className="absolute h-[108px] inset-y-[0] my-auto right-[0]"
                            src="images/img_background_white_a700.svg"
                            alt="background_Three"
                          />
                        </div>
                        <div className="absolute flex sm:flex-col flex-row gap-[19px] h-full inset-[0] items-center justify-start m-auto w-auto">
                          <Img
                            className="h-20 w-[65px]"
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
                  <div className="relative w-[515px] sm:w-full">
                    <div className="flex flex-col items-center justify-start m-auto w-[96%] md:w-full">
                      <div className="flex flex-col gap-[58px] items-center justify-start w-full">
                        <div className="flex flex-col gap-[18px] items-start justify-start w-[494px] sm:w-full">
                          <div className="flex flex-col font-rubik items-start justify-start w-[438px] sm:w-full">
                            <Text
                              className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-900_01 uppercase w-auto"
                              size="txtRubikRomanSemiBold35"
                            >
                              Бид юу хийдэг вэ?
                            </Text>
                          </div>
                          <Text
                            className="leading-[151.52%] max-w-[486px] md:max-w-full text-blue_gray-500 text-xl"
                            size="txtKrubMedium20"
                          >
                            Бид бизнес эрхлэгчдийн гадаад худалдааны
                            тээвэрлэлтийг зохион байгуулж, ОУ-ын стандарт, МУ-ын
                            хууль тогтоомжийн хүрээнд хөнгөвчлөх, зуучлах цогц
                            үйлчилгээг үзүүлэгч үндэсний компани юм.
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-[438px] sm:w-full">
                            <div className="flex flex-col items-start justify-start pb-[15px] w-auto sm:w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl uppercase w-auto"
                                size="txtRubikRomanSemiBold24"
                              >
                                БИдний давуу тал
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                            <Button
                              className="flex h-[63px] items-center justify-center rounded-[31px] w-[63px]"
                              size="lg"
                              variant="gradient"
                              color="yellow_700_orange_100"
                            >
                              <Img
                                src="images/img_thumbsup.svg"
                                alt="thumbsup"
                              />
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
                              Терминалын үйлчилгээний мэргэшсэн, чадварлаг
                              ажилтнууд
                            </Text>
                          </div>
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
                className="h-[1059px] m-auto object-cover w-full"
                src="images/img_rectangle1.png"
                alt="rectangleOne"
              />
              <div className="absolute bg-black-900_26 flex flex-col items-center justify-start left-[5%] p-10 sm:px-5 rounded-[22px] top-[18%] w-auto">
                <div className="flex flex-col gap-2 items-start justify-start w-[571px] sm:w-full">
                  <div className="flex flex-row items-center justify-start w-[24%] md:w-full">
                    <Line className="bg-gradient  h-[23px] w-1" />
                    <Text
                      className="bg-gray-900_7f justify-center px-[9px] py-0.5 text-sm text-white-A700 w-auto"
                      size="txtRubikRomanRegular14"
                    >
                      Ти Ай Ложистик
                    </Text>
                  </div>
                  <div className="flex flex-col font-krub gap-6 items-start justify-start w-[571px] sm:w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-[571px] sm:w-full">
                      <Text
                        className="md:text-5xl text-6xl text-white-A700"
                        size="txtRubikRomanBold60"
                      >
                        <span className="text-white-A700 font-rubik text-left font-bold">
                          <>
                            ТЭЭВЭР ЗУУЧЛАЛЫН
                            <br />
                            ЦОГЦ{" "}
                          </>
                        </span>
                        <span className="text-red-700 font-rubik text-left font-bold">
                          ШИЙДЭЛ
                        </span>
                      </Text>
                      <Text
                        className="leading-[151.52%] max-w-[571px] md:max-w-full text-base text-white-A700"
                        size="txtKrubMedium16"
                      >
                        Олон жилийн туршлагатай манай хамт олон харилцагч таны
                        ачааг дэлхийн өнцөг булан бүрээс гадаад агентын өргөн
                        сүлжээгээ ашиглан тээвэрлэлтийн бүхий л чиглэлд хүссэн
                        хэмжээгээр далай, төмөр зам, авто зам зэрэг сувгуудаар
                        улс хооронд тээвэрлэх ачаа тээврийн үйлчилгээг санал
                        болгож байна.
                      </Text>
                    </div>
                    <div className="bg-gradient  flex flex-row gap-2.5 items-center justify-center md:px-10 sm:px-5 px-[45px] py-[19px] w-auto">
                      <Text
                        className="text-base text-blue_gray-900 w-auto"
                        size="txtKrubSemiBold16"
                      >
                        Каталог татах
                      </Text>
                      <div className="bg-white-A700 h-[51px] rotate-[-24deg] rounded-[25px] w-[38%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray-900_4f flex flex-col inset-x-[0] items-center justify-start max-w-[1440px] mx-auto md:px-10 px-20 sm:px-5 top-[0] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-[47px] items-center justify-start w-full">
                <div className="flex flex-1 flex-col items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[25px] items-center justify-start w-auto md:w-full">
                    <div className="flex flex-col items-center justify-center w-auto">
                      <Text
                        className="text-white-A700 text-xs w-auto"
                        size="txtKrubSemiBold12"
                      >
                        Нүүр
                      </Text>
                    </div>
                    <Line className="bg-white-A700_7f h-3 rotate-[-90deg] w-px" />
                    <div className="flex flex-col items-center justify-center w-auto">
                      <Text
                        className="text-white-A700 text-xs w-auto"
                        size="txtKrubSemiBold12"
                      >
                        Бидний тухай
                      </Text>
                    </div>
                    <Line className="bg-white-A700_7f h-3 rotate-[-90deg] w-px" />
                    <div className="flex flex-col items-center justify-center w-auto">
                      <Text
                        className="text-white-A700 text-xs w-auto"
                        size="txtKrubSemiBold12"
                      >
                        Бүтээгдэхүүн үйлчилгээ
                      </Text>
                    </div>
                    <Line className="bg-white-A700_7f h-3 rotate-[-90deg] w-px" />
                    <div className="flex flex-col items-center justify-center w-auto">
                      <Text
                        className="text-white-A700 text-xs w-auto"
                        size="txtKrubSemiBold12"
                      >
                        Мэдээ мэдээлэл
                      </Text>
                    </div>
                    <Line className="bg-white-A700_7f h-3 rotate-[-90deg] w-px" />
                    <Text
                      className="text-white-A700 text-xs w-auto"
                      size="txtKrubSemiBold12"
                    >
                      Холбоо барих
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-1 sm:flex-col flex-row font-inter gap-4 items-center justify-start w-auto sm:w-full">
                  <Img
                    className="h-[39px] rounded-lg w-[39px]"
                    src="images/img_info.svg"
                    alt="info_One"
                  />
                  <Button
                    className="flex items-center justify-center rounded-lg w-10"
                    color="white_A700_26"
                  >
                    <Img src="images/img_facebook.svg" alt="facebook_One" />
                  </Button>
                  <Button
                    className="flex h-[39px] items-center justify-center rounded-lg w-[39px]"
                    color="white_A700_26"
                  >
                    <Img
                      className="h-[19px]"
                      src="images/img_link.svg"
                      alt="link_One"
                    />
                  </Button>
                  <div className="bg-white-A700_26 flex flex-col items-center justify-center p-2.5 rounded-lg shadow-bs1 w-auto">
                    <Img
                      className="h-5 w-10"
                      src="images/img_mn.svg"
                      alt="mn_One"
                    />
                  </div>
                  <Button
                    className="!text-blue_gray-900 border border-solid border-white-A700 cursor-pointer font-semibold min-w-[198px] text-center text-lg"
                    shape="square"
                    color="white_A700"
                    size="xl"
                  >
                    Үнийн санал татах
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-[69px] items-center justify-center max-w-[1440px] md:px-10 px-20 sm:px-5 py-24 w-full">
          <div className="relative w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-center justify-center max-w-7xl mb-[47px] mt-auto w-full">
              <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-base text-indigo-600 w-full"
                    size="txtInterSemiBold16"
                  >
                    Бидний тухай
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_02 tracking-[-0.72px] w-full"
                    size="txtKrubSemiBold36"
                  >
                    КОМПАНИЙН ТАНИЛЦУУЛГА
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="leading-[28.00px] md:max-w-full max-w-xl text-blue_gray-700 text-justify text-lg"
                      size="txtKrubRegular18"
                    >
                      “ТИ АЙ ЛОЖИСТИК” ХХК нь 2011 онд 100 хувийн дотоодын
                      хөрөнгө оруулалттайгаар байгуулагдсан үндэсний тээвэр
                      зуучийн компаниудын нэг юм. Улаанбаатар хотын А
                      зэрэглэлийн бүсэд байрлах өөрийн эзэмшлийн “Нэг цэгийн
                      үйлчилгээ” бүхий “ТЭЭВЭР ҮЙЛЧИЛГЭЭНИЙ ЦОГЦОЛБОР”-т гаалийн
                      хяналтын бүс, стандартын шаардлага хангасан гаалийн
                      баталгаат болон түр агуулах ажиллуулан тээвэр логистикийн
                      цогц үйлчилгээг үзүүлж байна. Бид дэлхийн улс орнуудад
                      байрлах агентын өргөн сүлжээгээ ашиглан үйлчлүүлэгчиддээ
                      авто, агаар, далай, төмөр замын бүх төрлийн тээврийн
                      замналаар улс хоорондын болон орон нутгийн ачаа тээврийг
                      хаалганаас хаалганд хүргэн үйлчилдэг. Компанийн урт
                      хугацааны тогтвортой үйл ажиллагааг хангах, удирдлагын
                      болон зохион байгуулалтын уялдааг нэмэгдүүлэх,
                      бүтээгдэхүүн үйлчилгээний чанарыг сайжруулах,
                      хэрэглэгчдийн сэтгэл ханамжийг өсгөх зорилгоор Чанарын
                      менежментийн тогтолцоо (ISO 9001:2015) стандартыг үйл
                      ажиллагаандаа нэвтрүүлэн ажиллаж байна. Бид
                      үйлчлүүлэгчдийнхээ байнгын найдвартай түнш, мэргэжлийн
                      зөвлөх байж чадна гэдэгтээ итгэлтэй байдаг.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                <div
                  className="bg-cover bg-no-repeat h-[568px] relative rounded-lg w-full"
                  style={{
                    backgroundImage: "url('images/img_carouselimage.png')",
                  }}
                >
                  <Img
                    className="h-[568px] m-auto object-cover rounded-lg w-full"
                    src="images/img_371.png"
                    alt="ThreeHundredSeventyOne"
                  />
                  <div className="absolute bottom-[3%] flex flex-col md:gap-10 gap-[226px] inset-x-[0] items-center justify-start mx-auto w-[95%]">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="circle"
                        color="white_A700_e5"
                        size="md"
                      >
                        <Img
                          src="images/img_arrowleft_blue_gray_800.svg"
                          alt="arrowleft"
                        />
                      </Button>
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="circle"
                        color="white_A700_e5"
                        size="md"
                      >
                        <Img
                          src="images/img_arrowleft_blue_gray_800.svg"
                          alt="arrowright"
                        />
                      </Button>
                    </div>
                    <PagerIndicator
                      className="flex gap-3 h-6 items-center justify-center p-2 w-[84px]"
                      count={4}
                      activeCss="inline-block cursor-pointer h-2 bg-gray-900_02 w-2 rounded-[50%]"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer h-2 bg-blue_gray-100 w-2 rounded-[50%]"
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[795px] inset-y-[0] my-auto object-cover right-[0] w-[1285px]"
              src="images/img_pattern_black_900.png"
              alt="pattern_Three"
            />
          </div>
          <List
            className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-7xl mx-auto w-full"
            orientation="horizontal"
          >
            {laptopColumniconPropList.map((props, index) => (
              <React.Fragment key={`LaptopColumnicon${index}`}>
                <LaptopColumnicon
                  className="bg-gray-50 flex flex-1 flex-col md:gap-10 gap-16 h-full items-start justify-start p-6 sm:px-5 w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
        <div className="bg-white-A700 md:h-[1483px] sm:h-[469px] h-[880px] md:px-5 relative w-[1440px] md:w-full">
          <div className="absolute bg-gray-900_04 md:h-[458px] h-[649px] inset-x-[0] mx-auto pl-5 py-5 top-[0] w-full">
            <Text
              className="absolute inset-x-[0] mx-auto md:text-5xl text-[144px] top-[18%] tracking-[-2.88px] uppercase w-max"
              size="txtKrubBold144"
            >
              Инновац шингээсэн дэлхийн
            </Text>
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
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-24 w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center tracking-[-1.73px] uppercase w-auto"
            size="txtKrubBold36"
          >
            <span className="text-blue_gray-900 font-krub font-bold">
              Бүтээгдэхүүн{" "}
            </span>
            <span className="text-blue_gray-900 font-krub font-bold"> </span>
            <span className="text-blue_gray-900 font-krub font-light">
              үйлчилгээ
            </span>
          </Text>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 gap-16 items-center justify-start max-w-7xl mx-auto sm:px-5 w-full">
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <List
                className="flex flex-col gap-px items-center w-full"
                orientation="vertical"
              >
                <LaptopFeaturetab className="border-indigo-A400 border-l-4 border-solid flex flex-1 flex-col gap-5 items-start justify-start sm:pl-5 pl-6 py-4 w-full" />
                <LaptopFeaturetab1 className="border-gray-100_01 border-l-4 border-solid flex flex-1 flex-col gap-5 items-start justify-start sm:pl-5 pl-6 py-4 w-full" />
                <LaptopFeaturetab1
                  className="border-gray-100_01 border-l-4 border-solid flex flex-1 flex-col gap-5 items-start justify-start sm:pl-5 pl-6 py-4 w-full"
                  titletext="Гаалийн зуучлал"
                  descriptiontext="Гаалийн бүрдүүлэлт нь гаалийн хилээр нэвтрүүлэх барааг гаалийн байгууллагад мэдүүлсэн үеэс гаалийн бичиг баримтыг, шаардлагатай тохиолдолд барааг шалгах, ногдуулсан татварыг төлсний дараа барааг олгох, эсвэл гаалийн хилээр гаргахыг зөвшөөрөх хүртэлх цогц үйл ажиллагаа юм."
                />
              </List>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[53%] md:w-full">
              <div className="h-[618px] md:h-[634px] relative w-full">
                <Img
                  className="h-[618px] m-auto object-cover rounded-lg w-full"
                  src="defaultNoData.png"
                  alt="createfromframe"
                />
                <div className="absolute h-[618px] md:h-[634px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="h-[634px] m-auto object-cover w-full"
                    src="images/img_5.png"
                    alt="ThreeHundredSeventyOne_One"
                  />
                  <div className="absolute bottom-[1%] flex flex-col md:gap-10 gap-[255px] inset-x-[0] items-center justify-start mx-auto w-[95%]">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="circle"
                        color="white_A700_e5"
                        size="md"
                      >
                        <Img
                          src="images/img_arrowleft_blue_gray_800.svg"
                          alt="arrowleft_One"
                        />
                      </Button>
                      <Button
                        className="flex h-9 items-center justify-center w-9"
                        shape="circle"
                        color="white_A700_e5"
                        size="md"
                      >
                        <Img
                          src="images/img_arrowleft_blue_gray_800.svg"
                          alt="arrowright_One"
                        />
                      </Button>
                    </div>
                    <PagerIndicator
                      className="flex gap-3 h-6 items-center justify-center p-2 w-[84px]"
                      count={4}
                      activeCss="inline-block cursor-pointer h-2 bg-gray-900_02 w-2 rounded-[50%]"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer h-2 bg-blue_gray-100 w-2 rounded-[50%]"
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900_02 flex flex-col items-center justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 py-[124px] w-full">
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
        {/* <div className="bg-gray-50 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[300px] w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-center py-[120px] w-auto md:w-full">
            <div className="flex flex-col items-center justify-start md:px-5 w-auto sm:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center tracking-[-1.73px] w-auto"
                size="txtKrubBold36"
              >
                <span className="text-blue_gray-900 font-krub font-bold">
                  ХАМТРАГЧ{" "}
                </span>
                <span className="text-blue_gray-900 font-krub font-light">
                  БАЙГУУЛЛАГА
                </span>
              </Text>
            </div>
            <div className="flex flex-col gap-8 items-start justify-center w-auto md:w-full">
              <div className="overflow-x-auto w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] overflow-auto w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[135px]"
                    leftIcon={
                      <div className="mr-2 bg-light_blue-500 my-px">
                        <Img src="images/img_itools.svg" alt="iTools" />
                      </div>
                    }
                    shape="round"
                    color="white_A700"
                    size="md"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      iTools
                    </div>
                  </Button>
                  <Input
                    name="tradelogo"
                    placeholder="Data Science"
                    className="font-medium p-0 placeholder:text-gray-900_05 text-left text-lg tracking-[-0.43px] w-full"
                    wrapClassName="flex sm:flex-1 sm:w-full"
                    prefix={
                      <div className="h-7 mr-2 w-7 bg-red-A400">
                        <Img
                          className="h-7 my-auto"
                          src="images/img_settings_red_a400.svg"
                          alt="settings"
                        />
                      </div>
                    }
                  ></Input>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[131px]"
                    leftIcon={
                      <div className="h-7 mr-2 w-7 bg-green-A400">
                        <Img
                          className="h-7"
                          src="images/img_clock_green_a400.svg"
                          alt="clock"
                        />
                      </div>
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      Trade
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[169px]"
                    leftIcon={
                      <Img
                        className="h-7 mr-2"
                        src="images/img_fibo_cloud.svg"
                        alt="Fibo Cloud"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      Fibo Cloud
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[125px]"
                    leftIcon={
                      <Img
                        className="mr-2"
                        src="images/img_close_blue_a400_01.svg"
                        alt="close"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      iMap
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[158px]"
                    leftIcon={
                      <Img
                        className="mr-2"
                        src="images/img_cursor.svg"
                        alt="cursor"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      Jamuha
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[126px]"
                    leftIcon={
                      <Img
                        className="h-7 mr-2"
                        src="images/img_ubex.svg"
                        alt="Ubex"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      Ubex
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[145px]"
                    leftIcon={
                      <Img
                        className="h-7 mr-2"
                        src="images/img_itheme.png"
                        alt="iTheme"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      iTheme
                    </div>
                  </Button>
                </div>
              </div>
              <div className="overflow-x-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] overflow-auto px-10 sm:px-5 w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[150px]"
                    leftIcon={
                      <Img
                        className="h-7 mr-2"
                        src="images/img_television.svg"
                        alt="television"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      Lambda
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[147px]"
                    leftIcon={
                      <Img
                        className="mr-2"
                        src="images/img_thumbsup_indigo_a200_01.svg"
                        alt="thumbs_up"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      AI Tech
                    </div>
                  </Button>
                  <div className="bg-white-A700 flex flex-col items-center justify-center md:px-5 px-6 py-2.5 rounded-[24px] shadow-bs w-auto">
                    <div className="flex flex-row gap-2 items-center justify-center w-full">
                      <Img
                        className="h-7 md:h-auto object-cover w-[45%]"
                        src="images/img_cnet.png"
                        alt="cnet"
                      />
                      <Text
                        className="text-gray-900_05 text-lg tracking-[-0.43px]"
                        size="txtKrubMedium18"
                      >
                        Cnet
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-11 rounded-[22px] w-[109px]"
                    src="images/img_tradelogo.svg"
                    alt="tradelogo_One"
                  />
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[152px]"
                    leftIcon={
                      <Img
                        className="mr-2"
                        src="images/img_settings_blue_400.svg"
                        alt="settings"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      Asterisk
                    </div>
                  </Button>
                  <div className="bg-white-A700 flex flex-col items-center justify-center md:px-5 px-6 py-2 rounded-[22px] shadow-bs w-auto">
                    <div className="flex flex-row gap-2 items-start justify-center w-full">
                      <Img
                        className="h-7 md:h-auto object-cover w-[46%]"
                        src="images/img_image14.png"
                        alt="imageFourteen"
                      />
                      <Text
                        className="text-gray-900_05 text-lg tracking-[-0.43px]"
                        size="txtKrubMedium18"
                      >
                        Zeel
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[152px]"
                    leftIcon={
                      <Img
                        className="mr-2"
                        src="images/img_globe_deep_orange_a200.svg"
                        alt="globe"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      iContent
                    </div>
                  </Button>
                </div>
              </div>
              <div className="overflow-x-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[188px]"
                    leftIcon={
                      <Img
                        className="mr-2"
                        src="images/img_settings_deep_purple_900.svg"
                        alt="settings"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      DRM Rating
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[155px]"
                    leftIcon={
                      <Img
                        className="mr-[7px]"
                        src="images/img_television_gray_900_06.svg"
                        alt="television"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      User Tech
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[125px]"
                    leftIcon={
                      <div className="mr-2 w-[27px] bg-indigo-900_02">
                        <Img src="images/img_search.svg" alt="search" />
                      </div>
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      QPay
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[183px]"
                    leftIcon={
                      <Img
                        className="mr-[9px]"
                        src="images/img_thumbsup_cyan_800.svg"
                        alt="thumbs_up"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      MIB Rating
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[207px]"
                    leftIcon={
                      <Img
                        className="mr-2"
                        src="images/img_cloud_course.svg"
                        alt="Cloud Course"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      Cloud Course
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[181px]"
                    leftIcon={
                      <Img
                        className="mr-2"
                        src="images/img_settings_indigo_900_03.svg"
                        alt="settings"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      Good School
                    </div>
                  </Button>
                  <div className="bg-white-A700 flex flex-col items-center justify-center md:px-5 px-6 py-2.5 rounded-[24px] shadow-bs w-auto">
                    <div className="flex flex-row gap-2 items-start justify-center w-full">
                      <Img
                        className="h-7 md:h-auto object-cover w-[31%]"
                        src="images/img_image3.png"
                        alt="imageThree"
                      />
                      <Text
                        className="text-gray-900_05 text-lg tracking-[-0.43px]"
                        size="txtKrubMedium18"
                      >
                        EduPro
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1440px] overflow-auto px-10 sm:px-5 w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[150px]"
                    leftIcon={
                      <Img
                        className="h-7 mr-2"
                        src="images/img_television.svg"
                        alt="television"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      Lambda
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[147px]"
                    leftIcon={
                      <Img
                        className="mr-2"
                        src="images/img_thumbsup_indigo_a200_01.svg"
                        alt="thumbs_up"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      AI Tech
                    </div>
                  </Button>
                  <div className="bg-white-A700 flex flex-col items-center justify-center md:px-5 px-6 py-2.5 rounded-[24px] shadow-bs w-auto">
                    <div className="flex flex-row gap-2 items-center justify-center w-full">
                      <Img
                        className="h-7 md:h-auto object-cover w-[45%]"
                        src="images/img_cnet.png"
                        alt="cnet_Two"
                      />
                      <Text
                        className="text-gray-900_05 text-lg tracking-[-0.43px]"
                        size="txtKrubMedium18"
                      >
                        Cnet
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-11 rounded-[22px] w-[109px]"
                    src="images/img_tradelogo.svg"
                    alt="tradelogo_Two"
                  />
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[152px]"
                    leftIcon={
                      <Img
                        className="mr-2"
                        src="images/img_settings_blue_400.svg"
                        alt="settings"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      Asterisk
                    </div>
                  </Button>
                  <div className="bg-white-A700 flex flex-col items-center justify-center md:px-5 px-6 py-2 rounded-[22px] shadow-bs w-auto">
                    <div className="flex flex-row gap-2 items-start justify-center w-full">
                      <Img
                        className="h-7 md:h-auto object-cover w-[46%]"
                        src="images/img_image14.png"
                        alt="imageFourteen_One"
                      />
                      <Text
                        className="text-gray-900_05 text-lg tracking-[-0.43px]"
                        size="txtKrubMedium18"
                      >
                        Zeel
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[152px]"
                    leftIcon={
                      <Img
                        className="mr-2"
                        src="images/img_globe_deep_orange_a200_28x26.svg"
                        alt="globe"
                      />
                    }
                    shape="round"
                    color="white_A700"
                  >
                    <div className="font-medium text-left text-lg tracking-[-0.43px]">
                      iContent
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="bg-gray-100_02 flex flex-col md:gap-10 gap-[72px] items-center justify-center max-w-[1440px] md:px-10 px-20 sm:px-5 py-[124px] w-full">
          <div className="flex sm:flex-col flex-row md:gap-[55px] items-center justify-between max-w-7xl mx-auto w-full">
            <Button
              className="flex h-16 items-center justify-center rounded-[50%] w-16"
              shape="circle"
              color="white_A700"
              size="md"
            >
              <Img
                className="h-8"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </Button>
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center tracking-[-1.73px] uppercase w-auto"
              size="txtKrubBold36"
            >
              <span className="text-blue_gray-900 font-krub font-bold">
                Мэдээ{" "}
              </span>
              <span className="text-blue_gray-900 font-krub font-light">
                мэдээлэл
              </span>
            </Text>
            <Button
              className="flex h-16 items-center justify-center rounded-[50%] w-16"
              shape="circle"
              color="blue_700"
              size="md"
            >
              <Img
                className="h-8"
                src="images/img_arrowleft_white_a700.svg"
                alt="arrowleft_Two"
              />
            </Button>
          </div>
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 1 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="font-inter w-full"
            items={[...Array(5)].map(() => (
              <React.Fragment key={Math.random()}>
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 mx-2.5"
                  orientation="horizontal"
                >
                  {laptopBlogpostcardPropList1.map((props, index) => (
                    <React.Fragment key={`LaptopBlogpostcard${index}`}>
                      <LaptopBlogpostcard
                        className="bg-white-A700 flex flex-col gap-8 items-start justify-start pb-8 pt-6 sm:px-5 px-6 w-96 sm:w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer h-3 bg-blue-700 w-8 rounded-md" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-3 bg-blue-100 w-3"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="flex gap-2.5 h-3 items-start justify-start w-[120px]"
            count={5}
            activeCss="inline-block cursor-pointer h-3 bg-blue-700 w-8 rounded-md"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-blue-100 w-3"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div> */}
        {/* <div className="bg-gray-900_02 flex flex-col font-inter items-start justify-start max-w-[1440px] md:px-10 px-20 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[136px] items-center justify-between max-w-7xl mx-auto py-[124px] w-full">
            <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <Img
                className="h-[65px] md:h-auto object-cover w-[164px] sm:w-full"
                src="images/img_download1.png"
                alt="downloadTwo"
              />
              <Text
                className="leading-[24.00px] max-w-[312px] md:max-w-full text-base text-blue_gray-300"
                size="txtInterRegular16"
              >
                Монгол улс, Улаанбаатар хот, Баянгол дүүрэг, 4-р хороо,
                Үйлдвэрийн төвийн бүс – 1, Ажилчны гудамж 16010, Ти Ай Бизнес
                Центр
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-row gap-2 items-center justify-start pr-1.5 py-1.5 w-[48%] sm:w-full">
                  <Img
                    className="h-px"
                    src="images/img_line1.svg"
                    alt="lineOne"
                  />
                  <Text
                    className="mt-[3px] text-base text-white-A700"
                    size="txtInterMedium16"
                  >
                    Нүүр
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end pr-1.5 py-1.5">
                  <Text
                    className="mt-[3px] text-base text-blue_gray-400"
                    size="txtInterMedium16Bluegray400"
                  >
                    Мэдээ, мэдээлэл
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-start justify-end pr-1.5 py-1.5">
                  <Text
                    className="mt-[3px] text-base text-blue_gray-400"
                    size="txtInterMedium16Bluegray400"
                  >
                    Бүтээгдэхүүн үйлчилгээ
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end pr-1.5 py-1.5">
                  <Text
                    className="mt-[3px] text-base text-blue_gray-400"
                    size="txtInterMedium16Bluegray400"
                  >
                    Холбоо барих
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col items-start justify-end pr-1.5 py-1.5 w-full">
                  <Text
                    className="mt-[3px] text-base text-blue_gray-400"
                    size="txtInterMedium16Bluegray400"
                  >
                    Ажлын байр
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-auto">
              <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                <Button
                  className="flex h-10 items-center justify-center rounded-[5px] w-10"
                  color="white_A700_19"
                >
                  <Img
                    className="h-6"
                    src="images/img_phonecall02.svg"
                    alt="phonecallTwo"
                  />
                </Button>
                <Text
                  className="text-base text-blue_gray-300_01 w-auto"
                  size="txtInterMedium16Bluegray30001"
                >
                  Тээврийн газар: 7018 9889 (1)
                </Text>
              </div>
              <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                <Button
                  className="flex h-10 items-center justify-center rounded-[5px] w-10"
                  color="white_A700_19"
                >
                  <Img
                    className="h-6"
                    src="images/img_phonecall02.svg"
                    alt="phonecallTwo_One"
                  />
                </Button>
                <Text
                  className="text-base text-blue_gray-300_01 w-auto"
                  size="txtInterMedium16Bluegray30001"
                >
                  Терминалын газар: 7018 9889 (2)
                </Text>
              </div>
              <div className="flex flex-row gap-3.5 items-center justify-start w-auto">
                <Button
                  className="flex h-10 items-center justify-center rounded-[5px] w-10"
                  color="white_A700_19"
                >
                  <Img
                    className="h-6"
                    src="images/img_lock_white_a700.svg"
                    alt="lock_One"
                  />
                </Button>
                <Text
                  className="text-base text-blue_gray-300_01 w-auto"
                  size="txtInterMedium16Bluegray30001"
                >
                  И-Мэйл хаяг: office@til.mn
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-900_02 flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-7xl mx-auto md:px-5 py-8 shadow-bs2 w-full">
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <Button
                className="flex h-11 items-center justify-center rounded-[5px] w-11"
                color="white_A700_19"
                size="md"
              >
                <Img className="h-5" src="images/img_social.svg" alt="social" />
              </Button>
              <Button
                className="flex h-11 items-center justify-center rounded-[5px] w-11"
                color="white_A700_19"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_social_white_a700.svg"
                  alt="social_One"
                />
              </Button>
              <Button
                className="flex h-11 items-center justify-center rounded-[5px] w-11"
                color="white_A700_19"
                size="md"
              >
                <Img
                  className="h-5"
                  src="images/img_social_white_a700_44x44.svg"
                  alt="social_Two"
                />
              </Button>
            </div>
            <Text
              className="text-base text-center text-white-A700 w-auto"
              size="txtInterRegular16WhiteA700"
            >
              © 2024 Til.mn All Rights Reserved
            </Text>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default LaptopPage;
