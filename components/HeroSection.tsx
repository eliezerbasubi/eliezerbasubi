/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Background from '../components/vectors/Background';
import {
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaTelegramPlane,
} from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="md:absolute container mx-auto bg-black md:bg-transparent z-10 pb-16 md:pb-0 min-h-screen">
        <div className="text-white flex md:hidden justify-end p-6 pb-0">
          <HiMenuAlt3 className="h-6 w-6" />
        </div>
        <div className="text-white py-6 md:py-12 px-8 pt-3 lg:px-12 ml:px-24">
          <div className="pt-10 md:pt-4 lg:pt-8 xl:pt-16 2xl:pt-32">
            <p className="text-2xl xl:text-3xl 2xl:text-4xl xl:font-semibold">
              Hi, I am
            </p>
            <h1 className="text-3xl lg:text-4xl xl:text-7xl 2xl:text-8xl leading-[60px] xl:leading-[100px] font-semibold lg:my-3">
              Eliezer W. Basubi
            </h1>
            <p className="text-2xl xl:text-3xl 2xl:text-4xl xl:font-semibold">
              Frontend Software Engineer
            </p>
          </div>

          <div className="my-8 md:m-24 xl:mt-36 2xl:mt-40 md:w-[27rem] lg:w-[30rem]">
            <p className="text-md lg:text-xl 2xl:text-2xl tracking-75">
              I love creating seamless, robust, and scalable user interfaces
              that provide users with an exceptional experience.
            </p>
          </div>

          {/* SHOULD BE REPLACED BY A HUMBERGUR MENU */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-20 mt-28 md:mt-0 lg:mt-8 sl:mt-16 ml:mt-28 2xl:mt-36 absolute text-xl 2xl:text-2xl tracking-75 font-medium">
            <div>Experience</div>
            <div>Skills</div>
            <div>Work</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:block md:absolute md:-right-20 lg:right-auto lg:left-[42rem] ml:left-[940px] xl:left-[54rem] 3xl:left-[66rem] 4xl:left-[79rem] md:top-[12.5rem] lg:top-[14rem] ml:top-[316px] xl:top-[18rem] 3xl:top-[22rem] 4xl:top-[26rem] avatar-wrapper">
          <div className="w-36 md:w-[250px] lg:w-[250px] xl:w-[339px] 3xl:w-[375px] 4xl:w-[450px] h-36 md:h-[250px] lg:h-[250px] xl:h-[334px] 3xl:h-[375px] 4xl:h-[450px] rounded-full border-[10px] border-black overflow-hidden">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGJpOcGrU37YQ/profile-displayphoto-shrink_200_200/0/1603868389170?e=1651708800&v=beta&t=4glpP3UyHjdK95UJ-9ZiULlpgFI6Rjyp1ICw3Td8AHk"
              alt="profile"
              className="w-full h-full"
            />
          </div>

          <div className="flex justify-center items-center space-x-3 mt-8">
            <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-lg text-gray-500 hover:text-black hover:border-black/5">
              <FaLinkedinIn />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-lg text-gray-500 hover:text-black hover:border-black/5">
              <FaTwitter />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-lg text-gray-500 hover:text-black hover:border-black/5">
              <FaGithub />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-lg text-gray-500 hover:text-black hover:border-black/5">
              <FaTelegramPlane />
            </div>
          </div>
        </div>
      </div>
      <Background className="w-full hidden md:block" />
    </div>
  );
};

export default HeroSection;
