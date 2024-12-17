import React from "react";
import NavBar from "./components/NavBar";
import LandingSection from "./components/LandingSection";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col  items-center min-h-screen bg-red-200">
      <NavBar />
      <LandingSection />
    </div>
  );
};

export default page;
