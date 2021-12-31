import { ArrowRightIcon } from "@heroicons/react/solid";
import React from 'react';

export default function Navbar() {
    return (
        <header className="bg:transparent top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-6 flex-col ">
                <nav className="flex flex-wrap items-center text-base justify-around tracking-tighter md:tracking-wide lg:tracking-widest font-vhs text-gray-200 m-8">
                    <a href="#sample-work" className="p-3 hover:text-white hover:border-2 ">
                        MY WORK
                    </a>
                    <a href="#skills" className="p-3 hover:text-white hover:border-2 ">
                        SKILLS
                    </a>
                    <a href="#contact" className="p-3 hover:text-white hover:border-2 ">
                        CONTACT
                    </a>
                </nav>
            </div>
        </header>
    );
}