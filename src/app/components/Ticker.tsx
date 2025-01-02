import React from "react";
import MarqueStar from "./Svgs/MarqueStar";
import Marquee from "react-fast-marquee";

type Props = {};

const Ticker = (props: Props) => {
  return (
    <div
      style={{
        borderTopLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
      className="bg-primary w-full mt-14 py-6 overflow-hidden"
    >
      <div className="w-full -rotate-1  bg-white ">
        <Marquee autoFill speed={200} className="no-scrollbar">
          <div className="flex justify-between items-center gap-4">
            <MarqueStar className="w-6 h-auto" />
            <p className="text-4xl ">React JS</p>
            <MarqueStar className="w-6 h-auto" />
            <p className="text-4xl ">Next JS</p>
            <MarqueStar className="w-6 h-auto" />
            <p className="text-4xl ">Node JS</p>
            <MarqueStar className="w-6 h-auto" />
            <p className="text-4xl ">Express JS</p>
            <MarqueStar className="w-6 h-auto " />
            <p className="text-4xl mr-4">MongoDB</p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Ticker;
