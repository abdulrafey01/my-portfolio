"use client";
import Image from "next/image";
import React from "react";
import WebDevServiceImg from "@/app/components/Svgs/WebDevService.svg";
import Arrow from "./Svgs/Arrow";
import { motion } from "motion/react";

type Props = {};

const Project = (props: Props) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-[35rem] h-72 bg-primary rounded-3xl"
    >
      {/* Background Black */}
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-10 rounded-3xl"></div>
      {/* Image */}
      <Image
        src={WebDevServiceImg}
        alt=""
        className="w-full object-cover h-full rounded-3xl"
      />
      {/* Arrow */}
      <motion.div
        animate={{ backgroundColor: isHovered ? "#FD853A" : "#E4E7EC" }}
        className="w-10 h-10 rounded-full  border-primary border-[1px] absolute top-4 right-4 z-10 flex justify-center items-center"
      >
        <Arrow
          className={`w-4 h-auto ${isHovered ? "fill-white" : "fill-primary"}`}
        />
      </motion.div>
      {/* Content */}
      <motion.div className=" p-2  absolute w-full bottom-0 overflow-hidden z-10  ">
        <motion.div
          animate={{ backdropFilter: isHovered ? "blur(10px)" : "blur(0px)" }}
          className="flex flex-col gap-2    rounded-2xl py-2 px-4"
        >
          <p
            style={{ textShadow: "2px 2px 8px black" }}
            className="text-3xl text-white font-bold"
          >
            Lirante
          </p>
          <motion.p
            layout
            animate={{
              scale: isHovered ? 1 : 0,
            }}
            style={{ display: isHovered ? "block" : "none" }}
            className="text-white text-sm"
          >
            Lorem, ipsum dolor sit amet adipisicing elit. Sequi similique vitae
            odit?
          </motion.p>
        </motion.div>
      </motion.div>
      {/* Lower container to add black opacity */}
      <motion.div
        animate={{ scale: isHovered ? 1 : 0 }}
        className=" p-2  absolute w-full h-[105px] bottom-0  "
      >
        <div className="py-2 px-4 rounded-2xl   w-full h-full bg-black opacity-45 "></div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
