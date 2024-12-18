import React from "react";
import { Urbanist } from "next/font/google";
import Vector1 from "./Svgs/Vector1";
import Vector2 from "./Svgs/Vector2";
import Ellipse from "./Svgs/Ellipse";
import MyPic from "@/app/assets/MyPic.png";
import Image from "next/image";
import QuotesUp from "./Svgs/QuotesUp";
import Stars from "./Svgs/Stars";
import LinkArrow from "./Svgs/LinkArrow";
type Props = {};

const urbanist = Urbanist({ subsets: ["latin"] });
const LandingSection = (props: Props) => {
  return (
    <div className="w-full flex justify-between items-center bg-blue-200 px-12">
      {/* Left container */}
      <div className="w-80 flex flex-col gap-2 items-start bg-primary">
        <QuotesUp />
        <p className="text-left">
          Jenny's Exceptional product design ensure our website's success.
          Highly Recommended
        </p>
      </div>
      {/* Middle Container */}
      <div className="bg-green-300 flex flex-col gap-2 justify-center items-center min-w-[40rem]">
        <div className="relative mt-10 py-2 px-6 border-2 border-black rounded-full">
          <Vector1 className="w-6 h-6 absolute -right-4 -top-5" />
          <p>Hello!</p>
        </div>
        <div
          className={`relative flex flex-col gap-2 justify-center items-center text-6xl font-medium  ${urbanist.className}`}
        >
          <p>
            I'm <span className="text-primary">Abdul Rafey,</span>
          </p>
          <p>MERN Stack Developer</p>
          <Vector2 className="w-14 h-14 absolute -left-10 -bottom-9" />
        </div>
        <div className="relative">
          <Ellipse className="w-auto h-[18rem] mt-20" />
          <Image
            src={MyPic}
            className=" h-[28rem] w-auto  absolute bottom-0 -left-6"
            alt="My Profile Picture"
          />
          <div className="absolute z-10 backdrop-blur-sm  text-white bottom-0 left-36 p-1 border-b-[1px] border-l-[1px] border-t-[1px] border-t-gray-300   border-white rounded-full flex  justify-center items-center">
            <div className="bg-primary py-2 px-6 rounded-full flex justify-center items-center gap-1">
              <p>Portfolio</p>
              <LinkArrow className="w-6 h-6" />
            </div>
            <div className="py-2 px-6 font-light rounded-full">Hire Me</div>
          </div>
        </div>
      </div>
      {/* Right Container */}
      <div className="flex flex-col items-end gap-2 bg-pink-300  w-80">
        <Stars />
        <div className=" w-fit text-right flex flex-col  bg-red-200">
          <p className="text-4xl tracking-tight font-medium">10 Years</p>
          <p className="text-sm">Experience</p>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
