import { ArrowRightIcon } from "@heroicons/react/solid";
import React from 'react';

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:stickey top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-black text-white mb-4 md:mb-0 tracking-widest">
                    <a href="#" className="ml-3 text.xl">
                        JOSEPH ARTRIP
                    </a>
                </a>
                <nav className="lg:mx-auto md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray flex flex-wrap items-center text-base justify-center tracking-widest font-light">
                    <a href="#projects" className="mr-5 hover:text-white">
                        MY WORK
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        SKILLS
                    </a>
                    <a href="#music" className="mr-5 hover:text-white">
                        MUSIC
                    </a>
                </nav>
                <a href="#contact" className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    CONTACT
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}