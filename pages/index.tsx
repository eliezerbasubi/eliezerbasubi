/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import Contact from '../components/HomeSections/Contact';
import Experience from '../components/HomeSections/Experience';
import Hero from '../components/HomeSections/Hero';
import Skills from '../components/HomeSections/Skills';
import Work from '../components/HomeSections/Work';

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
      <Hero />
      <Experience />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
