import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import { StarIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { numberWithCommas } from "../../utils/format";

const ProductDetails = ({ products, productBySlug }) => {
  return (
    <div className="">
      {/*Product details header */}
      <seciton>
        <div className="border-b border-[#e5e5e5]">
          <span className="px-10 text-primary text-base py-4 limit-1-line block">
            Laptop Gaming Asus ROG Strix G15 G513RW-HQ223W (Ryzen 7 6800H, RTX
            3070 Ti 8GB, Ram 16GB DDR5, SSD 1TB, 15.6 Inch IPS 165Hz WQHD)
          </span>
        </div>
      </seciton>
      {/*main product details */}

      <div className="flex px-10 items-start py-12">
        {/*left */}
        <div className="flex items-start justify-start   w-9/12">
          <div className="flex-1 ">
            <div className="relative aspect-square">
              <Image
                layout="fill"
                quality={100}
                src={urlFor(productBySlug.image[0]).url()}
              />
            </div>
          </div>
          <div className="w-[58%] pl-8">
            <span className="block text-text text-2xl">
              {productBySlug.name}
            </span>
            <div className="flex py-3 items-center ">
              <div className="flex-row-reverse flex">
                {[5, 4, 3, 2, 1].map((star) => (
                  <StarIcon
                    color="#cccccc"
                    width={30}
                    height={30}
                    key={star}
                    className="cursor-pointer rating duration-300 hover:text-[gold] hover:scale-125 transition ease-linear"
                    onClick={() => console.log(star)}
                  />
                ))}
              </div>
              <span className="text-[#055eff] ml-2">
                Be the first to review
              </span>
            </div>
            <div>
              <span className="text-text">Trademake: </span>
              <span className="text-primary ">Gigabyte</span>
              <div className="w-[1px] h-3.5 -mb-0.5 mx-2 inline-block bg-text"></div>
              <span className="text-text  ">Status: </span>
              <span className="text-primary">Out of stock</span>
            </div>
            <div className="my-1.5">
              <span className="text-primary text-4xl font-bold ">
                {numberWithCommas(productBySlug.price)}$
              </span>
              <span className="ml-4 text-lg line-through text-gray">
                {numberWithCommas(7423)}$
              </span>
            </div>
            <div>
              <ul className="my-3">
                {[
                  `CPU: Ryzen 5 5600H (3.3GHz~4.2GHz) 6 Cores 12 Threads`,
                  `VGA: AMD Radeon RX 5500M 4GB`,
                  `Ram: 8GB DDR4 3200MHz`,
                  `Hard disk: 512GB SSD M.2 PCIe NVMe Gen3 x4`,
                  `Screen: 15.6'' IPS FHD`,
                  `Warranty for 1 year.`,
                ].map((item, index) => (
                  <>
                    <li
                      className="text-gray text-base flex items-center"
                      key={index}
                    >
                      <CheckCircleIcon
                        className="mr-2 text-primary"
                        height={22}
                        width={22}
                      />
                      {item}
                    </li>
                  </>
                ))}
                <li className="text-gray flex items-center">
                  <CheckCircleIcon
                    className="mr-2 text-primary"
                    height={22}
                    width={22}
                  />
                  Status:
                  <span className="text-primary">&nbsp;Ready stock</span>
                </li>
              </ul>
            </div>
            <span className="text-base block text-gray my-2">Quantity:</span>
            <div className="border my-4 flex items-center border-[#ccc] rounded-sm w-fit">
              <button className="border-r border-[#ccc] font-bold text-2xl px-4 py-1">
                -
              </button>
              <input
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                Defaultvalue={1}
                type="text"
                className="w-16 text-center outline-none border-none px-4"
              />
              <button className="border-l border-[#ccc] font-bold text-2xl px-4 py-1">
                +
              </button>
            </div>
            <div className="space-y-4 pt-1">
              <div className="flex border-[#e7e7e7] items-center  px-4 py-2 shadow-sm border rounded-md">
                <div className="flex-1">
                  <Image
                    src="https://bizweb.dktcdn.net/100/329/122/files/03icon-tragop-0.png?v=1639481630773"
                    height={24}
                    width={37}
                  />
                </div>
                <span className="text-[#393a44] w-[90%] pl-4 font-bold">
                  Preferential conversion fee for VISA and Master installments
                  from only 1.8% for a 6-month term.
                </span>
              </div>
              <div className="flex border-[#e7e7e7] items-center px-4 py-2 shadow-sm border rounded-md">
                <div className="flex-1">
                  <Image
                    src="https://bizweb.dktcdn.net/100/329/122/files/04icon-visamaster.png?v=1639481634747"
                    height={24}
                    width={37}
                  />
                </div>
                <span className="text-[#393a44] w-[90%] pl-4 font-bold">
                  Free payment via Visa, Master, JCB, Union Pay, Amex (No hidden
                  fees).
                </span>
              </div>
              <div className=" space-y-2">
                <div className="flex space-x-2 ">
                  <button className="flex-1 bg-primary rounded-sm py-2">
                    <span className="block text-white font-bold">BUY NOW</span>
                    <span className="block text-white text-sm">
                      Free local delivery
                    </span>
                  </button>
                  <button className="flex-1 bg-[#c80606] rounded-sm py-2">
                    <span className="block text-white font-bold">
                      INSTALLMENT
                    </span>
                    <span className="block text-white text-sm">
                      Quick browsing by phone
                    </span>
                  </button>
                </div>
                <button className="rounded-sm bg-[#f3a20e] py-2 w-full">
                  <span className="text-white font-bold ">
                    0% INSTALLMENT THROUGH CARDS
                    <br />
                    Visa, Master, JCB (Order from 150 Dollars)
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*right */}
        <div className="flex-1 ml-7">
          <div className="rounded-sm border px-4 py-2  border-primary">
            <div className="flex  items-center border-b border-[#e5e5e5] py-5">
              <div className="flex-1 pt-1">
                <Image
                  src="https://bizweb.dktcdn.net/100/329/122/themes/835213/assets/shiper.png?1651651839140"
                  width={35}
                  height={30}
                />
              </div>
              <span className="text-gray leading-4 text-base font-bold w-[80%] ml-3.5">
                Free delivery nationwide
              </span>
            </div>
            <div className="flex items-center border-b border-[#e5e5e5] py-5">
              <div className="flex-1">
                <Image
                  src="https://bizweb.dktcdn.net/100/329/122/themes/835213/assets/change.png?1651651839140"
                  width={35}
                  height={35}
                />
              </div>
              <div className="w-[80%] ml-3.5">
                <span className="text-gray leading-4 text-base block font-bold ">
                  TPHCM
                </span>
                <span className="text-gray  text-sm block font-light">
                  Receive goods from 24 to 72 hours after ordering
                </span>
              </div>
            </div>
            <div className="flex items-center border-b border-[#e5e5e5] py-5">
              <div className="flex-1">
                <Image
                  src="https://bizweb.dktcdn.net/100/329/122/themes/835213/assets/pay.png?1651651839140"
                  width={35}
                  height={35}
                />
              </div>
              <div className="w-[80%] ml-3.5">
                <span className="text-gray leading-4 text-base block font-bold ">
                  HÀ NỘI
                </span>
                <span className="text-gray  text-sm block font-light">
                  Receive goods from 24 to 48 hours after ordering
                </span>
              </div>
            </div>
            <div className="flex items-center  py-5">
              <div className="flex-1">
                <Image
                  src="https://bizweb.dktcdn.net/100/329/122/themes/835213/assets/phone.png?1651651839140"
                  width={35}
                  height={35}
                />
              </div>
              <div className="w-[80%] ml-3.5">
                <span className="text-gray leading-4 text-base block font-bold ">
                  OTHER PROVINCE
                </span>
                <span className="text-gray  text-sm block font-light">
                  Receive goods from 24 to 96 hours after ordering
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full pb-96 h-70"></div>
    </div>
  );
};

export default ProductDetails;
//set path for nextjs
export async function getStaticPaths() {
  const queryAllProductSlug = `*[_type=="product"]{
      slug{
        current
      }
  }`;
  const productSlugs = await client.fetch(queryAllProductSlug);
  const paths = productSlugs?.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}
//get data when build
export const getStaticProps = async ({ params: { slug } }) => {
  //get product data by slug param
  const queryproductBySlug = `*[_type=="product" && slug.current == '${slug}'][0]`;
  // get similar product
  const similarProducts = '*[_type=="product"]';
  const productBySlug = await client.fetch(queryproductBySlug);
  const products = await client.fetch(similarProducts);

  return {
    props: { products, productBySlug },
  };
};
