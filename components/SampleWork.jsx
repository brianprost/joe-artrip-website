import { VideoCameraIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import { sampleWorkData } from "../data/SampleWorkData";

export default function SampleWork() {
  return (
    <section id="sample-work" className="bg-vhs-pattern-3 text-white">
      <div className="container mx-auto rounded bg-black bg-opacity-50 px-5 py-10 text-center shadow-xl lg:px-40 ">
        <div className="mb-20 flex w-full flex-col">
          <VideoCameraIcon className="mx-auto mb-4 inline-block w-10 text-jacpBlue-joeChoice" />
          <h1 className="mb-4 font-vhs text-3xl text-white sm:text-4xl">
            Sample Work
          </h1>
          <p className="mx-auto font-lexend text-xl leading-tight lg:w-2/3">
            I enjoy both live broadcast video work as well as video production
            projects. Here are a couple samples of those.
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          {sampleWorkData.map((sampleWorkProject) => (
            <a
              href={sampleWorkProject.link}
              key={sampleWorkProject.image}
              target="_blank"
              rel="noreferrer noopener"
              className="w-100 p-4 sm:w-1/2"
            >
              <div className="relative flex h-full">
                <img
                  src={sampleWorkProject.image}
                  alt="project example"
                  className="absolute inset-0 h-full w-full rounded-lg border-2 border-neutral-600 object-cover object-center hover:hidden"
                />
                <div className="duration-220 relative z-10 w-full transform rounded-2xl border-4 border-neutral-800 bg-neutral-900 px-8 py-10 opacity-90 transition ease-in-out hover:scale-110 hover:opacity-100 lg:opacity-0">
                  <h2 className="mb-1 font-lexend text-sm font-medium tracking-widest text-jacpBlue-joeChoice">
                    Roles: {sampleWorkProject.roles}
                  </h2>
                  <h1 className="title-font mb-3 font-lexend text-lg text-white">
                    {sampleWorkProject.title}
                  </h1>
                  <p className="leading-relaxed">
                    {sampleWorkProject.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
