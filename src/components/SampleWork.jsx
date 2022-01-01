import { VideoCameraIcon } from "@heroicons/react/solid";
import React from 'react'
import { projectPortfolio } from "../data";

export default function SampleWork() {
    return (
        <section id="sample-work" className="bg-vhs-pattern-3 text-white">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40 shadow-xl bg-black bg-opacity-50 rounded ">
                <div className="flex flex-col w-full mb-20">
                    <VideoCameraIcon className="mx-auto inline-block w-10 mb-4 text-jacpBlue-joeChoice"/>
                    <h1 className="sm:text-4xl text-3xl font-vhs mb-4 text-white">
                        Sample Work
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-tight text-xl font-lexend">
                        I enjoy both live broadcast video work as well as video production projects. Here are a couple samples of those.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projectPortfolio.map((projectPortfolio) => (
                        <a href={projectPortfolio.link} key={projectPortfolio.image} target="_blank" rel="noreferrer noopener" className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img src={projectPortfolio.image} alt="project example" className="absolute inset-0 w-full h-full object-cover object-center hover:hidden rounded-lg" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-neutral-800 bg-neutral-900 opacity-0 hover:opacity-100 transform hover:scale-110 transition duration-220 ease-in-out rounded-2xl">
                                    <h2 className="tracking-widest text-sm font-lexend font-medium text-jacpBlue-joeChoice mb-1">
                                        Roles: {projectPortfolio.roles}
                                    </h2>
                                    <h1 className="title-font text-lg font-lexend text-white mb-3">
                                        {projectPortfolio.title}
                                    </h1>
                                    <p className="leading-relaxed">{projectPortfolio.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}