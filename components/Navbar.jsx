import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg:transparent top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-6 flex-col ">
        <nav className="flex flex-wrap items-center text-base justify-around tracking-tighter md:tracking-wide lg:tracking-widest font-vhs text-gray-200 m-8">
          <Link href={"#sample-work"}>
            <a className="p-3 hover:text-white hover:border-2 ">MY WORK</a>
          </Link>
          <Link href={"#skills"}>
            <a className="p-3 hover:text-white hover:border-2 ">SKILLS</a>
          </Link>
          <Link href={"#contact"}>
            <a className="p-3 hover:text-white hover:border-2 ">CONTACT</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
