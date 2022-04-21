import React from "react";
import AboutInfo from "../components/AboutInfo/AboutInfo";
import Banner from "../components/Banner/Banner";
import ConntectedSvg from "../components/ConntectedSvg/ConntectedSvg";
import Features from "../components/Features/Features";
import ParticleBackground from "../components/ParticleBackground/ParticleBackground";

const Home = () => {
  return (
    <>
      <ParticleBackground />
      <Banner />
      <AboutInfo />
      <ConntectedSvg />
      <Features />
    </>
  );
};

export default Home;
