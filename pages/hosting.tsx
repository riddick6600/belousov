import React from "react";
import MainBanner from "@components/Hosting/MainBanner";
import TopFeatures from "@components/Hosting/TopFeatures";
import DomainSearch from "@components/Hosting/DomainSearch";
import WhyChoose from "@components/Hosting/WhyChoose";
import PricingStyleTwo from "@components/PricingPlans/PricingStyleTwo";
import FeedbackStyleTwo from "@components/Common/FeedbackStyleTwo";
import Partner from "@components/Common/Partner";
import Features from "@components/Hosting/Features";
import BlogPost from "@components/Common/BlogPost";
import CTA from "@components/Common/CTA";

export const getStaticProps = () => {
  return {
    props: {
      transparent: true,
    },
  };
};

const Hosting = () => {
  return (
    <>
      <MainBanner />
      {/* <TopFeatures />
      <DomainSearch />
      <WhyChoose />
      <PricingStyleTwo />
      <FeedbackStyleTwo />
      <div className="pb-80">
        <Partner />
      </div>
      <Features />
      <BlogPost />
      <CTA /> */}
    </>
  );
};

export default Hosting;
