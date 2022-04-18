import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about" className="overflow-hidden">
      <div className="container mx-auto flex min-h-fit flex-col items-center px-10 py-20 md:flex-row">
        <div className="mb-16 flex flex-col items-center rounded-lg bg-gradient-to-l from-transparent to-black text-center font-lexend md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:p-8 lg:pr-24">
          <h1 className="drop-shadow-1xl mb-4 text-4xl font-extrabold text-white md:text-4xl">
            Hi, I'm Joe Artrip.
            <br className="hidden lg:inline-block" />
          </h1>
          <div className="h-1/2 w-2/5 md:hidden md:w-1/2">
            <img
              src="./img/bio-pic.webp"
              alt="joe-artrip-video-bio-pic"
              className="rounded-full object-cover object-center"
            />
          </div>
          <h2 className="mb-6 pt-4 text-5xl font-bold text-white drop-shadow-2xl sm:text-6xl">
            I'm a videographer in Washington, D.C.
          </h2>
          <p className="drop-shadow-1xl mb-8 font-medium leading-relaxed">
            I'm a video editor with 5 years of experience meeting clients needs
            while in fast-paced working environments. I've worked a varied group
            of live production roles including producer, camera operation, and
            audio mixing.
          </p>
          <div className="flex justify-center">
            <a
              href="#sample-work"
              className="inline-flex rounded border-2 bg-white py-2 px-6 text-lg text-black hover:bg-transparent hover:text-white focus:outline-white"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="hover:text-bold ml-4 inline-flex rounded border-2 bg-transparent py-2 px-6 text-lg text-white hover:bg-neutral-300 hover:text-neutral-900 focus:outline-none"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hidden w-2/5 md:contents md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            src="./img/bio-pic.webp"
            alt="joe-artrip-video-bio-pic"
            className="rounded-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
