/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Background from '../components/vectors/Background'

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Eliezer W. Basubi</title>
        <meta
          name="description"
          content="Fullstack Software Developer, frontend-heavy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <div className="container mx-auto bg-black md:bg-transparent relative z-10">
          <div className="text-white py-12 px-8 lg:px-12 ml:px-24">
            <div className="pt-10 lg:pt-8 xl:pt-16 2xl:pt-32">
              <p className="text-2xl xl:text-3xl 2xl:text-4xl xl:font-semibold">
                Hi, I am
              </p>
              <h1 className="text-3xl lg:text-4xl xl:text-7xl 2xl:text-8xl leading-[60px] xl:leading-[100px] font-semibold md:my-3">
                Eliezer W. Basubi
              </h1>
              <p className="text-2xl xl:text-3xl 2xl:text-4xl xl:font-semibold">
                Frontend Software Engineer
              </p>
            </div>

            <div className="my-8 md:m-24 xl:mt-36 2xl:mt-40 md:w-[30rem]">
              <p className="text-md lg:text-xl 2xl:text-2xl tracking-[0.0075rem]">
                I love creating seamless, sturdy, and scalable user interfaces
                that provide users with an exceptional experience.
              </p>
            </div>

            {/* SHOULD BE REPLACED BY A HUMBERGUR MENU */}
            <div className="hidden md:flex items-center space-x-20 mt-28 lg:mt-8 xl:mt-16 ml:mt-28 2xl:mt-36 absolute">
              <div className="text-xl 2xl:text-2xl tracking-[0.0075rem]">
                Experience
              </div>
              <div className="text-xl 2xl:text-2xl tracking-[0.0075rem]">
                Skills
              </div>
              <div className="text-xl 2xl:text-2xl tracking-[0.0075rem]">
                Work
              </div>
              <div className="text-xl 2xl:text-2xl tracking-[0.0075rem]">
                Contact
              </div>
            </div>
          </div>
          <div className="absolute lg:left-[42rem] ml:left-[940px] xl:left-[52rem] 3xl:left-[66rem] 4xl:left-[79rem] lg:top-[14rem] ml:top-[316px] xl:top-[18rem] 3xl:top-[22rem] 4xl:top-[26rem]">
            <div className="w-[339px] lg:w-[250px] xl:w-[339px] 3xl:w-[370px] 4xl:w-[450px] h-[334px] lg:h-[250px] xl:h-[334px] 3xl:h-[370px] 4xl:h-[450px] rounded-full border-[10px] border-black overflow-hidden">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGJpOcGrU37YQ/profile-displayphoto-shrink_200_200/0/1603868389170?e=1651708800&v=beta&t=4glpP3UyHjdK95UJ-9ZiULlpgFI6Rjyp1ICw3Td8AHk"
                alt="profile"
                className="w-full h-full"
              />
            </div>

            <div className="text-center">Socials</div>
          </div>
        </div>
        <div className="absolute inset-0">
          <Background className="w-full hidden md:block" />
        </div>
      </div>
    </div>
  )
}

export default Home
