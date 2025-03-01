import React from "react";
import Hero from "../pages/Hero";
import About from "../pages/About";
import MissionVision from "../pages/Mission";
import Testimonials from "../pages/Testimonials";
import Team from "../pages/Team";
import Events from "../pages/Events";
import backgroundImage from "../assets/images/WAWU FOOTBALL.png"; // Import your background image

const Home = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better readability */}
      <div className=" bg-opacity-70">
        <Hero />
        <About />
        <MissionVision />
        <Events />
        <Team />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;