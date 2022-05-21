import { client } from "../lib/client";
import { Layout, Sell, Banner } from "../components";

const Home = ({ products }) => {
  return (
    <Layout title="Home | Memoryzone" description="Memoryzone homepage">
      <Banner />
      <Sell products={products} />
      <div className=" w-full pb-96 h-70"></div>
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const queryAllProduct =
    '*[_type=="product" &&  !(_id in path("drafts.**")) ]';
  const products = await client.fetch(queryAllProduct);

  return {
    props: { products },
  };
};
