import React from "react";
import { FaEnvelopeOpenText, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const linkedInUrl = "https://www.linkedin.com/in/josephartrip/";
  const emailAddress = "joe.h.artrip@gmail.com";

  return (
    <section id="contact" className="bg-vhs-pattern-2">
      <div className="relative flex min-h-screen items-center justify-center sm:items-center sm:pt-0">
        <div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="mr-2 flex flex-col items-center rounded-lg bg-neutral-800 bg-opacity-60 p-6">
              <h1 className="mb-6 font-vhs text-4xl tracking-tight text-white md:text-6xl">
                Contact Me
              </h1>
              <div className="mt-4 flex w-full items-center  rounded-lg bg-neutral-500 bg-opacity-60 text-white md:w-2/3">
                <a
                  href="https://linkedin.com/in/josephartrip"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaLinkedinIn className="text-color-white rounded-lg border-2 bg-neutral-700 p-2 text-5xl hover:scale-110 hover:bg-neutral-600 hover:text-jacpBlue-joeChoice" />
                </a>

                <div
                  className="ml-4 w-40 select-all font-lexend text-lg tracking-wide"
                  onClick={() => {
                    navigator.clipboard.writeText(linkedInUrl);
                  }}
                >
                  linkedin.com/in/josephartrip
                </div>
              </div>

              <div className="mt-2 flex w-full items-center rounded-lg bg-neutral-500 bg-opacity-60 text-white md:w-2/3">
                <a href="mailto:joe.h.artrip@gmail.com">
                  <FaEnvelopeOpenText className="text-color-white rounded-lg border-2 bg-neutral-700 p-2 text-5xl hover:scale-110 hover:bg-neutral-600 hover:text-jacpBlue-joeChoice" />
                </a>
                <div
                  className="ml-4 w-40 select-all font-lexend text-lg tracking-wide"
                  onClick={() => {
                    navigator.clipboard.writeText(emailAddress);
                  }}
                >
                  joe.h.artrip@gmail.com
                </div>
                {/* <span className="relative w-auto p-2 min-w-max rounded-md shadow-md bg-neutral-500 left-48 text-xs">
                    Copy to clipboard
                  </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
