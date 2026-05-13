import React from "react";
import YouTubeCard from "../../components/home/YouTubeCard/YouTubeCard";
import MainCarousel from "../../components/home/MainCarousel/MainCarousel";
import Contact from "../../components/common/Contact/Contact";
import Registration from "../../components/home/Registration/Registration";
import Modalities from "../../components/home/Modalities/Modalities";
import Timer from "../../components/home/Timer/Timer";
import Editions from "../../components/home/EditionsGallery/EditionsGallery";

const Home = () => {
  return (
    <>
      <MainCarousel />
      <Timer />
      <YouTubeCard />
      <Modalities />
      <Registration />
      <Editions />
      <Contact />
    </>
  );
};

export default Home;
