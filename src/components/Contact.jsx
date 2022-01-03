import React from "react";
import { FaEnvelopeOpenText, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [message, setMessage] = React.useState("");

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact", name, email, message }),
  //   })
  //     .then(() => alert("Thanks! Hope to talk to you soon."))
  //     .catch((error) => alert(error));
  // }

  return (
    <section id="contact" className="bg-vhs-pattern-2">
      <div className="relative flex items-center justify-center min-h-screen sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-neutral-700 bg-opacity-20 sm:rounded-lg">
                <h1 className="text-4xl md:text-6xl text-white font-vhs tracking-tight mb-10">
                  Contact Me
                </h1>
                <div className="flex items-center mt-4 text-white ">
                  <a
                    href="https://linkedin.com/in/josephartrip"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaLinkedinIn className="bg-neutral-700 rounded-xl text-4xl text-color-white p-2 hover:scale-110 hover:bg-neutral-600 hover:text-jacpBlue-joeChoice"/>
                  </a>
                  <div className="ml-4 text-lg tracking-wide font-lexend w-40">
                    linkedin.com/in/josephartrip
                  </div>
                </div>

                <div className="flex items-center mt-2 text-white">
                  <a href="mailto:joe.h.artrip@gmail.com">
                    <FaEnvelopeOpenText className="bg-neutral-700 rounded-xl text-4xl text-color-white p-2 hover:scale-110 hover:bg-neutral-600 hover:text-jacpBlue-joeChoice"/>
                  </a>
                  <div className="ml-4 text-lg tracking-wide font-lexend w-40">
                    joe.h.artrip@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
