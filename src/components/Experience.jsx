import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express-js.png";

const Experience = () => {
    const techs = [
        { id: 1, src: html, title: "HTML" },
        { id: 2, src: css, title: "CSS" },
        { id: 3, src: javascript, title: "JavaScript" },
        { id: 4, src: reactImage, title: "React" },
        { id: 5, src: tailwind, title: "Tailwind" },
        { id: 6, src: nodejs, title: "Node.js" },
        { id: 7, src: express, title: "Express.js" },
        { id: 8, src: github, title: "GitHub" },
        { id: 9, src: mongodb, title: "MongoDB" },
    ];

    return (
        <div name="experience" className="bg-gray-900 w-full h-auto py-16">
            <div className="max-w-screen-lg mx-auto px-6 flex flex-col justify-center w-full text-white">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-100">Experience</h2>
                    <p className="text-gray-400 mt-2">Technologies I've worked with</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                    {techs.map(({ id, src, title }) => (
                        <div 
                            key={id} 
                            className="group flex flex-col items-center justify-center p-6 rounded-xl bg-gray-800 transition-all duration-300 hover:bg-gray-700 hover:shadow-lg"
                        >
                            <img src={src} alt={title} className="w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110" />
                            <p className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
