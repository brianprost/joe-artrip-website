import { VideoCameraIcon } from "@heroicons/react/solid";
import React from 'react'
import { projectPortfolio } from "../data";

export default function SampleWork() {
    return (
        <section id="sample-work" className="text-gray-400 bg-gray-800 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <VideoCameraIcon className="mx-auto inline-block w-10 mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-white">
                        Sample Work
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        I enjoy both live broadcast video work as well as video production projects. Here are a coupole samples of those.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projectPortfolio.map((projectPortfolio) => (
                        <a href={projectPortfolio.link} key={projectPortfolio.image} className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img src={projectPortfolio.image} alt="project example" className="absolute inset-0 w-full h-full object-cover object-center" />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {projectPortfolio.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
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