import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data/Skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-vhs-pattern-1">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 text-jacpBlue-joeChoice" />
          <h1 className="sm:text-4xl text-3xl font-vhs text-white p-8">
            Skills &amp; Equipment
          </h1>
          <p className="text-xl leading-tight xl:w-2/4 lg:w-3/4 mx-auto font-lexend">
            Across my 5 years of experience in video production and live
            broadcasting, these are skills and equipment I've become most
            proficient in.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-neutral-900 rounded flex p-4 h-full items-center">
                <span className="font-vhs text-sm md:text-md text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
