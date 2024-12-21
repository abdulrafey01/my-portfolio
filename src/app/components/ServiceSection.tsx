import React from "react";
import Service from "./Service";
import ServiceBg from "../assets/ServiceBackground.png";
import WebDevServiceImg from "@/app/components/Svgs/WebDevService.svg";
import UiUxServiceImg from "@/app/components/Svgs/UiUxService.svg";

type Props = {};

const ServiceSection = (props: Props) => {
  return (
    // z-10 to make it on top of bgPattern
    <div
      style={{ backgroundImage: `url(${ServiceBg.src})` }}
      className={` text-white z-10 w-full rounded-2xl py-4 px-[4rem] h-[40rem] flex flex-col justify-center items-center gap-12`}
    >
      {/* First container */}
      <div className="flex justify-between items-center w-full mb-8">
        <p className="text-4xl">
          My <span className="text-primary">Services</span>
        </p>
        <p className="w-[30rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales{" "}
        </p>
      </div>
      {/* Second Container */}
      <div className=" flex justify-between items-start   w-full">
        <Service title="Ui/Ux Design" img={WebDevServiceImg} />
        <Service title="Web Development" img={UiUxServiceImg} />
        <Service title="Mobile App Development" img={WebDevServiceImg} />
      </div>
    </div>
  );
};

export default ServiceSection;
