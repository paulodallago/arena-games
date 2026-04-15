import React from "react";
import YouTubeCard from "../../components/YouTubeCard/YouTubeCard";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import Contact from "../../components/Contact/Contact";
import Registration from "../../components/Registration/Registration";
import Modalities from "../../components/Modalities/Modalities";
import Timer from "../../components/Timer/Timer";
// import Editions from "../../components/Editions/Editions";

const Home = () => {
  return (
    <>
      <MainCarousel />
      <Timer />
      <YouTubeCard />
      {/* <Editions /> */}
      <Modalities />
      <Registration />
      <Contact />
    </>
  );
};

export default Home;
