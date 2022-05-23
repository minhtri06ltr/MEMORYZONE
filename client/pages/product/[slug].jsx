import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import { StarIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { numberWithCommas } from "../../utils/format";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import { NotFound, Layout, Path, Review } from "../../components";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { isNumber } from "../../utils/validate";
import { useRouter } from "next/router";

const ProductDetails = ({ productBySlug }) => {
  console.log(productBySlug);
  const router = useRouter();
  const dispatch = useDispatch();
  const [pixel, setPixel] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const [index, setIndex] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const listRef = useRef();
  const handleSlide = (direction) => {
    if (direction === "right" && slideNumber < productBySlug.image.length - 4) {
      listRef.current.style.transform = `translateX(-${pixel + 92}px)`;
      setPixel(pixel + 92);
      setSlideNumber(slideNumber + 1);
    }
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(-${pixel - 92}px)`;
      setPixel(pixel - 92);
      setSlideNumber(slideNumber - 1);
    }
  };
  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        name: product.name,
        id: product._id,
        img: product.image[0],
        price: product.price,
        quantity: quantity,
        slug: product.slug.current,
      })
    );
    router.push("/cart");
  };

  if (!productBySlug)
    return (
      <Layout
        title={"Memoryzone | Product not found"}
        description={"Memoryzone Product not found"}
        removeLayout={true}
      >
        <NotFound message={"Oops Look like product don't exist in our shop"} />
      </Layout>
    );

  return (
    <Layout title={productBySlug.name} description={productBySlug.name}>
      <div className="">
        <Path
          path={[productBySlug.name ? productBySlug.name : "Product not found"]}
        />
        {/*main product details */}

        <div className="flex px-10 items-start mt-12 ">
          {/*left */}
          <div className="   w-9/12">
            <div className="flex items-start justify-start">
              <div className="flex-1  overflow-hidden ">
                <div className="relative aspect-square">
                  <Image
                    alt={productBySlug.name && productBySlug?.name[index]}
                    layout="fill"
                    quality={100}
                    priority
                    src={urlFor(
                      productBySlug.image && productBySlug?.image[index]
                    ).url()}
                  />
                </div>
                <div className="flex mt-4 items-center relative justify-center ">
                  {productBySlug.image.length > 4 && (
                    <ChevronLeftIcon
                      width={24}
                      height={24}
                      color={slideNumber < 1 ? "#ccc" : undefined}
                      onClick={() => {
                        handleSlide("left");
                      }}
                      className="cursor-pointer hover:text-primary z-10 top-1/2 left-0 -translate-y-1/2 translate-x-1/2 absolute"
                    />
                  )}
                  <div className="overflow-hidden w-[74%]">
                    <div
                      ref={listRef}
                      className={`flex items-center w-max transition ease-out duration-300  
                  `}
                    >
                      {productBySlug.image.map(
                        (img, i) =>
                          i > 0 && (
                            <div
                              onMouseDownCapture={() => setIndex(i)}
                              key={i}
                              className={`relative duration-700 ease-in-out  aspect-square mx-1.5  cursor-pointer hover:border-primary h-20 w-20 border ${
                                i === index ? "border-primary" : "border-[#ccc]"
                              } `}
                            >
                              <Image
                                src={urlFor(img).url()}
                                alt={productBySlug.name}
                                layout="fill"
                              />
                            </div>
                          )
                      )}
                    </div>
                  </div>
                  {productBySlug.image.length > 4 && (
                    <ChevronRightIcon
                      width={24}
                      height={24}
                      color={
                        slideNumber >= productBySlug.image.length - 4
                          ? "#ccc"
                          : undefined
                      }
                      onClick={() => {
                        handleSlide("right");
                      }}
                      className="cursor-pointer hover:text-primary top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 right-0  absolute"
                    />
                  )}
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
                  <span className="text-[#055eff] text-sm ml-2">
                    Be the first to review
                  </span>
                </div>
                <div>
                  <span className="text-text text-sm">Trademake: </span>
                  <span className="text-primary  text-sm">Gigabyte</span>
                  <div className="w-[1px] h-3.5 -mb-0.5 mx-2 inline-block bg-text"></div>
                  <span className="text-text text-sm ">Status: </span>
                  <span className="text-primary text-sm">Out of stock</span>
                </div>
                <div className="my-1.5">
                  <span className="text-primary text-3xl font-bold ">
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
                      <div key={index}>
                        <li className="text-gray text-sm flex items-center">
                          <CheckCircleIcon
                            className="mr-2 text-primary"
                            height={20}
                            width={20}
                          />
                          {item}
                        </li>
                      </div>
                    ))}
                    <li className="text-gray flex items-center">
                      <CheckCircleIcon
                        className="mr-2 text-primary"
                        height={22}
                        width={22}
                      />
                      Status:
                      <span className="text-primary text-sm font-semibold">
                        &nbsp;IN STOCK
                      </span>
                    </li>
                  </ul>
                </div>
                <span className="text-sm block text-gray my-2">Quantity:</span>
                <div className="border my-4 flex items-center border-[#ccc] rounded-sm w-fit">
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="border-r border-[#ccc] font-medium text-3xl px-4 py-1"
                  >
                    -
                  </button>
                  <input
                    value={quantity}
                    onChange={(e) => {
                      const re = /^[0-9\b]+$/;
                      if (e.target.value === "" || re.test(e.target.value)) {
                        if (isNumber(parseInt(e.target.value))) {
                          setQuantity(parseInt(e.target.value));
                        } else {
                          setQuantity(1);
                        }
                      }
                    }}
                    type="text"
                    className="w-16  text-center text-base outline-none border-none px-4"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="border-l border-[#ccc] font-medium text-xl px-4 py-1"
                  >
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
                        layout="responsive"
                        alt="Memoryzone installment with 0% interest"
                      />
                    </div>
                    <span className="text-[#393a44] text-base w-[90%] pl-4 font-bold">
                      Preferential conversion fee for VISA and Master
                      installments from only 1.8% for a 6-month term.
                    </span>
                  </div>
                  <div className="flex border-[#e7e7e7] items-center px-4 py-2 shadow-sm border rounded-md">
                    <div className="flex-1">
                      <Image
                        src="https://bizweb.dktcdn.net/100/329/122/files/04icon-visamaster.png?v=1639481634747"
                        height={24}
                        width={37}
                        layout="responsive"
                        alt="Memoryzone free payment via Visa, Master, JCB, Union Pay, Amext"
                      />
                    </div>
                    <span className="text-[#393a44] text-base w-[90%] pl-4 font-bold">
                      Free payment via Visa, Master, JCB, Union Pay, Amex (No
                      hidden fees).
                    </span>
                  </div>
                  <div className=" space-y-2">
                    <div className="flex space-x-2 ">
                      <button
                        className="flex-1 bg-primary rounded-sm py-2"
                        onClick={() => handleAddToCart(productBySlug)}
                      >
                        <span className="block text-white font-bold leading-5">
                          BUY NOW
                        </span>
                        <span className="block text-white text-sm">
                          Free local delivery
                        </span>
                      </button>
                      <button className="flex-1 bg-[#c80606] rounded-sm py-2">
                        <span className="block text-white font-bold leading-5">
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
            <Review />
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
                    layout="responsive"
                    alt="Memoryzone free delivery nationwide"
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
                    layout="responsive"
                    alt="Memoryzone receive goods from 24 to 72 hours after ordering in TP HCM city"
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
                    layout="responsive"
                    alt="Memoryzone receive goods from 24 to 48 hours after ordering in Ha Noi city"
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
                    layout="responsive"
                    alt="Memoryzone receive goods from 24 to 96 hours after ordering in other province"
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
    </Layout>
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
    fallback: true,
  };
}
//get data when build
export const getStaticProps = async ({ params: { slug } }) => {
  //get product data by slug param
  const queryproductBySlug = `*[_type=="product" && slug.current == '${slug}'][0]`;
  // get similar product
  try {
    const productBySlug = await client.fetch(queryproductBySlug);
    return {
      props: { productBySlug },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
    return {
      productBySlug: null,
    };
  }
};
