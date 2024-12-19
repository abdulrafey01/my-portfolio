"use client";
import React from "react";
import { motion } from "motion/react";

type Props = {};

const NavBar = (props: Props) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    // z-10 to make it on top of bgPattern
    <div className="z-10 mt-8 flex justify-between items-center w-[80%] text-sm bg-black p-2 rounded-full text-white">
      <button className="py-4 px-8 text-white bg-primary rounded-full font-bold">
        Home
      </button>
      <button className="py-4 px-8 text-white hover:bg-secondary rounded-full">
        About
      </button>
      <button className="py-4 px-8 text-white hover:bg-secondary rounded-full">
        Service
      </button>
      {/* Middle Logo */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="flex justify-center items-center gap-1 mx-16 cursor-crosshair select-none"
      >
        <motion.div
          animate={{ x: isHovered ? -5 : 0 }}
          className="w-8 h-8 flex justify-center items-center bg-primary rounded-full text-white font-bold tracking-tighter text-base"
        >
          AR
        </motion.div>
        <motion.p
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.1 }}
          style={{ display: isHovered ? "none" : "block" }}
          className="font-bold text-lg"
        >
          DEVLET
        </motion.p>
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          style={{ display: isHovered ? "block" : "none" }}
          className="font-bold text-lg "
        >
          <p className="font-light text-xs leading-tight">Based In</p>
          <p className="font-bold text-lg leading-tight">Pakistan</p>
        </motion.div>
      </motion.div>
      <button className="py-4 px-8 text-white hover:bg-secondary rounded-full">
        Resume
      </button>
      <button className="py-4 px-8 text-white hover:bg-secondary rounded-full">
        Project
      </button>
      <button className="py-4 px-8 text-white hover:bg-secondary rounded-full">
        Contact
      </button>
    </div>
  );
};

export default NavBar;
