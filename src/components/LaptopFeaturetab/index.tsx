import React from "react";

import { Text } from "components";

type LaptopFeaturetabProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "titletext" | "descriptiontext"
> &
  Partial<{ titletext: string; descriptiontext: string }>;

const LaptopFeaturetab: React.FC<LaptopFeaturetabProps> = (props) => {
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

LaptopFeaturetab.defaultProps = {
  titletext: "Олон улсын тээвэр зуучлал",
  descriptiontext:
    "Бид дэлхийн улс орнуудад байрлах агентын өргөн сүлжээгээ ашиглан үйлчлүүлэгчиддээ авто, агаар, далай, төмөр замын бүх төрлийн тээврийн замналаар улс хоорондын болон орон нутгийн ачаа тээврийг хаалганаас хаалганд хүргэн үйлчилдэг.",
};

export default LaptopFeaturetab;
