import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from ".";

const Sell = ({ products, title, index }) => {
  console.log(products);
  return (
    <div className="py-10 limitScreen">
      {/*Sell header*/}
      <section>
        <div className="border-b-2 border-primary rounded-l-sm flex items-center justify-between">
          <span className="shadow-2xl block text-white bg-primary text-lg font-bold py-2 px-6 rounded-sm">
            {title}
          </span>

          <div className="space-x-1  flex items-center">
            <span className="text-primary md:hidden text-3xl font-bold -translate-y-1/4 cursor-pointer">
              ...
            </span>
            <ul className="list-none hidden md:flex items-center">
              <li className="sellItem">Laptop brand</li>
              <li className="sellItem">Trending</li>
              <li className="sellItem">Laptop Acer</li>
              <li className="sellItem">Laptop Gigabyte</li>
              <li className="sellItem">Laptop Dell</li>
              <li className="sellItem">See All</li>
            </ul>
            <ChevronLeftIcon
              width={18}
              height={18}
              className="cursor-pointer "
              color="#d5d5d5"
            />
            <ChevronRightIcon
              width={18}
              height={18}
              className="cursor-pointer "
              color="#c4c4c4"
            />
          </div>
        </div>
      </section>
      {/*Main sell */}
      <section>
        <div
          className={`flex mt-10 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } flex-col `}
        >
          <div className="w-full  lg:w-3/4 grid gap-4 h-auto md:grid-cols-6 lg:grid-cols-4  grid-cols-4">
            {products?.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                img={product.image}
                slug={product.slug}
                countInStock={product.countInStock}
                id={product._id}
                reviewLength={product.reviews.length}
                rating={5}
                hover={true}
                customClass="col-span-4 sm:col-span-2  lg:col-span-1"
              />
            ))}
          </div>
          {/*sell banner */}
          <div
            className={`flex-1 block md:hidden lg:block mt-6 lg:mt-0  ${
              index % 2 === 0 ? "lg:ml-8" : "lg:ml-0 lg:mr-8"
            } `}
          >
            <div className="mb-8 relative mx-auto w-[370px] lg:w-full">
              <Link href="#">
                <a>
                  <Image
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_1_fashion.png?1651552159868"
                    layout="responsive"
                    alt="Memoryzone laptop banner 1"
                    width="100%"
                    height="100%"
                  />
                </a>
              </Link>
            </div>
            <div className="relative mx-auto w-[370px] lg:w-full ">
              <Link href="#">
                <a>
                  <Image
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_2_fashion.png?1651552159868"
                    layout="responsive"
                    width="100%"
                    height="100%"
                    alt="Memoryzone laptop banner 2"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sell;
