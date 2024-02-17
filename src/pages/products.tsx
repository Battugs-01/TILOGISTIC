import { Button, Img, Line, List, PagerIndicator, Text } from "components";
import LaptopFeaturetab from "components/LaptopFeaturetab";
import LaptopFeaturetab1 from "components/LaptopFeaturetab1";
import React from "react";

const Products: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col md:gap-10 gap-16 items-center justify-start max-w-full md:px-10 px-20 sm:px-5 py-24 w-full">
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
    </>
  );
};

export default Products;
