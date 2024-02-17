import React from "react";

import { Img, Text } from "components";

type LaptopBlogpostcardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "image" | "heading" | "supportingtext" | "text"
> &
  Partial<{
    image: string;
    heading: string;
    supportingtext: string;
    text: string;
  }>;

const LaptopBlogpostcard: React.FC<LaptopBlogpostcardProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[280px] md:h-auto object-cover w-full"
          alt="image"
          src={props?.image}
        />
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl w-full"
              size="txtInterSemiBold24"
            >
              {props?.heading}
            </Text>
            <Text
              className="leading-[24.00px] max-w-[336px] md:max-w-full text-base text-blue_gray-700"
              size="txtInterRegular16Bluegray700"
            >
              {props?.supportingtext}
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center w-auto">
            <Text
              className="text-base text-indigo-600 w-auto"
              size="txtInterSemiBold16"
            >
              {props?.text}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_arrowleft_indigo_600.svg"
              alt="arrowleft"
            />
          </div>
        </div>
      </div>
    </>
  );
};

LaptopBlogpostcard.defaultProps = {
  image: "images/img_image.png",
  heading: "UX review presentations",
  supportingtext:
    "How do you create compelling presentations that wow your colleagues and impress your managers?",
  text: "Дэлгэрэнгүй",
};

export default LaptopBlogpostcard;
