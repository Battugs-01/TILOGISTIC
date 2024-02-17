import { Button, Img, Line, Text } from "components";
import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900_02 flex flex-col font-inter items-start justify-start max-w-full md:px-10 px-20 sm:px-5 w-full">
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
              Монгол улс, Улаанбаатар хот, Баянгол дүүрэг, 4-р хороо, Үйлдвэрийн
              төвийн бүс – 1, Ажилчны гудамж 16010, Ти Ай Бизнес Центр
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
      </div>
    </>
  );
};

export default Contact;
