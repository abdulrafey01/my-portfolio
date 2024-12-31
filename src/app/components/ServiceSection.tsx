"use client";
import React, { useEffect } from "react";
import Service from "./Service";
import ServiceBg from "../assets/ServiceBackground.png";
import WebDevServiceImg from "@/app/components/Svgs/WebDevService.svg";
import UiUxServiceImg from "@/app/components/Svgs/UiUxService.svg";
import Illustration1 from "@/app/assets/Illustration1.png";
import Illustration2 from "@/app/assets/Illustration2.png";
import Illustration3 from "@/app/assets/Illustration3.png";
import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import ScrollDots from "./ScrollDots";

type Props = {};

const ServiceSection = (props: Props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    // z-10 to make it on top of bgPattern
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        backgroundImage: `url(${ServiceBg.src})`,
        backgroundSize: "cover",
      }}
      className={`relative overflow-hidden text-white z-10 w-full rounded-[3rem] py-4 px-[4rem] h-[40rem] flex flex-col justify-center items-center gap-12`}
    >
      {/* Illustration 1 */}
      {/* If hovered then rotate and translate more and once otherwise keep rotate and translate but lesser and infinity times */}
      <motion.div
        // animate={{
        //   rotate: isHovered ? 30 : [0, 10, 0],
        //   translateX: isHovered ? -50 : [0, -15, 0],
        // }}
        animate={{
          rotate: isHovered ? 30 : 0,
          translateX: isHovered ? -50 : 0,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute top-0 -left-28 animate-pulse "
      >
        <Image src={Illustration1} alt="Illustration1" />
      </motion.div>
      {/* Illustration 2 */}
      <motion.div
        // animate={{
        //   rotate: isHovered ? 90 : [0, 10, 0],
        //   translateX: isHovered ? 200 : [0, -15, 0],
        // }}
        animate={{
          rotate: isHovered ? 90 : 0,
          translateX: isHovered ? 200 : 0,
        }}
        transition={{
          duration: 1,
        }}
        className={`absolute top-0 left-[30%] animate-pulse`}
      >
        <Image src={Illustration2} alt="Illustration2" />
      </motion.div>
      {/* Illustration 3 */}
      <motion.div
        animate={{
          translateX: isHovered ? 50 : 0,
        }}
        transition={{
          duration: 1,
        }}
        className="absolute top-0 right-0 animate-pulse"
      >
        <Image
          className="rotate-[-20deg] translate-x-12"
          src={Illustration3}
          alt="Illustration2"
        />
      </motion.div>
      {/* First container */}
      <div className="flex justify-between items-center w-full mb-8">
        <p className="text-6xl">
          My <span className="text-primary">Services</span>
        </p>
        <p className="w-[30rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales{" "}
        </p>
      </div>
      {/* Second Container */}
      <div className=" flex justify-between items-start w-full">
        <Service title="Ui/Ux Design" img={WebDevServiceImg} />
        <Service title="Web Development" img={UiUxServiceImg} />
        <Service title="Mobile App Development" img={WebDevServiceImg} />
      </div>
      {/* Third Container */}
      <ScrollDots />
    </motion.div>
  );
};

export default ServiceSection;
