import React from "react";

import downloadIcon from "../assets/icons/download2.svg";
import magisterIcon from "../assets/icons/magister.svg";

const WhyImprooveSection = () => {
  return (
    <div
      id="whyImproove"
      className="relative flex flex-col items-center justify-center min-h-screen bg-whiteColor pb-32"
      style={{
        paddingLeft: "354px",
        paddingRight: "354px",
        height:"771px",
      }}
    >
      <div className="text-blackColor font-medium" style={{ fontSize: "26px" }}>
        Why Improove?
      </div>
      <div
        className="font-gilroy font-extrabold text-center pt-6"
        style={{ fontSize: "54px" }}
      >
        We help you prepare with{" "}
        <span className="text-primaryColor">AI-powered tools</span> and{" "}
        <span className="text-primaryColor">real project simulations</span> to
        be work-ready.
      </div>
      <div
        className="text-center text-greyColor font-medium pt-12"
        style={{ fontSize: "20px" }}
      >
        Unlock your full potential with Improove! Our AI-powered tools and real
        project simulations give you the hands-on experience you need to be
        job-ready. Say goodbye to uncertainty and hello to career success. Start
        your journey with Improove today and transform your future!
      </div>
      <div className="flex row-auto pt-32 items-center justify-center">
        <div className="flex row-auto items-center">
          <div className="flex items-center justify-center bg-primaryColor rounded-lg w-20 h-20">
            <img className="" src={downloadIcon} alt="download" />
          </div>
          <div className="flex flex-col pl-5">
            <div className="font-space-grotesk font-bold" style={{fontSize:'40px'}}>
            100K+
            </div>
            <div className="font-gilroy font-medium " style={{fontSize:'20px'}}>
            Download
            </div>
          </div>
        </div>
        <div className="flex row-auto items-center pl-28">
          <div className="flex items-center justify-center bg-secondaryColor rounded-lg w-20 h-20">
            <img className="" src={magisterIcon} alt="download" />
          </div>
          <div className="flex flex-col pl-5">
            <div className="font-space-grotesk font-bold" style={{fontSize:'40px'}}>
            75K+
            </div>
            <div className="font-gilroy font-medium " style={{fontSize:'20px'}}>
            Get a job
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyImprooveSection;
