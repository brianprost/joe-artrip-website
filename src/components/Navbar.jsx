import { ArrowRightIcon } from "@heroicons/react/solid";
import React from 'react';

export default function Navbar() {
    return (
        <header className="bg:transparent top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-6 flex-col ">
                <nav className="flex flex-wrap items-center text-base justify-around tracking-widest font-vhs text-gray-200 mt-4">
                    <a href="#projects" className="hover:text-white hover:border ">
                        MY WORK
                    </a>
                    <a href="#skills" className="hover:text-white hover:border ">
                        SKILLS
                    </a>
                    <a href="#contact" className="hover:text-white hover:border ">
                        CONTACT
                    </a>
                </nav>
            </div>
        </header>
    );
}