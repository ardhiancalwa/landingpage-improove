import React, { useEffect, useState } from "react";
import HomeSection from "../sections/home";
import WhyImprooveSection from "../sections/why_improove";
import WhatCanWeDoSection from "../sections/what_can_we_do";
import OurAppSection from "../sections/our_app";
import FooterSection from "../sections/footer";

const LandingPage = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    setShowScrollToTop(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* <NavbarSection /> */}
      <HomeSection />
      <WhyImprooveSection />
      <WhatCanWeDoSection />
      <OurAppSection />
      <FooterSection />
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-secondaryColor text-whiteColor p-4 rounded-full shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-secondaryColor focus:ring-opacity-30"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default LandingPage;
