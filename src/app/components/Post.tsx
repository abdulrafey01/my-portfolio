"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect } from "react";

import LinkArrow from "./Svgs/LinkArrow";
import ServiceBg from "../assets/ServiceBackground.png";

import WebDevServiceImg from "@/app/assets/ServiceBackground.png";
type Props = {};

const Post = (props: Props) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [containerOverflowHidden, setContainerOverflowHidden] =
    React.useState(false);

  useEffect(() => {
    if (isHovered) {
      setContainerOverflowHidden(true);
    }
    if (!isHovered) {
      setTimeout(() => {
        setContainerOverflowHidden(false);
      }, 100);
    }
  }, [isHovered]);

  const text = "Design Unraveled: Behind the Scenes of UI/UX Magic";

  const splitText = (text: string) => {
    return (
      <div>
        <p> {text.split(" ").slice(0, 3).join(" ")} </p>
        <p> {text.split(" ").slice(4).join(" ")}</p>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ backgroundColor: "#FD853A" }}
        className="relative border-none overflow-hidden  rounded-2xl outline-none w-80 h-[22rem]"
      >
        <div className="relative h-full w-full border-transparent  rounded-b-2xl">
          <div className="w-full h-full border-none bg-red-700">
            <Image
              className="object-cover w-full h-full border-none bg-blue-400"
              src={WebDevServiceImg}
              alt=""
            />
          </div>
          <div
            style={{
              borderBottomLeftRadius: "0px",
            }}
            className="w-12 z-10 h-28  bg-transparent border-2 border-t-transparent border-l-transparent   rounded-b-3xl  absolute right-[-2px]  bottom-[96px]"
          ></div>
          <div
            style={{
              borderBottomLeftRadius: "0px",
            }}
            className="w-36 z-10  h-14  bg-transparent  border-2 border-t-transparent border-l-transparent  rounded-b-3xl   absolute right-24  bottom-[-1px]"
          ></div>
          <div
            style={{
              clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
            }}
            className=" bg-white absolute border-none bottom-[0px] -right-[1px] w-[113px] h-[113px]"
          ></div>
          <div
            style={{
              clipPath: "polygon(0 56%, 58% 0, 100% 0, 0 100%)",
            }}
            className=" bg-white border-none  absolute bottom-[13px] right-[15px] rotate-[1deg] w-[82px] h-[85px]"
          ></div>
          <div
            style={{}}
            className="  bg-white w-24 h-24 absolute rounded-full bottom-0 right-0 flex justify-center items-center"
          >
            <motion.div
              animate={{
                backgroundColor: isHovered ? "#FD853A" : "#1D2939",
                translateY: isHovered ? "5px" : "-3px",
              }}
              transition={{ duration: 0.1 }}
              className="w-20 h-20 rounded-full  flex justify-center items-center"
            >
              <LinkArrow className="w-10 h-10" />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="flex p-2 w-40 justify-center items-center  rounded-full bg-[#F2F4F7]">
        UI/UX Design
      </div>
      <div className="flex bg-red-500 justify-start items-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <p className="text-sm text-secondary">Abdul Rafey</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <p className="text-sm text-secondary">10 Nov 2024</p>
        </div>
      </div>
      {(() => {
        const halfIndex = Math.floor(text.length / 2);
        const firstHalf = text.slice(0, halfIndex);
        const secondHalf = text.slice(halfIndex);
        return (
          <div className="w-full text-2xl font-base">
            <p>{firstHalf}</p>
            <p>{secondHalf}</p>
          </div>
        );
      })()}
    </div>
  );
};

export default Post;
