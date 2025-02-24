import React from "react";
import HeroImage from "../assets/suraj.png"; // Assuming "suraj.png" has a transparent background
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-800 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-700/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-fuchsia-700/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-700/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-screen px-6 md:flex-row relative z-10">
        {/* Text Section */}
        <div
          className="flex flex-col justify-center h-full text-center md:text-left md:w-1/2"
        >
          <h2 className="text-sm sm:text-base text-fuchsia-400 font-bold tracking-widest mb-2">
            FRONTEND DEVELOPER
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text">
              Crafting Digital
            </span>
            <br />
            Experiences with Code.
          </h1>
          <p className="text-gray-300 py-4 max-w-md mx-auto md:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
            I transform ideas into functional, scalable web applications. My
            passion lies in building intuitive user interfaces and robust
            backends. Let's build something amazing together.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-8 py-3 my-4 flex items-center rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-fuchsia-600 hover:to-violet-600 transition-all duration-300 cursor-pointer shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transform hover:-translate-y-1"
            >
              Explore My Work
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                <RiArrowRightSLine size={22} className="ml-2" />
              </span>
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-8 py-3 my-4 flex items-center rounded-lg border border-violet-500 hover:bg-violet-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="mt-8 md:mt-0 md:w-1/2 relative"
        >
          <img
            src={HeroImage}
            alt="my profile"
            className="mx-auto w-3/4 sm:w-2/3 md:w-5/6 relative z-10 transform hover:scale-105 transition-transform duration-500"
            style={{
              border: "1px solid #d946ef",
              boxShadow: "0 8px 20px rgba(217, 70, 239, 0.5)", // Added shadow effect
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;