import React from "react";
import NavBar from "./components/NavBar";
import LandingSection from "./components/LandingSection";
import ServiceSection from "./components/ServiceSection";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" flex flex-col justify-start items-center min-h-screen w-full max-w-[2000px] bg-red-200">
      <NavBar />
      <LandingSection />
      <ServiceSection />
    </div>
  );
};

export default page;
