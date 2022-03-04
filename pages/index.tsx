import type { NextPage } from "next";
import Head from "next/head";

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
      <h1 className="text-3xl font-bold">WELCOME ELIEZER</h1>
    </div>
  );
};

export default Home;
