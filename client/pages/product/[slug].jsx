import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import { productDescriptionComponents } from "../../utils/portableTextComponent";
import {
  detect,
  formatDateTimeSchema,
  numberWithCommas,
} from "../../utils/format";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
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
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "next-share";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetailsPage = ({
  productBySlug,
  statisticalReviews,
}) => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] =
    useState(0);
  const [currentImage, setCurrentImage] =
    useState(0);

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  if (!productBySlug)
    return (
      <NotFound
        title="Oops! Look like we don't have this product"
        description="Please consider to find other product"
        layoutTitle="Product not found | Memoryzone professional in technology"
        layoutDescription="Sorry look like we don't have this product in our shop please looking for other product"
      />
    );

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

  const SlideArrow = (props) => {
    return props.direction === "left" ? (
      <div
        className={`cursor-pointer  hover:text-primary !top-1/2 lg:!top-1/4 ${props.className}`}
        onClick={props.onClick}
        style={{
          ...props.style,
          display: "block",
        }}
      >
        <ChevronLeftIcon
          width={24}
          height={24}
          color={
            props.currentSlide === 0
              ? "#717171"
              : "#414141"
          }
        />
      </div>
    ) : (
      <div
        className={` hover:text-primary !top-1/2 lg:!top-1/4  ${props.className}`}
        onClick={props.onClick}
        style={{
          ...props.style,
          display: "block",
        }}
      >
        <ChevronRightIcon
          width={24}
          height={24}
          color={
            props.currentSlide ===
            productBySlug.image.length - 3
              ? "#717171"
              : "#414141"
          }
        />
      </div>
    );
  };

  const sliderSettings = {
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },

    nextArrow: <SlideArrow direction="right" />,
    prevArrow: <SlideArrow direction="left" />,
    infinite: false,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  console.log(productBySlug);
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: productBySlug.name,
    image: {
      "@type": "ImageObject",
      url: urlFor(productBySlug.image[0]).url(),
      width: 1200,
      height: 628,
    },
    description: productBySlug.metaDescription,
    category: "Laptop",

    "@id": productBySlug._id,
    brand: {
      "@type": "Brand",
      name: productBySlug.productBrand
        .productBrand,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: statisticalReviews.average,
      bestRating: detect(
        statisticalReviews.ratingList,
      ).max,
      worstRating: detect(
        statisticalReviews.ratingList,
      ).min,
      ratingCount: productBySlug.reviews.length,
    },
    publisher: {
      "@type": "Organization",
      address: "Hokkaido",
      location: "Japan",
      url: process.env.NEXT_PUBLIC_CLIENT_URL,

      name: "Memoryzone - Professional in technology",
      logo: {
        "@type": "ImageObject",
        url: "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/logo.png?1657789685905",
        width: 60,
        height: 60,
      },
    },
    review: [
      productBySlug.reviews.map((item) => {
        return {
          "@type": "Review",
          name: item.fullName,
          reviewBody: item.comment,
          datePublished: formatDateTimeSchema(
            item.createTime,
          ),
          url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/product/${productBySlug.slug.current}`,
          author: {
            "@type": "Person",
            name: item.fullName,
          },
          publisher: {
            "@type": "Organization",
            address: "Hokkaido",
            location: "Japan",
            url: process.env
              .NEXT_PUBLIC_CLIENT_URL,

            name: "Memoryzone - Professional in technology",
            logo: {
              "@type": "ImageObject",
              url: "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/logo.png?1657789685905",
              width: 60,
              height: 60,
            },
          },
        };
      }),
    ],
  };
  return (
    <Layout
      productPrice={productBySlug.price}
      title={`${productBySlug.name} | Memoryzone - Professional in technology`}
      metaType="product"
      schema={schema}
      description={productBySlug.metaDescription.slice(
        0,
        303,
      )}
      image={productBySlug.image[0]}
      keywords="Memoryzone product, sell, hardware"
      id={`/product/${productBySlug.slug.current}`}
    >
      <div>
        <Path
          path={[
            {
              title: productBySlug.name,
            },
          ]}
        />
        {/*main product details */}

        <div className="limitScreen flex flex-col xl:flex-row items-start mt-12 ">
          {/*left */}
          <div className="w-full xl:w-9/12 ">
            <div className="flex flex-col md:flex-row items-start justify-start">
              <div className="w-full md:w-1/2 lg:w-[44%]">
                <div>
                  <Image
                    alt={`Memoryzone ${productBySlug.name} image`}
                    priority={true}
                    src={urlFor(
                      productBySlug.image[
                        currentImage
                      ],
                    ).url()}
                    layout="responsive"
                    width={60}
                    objectFit="contain"
                    height={60}
                  />
                </div>
                <div
                  className="mt-4  sm:px-10 md:px-0  mx-auto"
                  style={{
                    width: "70%",
                  }}
                >
                  <Slider {...sliderSettings}>
                    {productBySlug.image.map(
                      (item, index) => (
                        <div
                          onClick={() =>
                            setCurrentImage(index)
                          }
                          key={index}
                          className={`slide-item !h-[75px]  cursor-pointer relative mx-2 md:mx-1   flex items-center justify-center hover:border-primary border ${
                            index === currentImage
                              ? "border-primary"
                              : "border-[#717171]"
                          }`}
                        >
                          <Image
                            alt="Memoryzone product images slider"
                            src={urlFor(
                              item,
                            ).url()}
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      ),
                    )}
                  </Slider>
                </div>
              </div>
              <div className="flex-1 pl-0 mt-8 md:mt-0 md:pl-4">
                <h1 className="block text-text text-2xl">
                  {productBySlug.name}
                </h1>
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
                    {
                      productBySlug.productBrand
                        .productBrand
                    }
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
                    <div className="flex items-center justify-between">
                      <div className="border my-4 flex items-center border-[#ccc] rounded-sm w-fit">
                        <button
                          type="button"
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
                            const re =
                              /^[0-9\b]+$/;

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
                                    e.target
                                      .value,
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
                                    e.target
                                      .value,
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
                          type="button"
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
                          className="border-l border-[#ccc] font-medium text-2xl  px-4 py-1.5"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FacebookShareButton
                          url={
                            process.env
                              .NEXT_PUBLIC_CLIENT_URL +
                            router.asPath
                          }
                          quote={
                            "Look I just found this cool product on Memoryzone Shop website! You can take a glance."
                          }
                          hashtag={
                            "#memoryzone #memoryzoneShop #memoryzoneTechnology #memoryzoneProduct #memoryzoneWebsite #memoryzoneE-commerce"
                          }
                        >
                          <FacebookIcon
                            size={32}
                            round
                          />
                        </FacebookShareButton>
                        <TwitterShareButton
                          url={
                            process.env
                              .NEXT_PUBLIC_CLIENT_URL +
                            router.asPath
                          }
                          title={
                            "Look I just found this cool product on Memoryzone Shop website! You can take a glance."
                          }
                        >
                          <TwitterIcon
                            size={32}
                            round
                          />
                        </TwitterShareButton>
                        <LineShareButton
                          url={
                            process.env
                              .NEXT_PUBLIC_CLIENT_URL +
                            router.asPath
                          }
                          title={
                            "Look I just found this cool product on Memoryzone Shop website! You can take a glance."
                          }
                        >
                          <LineIcon
                            size={32}
                            round
                          />
                        </LineShareButton>
                      </div>
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
                        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 ">
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
              tags={productBySlug.productTag}
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
          <div className="hidden xl:block flex-1 ml-7">
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
                <span className="text-gray leading-4 text-sm font-bold w-[80%] ml-3.5">
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
                <div className="w-[80%] space-y-1 ml-3.5">
                  <span className="text-gray leading-4 text-sm block font-bold ">
                    TPHCM
                  </span>
                  <span className="text-gray text-sm  block font-light">
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
                <div className="w-[80%] space-y-1 ml-3.5">
                  <span className="text-gray leading-4 text-sm block font-bold ">
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
                <div className="w-[80%] space-y-1 ml-3.5">
                  <span className="text-gray leading-4 text-sm block font-bold ">
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
      productSlugs.map((product) => ({
        params: {
          slug: product.slug.current,
        },
      })) || [],
    fallback: "blocking",
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
  "metaDescription": pt::text(description)
        ,image,name,productTag,countInStock,specifications,specificationTable,"productBrand":*[_type=='brand' && _id==^.productBrand._ref]{productBrand}[0],price,slug,_id,"reviews":coalesce(reviews[isApprove==true],[])
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
