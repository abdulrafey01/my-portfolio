import React from "react";
import MsgIcon from "./Svgs/MsgIcon";
import RatingStar from "./Svgs/RatingStar";
import Award from "./Svgs/Award";
import Certified from "./Svgs/Certified";

type Props = {};

const ContactSection = (props: Props) => {
  return (
    <div className="flex w-full pt-14 justify-center items-center ">
      <div className=" flex flex-col justify-center items-center gap-2">
        {/* Texts */}
        <p className="text-5xl font-bold mb-2 text-secondary">
          Have an Awesome Project
        </p>
        <p className="text-5xl font-bold text-secondary">
          Idea? <span className="text-primary">Let's Discuss</span>
        </p>
        {/* Input */}
        <div className="w-[43rem] flex justify-between items-center border-gray-300 border-[1px] rounded-full p-2">
          {/* First container:Icon and Input */}
          <div className="w-full  flex justify-start items-center gap-4">
            <div className="w-[2.8rem] h-10 bg-[#FFEAD5] rounded-full flex justify-center items-center">
              <MsgIcon className="w-6 h-6" />
            </div>
            <input
              className="bg-transparent text-black outline-none placeholder:text-black"
              type="text"
              placeholder="Enter Email Address"
            />
          </div>
          {/* Second container: Button */}
          <div className="w-full flex justify-end">
            <button className="py-4 px-8 font-light text-white text-sm hover:bg-secondary rounded-full bg-primary">
              Send
            </button>
          </div>
        </div>
        {/* Achievements */}
        <div className="flex w-[90%] justify-between items-center">
          <div className="flex justify-center items-center gap-1">
            <RatingStar />
            <p className="text-xs">4.9/5 Average Ratings</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <Award />
            <p className="text-xs">45+ Projects Developed</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <Certified />
            <p className="text-xs">Certified Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
