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

interface IProps {
  userData: IUserInfoState[];
}

const Home = ({ userData }: IProps) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userDetails = userData.reduce((lookup: Record<string, any>, user) => {
      lookup.data = user;
      return lookup.data;
    }, {}) as IUserInfoState;

    console.log(userDetails);

    setUserInfo(userDetails);
  }, [setUserInfo, userData]);

  return (
    <div className="w-full">
      <Head>
        <title>{userInfo.fullName}</title>
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
  const query = `*[_type in ["about"]]`;
  const result = await sanityClient.fetch(query);

  return {
    props: {
      userData: result,
    },
  };
};

export default Home;
