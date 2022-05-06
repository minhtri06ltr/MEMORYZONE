import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "./index";

const Sell = ({ products }) => {
  return (
    <div className="p-10 w-full">
      {/*Sell header*/}
      <section>
        <div className="border-b-2 border-primary rounded-l-sm flex items-center justify-between">
          <span className="shadow-2xl block text-white bg-primary text-lg font-bold py-2 px-6 rounded-sm">
            LAPTOP
          </span>
          <ul className="flex items-center">
            <li className="sellItem">Laptop brand</li>
            <li className="sellItem">Trending</li>
            <li className="sellItem">Laptop Acer</li>
            <li className="sellItem">Laptop Gigabyte</li>
            <li className="sellItem">Laptop Dell</li>
            <li className="sellItem">See All</li>
            <div className="text-[#d5d5d5] ml-2 relative flex items-center">
              <ChevronLeftIcon width={35} className="mr-4" />
              <ChevronRightIcon
                width={35}
                className="absolute -right-1.5"
                color="#c4c4c4"
              />
            </div>
          </ul>
        </div>
      </section>
      {/*Main sell */}
      <section>
        <div className="flex mt-10">
          <div className="w-3/4 grid gap-x-6 h-auto gap-y-12 grid-cols-4">
            {products?.map((product) => (
              <ProductCard
                key={product._id}
                name={product.name}
                details={product.details}
                price={product.price}
                img={product.image[0]}
                slug={product.slug}
              />
            ))}
          </div>
          <div className="flex-1 ml-8 ">
            <div className="mb-8 ">
              <Link href="#">
                <img src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_1_fashion.png?1651552159868" />
              </Link>
            </div>
            <div className="relative">
              <Link href="#">
                <img src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_2_fashion.png?1651552159868" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sell;
