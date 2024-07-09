import React from "react";

import NavbarSection from "../components/navbar";

import backgroundHero from "../assets/backgrounds/hero_work.png";
import backgroundPattern from "../assets/backgrounds/pattern1.png";
import backgroundYellow from "../assets/backgrounds/yellow_background.png";
import reviewOne from "../assets/backgrounds/review.png";
import reviewTwo from "../assets/backgrounds/review2.png";

import downloadIcon from "../assets/icons/download.svg";
import journeyIcon from "../assets/icons/journey.svg";
import collabBSC from "../assets/icons/collab_bsc.svg";
import collabMoreHouse from "../assets/icons/collab_morehouse.svg";
import collabOklahoma from "../assets/icons/collab_oklahoma.svg";
import collabAlabama from "../assets/icons/collab_alabama.svg";

const HomeSection = () => {
  return (
    <div
      id="home"
      className="items-center justify-around bg-no-repeat min-h-screen bg-primaryColor"
      style={{ height: "890px" }}
    >
      <NavbarSection />
      <div className="flex row-auto overflow-hidden">
        <img className="w-1/2" src={backgroundPattern} alt="pattern" />
        <div className="relative w-1/2">
          <img
            className="absolute bottom-0"
            src={backgroundYellow}
            alt="yellow"
            style={{ width: "683px", height: "559px", left: 73 }}
          />
          <img
            className="absolute bottom-0 object-cover object-left-bottom "
            src={backgroundHero}
            alt="hero"
            style={{
              width: "1419",
              height: "1170px",
              clipPath: "inset(0 0 0 0)",
            }}
          />
          <img
            className="absolute"
            src={reviewOne}
            alt="review1"
            style={{
              bottom: "200.69px",
              right: "48.28px",
            }}
          />
          <img
            className="absolute"
            src={reviewTwo}
            alt="review2"
            style={{
              bottom: "78.83px",
              left: "60.21px",
            }}
          />
        </div>
        <div
          className="absolute"
          style={{
            width: "635px",
            height: "475.92px",
            paddingTop: "192px",
            paddingLeft: "83px",
          }}
        >
          <div>
            <div className="flex row-auto items-center">
              <div
                className="font-gilroy text-whiteColor"
                style={{ fontSize: "22px" }}
              >
                Definitive Steps to Your Dream Career
              </div>
              <div className="ml-2">
                <img src={journeyIcon} alt="journey icon" />
              </div>
            </div>
            <div
              className="pt-2 text-whiteColor font-gilroy font-extrabold"
              style={{ fontSize: "54px" }}
            >
              Increase Capabilty, Get Job Easily
            </div>
            <div className="text-whiteColor pt-5" style={{ fontSize: "18px" }}>
              Ready to take a definitive step towards your dream career? With
              Improve, improving your skills and landing your ideal job has
              never been easier. Improve your skills and explore the job market
              with confidence. Start your journey today with Improve and see the
              difference!
            </div>
          </div>
          <div className="pt-12">
            <a
              href="https://github.com/ardhiancalwa/frontend-improove"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="flex items-center h-14 text-blackColor font-gilroy bg-whiteColor font-bold rounded-full px-4 py-2 text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 hover:text-white active:scale-95 active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <div className="flex items-center justify-center bg-secondaryColor rounded-full w-8 h-8 transition-transform duration-300 ease-in-out transform hover:rotate-12">
                  <img src={downloadIcon} alt="download" />
                </div>
                <div className="pl-4 font-gilroy font-extrabold text-base">
                  Download Now
                </div>
              </button>
            </a>
          </div>
          <div className="pt-20 ">
            <div>
              <div
                className="font-gilroy text-whiteColor "
                style={{ fontSize: "20px" }}
              >
                Our Collaboration with :
              </div>
              <div className="pt-5 flex row-auto">
                <img className="mr-6" src={collabBSC} alt="BSC" />
                <img className="mr-6" src={collabMoreHouse} alt="More House" />
                <img className="mr-6" src={collabOklahoma} alt="Oklahoma" />
                <img src={collabAlabama} alt="Alabama" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
