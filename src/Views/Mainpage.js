import React from "react";
import Landing from "../components/Landing/Landing";
import Cards from "../components/Cards/Cards";
import HelpSection from "../components/HelpSection/HelpSection";
import CarouselSection from "../components/CarouselSection/CarouselSection";

const MainContainer = () => {
  return (
    <React.Fragment>
      <Landing />
      <Cards />
      <HelpSection />
      <CarouselSection />
    </React.Fragment>
  );
};

export default MainContainer;
