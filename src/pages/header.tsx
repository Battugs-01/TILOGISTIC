import { Button, Img, Text } from "components";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 flex md:flex-col md:gap-10 items-center justify-around px-20 md:px-5 py-[18px] w-full">
      <Img
        className="sm:flex-1 h-[65px] md:h-auto object-cover  sm:w-full"
        src="images/img_download1.png"
        alt="downloadOne"
      />
      <div className="flex flex-row items-center justify-center gap-3.5">
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
      <div className="flex flex-row gap-3.5 items-center justify-center">
        <Button
          className="border border-indigo-900_01 border-solid flex h-[63px] items-center justify-center rounded-full w-[63px]"
          color="indigo_900"
          size="xl"
        >
          <Img src="images/img_call.svg" alt="call" />
        </Button>
        <Text
          className="leading-[135.02%]  text-sm text-white-A700"
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
  );
};

export default Header;
