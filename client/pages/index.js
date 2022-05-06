import { Header, Sell, Banner } from "../components/index";
import Head from "next/head";
import { client } from "../lib/client";

const Home = ({ products }) => {
  return (
    <>
      <Head>
        <title>MEMORYZONE</title>
        <meta name="description" content="MEMORYZONE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Sell products={products} />
      <div className=" w-full pb-96 h-70"></div>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const queryAllProduct = '*[_type=="product"]';
  const products = await client.fetch(queryAllProduct);

  return {
    props: { products },
  };
};
