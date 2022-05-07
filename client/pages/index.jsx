import { Sell, Banner } from "../components/index";
import { client } from "../lib/client";

const Home = ({ products }) => {
  return (
    <>
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
