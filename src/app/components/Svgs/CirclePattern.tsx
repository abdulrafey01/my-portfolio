import { motion } from "motion/react";
import React from "react";

type Props = {
  className: string;
  isHovered: boolean;
};

const CirclePattern = ({ className, isHovered }: Props) => {
  return (
    <motion.svg
      animate={{ scale: isHovered ? 1 : 0 }}
      className={className}
      width="586"
      height="607"
      viewBox="0 0 586 607"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="312" cy="312" r="311.5" stroke="#FD853A" />
      <circle cx="312" cy="312" r="294" stroke="#FD853A" strokeWidth="2" />
      <circle cx="312" cy="312" r="274.5" stroke="#FD853A" strokeWidth="3" />
      <circle cx="312" cy="312" r="251" stroke="#FD853A" strokeWidth="4" />
      <circle cx="312" cy="312" r="230" stroke="#FD853A" strokeWidth="5" />
      <circle cx="312" cy="312" r="205" stroke="#FD853A" strokeWidth="6" />
    </motion.svg>
  );
};

export default CirclePattern;
