import React from "react";
import Stars from "./Svgs/Stars";
import QuotesUp from "./Svgs/QuotesUp";

type Props = {};

const Testimonial = (props: Props) => {
  return (
    <div className="relative p-4 w-[39rem] min-w-[39rem] min-h-56 flex flex-col gap-2 mr-4 rounded-2xl hover:border-white border-[1px] border-transparent cursor-default ">
      {/* First container */}
      <div className="flex justify-between items-center ">
        {/* Avatar and Stars */}
        <div className="flex flex-col items-start justify-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary"></div>
            <div className="flex flex-col">
              <p className="text-lg">Fauzi Sayed</p>
              <p className="text-sm font-light">Ui/Ux Designer</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Stars className="w-36 h-auto" />
            <p className="text-2xl">5.0</p>
          </div>
        </div>
        {/* Comma */}
        <div className="">
          <QuotesUp className="rotate-180 h-24 fill-[#667085]" />
        </div>
      </div>
      {/* Second container */}
      <div>
        <p>
          consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis
          orci elementum egestas lobortis.Sed lobortis orci elementum egestas
          lobortis.Sed lobortis orci elementum egestas lobortis.
        </p>
      </div>
      {/* Blur container */}
      <div className="absolute w-full h-full bg-white opacity-20 top-0 left-0 rounded-2xl -z-10"></div>
    </div>
  );
};

export default Testimonial;
