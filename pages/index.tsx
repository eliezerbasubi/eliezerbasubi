/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import Experience from '../components/Experience';
import HeroSection from '../components/HeroSection';
import Skills from '../components/Skills';

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

      <HeroSection />

      <Experience />

      <Skills />
    </div>
  );
};

export default Home;
