import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg:transparent top-0 z-10">
      <div className="container mx-auto flex flex-col flex-wrap p-6 ">
        <nav className="m-8 flex flex-wrap items-center justify-around font-vhs text-base tracking-tighter text-gray-200 md:tracking-wide lg:tracking-widest">
          <Link href={"#sample-work"}>
            <a className="p-3 hover:border-2 hover:text-white ">MY WORK</a>
          </Link>
          <Link href={"#skills"}>
            <a className="p-3 hover:border-2 hover:text-white ">SKILLS</a>
          </Link>
          <Link href={"#contact"}>
            <a className="p-3 hover:border-2 hover:text-white ">CONTACT</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
