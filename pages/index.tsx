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
import { ABOUT_QUERY, EXPERIENCE_QUERY } from '../helpers/queries';

interface IProps {
  userData: IUserInfoState[];
}

const Home = ({ userData }: IProps) => {
  const [{ about }, setUserInfo] = useRecoilState(userInfoState);

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
  const [about, experience] = await Promise.all([
    sanityClient.fetch(ABOUT_QUERY),
    sanityClient.fetch(EXPERIENCE_QUERY),
  ]);

  const aboutDetails = about?.reduce(
    (
      lookup: Record<'about', Record<string, string>>,
      user: Record<string, string>
    ) => {
      lookup.about = user;
      return lookup.about;
    },
    {}
  );

  return {
    props: {
      userData: { about: aboutDetails, experience },
    },
  };
};

export default Home;
