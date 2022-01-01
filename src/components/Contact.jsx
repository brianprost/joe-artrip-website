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
                <h1 className="text-4xl md:text-6xl text-white font-vhs tracking-tight mb-10">
                  Contact Me
                </h1>
                <div className="flex items-center mt-4 text-white ">
                  <a
                    href="https://linkedin.com/in/josephartrip"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-jacpBlue-joeChoice"
                    >
                      <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
                    </svg>
                  </a>
                  <div className="ml-4 text-lg tracking-wide font-lexend w-40">
                    linkedin.com/in/josephartrip
                  </div>
                </div>

                <div className="flex items-center mt-2 text-white">
                  <a href="mailto:joe.h.artrip@gmail.com">
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
                  </a>
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
                    placeholder="Your Name"
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
                    placeholder="Your message..."
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
