import React from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import SampleWork from "./components/SampleWork";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="text-jacpWhite">
      <div className="bg-vhs-pattern">
        <Navbar />
        <About />
        <SampleWork />
        <Skills />
      </div>
      {/* <Testimonials />
      <Contact /> */}
    </main>
  );
}
