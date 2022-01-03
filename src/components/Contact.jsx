import React from "react";
import { FaEnvelopeOpenText, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-vhs-pattern-2">
      <div className="relative flex items-center justify-center min-h-screen sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="p-6 mr-2 bg-neutral-800 bg-opacity-60 rounded-lg">
              <h1 className="text-4xl md:text-6xl text-white font-vhs tracking-tight mb-10">
                Contact Me
              </h1>
              <div className="flex items-center mt-4 text-white  bg-neutral-500 rounded-lg bg-opacity-60 w-full md:w-2/3">
                <a
                  href="https://linkedin.com/in/josephartrip"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaLinkedinIn className="bg-neutral-700 rounded-lg border-2 text-5xl text-color-white p-2 hover:scale-110 hover:bg-neutral-600 hover:text-jacpBlue-joeChoice" />
                </a>
                <div className="ml-4 text-lg tracking-wide font-lexend w-40">
                  linkedin.com/in/josephartrip
                </div>
              </div>

              <div className="flex items-center mt-2 text-white bg-neutral-500 rounded-lg bg-opacity-60 w-full md:w-2/3">
                <a href="mailto:joe.h.artrip@gmail.com">
                  <FaEnvelopeOpenText className="bg-neutral-700 rounded-lg border-2 text-5xl text-color-white p-2 hover:scale-110 hover:bg-neutral-600 hover:text-jacpBlue-joeChoice" />
                </a>
                <div className="ml-4 text-lg tracking-wide font-lexend w-40">
                  joe.h.artrip@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
