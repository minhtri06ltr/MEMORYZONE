import Image from "next/image";
import { client } from "../../lib/client";
import { StarIcon } from "@heroicons/react/solid";

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
      <section>
        <div className="flex px-10 items-start py-16">
          {/*left */}
          <div className="flex items-start justify-start   w-9/12">
            <div className="flex-1 ">
              <div className="relative aspect-square">
                <Image
                  layout="fill"
                  src="https://bizweb.sapocdn.net/thumb/1024x1024/100/329/122/products/laptop-gaming-gigabyte-g5-kd-52vn123so.png?v=1651658984173"
                />
              </div>
            </div>
            <div className="w-[58%] pl-8">
              <span className="block text-text text-2xl">
                Laptop Gaming Gigabyte G5 KD-52VN123SO (i5-11400H, RTX 3060 6GB,
                Ram 16GB DDR4, SSD 512GB, 15.6 Inch IPS 144Hz FHD)
              </span>
              <div className="flex py-3 items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    color="#cccccc"
                    width={30}
                    height={30}
                    key={star}
                    className="cursor-pointer"
                    onClick={() => console.log(star)}
                  />
                ))}
                <span className="text-[#055eff] ml-2">
                  Be the first to review
                </span>
              </div>
              <div>
                <span className="text-text">Trademake: </span>
                <span className="text-primary pr-2 border-r border-black">
                  Gigabyte
                </span>

                <span className="text-text pl-2 ">Status: </span>
                <span className="text-primary">Out of stock</span>
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
      </section>
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
