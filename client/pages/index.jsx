import { client } from "../lib/client";
import {
  Layout,
  Sell,
  Banner,
  Brand,
  Inform,
} from "../components";
import { Ads, Interest } from "../components";
import Image from "next/image";

const HomePage = ({ products }) => {
  const structure1 = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Memoryzone - Professional in technology",
    url: "https://memoryzone.vercel.app",
    logo: "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/logo.png?1658804872735",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+84(28) 3679 0 7374",
        contactType: "Customer Service",
        availableLanguage: ["English"],
        contactOption: [],
      },
    ],
    sameAs: [],
  };

  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Memoryzone",
    url: process.env.NEXT_PUBLIC_CLIENT_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${process.env.NEXT_PUBLIC_CLIENT_URL}/search?key={search_term_string}`,
      "query-input":
        "required name=search_term_string",
    },
  };
  return (
    <Layout
      schema={schema}
      structures={[structure1]}
      title="Laptop, PC, technology and other accessories | Memoryzone - Professional in technology"
      keywords=" Memoryzone Phone memory card, genuine camera, USB, USB 3.0, portable hard drive, external hard drive, SSD hard drive, wireless device"
      description="Memoryzone is a brand that specializes in providing Laptops, PCs, storage devices, monitors and other accessories."
    >
      <Banner />
      <Ads />
      <Interest />
      <Sell products={products} />
      {/*trend brand section*/}
      <Brand />
      {/*inform section*/}
      <Inform />
    </Layout>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  try {
    const products = await client.fetch(
      `  *[_type=="product"]{
        slug,image[0],name,price
      }`,
    );

    return {
      props: { products },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        products: null,
      },
    };
  }
};
