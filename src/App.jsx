import React from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import SampleWork from "./components/SampleWork";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="text-white">
      <div className="bg-vhs-pattern-animated">
        <Navbar />
        <About />
      </div>
      <SampleWork />
      <Skills />
      <Contact /> 
    </main>
  );
}
