import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import LaptopBlogpostcard from "components/LaptopBlogpostcard";
import React from "react";
import { useRef } from "react";

const News: React.FC = () => {
  const sliderRef = useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const laptopBlogpostcardPropList1 = [
    {},
    { image: "images/img_image_280x336.png" },
    { image: "images/img_image_1.png" },
    { image: "images/img_image_2.png" },
  ];
  return (
    <>
      <div className="bg-gray-100_02 flex flex-col md:gap-10 gap-[72px] items-center justify-center max-w-full md:px-10 px-20 sm:px-5 py-[124px] w-full">
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
      </div>
    </>
  );
};

export default News;
