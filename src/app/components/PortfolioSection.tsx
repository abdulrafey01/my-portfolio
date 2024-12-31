import React from "react";
import Project from "./Project";
import ScrollDots from "./ScrollDots";
import Tag from "./Tag";

type Props = {};

const PortfolioSection = (props: Props) => {
  return (
    <div className="bg-purple-400 w-full flex flex-col p-14 gap-8">
      {/* First Container */}
      <div className="flex justify-between items-center">
        <p className="text-6xl text-secondary  font-medium">
          Lets have a look at <br /> my{" "}
          <span className="text-primary">Portfolio</span>
        </p>
        <button className="py-2 px-4 text-white text-sm hover:bg-secondary rounded-full bg-primary">
          See all
        </button>
      </div>
      {/* Second Container */}
      <div className="flex justify-between items-center gap-8">
        <Project />
        <Project />
      </div>
      {/* Third Container */}
      <ScrollDots />
      {/* Forth Container */}
      <div className="flex justify-center gap-4 items-center">
        <Tag title="Landing Page" />
        <Tag title="Product Design" />
        <Tag title="Animation" />
        <Tag title="Glasmorphism" />
        <Tag title="Cards" />
      </div>
      {/* To be continued */}
    </div>
  );
};

export default PortfolioSection;
