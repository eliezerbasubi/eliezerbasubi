/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../atoms/atom';
import { DEFAULT_AVATAR, MENU_ITEMS } from '../../helpers/constants';
import { urlFor } from '../../sanity';
import DrawerMenu from '../partials/DrawerMenu';
import Socials from '../partials/Socials';
import Background from '../vectors/Background';

const Hero = () => {
  const { about } = useRecoilValue(userInfoState);

  return (
    <div className="relative" id="about">
      <div className="md:absolute container mx-auto bg-black md:bg-transparent z-10 pb-16 md:pb-0 min-h-screen">
        <DrawerMenu />
        <div className="text-white py-6 md:py-12 px-8 pt-3 lg:px-12 ml:px-24 5xl:px-52">
          <div className="pt-10 md:pt-4 lg:pt-8 xl:pt-16 2xl:pt-32 5xl:pt-72">
            <p className="text-2xl xl:text-3xl 2xl:text-4xl xl:font-semibold">
              {about?.greeting}
            </p>
            <h1 className="text-3xl lg:text-4xl xl:text-7xl 2xl:text-8xl leading-[60px] xl:leading-[100px] font-semibold lg:my-3 5xl:my-5">
              {about?.fullName}
            </h1>
            <p className="text-2xl xl:text-3xl 2xl:text-4xl xl:font-semibold">
              {about?.jobTitle}
            </p>
          </div>

          <div className="my-8 md:m-24 5xl:m-56 xl:mt-36 2xl:mt-40 md:w-[27rem] lg:w-[30rem] 5xl:w-[40rem]">
            <p className="text-md lg:text-xl 2xl:text-2xl 5xl:text-4xl tracking-75">
              {about?.personalDescription}
            </p>
          </div>

          <div className="hidden md:flex items-center space-x-10 lg:space-x-20 mt-28 md:mt-0 lg:mt-8 sl:mt-16 ml:mt-28 2xl:mt-36 absolute text-xl 2xl:text-2xl 5xl:text-4xl tracking-75 font-medium">
            {MENU_ITEMS.map((item) => (
              <div key={`dsk_${item.href}`} className="hover:border-b-2">
                <Link href={item.href}>{item.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:block md:absolute md:-right-20 lg:right-auto lg:left-[42rem] ml:left-[940px] xl:left-[54rem] 3xl:left-[66rem] 4xl:left-[79rem] 5xl:left-[103rem] md:top-[12.5rem] lg:top-[14rem] ml:top-[316px] xl:top-[18rem] 3xl:top-[22rem] 4xl:top-[26rem] 5xl:top-[34rem]">
          <div className="w-36 md:w-[250px] lg:w-[250px] xl:w-[339px] 3xl:w-[375px] 4xl:w-[450px] 5xl:w-[580px] h-36 md:h-[250px] lg:h-[250px] xl:h-[334px] 3xl:h-[375px] 4xl:h-[450px] 5xl:h-[580px] rounded-full border-[10px] border-black overflow-hidden bg-white">
            <img
              src={
                about?.avatarUrl
                  ? urlFor(about?.avatarUrl).url()
                  : DEFAULT_AVATAR
              }
              alt="profile"
              className="w-full h-full"
            />
          </div>

          <Socials className="mt-8" excludes={['email']} />
        </div>
      </div>
      <Background className="w-full hidden md:block" />
    </div>
  );
};

export default Hero;
