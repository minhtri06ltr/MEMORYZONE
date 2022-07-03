import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import { productDescriptionComponents } from "../../utils/portableTextComponent";
import { numberWithCommas } from "../../utils/format";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { useRef, useState } from "react";
import {
  NotFound,
  Layout,
  Path,
  Review,
  ProductDescription,
  StarList,
} from "../../components";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { isNumber } from "../../utils/validate";
import { useRouter } from "next/router";
import Link from "next/link";
import { calculateRate } from "../../utils/calculate";
import { PortableText } from "@portabletext/react";

const ProductDetailsPage = ({
  productBySlug,
  statisticalReviews,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [pixel, setPixel] = useState(0);
  const [slideNumber, setSlideNumber] =
    useState(0);
  const [index, setIndex] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const listRef = useRef();
  if (!productBySlug)
    return (
      <Layout
        title={"Memoryzone | Product not found"}
        description={
          "Memoryzone Product not found"
        }
        removeLayout={true}
      >
        <NotFound
          message={
            "Oops Look like product don't exist in our shop"
          }
        />
      </Layout>
    );

  const handleSlide = (direction) => {
    if (
      direction === "right" &&
      slideNumber < productBySlug.image.length - 4
    ) {
      listRef.current.style.transform = `translateX(-${
        pixel + 92
      }px)`;
      setPixel(pixel + 92);
      setSlideNumber(slideNumber + 1);
    }
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(-${
        pixel - 92
      }px)`;
      setPixel(pixel - 92);
      setSlideNumber(slideNumber - 1);
    }
  };
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        name: productBySlug.name,
        id: productBySlug._id,
        img: productBySlug.image[0],
        price: productBySlug.price,
        quantity: quantity,
        slug: productBySlug.slug.current,
        countInStock: productBySlug.countInStock,
      }),
    );
    router.push("/cart");
  };

  return (
    <Layout
      title={productBySlug.name}
      description={productBySlug.name}
    >
      <div>
        <Path path={[productBySlug.name]} />
        {/*main product details */}

        <div className="flex px-10 items-start mt-12 ">
          {/*left */}
          <div className="   w-9/12">
            <div className="flex items-start justify-start">
              <div className="flex-1  overflow-hidden ">
                <div className="relative aspect-square">
                  <Image
                    alt={`Memoryzone product slider: ${
                      productBySlug.name &&
                      productBySlug?.name[index]
                    }`}
                    layout="fill"
                    quality={100}
                    priority
                    objectFit="cover"
                    src={urlFor(
                      productBySlug.image &&
                        productBySlug?.image[
                          index
                        ],
                    ).url()}
                  />
                </div>
                <div className="flex mt-4 items-center relative justify-center ">
                  {productBySlug.image.length >
                    4 && (
                    <ChevronLeftIcon
                      width={24}
                      height={24}
                      color={
                        slideNumber < 1
                          ? "#ccc"
                          : undefined
                      }
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
                              onMouseDownCapture={() =>
                                setIndex(i)
                              }
                              key={i}
                              className={`relative duration-700 ease-in-out  aspect-square mx-1.5  cursor-pointer hover:border-primary h-20 w-20 border ${
                                i === index
                                  ? "border-primary"
                                  : "border-[#ccc]"
                              } `}
                            >
                              <Image
                                src={urlFor(
                                  img,
                                ).url()}
                                alt={`Memoryzone other products image: ${productBySlug.name}`}
                                layout="fill"
                                objectFit="cover"
                              />
                            </div>
                          ),
                      )}
                    </div>
                  </div>
                  {productBySlug.image.length >
                    4 && (
                    <ChevronRightIcon
                      width={24}
                      height={24}
                      color={
                        slideNumber >=
                        productBySlug.image
                          .length -
                          4
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
                  <div className="flex ">
                    <StarList
                      quantity={Math.round(
                        statisticalReviews.average,
                      )}
                      width={30}
                      height={30}
                    />
                  </div>
                  <Link href="#review">
                    <span className="text-[#055eff] cursor-pointer text-sm ml-2">
                      {productBySlug.reviews
                        .length === 0
                        ? "Be the first to review"
                        : `See ${
                            productBySlug.reviews
                              .length
                          } ${
                            productBySlug.reviews
                              .length > 1
                              ? "reviews"
                              : "review"
                          }`}
                    </span>
                  </Link>
                </div>
                <div>
                  <span className="text-text text-sm">
                    Trademake:{" "}
                  </span>
                  <span className="text-primary  text-sm">
                    Gigabyte
                  </span>
                  <div className="w-[1px] h-3.5 -mb-0.5 mx-2 inline-block bg-text"></div>
                  <span className="text-text text-sm ">
                    Status:{" "}
                  </span>
                  <span className="text-primary text-sm">
                    {productBySlug.countInStock >
                    0
                      ? "In stock"
                      : "Out of stock"}
                  </span>
                </div>
                <div className="my-1.5">
                  <span className="text-primary text-3xl font-bold ">
                    {numberWithCommas(
                      productBySlug.price,
                    )}
                    $
                  </span>
                  <span className="ml-4 text-base line-through text-gray">
                    {numberWithCommas(7423)}$
                  </span>
                </div>
                <div>
                  <div className="my-3">
                    <PortableText
                      value={
                        productBySlug.specifications
                      }
                      components={
                        productDescriptionComponents
                      }
                    />
                  </div>
                </div>
                {productBySlug.countInStock >
                  0 && (
                  <>
                    <span className="text-sm block text-gray my-2">
                      Quantity:
                    </span>
                    <div className="border my-4 flex items-center border-[#ccc] rounded-sm w-fit">
                      <button
                        onClick={() =>
                          quantity > 1 &&
                          setQuantity(
                            quantity - 1,
                          )
                        }
                        className="border-r border-[#ccc] font-medium text-3xl px-4 py-1"
                      >
                        -
                      </button>
                      <input
                        disabled={
                          productBySlug.countInStock ===
                            0 && true
                        }
                        value={quantity}
                        onChange={(e) => {
                          const re = /^[0-9\b]+$/;

                          if (
                            e.target.value ===
                              "" ||
                            re.test(
                              e.target.value,
                            )
                          ) {
                            if (
                              isNumber(
                                parseInt(
                                  e.target.value,
                                ),
                              )
                            ) {
                              if (
                                e.target.value >
                                productBySlug.countInStock
                              ) {
                                setQuantity(
                                  productBySlug.countInStock,
                                );
                              } else if (
                                parseInt(
                                  e.target.value,
                                ) === 0
                              ) {
                                setQuantity(1);
                              } else
                                setQuantity(
                                  parseInt(
                                    e.target
                                      .value,
                                  ),
                                );
                            } else {
                              setQuantity(1);
                            }
                          }
                        }}
                        type="text"
                        className={`w-16 ${
                          productBySlug.countInStock ===
                            0 &&
                          "cursor-not-allowed"
                        } text-center text-base outline-none border-none px-4`}
                      />
                      <button
                        onClick={() => {
                          if (
                            productBySlug.countInStock ===
                            0
                          ) {
                            alert(
                              "This product is out of stock.",
                            );
                            return;
                          }
                          quantity <
                            productBySlug.countInStock &&
                            setQuantity(
                              quantity + 1,
                            );
                        }}
                        className="border-l border-[#ccc] font-medium text-xl px-4 py-1"
                      >
                        +
                      </button>
                    </div>
                  </>
                )}
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
                      Preferential conversion fee
                      for VISA and Master
                      installments from only 1.8%
                      for a 6-month term.
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
                      Free payment via Visa,
                      Master, JCB, Union Pay, Amex
                      (No hidden fees).
                    </span>
                  </div>
                  <div className=" space-y-2">
                    {productBySlug.countInStock ===
                    0 ? (
                      <div className="flex space-x-2 ">
                        <button
                          disabled
                          className="flex-1 cursor-default bg-[#57ae75] rounded-sm py-2"
                        >
                          <span className="block text-white font-bold leading-5">
                            OUT OF STOCK
                          </span>
                        </button>
                        <button className="flex-1 bg-text rounded-sm py-2">
                          <span className="block text-white font-bold leading-5">
                            CALL ORDER
                          </span>
                          <a href="tel:+84367907374">
                            <span className="block text-white text-xs">
                              Please call now (84)
                              3679 0 7374
                            </span>
                          </a>
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex space-x-2 ">
                          <button
                            className="flex-1 bg-primary rounded-sm py-2"
                            onClick={
                              handleAddToCart
                            }
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
                              Quick browsing by
                              phone
                            </span>
                          </button>
                        </div>
                        <button className="rounded-sm bg-[#f3a20e] py-2 w-full">
                          <span className="text-white font-bold ">
                            0% INSTALLMENT THROUGH
                            CARDS
                            <br />
                            Visa, Master, JCB
                            (Order from 150
                            Dollars)
                          </span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <ProductDescription
              description={
                productBySlug.description
              }
              specificationTable={
                productBySlug.specificationTable
              }
            />
            <Review
              data={productBySlug.reviews}
              productName={productBySlug.name}
              productId={productBySlug._id}
              averageRate={
                statisticalReviews.average
              }
              ratingList={
                statisticalReviews.ratingList
              }
            />
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
                    Receive goods from 24 to 72
                    hours after ordering
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
                    Receive goods from 24 to 48
                    hours after ordering
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
                    Receive goods from 24 to 96
                    hours after ordering
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
export default ProductDetailsPage;

//set path for nextjs
export const getStaticPaths = async () => {
  const productSlugs = await client.fetch(
    `*[_type=="product"]{
      slug{
        current
      }
  }`,
  );

  return {
    paths:
      productSlugs?.map((product) => ({
        params: {
          slug: product.slug.current,
        },
      })) || [],
    fallback: true,
  };
};
//get data when build
export const getStaticProps = async ({
  params: { slug },
}) => {
  //get product data by slug param
  try {
    const productBySlug = await client.fetch(
      `*[_type=="product" && slug.current==$slug][0]{
        "statisticalReviews":
            [coalesce(count(reviews[rating==1 && isApprove==true]),0), 
            coalesce(count(reviews[rating==2 && isApprove==true]),0), 
            coalesce(count(reviews[rating==3 && isApprove==true]),0), 
        coalesce(count(reviews[rating==4 && isApprove==true]),0), 
           coalesce(count(reviews[rating==5 && isApprove==true]),0)], 
        "productDetails":*[_type=="product" && slug.current==$slug][0]{
  description[]{
    ...,
    _type=='muxVideo'=>{
    ...,"video": video.asset->
  }
  },
        image,name,countInStock,specifications,specificationTable,brand,price,slug,_id,"reviews":coalesce(reviews[isApprove==true],[])
      }
      }
    `,
      { slug },
    );
    const result = calculateRate(
      productBySlug.statisticalReviews,
    );
    return {
      props: {
        productBySlug:
          productBySlug.productDetails,
        statisticalReviews: {
          average: result.average,
          ratingList: result.ratingList,
        },
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        productBySlug: null,
        statisticalReviews: null,
      },
    };
  }
};
