"use client";
import React from "react";
import ExpTextContainer from "./ExpTextContainer";
import Image from "next/image";
import MyPic from "@/app/assets/MyPic2.png";
import CirclePattern from "./Svgs/CirclePattern";
import { motion } from "motion/react";
type Props = {};

const HireMeSection = (props: Props) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="mt-16 flex w-full p-12 bg-green-500 justify-center items-center gap-8 ">
      {/* First COntainer  */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{ translateY: isHovered ? 10 : 0 }}
        className="relative w-full h-full flex justify-end items-end "
      >
        <Image
          src={MyPic}
          alt=""
          className="absolute w-[23rem]  -right-12 -top-[3.8em] z-30"
        />
        <CirclePattern
          isHovered={isHovered}
          className="absolute bottom-20 -right-4 h-auto w-80 z-10"
        />

        <div className="relative top-4 w-[17rem] h-[17rem] bg-primary rounded-[4rem] z-20"></div>
      </motion.div>
      {/* Second Container   */}
      <div className="flex w-full bg-yellow-100 flex-col gap-6">
        <p className="text-6xl text-secondary  font-medium">
          Why <span className="text-primary">Hire me</span>?
        </p>
        <p className="w-96 text-gray-300 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales{" "}
        </p>
        <div className="flex justify-start items-center gap-12 bg-red-400">
          <div className="flex flex-col justify-start items-start">
            <p className="font-medium">450+</p>
            <p className="text-gray-300">Project Completed</p>
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="font-medium">450+</p>
            <p className="text-gray-300">Project Completed</p>
          </div>
        </div>
        <div className="font-medium p-4 rounded-2xl text-center border-[1px] border-black hover:bg-black hover:text-white transition-colors cursor-pointer w-28">
          Hire me
        </div>
      </div>
    </div>
  );
};

export default HireMeSection;
