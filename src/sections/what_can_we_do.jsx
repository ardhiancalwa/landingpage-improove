import React from "react";

import ProjectSimulation from "../assets/images/items/project.png";
import CVAnalyzer from "../assets/images/items/cv.png";
import AIInterview from "../assets/images/items/ai.png";

const WhatCanWeDoSection = () => {
  return (
    <div
      id="whatCanWeDo"
      className="relative flex flex-col items-center justify-between bg-no-repeat bg-right min-h-screen bg-whiteColor"
      style={{ height: "870px" }}
    >
      <div className="flex flex-col ">
        <div className="flex flex-col items-center ">
          <div
            className="font-gilroy text-blackColor font-medium pt-11"
            style={{ fontSize: "26px" }}
          >
            How we help you get career-ready
          </div>
          <div
            className="text-blackColor font-gilroy pt-3"
            style={{ fontSize: 46, fontWeight: "bold", lineHeight: 1.2 }}
          >
            We offer <span className="text-primaryColor">amazing features</span>{" "}
            designed for your career readiness
          </div>
          <div
            className="text-greyColor font-gilroy font-normal pt-5"
            style={{ fontSize: 18 }}
          >
            Discover our tools that empower you to excel in your career journey.
          </div>
        </div>
        <div
          className="flex row-auto"
          style={{ paddingLeft: 88, paddingRight: 88, paddingTop: 75 }}
        >
          <div className="pr-9">
            <div
              className="flex flex-col bg-primaryColor rounded-2xl"
              style={{ height: 494, width: 397 }}
            >
              <div className="pt-6 pl-7 pr-3">
                <div
                  className="font-gilroy font-extrabold text-whiteColor"
                  style={{ fontSize: 30 }}
                >
                  01. Project Simulation
                </div>
                <div
                  className="text-whiteColor font-gilroy font-normal pt-3"
                  style={{ lineHeight: 1.6 }}
                >
                  You will be given a simulation of working on real projects
                  that we provide and are available with various levels of
                  project difficulty.
                </div>
              </div>
              <div className="flex justify-center mt-auto">
                <img src={ProjectSimulation} alt="project simulation" />
              </div>
            </div>
          </div>
          <div className="pr-9">
            <div
              className="flex flex-col bg-primaryColor rounded-2xl"
              style={{ height: 494, width: 397 }}
            >
              <div className="pt-6 pl-7 pr-3">
                <div
                  className="font-gilroy font-extrabold text-whiteColor"
                  style={{ fontSize: 30 }}
                >
                  02. CV Analyzer
                </div>
                <div
                  className="text-whiteColor font-gilroy font-normal pt-3"
                  style={{ lineHeight: 1.6 }}
                >
                  Our application is equipped with AI technology to analyze your
                  CV so that you can get a job that suits your CV.
                </div>
              </div>
              <div className="flex justify-center mt-auto">
                <img src={CVAnalyzer} alt="CV analyzer" />
              </div>
            </div>
          </div>
          <div>
            <div
              className="flex flex-col bg-primaryColor rounded-2xl"
              style={{ height: 494, width: 397 }}
            >
              <div className="pt-6 pl-7 pr-3">
                <div
                  className="font-gilroy font-extrabold text-whiteColor"
                  style={{ fontSize: 30 }}
                >
                  03. AI Interview
                </div>
                <div
                  className="text-whiteColor font-gilroy font-normal pt-3"
                  style={{ lineHeight: 1.6 }}
                >
                  You'll get a feel for how interviews are conducted. We provide
                  AI interview features that help prepare you for real-world
                  interviews.
                </div>
              </div>
              <div className="flex justify-center mt-auto">
                <img src={AIInterview} alt="AI Interview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatCanWeDoSection;
