import { useRouter } from "next/router";
import {
  Layout,
  Path,
  StarList,
} from "../components";
import { useState } from "react";
import {
  ShoppingCartIcon,
  EyeIcon,
} from "@heroicons/react/solid";
import { client, urlFor } from "../lib/client";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const SearchProductNamePage = ({
  path,
  productList,
}) => {
  const dispatch = useDispatch();

  const router = useRouter();
  const [searchTag, setSearchTag] = useState("");
  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        name: product.name,
        id: product._id,
        img: product.image,
        price: product.price,
        quantity: 1,
        slug: product.slug.current,
        countInStock: product.countInStock,
      }),
    );
    router.push("/cart");
  };
  const structure1 = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "https://memoryzone.vercel.app",
          name: "Home page",
        },
      },

      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id":
            "https://memoryzone.vercel.app/search",
          name: "Search",
        },
      },
    ],
  };
  return (
    <Layout
      structures={[structure1]}
      title={`${
        path || "All product"
      } | Memoryzone - Professional in technology`}
      description={`Memoryzone search results with key ${
        path || "all product"
      }`}
    >
      <Path
        path={[
          {
            title: "Home",
            pathName: "/",
          },
          {
            title: `Search results for ${
              path || "all product"
            }`,
            pathName: `/search?=${path}`,
          },
        ]}
      />
      <div className="limitScreen">
        <div className="my-12">
          {productList.length === 0 && (
            <h1 className="text-text text-lg block ">
              NO RESULTS FOUNDED WITH THE ABOVE
              KEYWORDS.
            </h1>
          )}

          <div className="my-12">
            <span className="block cursor-pointer text-[#575454] hover:text-primary text-2xl">
              Enter keywords to search for
              products
            </span>
            <div className="mt-4">
              <form className="flex items-center">
                <input
                  type="text"
                  onChange={(e) =>
                    setSearchTag(e.target.value)
                  }
                  required
                  value={searchTag}
                  placeholder="Search ..."
                  className="text-sm outline-none bg-white px-4 py-2 flex-1 rounded-sm border border-[#e1e1e1]"
                />
                <button
                  type="submit"
                  className="rounded-r-sm  hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          {productList.length !== 0 && (
            <div>
              <h1 className="block text-text text-lg font-medium">
                There{" "}
                {productList.length > 1
                  ? "are"
                  : "is"}{" "}
                {productList.length} matching
                search results
              </h1>
              <div className="grid grid-cols-5 gap-x-7 gap-y-12 mt-4">
                {productList.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="inline-grid self-end w-full space-y-2 "
                    >
                      <div className=" h-[210px]">
                        <Link
                          href={`/product/${item.slug.current}`}
                        >
                          <a>
                            <Image
                              alt={`Memoryzone ${item.name} thumbnail `}
                              src={urlFor(
                                item.image,
                              ).url()}
                              layout="responsive"
                              quality={100}
                              height="100%"
                              width="100%"
                            />
                          </a>
                        </Link>
                      </div>
                      <Link
                        href={`/product/${item.slug.current}`}
                      >
                        <span className="hover:text-primary cursor-pointer limit-3-line text-sm block text-text">
                          {item.name}
                        </span>
                      </Link>
                      <div className="text-center ">
                        <span className="text-md font-semibold mr-2  text-primary">
                          245$
                        </span>
                        <span className="text-sm line-through   text-gray">
                          275$
                        </span>
                      </div>
                      <div className="mt-2 flex items-end space-x-2 justify-center ">
                        <StarList
                          quantity={5}
                          width={18}
                          height={18}
                        />
                        <span className="text-xs text-gray">
                          (34 reviews)
                        </span>
                      </div>
                      <div className="flex items-center space-x-1.5 justify-center">
                        <button
                          onClick={() =>
                            handleAddToCart(item)
                          }
                          className={`bg-primary rounded-sm w-[120px] text-white  text-sm flex items-center justify-center py-2 hover:bg-[#d92b1f]
                           ${
                             (item.countInStock ===
                               0 ||
                               !item.countInStock) &&
                             "opacity-70 pointer-events-none"
                           } `}
                        >
                          {item.countInStock !==
                            0 &&
                            item.countInStock && (
                              <ShoppingCartIcon
                                color="white"
                                width={20}
                                height={20}
                              />
                            )}
                          <span className="ml-2 block">
                            {item.countInStock !==
                              0 &&
                            item.countInStock
                              ? "Buy now"
                              : "Out of stock"}
                          </span>
                        </button>
                        <button className="bg-primary  p-2 rounded-sm hover:bg-[#d92b1f] text-white flex items-center justify-center">
                          <EyeIcon
                            color="white"
                            width={20}
                            height={20}
                          />
                        </button>
                      </div>
                    </div>
                  ),
                )}
              </div>
              <div className="space-x-1.5 mt-16 flex items-center justify-center text-sm text-text">
                <button className="rounded-sm h-[40px] w-[40px] ease-linear transition bg-[#f2f2f2] hover:bg-primary  hover:text-white">
                  1
                </button>
                <button className="rounded-sm h-[40px] w-[40px] ease-linear transition bg-[#f2f2f2] hover:bg-primary  hover:text-white">
                  23
                </button>
                <button className="rounded-sm h-[40px] w-[40px] ease-linear transition bg-[#f2f2f2] hover:bg-primary  hover:text-white">
                  ...
                </button>
                <button className="rounded-sm px-5 h-[40px] min-w-[40px] ease-linear transition bg-[#f2f2f2] hover:bg-primary  hover:text-white">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchProductNamePage;
export const getServerSideProps = async (
  context,
) => {
  console.log(context.query.key);
  const path = context.query.key || null;
  const query = path
    ? path.toLowerCase() + "*"
    : "*";

  try {
    const productList = await client.fetch(
      ` *[_type=="product" && name match $query]{name,price,image[0],slug,countInStock,_id}`,
      {
        query,
      },
    );

    return {
      props: {
        productList,
        path,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        productList: null,
      },
    };
  }
};
