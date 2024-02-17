import React from "react";

import { Img, Text } from "components";

type LaptopColumniconProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titletext" | "supportingtext"
> &
  Partial<{ titletext: string; supportingtext: string }>;

const LaptopColumnicon: React.FC<LaptopColumniconProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[58px] md:h-auto object-cover w-[58px]"
          src="images/img_icon_gray_900_03.png"
          alt="icon"
        />
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text
              className="text-gray-900_02 text-xl w-full"
              size="txtKrubSemiBold20Gray90002"
            >
              {props?.titletext}
            </Text>
            <Text
              className="leading-[24.00px] max-w-[357px] md:max-w-full text-base text-blue_gray-700"
              size="txtKrubRegular16Bluegray700"
            >
              {props?.supportingtext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

LaptopColumnicon.defaultProps = {
  titletext: "АЛСЫН ХАРАА",
  supportingtext:
    "Инноваци шингээсэн, дэлхийн энтэй тээвэр логистикийн төгс шийдлийг бизнес бүрт хүргэнэ.",
};

export default LaptopColumnicon;
