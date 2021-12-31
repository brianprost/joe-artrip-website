import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Thanks! Hope to talk to you soon."))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="bg-vhs-pattern-2">
      <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-neutral-700 bg-opacity-20 sm:rounded-lg">
                <h1 className="text-6xl text-white font-vhs tracking-tight mb-10">
                  Contact Me
                </h1>

                <div className="flex items-center mt-4 text-white ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-jacpBlue-joeChoice"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-lg tracking-wide font-lexend w-40">
                    (304) 993-2395
                  </div>
                </div>

                <div className="flex items-center mt-2 text-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-jacpBlue-joeChoice"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-lg tracking-wide font-lexend w-40">
                    joe.h.artrip@gmail.com
                  </div>
                </div>
              </div>

              <form
                netlify
                name="contact"
                onSubmit={handleSubmit}
                className="p-6 flex flex-col justify-center"
              >
                <div className="flex flex-col">
                  <label for="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-neutral-800  border border-white text-neutral-100 font-lexend focus:border-white focus:outline-none"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-neutral-700  border border-white text-neutral-100 font-lexend focus:border-white focus:outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label for="message" className="hidden">
                    Number
                  </label>
                  <textarea
                    type="message"
                    name="message"
                    id="message"
                    placeholder="Your message"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-neutral-600 border border-white text-neutral-100 font-lexend focus:border-white focus:outline-none"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="md:w-full bg-transparent text-white hover:text-black font-vhs py-3 px-6 rounded-lg mt-3 border-2 hover:bg-neutral-200 hover:scale-105 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
