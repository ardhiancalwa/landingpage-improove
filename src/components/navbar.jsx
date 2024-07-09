import React, { useEffect, useState } from "react";
import Logo from "../assets/icons/logo.svg";

const NavbarSection = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const handleScroll = () => {
    const sections = ["home", "whyImproove", "whatCanWeDo", "ourApp"];
    let current = "home";

    sections.forEach((section) => {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        current = section;
      }
    });

    setCurrentSection(current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="bg-transparent absolute w-full z-20 top-3 dark:border-gray-600"
      style={{ paddingLeft: "83.33px", paddingRight: "83.33px" }}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto pt-6">
        <a
          href="https://github.com/ardhiancalwa/frontend-improove"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Logo} className="w-auto h-auto" alt="Improove Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="#footer">
            <button
              type="button"
              className="flex items-center h-14 text-blackColor font-jakarta bg-whiteColor font-bold rounded-full px-5 py-2 text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 hover:text-white active:scale-95 active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div>Contact Us</div>
            </button>
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between flex w-auto order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col font-semibold rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row mt-0 border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 transition-all duration-300 ease-in-out">
            {["home", "whyImproove", "whatCanWeDo", "ourApp"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`hover-underline text-whiteColor hover:text-whiteColor hover:font-extrabold active:text-whiteColor focus:text-primaryColor transition-colors duration-200 ease-in-out ${
                    currentSection === section ? "text-secondaryColor" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() +
                    section.slice(1).replace(/([A-Z])/g, " $1")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSection;
