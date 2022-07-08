import { client } from "../lib/client";
import {
  Layout,
  Sell,
  Banner,
} from "../components";
import { Ads, Interest } from "../components";
import Image from "next/image";

const HomePage = ({ products }) => {
  return (
    <Layout
      title="Memoryzone | Profession in Technology - Hardware and other accessories"
      keywords=" Memoryzone Phone memory card, genuine camera, USB, USB 3.0, portable hard drive, external hard drive, SSD hard drive, wireless device"
      description="MemoryZone is a brand that specializes in providing Laptops, PCs, storage devices, monitors and other accessories."
    >
      <Banner />
      <Ads />
      <Interest />
      <Sell products={products} />
      {/*trend brand section*/}
      <div className="px-10">
        <div className='relative text-center before:content-[""] before:w-full before:absolute before:h-[1px] before:top-1/2 before:left-0 before:z-0 before:bg-[#ebebeb]'>
          <span className="inline-block relative text-xl  text-center z-10 px-6 bg-white font-semibold text-text">
            FAVORITE BRANDS
          </span>
        </div>
        <div className="flex items-center  justify-between mt-8">
          <div className="relative cursor-pointer w-[170px] h-[100px]">
            <Image
              alt="Memoryzone Kingston technology logo"
              layout="fill"
              quality={100}
              src="https://bizweb.sapocdn.net/thumb/medium/100/329/122/themes/835213/assets/brand_1.png?1655450481933"
            />
          </div>
          <div className="relative cursor-pointer w-[170px] h-[100px]">
            <Image
              layout="fill"
              quality={100}
              alt="Memoryzone Crucial  logo"
              src="https://bizweb.sapocdn.net/thumb/medium/100/329/122/themes/835213/assets/brand_2.png?1655450481933"
            />
          </div>
          <div className="relative cursor-pointer w-[170px] h-[100px]">
            <Image
              layout="fill"
              quality={100}
              alt="Memoryzone Samsung logo"
              src="https://bizweb.sapocdn.net/thumb/medium/100/329/122/themes/835213/assets/brand_3.png?1655450481933"
            />
          </div>
          <div className="relative cursor-pointer w-[190px] h-[100px] -translate-y-[10px]">
            <Image
              layout="fill"
              quality={100}
              alt="Memoryzone Western Digital logo"
              src="https://bizweb.sapocdn.net/thumb/medium/100/329/122/themes/835213/assets/brand_4.png?1655450481933"
            />
          </div>
          <div className="relative cursor-pointer w-[170px] h-[100px]">
            <Image
              layout="fill"
              quality={100}
              alt=" Memoryzone Intel logo"
              src="https://bizweb.sapocdn.net/thumb/medium/100/329/122/themes/835213/assets/brand_5.png?1655450481933"
            />
          </div>
          <div className="relative cursor-pointer w-[170px] h-[100px]">
            <Image
              layout="fill"
              alt="Memoryzone SeaGate logo"
              quality={100}
              src="https://bizweb.sapocdn.net/thumb/medium/100/329/122/themes/835213/assets/brand_6.png?1655450481933"
            />
          </div>
        </div>
      </div>
      {/*inform section*/}
      <div className="px-10 mt-10 py-5 border-t items-stretch justify-between  flex border-[#ebebeb] bg-[#f9f9f9]">
        <div className="flex items-center justify-start    space-x-4 flex-1">
          <div className="relative w-[60px] h-[42px] ">
            <Image
              src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/service_1.png?1655450481933"
              layout="fill"
              alt="Memoryzone Buy super saver"
            />
          </div>

          <div className="flex-1">
            <span className="block font-semibold text-sm text-primary">
              Buy super saver
            </span>
            <span className="block text-gray mt-1 text-xs">
              Products are always sold at the most
              favorable prices for customers
            </span>
          </div>
        </div>
        <div className="flex items-center justify-start translate-x-1 space-x-4 flex-1">
          <div className="relative w-[60px] h-[42px]">
            <Image
              src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/service_2.png?1655450481933"
              layout="fill"
              alt="Memoryzone 100% absolute quality"
            />
          </div>

          <div className="flex-1">
            <span className="block font-semibold text-sm text-primary">
              100% absolute quality
            </span>
            <span className="block text-gray mt-1 text-xs">
              Guaranteed genuine product...
            </span>
          </div>
        </div>
        <div className="flex items-center justify-start -translate-x-6   space-x-4 flex-1">
          <div className="relative w-[60px] h-[42px] ">
            <Image
              src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/service_3.png?1655450481933"
              layout="fill"
              alt="Memoryzone Huge promotion"
            />
          </div>

          <div className="flex-1">
            <span className="block font-semibold text-sm text-primary">
              Huge promotion
            </span>
            <span className="block text-gray mt-1 text-xs">
              Enjoy special offers and attractive
              gifts
            </span>
          </div>
        </div>
        <div className="flex items-center justify-start   space-x-4 flex-1">
          <div className="relative w-[60px] h-[42px]">
            <Image
              src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/service_4.png?1655450481933"
              layout="fill"
              alt="Memoryzone Easy payment"
            />
          </div>

          <div className="flex-1">
            <span className="block font-semibold text-sm text-primary">
              Easy payment
            </span>
            <span className="block text-gray mt-1 text-xs">
              Nationwide delivery from 1 to 4
              days, transfer, payment receipt,
              etc.
            </span>
          </div>
        </div>
      </div>
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
