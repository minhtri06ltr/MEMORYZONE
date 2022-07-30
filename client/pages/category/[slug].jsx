import { Layout, NotFound, Path, ProductCard } from "../../components";
import {
  SearchIcon,
  TemplateIcon,
  ViewBoardsIcon,
} from "@heroicons/react/solid";
import { client } from "../../lib/client";
import Image from "next/image";

const SearchCategoryPages = ({ productList }) => {
  console.log(productList);
  if (!productList)
    return (
      <NotFound
        title="Category page does not exist "
        description="The URL you entered may be expired,
  deleted, or invalid. Return to home
  page to continue shopping."
        layoutTitle="Category not found | Memoryzone - Professional in technology"
        layoutDescription="Memoryzone shop, Sorry we can not found this category in our data please try search in different category"
      />
    );
  return (
    <Layout
      title={`${productList[0].productCategory.categoryName} | Memoryzone - Professional in technology`}
      description={`Memoryzone shop - ${productList[0].productCategory.categoryName}`}
    >
      <Path
        path={[
          {
            title: "Home",
            pathName: "/",
          },
          {
            title: productList[0].productCategory.categoryName,
            pathName: `/category/${productList[0].productCategory.categorySlug.current}`,
          },
        ]}
      />
      <div className="limitScreen my-12">
        <div className="grid h-[350px] w-full">
          <Image
            alt="Memoryzone category banner"
            src="https://bizweb.dktcdn.net/100/329/122/collections/productcate-1170-350.png?v=1653647072067"
            layout="responsive"
            width="100%"
            height="100%"
            quality={100}
          />
        </div>

        <div className="flex mt-6 lg:space-x-7">
          <div className="w-[24%] hidden lg:block">
            <h1 className="text-base text-text font-semibold block mb-2">
              CATEGORY
            </h1>
            <div className="flex items-stretch py-6 ">
              <input
                type="text"
                placeholder="Filter by brand"
                className="outline-none flex-1 bg-white py-2 px-4 text-sm border border-[#ebebeb]"
              />
              <button className="bg-primary py-2 px-3">
                <SearchIcon width={18} color="white" height={18} />
              </button>
            </div>
            <div className="mb-10 space-y-3 text-text">
              <div className=" cursor-pointer hover:text-primary ">
                <input type="checkbox" className="translate-y-[1px]" />
                <label className="text-sm ml-2 ">Apple</label>
              </div>
            </div>
            <div>
              <span className="text-base text-text font-semibold block mb-2">
                PRODUCT PRICE
              </span>
              <div className="py-3">
                <input type="range" className="w-full" />
                <div className="flex items-center space-x-4 my-4">
                  <input
                    disabled={true}
                    className="outline-none flex-1 text-sm text-center text-text w-[100px] bg-[#fafafa] border border-[#e1e1e1] rounded-sm"
                  />
                  <span>-</span>
                  <input
                    value="10000000$"
                    disabled={true}
                    className="outline-none flex-1 text-sm text-center text-text w-[100px] bg-[#fafafa] border border-[#e1e1e1] rounded-sm"
                  />
                </div>
                <button className="rounded-sm  hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6 w-full">
                  Filter price
                </button>
                <div className="my-8">
                  <div>
                    <span className="text-base text-text font-semibold block mb-6">
                      CPU
                    </span>
                    <div className="space-y-3 text-text max-h-[240px] overflow-y-auto">
                      <div className=" cursor-pointer hover:text-primary ">
                        <input type="checkbox" className="translate-y-[1px]" />
                        <label className="text-sm ml-2 ">Ryzen 5</label>
                      </div>
                      <div className=" cursor-pointer hover:text-primary ">
                        <input type="checkbox" className="translate-y-[1px]" />
                        <label className="text-sm ml-2 ">Intel Core I3</label>
                      </div>
                      <div className=" cursor-pointer hover:text-primary ">
                        <input type="checkbox" className="translate-y-[1px]" />
                        <label className="text-sm ml-2 ">Ryzen 5</label>
                      </div>
                      <div className=" cursor-pointer hover:text-primary ">
                        <input type="checkbox" className="translate-y-[1px]" />
                        <label className="text-sm ml-2 ">Intel Core I3</label>
                      </div>
                      <div className=" cursor-pointer hover:text-primary ">
                        <input type="checkbox" className="translate-y-[1px]" />
                        <label className="text-sm ml-2 ">Ryzen 5</label>
                      </div>
                      <div className=" cursor-pointer hover:text-primary ">
                        <input type="checkbox" className="translate-y-[1px]" />
                        <label className="text-sm ml-2 ">Intel Core I3</label>
                      </div>
                      <div className=" cursor-pointer hover:text-primary ">
                        <input type="checkbox" className="translate-y-[1px]" />
                        <label className="text-sm ml-2 ">Ryzen 5</label>
                      </div>
                      <div className=" cursor-pointer hover:text-primary ">
                        <input type="checkbox" className="translate-y-[1px]" />
                        <label className="text-sm ml-2 ">Intel Core I3</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-lg text-text font-semibold block mb-2">
                {productList[0].productCategory.categoryName}
              </span>
              <div className="flex items-center">
                <button className="hover:text-white text-[#acacac]  rotate-90 mr-2 p-2 border rounded-sm border-[#dddddd] bg-white  hover:bg-primary  ">
                  <ViewBoardsIcon
                    width={18}
                    height={20}
                    className="text-inherit  "
                  />
                </button>
                <button className="mr-6 text-[#acacac] hover:text-white rotate-90 p-2 border rounded-sm border-[#dddddd] bg-white  hover:bg-primary  ">
                  <TemplateIcon
                    width={18}
                    height={20}
                    className="text-inherit  "
                  />
                </button>
                <select className="border cursor-pointer text-[#333333] rounded-sm border-[#dddddd] w-[180px] outline-none text-sm px-4 py-2 ">
                  <option>Default</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-4 gap-y-12 gap-x-4 my-14">
              {/* product card*/}
              {productList.map((item, index) => (
                <ProductCard
                  key={index}
                  name={item.name}
                  price={item.price}
                  img={item.image}
                  slug={item.slug}
                  reviewLength={item.reviews.length}
                  id={item._id}
                  rating={5}
                  hover={true}
                  countInStock={item.countInStock}
                  customClass="col-span-4 sm:col-span-2 lg:col-span-1"
                />
              ))}
            </div>
            {/* <div className="space-x-1.5 flex items-center justify-end text-sm text-text">
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
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchCategoryPages;
export const getStaticPaths = async () => {
  const categorySlugs = await client.fetch(
    `*[_type=="category"]{
      categorySlug{
        current
      }
  }`
  );

  return {
    paths:
      categorySlugs.map((category) => ({
        params: {
          slug: category.categorySlug.current,
        },
      })) || [],
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  //get product data by slug param
  try {
    const res = await client.fetch(
      `
   *[_type=='product' && productCategory->.categorySlug.current==$slug]{
    slug,image[0],name,price,productCategory->{categoryName,categorySlug},"reviews":coalesce(reviews,[]),_id,countInStock
   }
   `,
      {
        slug,
      }
    );
    console.log(slug);
    return {
      props: { productList: res },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: { productList: null },
    };
  }
};
