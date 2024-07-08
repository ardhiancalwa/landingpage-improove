import React from "react";

import HalfYellowLeft from "../assets/backgrounds/half_yellow_left.png";
import HalfYellowRight from "../assets/backgrounds/half_yellow_right.png";
import HalfBlueLeft from "../assets/backgrounds/half_blue_left.png";
import HalfBlueRight from "../assets/backgrounds/half_blue_right.png";
import HalfYellowCenter from "../assets/backgrounds/half_yellow_center.png";
import HalfYellowCenterDeep from "../assets/backgrounds/half_yellow_center_deep.png";
import MockupRight from "../assets/images/items/mockup_iphone_right.png";
import MockupLeft from "../assets/images/items/mockup_iphone_left.png";

import downloadIcon from "../assets/icons/download3.svg";

const OurAppSection = () => {
  return (
    <div
      id="ourApp"
      className="relative flex bg-right min-h-screen bg-whiteColor"
      style={{ height: 1232 }}
    >
      <div className="absolute left-0" style={{ top: 136 }}>
        <img src={HalfYellowLeft} alt="left" />
      </div>
      <div className="absolute right-0" style={{ top: 136 }}>
        <img src={HalfYellowRight} alt="right" />
      </div>
      <div className="absolute left-0" style={{ top: 308 }}>
        <img src={HalfBlueLeft} alt="left" />
      </div>
      <div className="absolute right-0" style={{ top: 308 }}>
        <img src={HalfBlueRight} alt="right" />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <img src={HalfYellowCenter} alt="center" />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <img src={HalfYellowCenterDeep} alt="center deep" />
      </div>
      <div className="absolute bottom-0" style={{ right: 581 }}>
        <img src={MockupRight} alt="iphone right" />
      </div>
      <div className="absolute bottom-0" style={{ left: 571 }}>
        <img src={MockupLeft} alt="iphone left" />
      </div>
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div
          className="flex justify-center "
          style={{ width: 756, height: 378 }}
        >
          <div className="flex flex-col">
            <div className="flex justify-center">
              <div className="flex items-center justify-center text-secondaryColor border border-secondaryColor w-28 h-11 rounded-full">
                Our App
              </div>
            </div>
            <div
              className="text-blackColor font-gilroy font-extrabold text-center"
              style={{ fontSize: 55 }}
            >
              Start <span className="text-primaryColor">Preparing</span> Your
              Career with <span className="text-primaryColor">Improove</span>
            </div>
            <div className="text-center text-greyColor text-xl font-gilroy font-normal pt-8">
              Download Improove to prepare for your career
            </div>
            <div className="flex justify-center pt-14 ">
              <a
                href="https://github.com/ardhiancalwa/frontend-improove"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="flex items-center h-14 text-blackColor font-gilroy bg-primaryColor font-bold rounded-full px-4 py-2 text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 hover:text-white active:scale-95 active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <div className="flex items-center justify-center bg-secondaryColor rounded-full w-8 h-8 transition-transform duration-300 ease-in-out transform hover:rotate-12">
                    <img src={downloadIcon} alt="download" />
                  </div>
                  <div className="pl-4 font-gilroy font-extrabold text-base text-whiteColor">
                    Download Now
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAppSection;
