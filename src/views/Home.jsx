import React from "react";
import Header from "../components/Header";
import YouTubeCard from "../components/YouTubeCard";
import Footer from "../components/Footer";
import MainCarousel from "../components/MainCarousel";
import Contact from "../components/Contact";
import Registration from "../components/Registration";
import Modalities from "../components/Modalities";
import Editions from "../components/Editions";

const Home = () => {

  return (
    <>
      <Header />
      <MainCarousel/>
      <YouTubeCard/>
      <Editions/>
      <Modalities/>
      <Registration/>
      <Contact/>
      <Footer/>

      {/* STYLES */}
      <style>{`
      `}</style>
    </>
  );
};

export default Home;