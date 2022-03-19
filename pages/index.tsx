/* eslint-disable @next/next/no-img-element */
import { useSetRecoilState } from 'recoil';
import { sanityClient } from '../sanity';
import Contact from '../components/HomeSections/Contact';
import Experience from '../components/HomeSections/Experience';
import Hero from '../components/HomeSections/Hero';
import Skills from '../components/HomeSections/Skills';
import Work from '../components/HomeSections/Work';
import { useEffect } from 'react';
import { userInfoState } from '../atoms/atom';
import { IMetaTag, IUserInfoState } from '../typings';
import { GENERIC_QUERY, GET_METATAGS } from '../queries';
import MetaData from '../components/MetaData';

interface IProps {
  userData: IUserInfoState[];
  metatag: IMetaTag;
}

const Home = ({ userData, metatag }: IProps) => {
  const setUserInfo = useSetRecoilState(userInfoState);

  useEffect(() => {
    setUserInfo((currVal) => ({ ...currVal, ...userData }));
  }, [setUserInfo, userData]);

  return (
    <div className="w-full">
      <MetaData metatag={metatag} />
      <Hero />
      <Experience />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export const getServerSideProps = async () => {
  const [metatag, result] = await Promise.all([
    sanityClient.fetch(GET_METATAGS),
    sanityClient.fetch(GENERIC_QUERY),
  ]);

  return {
    props: {
      userData: result || {},
      metatag,
    },
  };
};

export default Home;
