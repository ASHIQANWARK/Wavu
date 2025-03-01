import React from "react";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaTrophy,
  FaUserCheck,
  FaUsers,
  FaSearch,
  FaHandshake,
  FaDatabase,
  FaMoneyBillWave,
} from "react-icons/fa";
import bannerImage from "../assets/images/INLL Logo.png";
import wawuLogo from "../assets/images/Wawu black.png"; // Import WAWU logo
import whyINLLImage from "../assets/images/INLL DP.jpg";
import highlightsImage from "../assets/images/WAWU_Brochure_page-0001-removebg-preview.png";
import supportImage from "../assets/images/INLL Brochure_page-0001.jpg";
import registrationImage from "../assets/images/INLL Brochure_page-0001.jpg";
import backgroundImage from "../assets/images/INLL Logo.png"; // Background image

const INLLBrochure = () => {
  return (
    <div
      className="font-sans bg-cover bg-center text-[#0e1737]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better readability */}
      <div className=" bg-opacity-70">
        {/* Hero Section */}
        <header className="relative h-[500px] flex flex-col md:flex-row items-center justify-between px-8 py-12">
          {/* Left Content */}
          <div className="bg-opacity-50 p-8 rounded-lg md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-extrabold mb-6 italic bg-gradient-to-r from-[#fb8005] via-white to-[#138808] bg-clip-text text-transparent">
              India's Next Legend League (INLL)
            </h1>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Searching for India’s Football Legends
            </h2>
            <h3 className="text-lg flex flex-col items-center md:items-start mb-4 text-white">
              <p className="mb-2">Presented By</p>
              <img
                src={wawuLogo}
                alt="WAWU Logo"
                className="h-14 w-auto" // Adjusted size for better visibility
              />
            </h3>
            <p className="text-lg font-semibold text-white">
              In association with Ofioh Sporty Private Limited
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src={bannerImage}
              alt="Hero"
              className="rounded-lg h-[300px] w-auto object-cover shadow-lg"
            />
          </div>
        </header>

        {/* Breadcrumb */}
        <nav className="bg-[#0e1737] py-3">
          <div className="max-w-6xl mx-auto px-4">
            <ul className="flex space-x-2 text-sm text-white">
              <li>
                <Link to="/" className="hover:text-yellow-300">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-yellow-300">INLL</li>
            </ul>
          </div>
        </nav>

        {/* About Section */}
        <section className="max-w-4xl mx-auto py-12 px-8">
          <div className="bg-[#0e1737] p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
            {/* Content on the left */}
            <div className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
              <h2 className="text-3xl font-bold mb-4 text-white">
                About the Tournament
              </h2>
              <p className="text-lg text-white">
                India's Next Legend League (INLL) is WAWU's flagship football
                tournament designed to discover and nurture the best football
                talents from across the nation. This tournament is a platform for
                aspiring players to showcase their skills, gain visibility, and
                receive support to achieve their dreams of becoming professional
                footballers.
              </p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="max-w-3xl mx-auto bg-white py-6 px-4">
          {/* Heading */}
          <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
            Why INLL?
          </h2>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={whyINLLImage}
                alt="Why INLL"
                className="rounded-lg w-full h-auto"
              />
            </div>

            {/* Right Side: Timeline of Features */}
            <div className="w-full md:w-1/2">
              <div className="space-y-4 relative">
                {/* Vertical Line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-[#11698E]"></div>

                {[
                  {
                    icon: <FaSearch className="text-xl text-[#11698E]" />,
                    title: "Scout Hidden Talents",
                    description:
                      "Identifying promising players from grassroots levels across India.",
                  },
                  {
                    icon: <FaTrophy className="text-xl text-[#11698E]" />,
                    title: "Competitive Platform",
                    description:
                      "Providing an opportunity for players to showcase their skills on a national stage.",
                  },
                  {
                    icon: <FaHandshake className="text-xl text-[#11698E]" />,
                    title: "Professional Connections",
                    description:
                      "Linking talents with professional training, mentors, and sponsors for career growth.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 relative"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 z-10 bg-white p-1 rounded-full">
                      {item.icon}
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className="text-base font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tournament Highlights */}
        <section className="max-w-6xl mx-auto py-6 px-4 bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Tournament Highlights
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={highlightsImage}
                alt="Tournament Highlights"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            {/* Right Side: Minimalist List */}
            <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <FaGlobe className="text-4xl mb-2 text-[#11698E]" />,
                  title: "Nationwide Reach",
                  description:
                    "The tournament will be organized across India, ensuring inclusivity from villages to cities.",
                },
                {
                  icon: <FaTrophy className="text-4xl mb-2 text-[#11698E]" />,
                  title: "Competitive Format",
                  description:
                    "Teams will compete in a league format to provide maximum exposure to every player.",
                },
                {
                  icon: <FaUserCheck className="text-4xl mb-2 text-[#11698E]" />,
                  title: "WAWU Representatives",
                  description:
                    "WAWU scouts will be present at every tournament to identify and select promising talents.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-center">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Post-Selection Support */}
        <section className="max-w-6xl mx-auto py-12 px-4 bg-white">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
            Post-Selection Support
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={supportImage}
                alt="Post-Selection Support"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaDatabase className="text-5xl mb-4 text-[#11698E]" />,
                  title: "Continuous Tracking",
                  description:
                    "Recorded in WAWU database for ongoing development.",
                },
                {
                  icon: (
                    <FaMoneyBillWave className="text-5xl mb-4 text-[#11698E]" />
                  ),
                  title: "Funding & Training",
                  description:
                    "Receive funding for training, accommodation, and education.",
                },
                {
                  icon: <FaUsers className="text-5xl mb-4 text-[#11698E]" />,
                  title: "Professional Network",
                  description:
                    "Connect with mentors and clubs for career growth.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration */}
        <section className="max-w-6xl mx-auto py-12 px-4 bg-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Side: Image with Hover Effect */}
            <div className="w-full md:w-1/2 transform transition-transform duration-300 hover:scale-105">
              <img
                src={registrationImage}
                alt="Registration"
                className="rounded-lg w-full h-auto"
              />
            </div>

            {/* Right Side: Registration Details with Gradient Background */}
            <div className="w-full md:w-1/2 bg-gradient-to-r from-[#11698E] to-[#0A4A6E] p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-3xl font-semibold mb-6 text-white">
                How to Register
              </h2>

              {/* Registration Steps with Icons */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-full">
                    <FaSearch className="text-2xl text-[#11698E]" />
                  </div>
                  <p className="text-lg text-white">
                    Visit{" "}
                    <a
                      href="http://www.wawu.org/INLL"
                      className="text-yellow-300 underline font-semibold hover:text-yellow-400 transition-colors duration-300"
                    >
                      www.wawu.org/INLL
                    </a>{" "}
                    to complete the registration form.
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-full">
                    <FaMoneyBillWave className="text-2xl text-[#11698E]" />
                  </div>
                  <p className="text-lg text-white">
                    Participation is free of charge.
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white p-3 rounded-full">
                    <FaGlobe className="text-2xl text-[#11698E]" />
                  </div>
                  <p className="text-lg text-white">
                    Attend the trials at your nearest city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default INLLBrochure;