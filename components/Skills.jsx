import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data/Skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-vhs-pattern-1">
      <div className="container mx-auto px-5 py-10">
        <div className="mb-20 text-center">
          <ChipIcon className="mb-4 inline-block w-10 text-jacpBlue-joeChoice" />
          <h1 className="p-8 font-vhs text-3xl text-white sm:text-4xl">
            Skills &amp; Equipment
          </h1>
          <p className="mx-auto font-lexend text-xl leading-tight lg:w-3/4 xl:w-2/4">
            Across my 5 years of experience in video production and live
            broadcasting, these are skills and equipment I've become most
            proficient in.
          </p>
        </div>
        <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
          {skills.map((skill) => (
            <div key={skill} className="w-full p-2 sm:w-1/2">
              <div className="flex h-full items-center rounded bg-neutral-900 p-4">
                <span className="md:text-md font-vhs text-sm text-white">
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
