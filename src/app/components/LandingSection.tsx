"use client";
import React from "react";
import { Urbanist } from "next/font/google";
import Vector1 from "./Svgs/Vector1";
import Vector2 from "./Svgs/Vector2";
import Ellipse from "./Svgs/Ellipse";
import MyPic from "@/app/assets/MyPic5.png";
import Image from "next/image";
import QuotesUp from "./Svgs/QuotesUp";
import Stars from "./Svgs/Stars";
import LinkArrow from "./Svgs/LinkArrow";
import { motion } from "motion/react";
import BgPattern from "./Svgs/BgPattern";

type Props = {};

const urbanist = Urbanist({ subsets: ["latin"] });
const LandingSection = (props: Props) => {
  const [isPatternHovered, setIsPatternHovered] = React.useState(false);
  const [btnHovered, setBtnHovered] = React.useState(1);
  return (
    <div className="w-full flex justify-between items-center bg-blue-200 px-12">
      {/* Left container */}
      <motion.div
        animate={{ y: isPatternHovered ? -150 : 0 }}
        className="w-80 flex flex-col gap-2 items-start bg-primary"
      >
        <QuotesUp className="w-9 h-9 fill-[#344054]" />
        <p className="text-left">
          Jenny's Exceptional product design ensure our website's success.
          Highly Recommended
        </p>
      </motion.div>
      {/* Middle Container */}
      <div className="bg-green-300 flex flex-col gap-2 justify-center items-center min-w-[40rem]">
        <motion.div
          animate={{
            y: isPatternHovered ? 150 : 0,
            scale: isPatternHovered ? 0.5 : 1,
          }}
          className="relative mt-10 py-2 px-6 border-2 border-black rounded-full"
        >
          <Vector1 className="w-6 h-6 absolute -right-4 -top-5 stroke-primary" />
          <p>Hello!</p>
        </motion.div>
        <motion.div
          animate={{
            y: isPatternHovered ? 150 : 0,
            scale: isPatternHovered ? 0.5 : 1,
          }}
          className={`relative flex flex-col gap-2 justify-center items-center text-6xl font-[600]  ${urbanist.className}`}
        >
          <p>
            I'm <span className="text-primary">Abdul Rafey,</span>
          </p>
          <p>MERN Stack Developer</p>
          <Vector2 className="w-14 h-14 absolute -left-10 -bottom-9" />
        </motion.div>
        <motion.div
          onHoverStart={() => setIsPatternHovered(true)}
          onHoverEnd={() => setIsPatternHovered(false)}
          className="relative bg-red-500"
        >
          <Ellipse className="w-auto h-[18rem] mt-20" />
          {/* <Image
            src={MyPic}
            className="w-[36rem] absolute bottom-0 -left-6 z-10"
            alt="My Profile Picture"
          /> */}

          <BgPattern
            isPatternHovered={isPatternHovered}
            setIsPatternHovered={setIsPatternHovered}
            className="absolute top-[-22rem] right-[-2rem] w-[43rem]"
          />

          <div className="absolute z-10 backdrop-blur-sm  text-white bottom-8 left-36 p-1 border-b-[1px] border-l-[1px] border-t-[1px] border-t-gray-300   border-white rounded-full flex  justify-center items-center">
            <motion.div
              initial={{ width: "6rem" }}
              animate={{
                width: btnHovered === 1 ? "8rem" : "6rem",
                backgroundColor: btnHovered === 1 ? "#fd853a " : "transparent",
                fontWeight: btnHovered === 1 ? "normal" : "lighter",
              }}
              transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
              className=" py-2 px-6 rounded-full flex justify-center items-center gap-1"
            >
              <p>Portfolio</p>
              <motion.div
                layout
                animate={{
                  scale: btnHovered === 1 ? 1 : 0,
                }}
                style={{ display: btnHovered === 1 ? "block" : "none" }}
              >
                <LinkArrow className="w-6 h-6" />
              </motion.div>
            </motion.div>
            <motion.div
              onHoverStart={() => setBtnHovered(2)}
              onHoverEnd={() => setBtnHovered(1)}
              initial={{ width: "6rem" }}
              animate={{
                width: btnHovered === 2 ? "8rem" : "6rem",
                backgroundColor: btnHovered === 2 ? "#fd853a " : "transparent",
                fontWeight: btnHovered === 2 ? "normal" : "lighter",
              }}
              transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
              className="py-2 px-6 rounded-full flex justify-center items-center gap-1 text-nowrap"
            >
              Hire Me
              <motion.div
                layout
                animate={{
                  scale: btnHovered === 2 ? 1 : 0,
                }}
                style={{ display: btnHovered === 2 ? "block" : "none" }}
              >
                <LinkArrow className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Right Container */}
      <motion.div
        animate={{ y: isPatternHovered ? -150 : 0 }}
        className="flex flex-col items-end gap-2 bg-pink-300  w-80"
      >
        <Stars />
        <div className=" w-fit text-right flex flex-col  bg-red-200">
          <p className="text-4xl tracking-tight font-medium">10 Years</p>
          <p className="text-sm">Experience</p>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingSection;
