import Head from "next/head";
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
    </>
  );
};

export default Home;
