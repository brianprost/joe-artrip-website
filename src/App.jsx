import React from 'react'

import Navbar from "./components/Navbar"
import About from "./components/About"
import SampleWork from "./components/SampleWork"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"

export default function App() {
  return (
    <main className='text-gray-400 bg-gray-900 font-light'>
      <Navbar />
      <About />
      <Skills />
      <SampleWork />
      {/* <Testimonials />
      <Contact /> */}
    </main>
  )
}