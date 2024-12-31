import React from "react";
import NavBar from "./components/NavBar";
import LandingSection from "./components/LandingSection";
import ServiceSection from "./components/ServiceSection";
import ExperienceSection from "./components/ExperienceSection";
import HireMeSection from "./components/HireMeSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full max-w-[2000px] bg-red-200">
      <NavBar />
      <LandingSection />
      <ServiceSection />
      <ExperienceSection />
      <HireMeSection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
};

export default page;
