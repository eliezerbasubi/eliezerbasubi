/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useRecoilState } from 'recoil';
import { sanityClient } from '../sanity';
import Contact from '../components/HomeSections/Contact';
import Experience from '../components/HomeSections/Experience';
import Hero from '../components/HomeSections/Hero';
import Skills from '../components/HomeSections/Skills';
import Work from '../components/HomeSections/Work';
import { useEffect } from 'react';
import { userInfoState } from '../atoms/atom';
import { IUserInfoState } from '../typings';
import { GENERIC_QUERY } from '../queries';

interface IProps {
  userData: IUserInfoState[];
}

const Home = ({ userData }: IProps) => {
  const [{ about }, setUserInfo] = useRecoilState(userInfoState);
  console.log(userData);

  useEffect(() => {
    setUserInfo((currVal) => ({ ...currVal, ...userData }));
  }, [setUserInfo, userData]);

  return (
    <div className="w-full">
      <Head>
        <title>{about?.fullName}</title>
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

export const getServerSideProps = async () => {
  const result = await sanityClient.fetch(GENERIC_QUERY);

  return {
    props: {
      userData: result || {},
    },
  };
};

export default Home;
