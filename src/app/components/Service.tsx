"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import LinkArrow from "./Svgs/LinkArrow";
import ServiceBg from "../assets/ServiceBackground.png";
import { motion } from "motion/react";

type Props = {
  title: string;
  img: string;
};

const Service = ({ title, img }: Props) => {
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

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ backgroundColor: "#FD853A" }}
      className="relative border-gray-500 border backdrop-blur-lg rounded-t-2xl w-80 h-80"
    >
      <div className="absolute -z-10 bg-white opacity-10 w-full h-full rounded-2xl"></div>
      <p className="text-xl  py-4 px-4">{title} </p>
      {/* underline */}
      <hr />
      <motion.div
        // on scale image on hover border shows due to overflow hidden therefore conditionally controlling overflow
        animate={{
          overflow: containerOverflowHidden ? "hidden" : "visible",
        }}
        className="relative w-full border-transparent  rounded-b-2xl"
      >
        <motion.div animate={{ scale: isHovered ? 1.1 : 1 }}>
          <Image className="mt-10" src={img} alt="" />
        </motion.div>
        <div
          style={{
            borderBottomLeftRadius: "0px",
          }}
          className="w-12 z-10 h-28  bg-transparent border-2 border-t-transparent border-l-transparent   rounded-b-3xl  absolute right-0  bottom-24"
        ></div>
        <div
          style={{
            borderBottomLeftRadius: "0px",
          }}
          className="w-36 z-10  h-14  bg-transparent  border-2 border-t-transparent border-l-transparent  rounded-b-3xl   absolute right-24  bottom-0"
        ></div>
        <div
          style={{
            backgroundImage: `url(${ServiceBg.src})`,
            clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
          }}
          className="absolute bottom-[0px] -right-[1px] w-[113px] h-[114px]"
        ></div>
        <div
          style={{
            backgroundImage: `url(${ServiceBg.src})`,
            clipPath: "polygon(0 56%, 58% 0, 100% 0, 0 100%)",
          }}
          className=" absolute bottom-[13px] right-[15px] w-[83px] h-[83px]"
        ></div>
        <div
          style={{
            backgroundImage: `url(${ServiceBg.src})`,
          }}
          className=" w-24 h-24 absolute rounded-full bottom-0 right-0 flex justify-center items-center"
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
      </motion.div>
    </motion.div>
  );
};

export default Service;
