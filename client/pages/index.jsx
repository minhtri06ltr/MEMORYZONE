import { client } from "../lib/client";
import { Layout, Sell, Banner } from "../components";

const Home = ({ products }) => {
  return (
    <Layout title="Memoryzone | Home" description="Memoryzone homepage">
      <Banner />
      <Sell products={products} />
      <div className=" w-full pb-96 h-70"></div>
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  try {
    const queryAllProduct =
      '*[_type=="product" &&  !(_id in path("drafts.**")) ]';
    const products = await client.fetch(queryAllProduct);

    return {
      props: { products },
    };
  } catch (error) {
    console.log(error);
    return {
      products: null,
    };
  }
};
