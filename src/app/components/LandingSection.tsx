import React from "react";
import { Urbanist } from "next/font/google";
import Vector1 from "./Svgs/Vector1";
import Vector2 from "./Svgs/Vector2";
import Ellipse from "./Svgs/Ellipse";
import MyPic from "@/app/assets/MyPic.png";
import Image from "next/image";
type Props = {};

const urbanist = Urbanist({ subsets: ["latin"] });
const LandingSection = (props: Props) => {
  return (
    <div className="bg-green-300 flex flex-col gap-2 justify-center items-center">
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
      </div>
    </div>
  );
};

export default LandingSection;
