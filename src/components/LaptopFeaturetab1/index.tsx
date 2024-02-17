import React from "react";

import { Text } from "components";

type LaptopFeaturetab1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titletext" | "descriptiontext"
> &
  Partial<{ titletext: string; descriptiontext: string }>;

const LaptopFeaturetab1: React.FC<LaptopFeaturetab1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-center justify-start w-full">
          <Text
            className="text-gray-900_02 text-xl w-full"
            size="txtInterSemiBold20"
          >
            {props?.titletext}
          </Text>
          <Text
            className="leading-[24.00px] max-w-[488px] md:max-w-full text-base text-blue_gray-700"
            size="txtInterRegular16Bluegray700"
          >
            {props?.descriptiontext}
          </Text>
        </div>
      </div>
    </>
  );
};

LaptopFeaturetab1.defaultProps = {
  titletext: "Гаалийн терминал",
  descriptiontext:
    "Улаанбаатар хотын А зэрэглэлийн бүсэд байрлах өөрийн эзэмшлийн “Нэг цэгийн үйлчилгээ” бүхий “ТЭЭВЭР ҮЙЛЧИЛГЭЭНИЙ ЦОГЦОЛБОР”-т Гаалийн хяналтын бүс, стандартын шаардлага хангасан гаалийн баталгаат болон түр агуулах ажиллуулан тээвэр логистикийн цогц үйлчилгээг үзүүлж байна.",
};

export default LaptopFeaturetab1;
