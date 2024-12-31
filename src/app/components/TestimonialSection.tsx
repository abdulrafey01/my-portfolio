"use client";
import React, { useEffect } from "react";
import ServiceBg from "../assets/ServiceBackground.png";
import Vector1 from "./Svgs/Vector1";
import Star1 from "./Svgs/Star1";
import Star2 from "./Svgs/Star2";
import Testimonial from "./Testimonial";

type Props = {};

const TestimonialSection = (props: Props) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      // Calculate the middle scroll position
      const middlePosition =
        (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) / 2;

      // Set the scroll position to the middle
      scrollRef.current.scrollLeft = middlePosition;
    }
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${ServiceBg.src})`,
        backgroundSize: "cover",
      }}
      className={`relative pl-4 text-white z-10 w-full rounded-[3rem] py-4  h-[45rem] flex flex-col justify-center items-center gap-12`}
    >
      {/* First Container */}
      <div className="relative text-center text-5xl ">
        <p>Testimonials That</p>
        <p>
          {" "}
          Speak to <span className="text-primary">My Results</span>
        </p>
        <p className="mt-4 text-sm w-[33rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
          interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed lobortis orci elementum egestas lobortis.
        </p>
        <Vector1 className="w-6 h-6 absolute right-20 -top-5 stroke-white" />
        <Star1 className="absolute -right-8 top-16" />
        <Star2 className="absolute -left-8" />
      </div>
      {/* Second Container i.e: Testimonials */}
      <div
        ref={scrollRef}
        className="flex mt-12 gap-2 w-full justify-start items-center overflow-auto no-scrollbar"
      >
        <Testimonial />
        <Testimonial />
        <Testimonial />
        {/* <Testimonial />
        <Testimonial /> */}
      </div>
    </div>
  );
};

export default TestimonialSection;
