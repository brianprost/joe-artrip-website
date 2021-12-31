import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center min-h-fit">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-gradient-to-l from-transparent to-black lg:p-8 rounded-lg font-lexend">
          <h1 className="text-4xl md:text-4xl mb-4 font-extrabold text-white">
            Hi, I'm Joe Artrip.
            <br className="hidden lg:inline-block" />
          </h1>
          <h2 className="text-5xl pt-4 sm:text-6xl mb-6 font-bold text-white">
            I'm a <span className="drop-shadow-2xl ">videographer</span> in
            Washington, D.C.
          </h2>
          <p className="mb-8 leading-relaxed font-medium">
            I'm a Video editor with 5 years of experience meeting clients’ needs
            while in fast-paced working environments. Worked a varied group of
            live production roles including producer, camera operation, and
            audio mixing.
          </p>
          <div className="flex justify-center">
            <a
              href="#sample-work"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-gray-40 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            src="./bio-pic.webp"
            alt="joe-artrip-video-bio-pic"
            className="object-cover object-center rounded rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
