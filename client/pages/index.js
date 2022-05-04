import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Head>
        <title>MEMORYZONE</title>
        <meta name="description" content="MEMORYZONE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <div className=" w-full pb-96 h-70"></div>
    </>
  );
};

export default Home;
