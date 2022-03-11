import React from 'react';
import SectionHeader from '../partials/SectionHeader';
import Socials from '../partials/Socials';

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-dark  flex flex-col items-center justify-center">
      <div className="container mx-auto px-8 lg:px-12 ml:px-24 py-12">
        <SectionHeader
          title="Contact"
          className="flex flex-col justify-center items-center mb-8 text-white"
          barClassName="bg-white"
          description="Want to say hello, ask for my resume, or see if we can build something amazing together? I'd love to hear from you !"
        />

        <form className="lg:px-24 xl:px-28 2xl:px-32 5xl:px-52">
          <div className="flex flex-wrap md:flex-nowrap space-y-6 md:space-y-0 md:space-x-4 lg:space-x-6 2xl:space-x-8 mb-4">
            <div className="w-full bg-gray-200 rounded-lg p-3 py-4">
              <div className="relative">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  className="peer h-8 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative top-2 5xl:text-xl"
                  placeholder="John Doe"
                />
                <label
                  htmlFor="fullname"
                  className="absolute left-0 -top-2 text-gray-600 text-sm 5xl:text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 md:peer-placeholder-shown:top-2 5xl:peer-placeholder-shown:top-4 peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Your Name
                </label>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-lg p-3 py-4">
              <div className="relative flex-1">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="peer h-8 md:h-10 5xl:h-14 w-full placeholder-transparent focus:outline-none bg-transparent relative top-2 5xl:text-xl"
                  placeholder="john@doe.com"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-2 text-gray-600 text-sm 5xl:text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 md:peer-placeholder-shown:top-2 5xl:peer-placeholder-shown:top-4 peer-focus:-top-2 5xl:peer-focus:top-1 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg p-3 py-4 mt-6 md:mt-10 lg:mt-12">
            <div className="relative">
              <textarea
                id="message"
                name="message"
                className="peer h-16 md:h-20 w-full placeholder-transparent focus:outline-none bg-transparent relative top-3 resize-none"
                placeholder="Leave me a message"
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-2 text-gray-600 text-sm 5xl:text-xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 md:peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Message
              </label>
            </div>
          </div>
          <div className="flex justify-center mt-6 md:mt-10 lg:mt-12">
            <button
              type="submit"
              // onClick={onClick}
              className="w-full lg:w-96 h-14 border-2 border-gray-200 text-white rounded-lg text-center uppercase font-medium text-lg 5xl:text-xl"
            >
              Send message
            </button>
          </div>
        </form>

        <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col items-center justify-center text-white">
          <p className="text-sm lg:text-lg 2xl:text-xl 5xl:text-2xl tracking-75 5xl:mb-5">
            Or, let&apos;s connect on:
          </p>

          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Contact;
