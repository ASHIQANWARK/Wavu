import React from "react";
import missionImg from "../assets/images/mission.jpg"; // Replace with actual image
import visionImg from "../assets/images/vision.jpg"; // Replace with actual image

const MissionVision = () => {
  return (
    <section className=" bg-transparent bg-opacity-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Mission Section */}
        <div className="relative flex flex-col items-center text-center bg-[#11698E] shadow-lg rounded-2xl p-8 transition transform hover:scale-105">
          <img
            src={missionImg}
            alt="Mission"
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="p-8 bg-[#11698E] text-center rounded-lg ">
            <h1 className="text-4xl font-extrabold text-[#fff] mb-4 uppercase tracking-wide">
              Our Mission
            </h1>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
              At WAVU Foundation, we believe talent knows no boundaries, but
              opportunities do. Our mission is to **discover, nurture, and
              empower** young footballers through scholarships, world-class
              training, and global exposure. With strategic academy
              partnerships, we provide **top-tier coaching, mentorship, and
              career-building opportunities**. Together, we can **unlock
              potential and transform dreams into reality**.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative flex flex-col items-center text-center bg-[#11698E] shadow-lg rounded-2xl p-8 transition transform hover:scale-105">
          <img
            src={visionImg}
            alt="Vision"
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="p-8 bg-[#11698E] text-center rounded-lg ">
            <h1 className="text-4xl font-extrabold text-[#fff] mb-4 uppercase tracking-wide">
              Our Vision
            </h1>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
              We envision a world where **young footballers** get the chance to
              showcase their talent, receive **elite training and mentorship**,
              and turn their passion into a professional career. WAVU Foundation
              is dedicated to **breaking barriers** and creating pathways for
              future football stars. With the right support, these athletes can
              **inspire generations** and leave a lasting legacy in the world of
              football.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
