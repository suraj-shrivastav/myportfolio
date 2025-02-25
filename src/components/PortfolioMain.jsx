import React from 'react';
import airbnb from "../assets/portfolio/airbnb.png";
import gemini from "../assets/portfolio/gemini.png";
import zerodha from "../assets/portfolio/zerodha.png";
import technext from "../assets/portfolio/technext.png";
import comingsoon from "../assets/portfolio/comingsoon.jpeg";

const PortfolioMain = () => {
  const portfolios = [
    {
      id: 1,
      src: airbnb,
      hrefDemo: "/",
      hrefCode: "https://github.com/suraj-shrivastav/StaySpot",
    },
    {
      id: 2,
      src: zerodha,
      hrefDemo: "https://frontend-opal-eta-40.vercel.app/",
      hrefCode: "https://github.com/suraj-shrivastav/frontend",
    },
    {
      id: 3,
      src: gemini,
      hrefDemo: "https://chatbot-vert-psi.vercel.app/",
      hrefCode: "https://github.com/suraj-shrivastav/chatbot",
    },
    {
      id: 4,
      src: technext,
      hrefDemo: "https://technext-one.vercel.app/",
      hrefCode: "https://github.com/suraj-shrivastav/conference",
    },
    {
      id: 5,
      src: comingsoon,
      hrefDemo: "/",
      hrefCode: "/",
    },
    {
      id: 6,
      src: comingsoon,
      hrefDemo: "/",
      hrefCode: "/",
    },
  ];

  return (
    <div name="portfolio" className='bg-gradient-to-b from-gray-900 to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-teal-600 '>Portfolio</p>
          <p className='py-6 '>Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, hrefDemo, hrefCode }) => (
            <div key={id} className="shadow-md shadow-emerald-800/50 rounded-lg hover:shadow-emerald-800/80 duration-300 transform transition-transform hover:scale-105">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-95"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 bg-gradient-to-r from-green-500 to-teal-500 rounded-md">
                  <a href={hrefDemo} target="_blank" rel="noopener noreferrer">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 bg-gradient-to-r from-green-500 to-teal-500 rounded-md">
                  <a href={hrefCode} target="_blank" rel="noopener noreferrer">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioMain;