import React from "react";
import Navbar from "@components/_App/Navbar";
import MainBanner from "@components/MachineLearning/MainBanner";
import WhatWeOffer from "@components/MachineLearning/WhatWeOffer";
import AboutUsContent from "@components/MachineLearning/AboutUsContent";
import Features from "@components/IOT/Features";
import FunFactsArea from "@components/Common/FunFactsArea";
import ServicesArea from "@components/ITStartup/ServicesArea";

const Index = () => {
  return (
    <>
      <MainBanner />
      {/* <Partner /> */}
      <WhatWeOffer />
      <AboutUsContent />
      <Features />

      <ServicesArea />
    </>
  );
};

export default Index;
