import React from "react";

import NavbarSection from "../sections/navbar";
import HomeSection from "../sections/home";
import homeRef from '../sections/home'
import WhyImprooveSection from "../sections/why_improove";
import WhatCanWeDoSection from "../sections/what_can_we_do";
import OurAppSection from "../sections/our_app";
import FooterSection from "../sections/footer";

const LandingPage = () => {
  return (
    <div>
      {/* <NavbarSection /> */}
      <HomeSection ref={homeRef} />
      <WhyImprooveSection />
      <WhatCanWeDoSection />
      <OurAppSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
