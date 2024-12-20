import React from "react";
import Service from "./Service";
type Props = {};

const ServiceSection = (props: Props) => {
  return (
    // z-10 to make it on top of bgPattern
    <div className=" bg-[url('@/app/assets/ServiceBackground.png')] text-white z-10 w-full rounded-2xl py-4 px-[4rem] ">
      {/* First container */}
      <div className="flex justify-between items-center ">
        <p className="text-3xl">
          My <span className="text-primary">Services</span>
        </p>
        <p className="w-[30rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales{" "}
        </p>
      </div>
      {/* Second Container */}
      <div className=" flex justify-center items-center">
        <Service />
      </div>
    </div>
  );
};

export default ServiceSection;
