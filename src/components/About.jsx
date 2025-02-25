import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-600">
            About
          </p>
        </div>
        <p className="text-sm sm:text-base md:text-lg mt-8 leading-relaxed text-gray-300">
          Hello! I'm Suraj Shrivastav, a full-stack developer passionate about
          building dynamic web applications. My expertise includes the MERN stack
          (MongoDB, Express.js, React, Node.js), where I focus on creating robust
          and user-friendly solutions.
        </p>
        <br />
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
          What sets me apart is my blend of creativity and technical skills,
          exemplified by projects like the Google-Gemini-Clone and Zerodha-Clone.
          My approach to web development is comprehensive, covering both
          front-end design with Bootstrap and Tailwind CSS and back-end
          functionality. I believe in continuous learning and collaboration to
          drive innovation. Let's connect and explore how we can turn your ideas
          into reality!
        </p>
      </div>
    </div>
  );
};

export default About;