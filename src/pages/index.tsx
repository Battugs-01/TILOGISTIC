import { Button, Img, Text } from "components";
import React from "react";
import Header from "./header";
import Menu from "./menu";
import AboutUs from "./aboutUs";
import Intro from "./intro";
import Products from "./products";
import Seizures from "./seizures";
import News from "./news";
import Contact from "./contact";

const Main: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-krub items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header />
        <Menu />
        <AboutUs />
        <Intro />
        <Products />
        <Seizures />
        <News />
        <Contact />
      </div>
    </>
  );
};

export default Main;
