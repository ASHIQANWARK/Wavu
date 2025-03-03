import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
import wawuLogo from "../assets/images/Wawu black.png";
import whyINLLImage from "../assets/images/hero4.jpg";
import highlightsImage from "../assets/images/hero5.jpg";
import supportImage from "../assets/images/hero3.jpg";
import registrationImage from "../assets/images/INLL Logo.png";

const INLLBrochure = () => {
  const googleFormLink = "https://forms.google.com"; // Replace with your actual Google Form link

  return (
    <div className="font-sans text-black">
      {/* Hero Section */}
      <header className="relative bg-cover bg-gradient-to-r from-[#bbbaba] to-[#0A4A6E] bg-center h-auto flex flex-col items-center justify-between px-4 sm:px-8 py-8 sm:py-12 z-10">
        <div className="w-full max-w-screen-lg">
          {/* Left Content */}
          <div className="bg-opacity-50 p-4 sm:p-8 rounded-lg text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 italic bg-gradient-to-r from-[#fb8005] via-white to-[#138808] bg-clip-text text-transparent animate-gradient">
              India's Next Legend League (INLL)
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
              Searching for India’s Football Legends
            </h2>
            <h3 className="text-base sm:text-lg flex flex-col items-center md:items-start mb-4">
              <p className="mb-2 text-white">Presented By</p>
              <div className="flex items-center justify-center md:justify-start">
                <img
                  src={wawuLogo}
                  alt="WAWU Logo"
                  className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-semibold text-white">
              In association with Ofioh Sporty Private Limited
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center mt-8">
            <img
              src={bannerImage}
              alt="Hero"
              className="rounded-lg h-[120px] sm:h-[150px] md:h-[250px] lg:h-[150px] w-auto object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-[#000000] py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex space-x-2 text-xs sm:text-sm text-white">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-yellow-400">INLL</li>
          </ul>
        </div>
      </nav>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-8">
        <motion.div
          className="bg-gradient-to-r from-[#11698E] to-[#0A4A6E] p-6 sm:p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center gap-6 sm:gap-8 transform hover:scale-102 transition-transform duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-4 sm:mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
              About the Tournament
            </h2>
            <p className="text-sm sm:text-lg text-white">
              India's Next Legend League (INLL) is WAWU's flagship football
              tournament designed to discover and nurture the best football
              talents from across the nation. This tournament is a platform for
              aspiring players to showcase their skills, gain visibility, and
              receive support to achieve their dreams of becoming professional
              footballers.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center text-black tracking-wider uppercase"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why INLL?
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* Left Side: Image */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 rounded-lg blur-lg"></div>
            <img
              src={whyINLLImage}
              alt="Why INLL"
              className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Right Side: Timeline Features */}
          <motion.div
            className="w-full md:w-1/2 bg-gradient-to-b from-[#1A1A2E] to-[#0F3460] p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-800 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-blue-500"></div>

            {[
              {
                icon: <FaSearch className="text-2xl text-blue-400" />,
                title: "Scout Hidden Talents",
                description:
                  "Identifying promising players from grassroots levels across India.",
              },
              {
                icon: <FaTrophy className="text-2xl text-yellow-400" />,
                title: "Competitive Platform",
                description:
                  "Providing an opportunity for players to showcase their skills on a national stage.",
              },
              {
                icon: <FaHandshake className="text-2xl text-green-400" />,
                title: "Professional Connections",
                description:
                  "Linking talents with professional training, mentors, and sponsors for career growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 sm:space-x-6 relative py-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 z-10 bg-gray-900 p-3 rounded-full border-2 border-gray-600 shadow-lg">
                  {item.icon}
                </div>
                {/* Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-lg text-gray-400 mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tournament Highlights */}
      <section className="max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center text-black tracking-wide uppercase"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tournament Highlights
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* Left Side: Feature Cards */}
          <motion.div
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {[
              {
                icon: (
                  <FaGlobe className="text-3xl sm:text-4xl text-blue-400" />
                ),
                title: "Nationwide Reach",
                description:
                  "The tournament will be organized across India, ensuring inclusivity from villages to cities.",
              },
              {
                icon: (
                  <FaTrophy className="text-3xl sm:text-4xl text-yellow-400" />
                ),
                title: "Competitive Format",
                description:
                  "Teams will compete in a league format to provide maximum exposure to every player.",
              },
              {
                icon: (
                  <FaUserCheck className="text-3xl sm:text-4xl text-green-400" />
                ),
                title: "WAWU Representatives",
                description:
                  "WAWU scouts will be present at every tournament to identify and select promising talents.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 bg-opacity-80 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-700 transition-all duration-300 hover:scale-105 transform"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-center text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 text-center mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-40 rounded-lg blur-lg"></div>
            <img
              src={highlightsImage}
              alt="Tournament Highlights"
              className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Post-Selection Support */}
      <section className="max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center text-black tracking-wide uppercase"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Post-Selection Support
        </motion.h2>

        <div className="flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-12">
          {/* Left Side: Feature Cards */}
          <motion.div
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {[
              {
                icon: (
                  <FaDatabase className="text-3xl sm:text-4xl text-blue-400" />
                ),
                title: "Continuous Tracking",
                description:
                  "Recorded in WAWU database for ongoing development.",
              },
              {
                icon: (
                  <FaMoneyBillWave className="text-3xl sm:text-4xl text-yellow-400" />
                ),
                title: "Funding & Training",
                description:
                  "Receive funding for training, accommodation, and education.",
              },
              {
                icon: (
                  <FaUsers className="text-3xl sm:text-4xl text-green-400" />
                ),
                title: "Professional Network",
                description:
                  "Connect with mentors and clubs for career growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 bg-opacity-80 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-700 transition-all duration-300 hover:scale-105 transform"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-center text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 text-center mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-40 rounded-lg blur-lg"></div>
            <img
              src={supportImage}
              alt="Post-Selection Support"
              className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Registration */}
      <section className="max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center text-black tracking-wide uppercase"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Register Now !!!
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          {/* Left Side: Image with Hover Effect */}
          <div className="w-full md:w-1/2 transform transition-transform duration-300 hover:scale-105">
            <img
              src={registrationImage}
              alt="Registration"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>

          {/* Right Side: Registration Details with Gradient Background */}
          <div className="w-full md:w-1/2 bg-gradient-to-r from-[#11698E] to-[#0A4A6E] p-6 sm:p-8 rounded-lg shadow-2xl text-center transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 text-white">
              How to Register
            </h2>

            {/* Registration Steps with Icons */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-2 sm:p-3 rounded-full">
                  <FaSearch className="text-xl sm:text-2xl text-[#11698E]" />
                </div>
                <p className="text-sm sm:text-lg text-white">
                  Complete the registration form online.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white p-2 sm:p-3 rounded-full">
                  <FaMoneyBillWave className="text-xl sm:text-2xl text-[#11698E]" />
                </div>
                <p className="text-sm sm:text-lg text-white">
                  Participation is free of charge.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white p-2 sm:p-3 rounded-full">
                  <FaGlobe className="text-xl sm:text-2xl text-[#11698E]" />
                </div>
                <p className="text-sm sm:text-lg text-white">
                  Attend the trials at your nearest city.
                </p>
              </div>
            </div>

            {/* Registration Button */}
            <div className="mt-6 sm:mt-8">
              <a
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-[#0A4A6E] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default INLLBrochure;
