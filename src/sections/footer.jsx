import React from "react";

import ImprooveLogo from "../assets/icons/logo_small.svg";
import MapIcon from "../assets/icons/map.svg";
import CallIcon from "../assets/icons/call.svg";
import PrintIcon from "../assets/icons/print.svg";

import FacebookIcon from "../assets/icons/facebook.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedlnIcon from "../assets/icons/linkedln.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import GooglePlusIcon from "../assets/icons/google_plus.svg";
import PinterestIcon from "../assets/icons/pinterest.svg";
import RssIcon from "../assets/icons/rss.svg";
import CopyrightIcon from "../assets/icons/copyright.svg";

const FooterSection = () => {
  return (
    <div
      id="footer"
      className="flex flex-col bg-primaryColor"
      style={{ height: 541, paddingLeft: 83, paddingRight: 85, paddingTop: 69 }}
    >
      <div className="flex justify-between">
        <div className="" style={{ width: 300 }}>
          <div
            className="font-gilroy font-bold text-whiteColor"
            style={{ fontSize: 40 }}
          >
            Do you have any questions?
          </div>
          <div
            className="font-gilroy font-normal text-whiteColor pt-3"
            style={{ fontSize: 15 }}
          >
            Feel free to send us your questions
          </div>
        </div>
        <div className="" style={{ width: 300 }}>
          <img src={ImprooveLogo} alt="logo" />
          <div className="flex row-auto items-center pt-4">
            <img src={MapIcon} alt="map" />
            <div
              className="text-whiteColor font-gilroy font-normal pl-3"
              style={{ fontSize: 15 }}
            >
              Telkom University, Bandung
            </div>
          </div>
          <div className="flex row-auto pt-5">
            <div className="flex row-auto items-center">
              <img src={CallIcon} alt="call" />
              <div
                className="text-whiteColor font-gilroy font-normal pl-3"
                style={{ fontSize: 15 }}
              >
                (123) 456-7890
              </div>
            </div>
            <div className="flex row-auto items-center pl-7">
              <img src={PrintIcon} alt="print" />
              <div
                className="text-whiteColor font-gilroy font-normal pl-3"
                style={{ fontSize: 15 }}
              >
                (123) 456-7890
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <button
          type="button"
          className="bg-whiteColor rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 active:scale-95 active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          style={{ width: 200, height: 53 }}
        >
          <div className="font-gilroy font-extrabold text-blackColor text-base transition duration-300 ease-in-out hover:text-primaryColor">
            Send a message
          </div>
        </button>
      </div>
      <div className="flex row-auto pt-11">
        <div className="text-whiteColor font-gilroy text-base font-normal pr-4">
          Social Media
        </div>
        <div className="pr-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FacebookIcon} alt="facebook" />
          </a>
        </div>
        <div className="pr-6">
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterIcon} alt="twitter" />
          </a>
        </div>
        <div className="pr-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedlnIcon} alt="linkedln" />
          </a>
        </div>
        <div className="pr-6">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YoutubeIcon} alt="youtube" />
          </a>
        </div>
        <div className="pr-6">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="instagram" />
          </a>
        </div>
        <div className="pr-6">
          <a
            href="https://plus.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GooglePlusIcon} alt="google plus" />
          </a>
        </div>
        <div className="pr-6">
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={PinterestIcon} alt="pinterest" />
          </a>
        </div>
        <div className="pr-6">
          <a
            href="https://www.rss.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={RssIcon} alt="rss" />
          </a>
        </div>
      </div>

      <div className="flex justify-between" style={{ paddingTop: 100 }}>
        <div className="flex row-auto">
          <div className="pr-11">
            <a
              href="#"
              className="text-whiteColor font-gilroy text-base font-medium"
            >
              ABOUT US
            </a>
          </div>
          <div className="pr-11">
            <a
              href="#"
              className="text-whiteColor font-gilroy text-base font-medium"
            >
              CONTACT US
            </a>
          </div>
          <div className="pr-11">
            <a
              href="#"
              className="text-whiteColor font-gilroy text-base font-medium"
            >
              HELP
            </a>
          </div>
          <div className="pr-11">
            <a
              href="#"
              className="text-whiteColor font-gilroy text-base font-medium"
            >
              PRIVACY POLICY
            </a>
          </div>
          <div className="pr-11">
            <a
              href="#"
              className="text-whiteColor font-gilroy text-base font-medium"
            >
              DISCLAIMER
            </a>
          </div>
        </div>
        <div className="flex row-auto">
          <img src={CopyrightIcon} alt="" />
          <div className="text-whiteColor font-gilroy font-medium pl-3">
            2024 IMPROOVE. All right reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
