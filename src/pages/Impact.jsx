import React from "react";
import impactBg from "../assets/images/impactbg.jpg";

const ImpactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      style={{ backgroundImage: `url(${impactBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 backdrop-brightness-60 bg-opacity-50"></div>

      <div className="relative max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Our Impact</h2>
        <p className="mt-2 text-lg">
          Since its inception, WAWU Foundation has:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="p-4">
            <p className="font-semibold ">
              Identified and supported hundreds of young football players across India.
            </p>
          </div>
          <div className="p-4">
            <p className="font-semibold  ">
              Facilitated access to professional coaching and training for underprivileged athletes.
            </p>
          </div>
          <div className="p-4">
            <p className="font-semibold  ">
              Built strong partnerships with academies, clubs, and sponsors to amplify our efforts.
            </p>
          </div>
          <div className="p-4">
            <p className="font-semibold ">
              Inspired communities by showcasing the transformative power of football.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
