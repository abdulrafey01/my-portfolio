import React from "react";
import ExpTextContainer from "./ExpTextContainer";
import DottedBar from "./DottedBar";

type Props = {};

const ExperienceSection = (props: Props) => {
  return (
    <div className="bg-blue-300 w-full flex flex-col justify-center items-center gap-12">
      <p className="text-6xl text-secondary mt-16 font-medium">
        My <span className="text-primary ">Work Experience</span>
      </p>
      <div className=" w-full flex justify-center items-start gap-12">
        <div className="flex flex-col gap-12">
          <ExpTextContainer
            title="Cognizant, Mumbai"
            subtitle="Sep 2016 - July 2020"
          />
          <ExpTextContainer
            title="Cognizant, Mumbai"
            subtitle="Sep 2016 - July 2020"
          />
          <ExpTextContainer
            title="Cognizant, Mumbai"
            subtitle="Sep 2016 - July 2020"
          />
        </div>
        <DottedBar />
        <div className="flex flex-col gap-12 ml-8">
          <ExpTextContainer
            title="Cognizant, Mumbai"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales "
          />
          <ExpTextContainer
            title="Cognizant, Mumbai"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales "
          />
          <ExpTextContainer
            title="Cognizant, Mumbai"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales "
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
