import React from "react";
import MainBanner from "@components/PCRepair/MainBanner";
import PartnerStyleTwo from "@components/Common/PartnerStyleTwo";
import AboutUsContent from "@components/PCRepair/AboutUsContent";
import Services from "@components/PCRepair/Services";
import CTA from "@components/PCRepair/CTA";
import FunFactsArea from "@components/Common/FunFactsArea";
import Team from "@components/PCRepair/Team";
import Feedback from "@components/Common/Feedback";
import WhyChoose from "@components/PCRepair/WhyChoose";
import BlogPost from "@components/Common/BlogPost";

const Repair = () => {
  return (
    <>
      <MainBanner />
      <PartnerStyleTwo />
      <AboutUsContent />
      <Services />
      <CTA />
      <FunFactsArea />
      <Team />
      <Feedback />
      <WhyChoose />
      <BlogPost />
    </>
  );
};

export default Repair;
