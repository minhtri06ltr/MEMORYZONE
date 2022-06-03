import { client } from "../lib/client";
import { Layout, Sell, Banner } from "../components";

const Home = ({ products }) => {
  return (
    <Layout
      title="Memoryzone | Home"
      keywords="
      Phone memory card, genuine camera, USB, USB 3.0, portable hard drive, external hard drive, SSD hard drive, wireless device"
      description="MemoryZone is a brand that specializes in providing Laptops, PCs, storage devices, monitors and other accessories."
    >
      <Banner />
      <Sell products={products} />
      <div className=" w-full pb-96 h-70"></div>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  try {
    const queryAllProduct =
      '*[_type=="product" &&  !(_id in path("drafts.**")) ]';
    const products = await client.fetch(queryAllProduct);

    return {
      props: { products },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
    return {
      products: null,
    };
  }
};
