import { Header, Sell, Banner } from "../components/index";
import Head from "next/head";
import { client } from "../lib/client";

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
      <Sell />
      <div className=" w-full pb-96 h-70"></div>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const queryAllProduct = '*[_type=="product"]';
  const products = await client.canShare.fetch(queryAllProduct);
  return {
    props: products,
  };
};
