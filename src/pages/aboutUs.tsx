import { Button, Img, Line, List, PagerIndicator, Text } from "components";
import LaptopColumnicon from "components/LaptopColumnicon";
import React from "react";

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

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col md:gap-10 gap-[69px] items-center justify-center max-w-full md:px-10 px-20 sm:px-5 py-24 w-full">
        <div className="relative w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-center space-around max-w-full mb-[47px] mt-auto w-full">
            <div className="flex flex-1 flex-col gap-10 w-full ml-10">
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
                <Text
                  className="leading-[28.00px] md:max-w-full max-w-xl text-blue_gray-700 text-justify text-lg"
                  size="txtKrubRegular18"
                >
                  “ТИ АЙ ЛОЖИСТИК” ХХК нь 2011 онд 100 хувийн дотоодын хөрөнгө
                  оруулалттайгаар байгуулагдсан үндэсний тээвэр зуучийн
                  компаниудын нэг юм. Улаанбаатар хотын А зэрэглэлийн бүсэд
                  байрлах өөрийн эзэмшлийн “Нэг цэгийн үйлчилгээ” бүхий “ТЭЭВЭР
                  ҮЙЛЧИЛГЭЭНИЙ ЦОГЦОЛБОР”-т гаалийн хяналтын бүс, стандартын
                  шаардлага хангасан гаалийн баталгаат болон түр агуулах
                  ажиллуулан тээвэр логистикийн цогц үйлчилгээг үзүүлж байна.
                  Бид дэлхийн улс орнуудад байрлах агентын өргөн сүлжээгээ
                  ашиглан үйлчлүүлэгчиддээ авто, агаар, далай, төмөр замын бүх
                  төрлийн тээврийн замналаар улс хоорондын болон орон нутгийн
                  ачаа тээврийг хаалганаас хаалганд хүргэн үйлчилдэг. Компанийн
                  урт хугацааны тогтвортой үйл ажиллагааг хангах, удирдлагын
                  болон зохион байгуулалтын уялдааг нэмэгдүүлэх, бүтээгдэхүүн
                  үйлчилгээний чанарыг сайжруулах, хэрэглэгчдийн сэтгэл
                  ханамжийг өсгөх зорилгоор Чанарын менежментийн тогтолцоо (ISO
                  9001:2015) стандартыг үйл ажиллагаандаа нэвтрүүлэн ажиллаж
                  байна. Бид үйлчлүүлэгчдийнхээ байнгын найдвартай түнш,
                  мэргэжлийн зөвлөх байж чадна гэдэгтээ итгэлтэй байдаг.
                </Text>
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
    </>
  );
};

export default AboutUs;
