import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { Error, ProductCard } from ".";

const Sell = ({ products }) => {
  if (!products)
    return (
      <Error message="Product not found or Internal server error, please contact with owner" />
    );
  return (
    <div className="py-10 w-full">
      {/*Sell header*/}
      <section>
        <div className="border-b-2 border-primary rounded-l-sm flex items-center justify-between">
          <span className="shadow-2xl block text-white bg-primary text-lg font-bold py-2 px-6 rounded-sm">
            LAPTOP
          </span>

          <div className="space-x-1  flex items-center">
            <span className="text-primary md:hidden text-3xl font-bold -translate-y-1/4 cursor-pointer">
              ...
            </span>
            <ul className="list-none hidden md:flex items-center">
              <li className="sellItem">
                Laptop brand
              </li>
              <li className="sellItem">
                Trending
              </li>
              <li className="sellItem">
                Laptop Acer
              </li>
              <li className="sellItem">
                Laptop Gigabyte
              </li>
              <li className="sellItem">
                Laptop Dell
              </li>
              <li className="sellItem">
                See All
              </li>
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
        <div className="flex mt-10 lg:flex-row flex-col ">
          <div className="w-full lg:w-3/4 grid gap-x-4 h-auto gap-y-6 grid-cols-4">
            {products?.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                img={product.image}
                slug={product.slug.current}
              />
            ))}
          </div>
          {/*sell banner */}
          <div className="flex-1 mt-12 lg:mt-0 lg:ml-8 ">
            <div className="mb-8 relative w-full min-h-[240px]">
              <Link href="#">
                <a>
                  <Image
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_1_fashion.png?1651552159868"
                    layout="fill"
                    alt="Memoryzone laptop banner 1"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </div>
            <div className="relative w-full min-h-[240px]">
              <Link href="#">
                <a>
                  <Image
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_2_fashion.png?1651552159868"
                    layout="fill"
                    objectFit="contain"
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
