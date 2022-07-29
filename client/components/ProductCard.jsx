import Link from "next/link";
import Image from "next/image";
import { numberWithCommas } from "../utils/format";
import { urlFor } from "../lib/client";
import StarList from "./StarList";
import {
  ShoppingCartIcon,
  EyeIcon,
} from "@heroicons/react/solid";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const ProductCard = ({
  name,
  price,
  img,
  slug,
  review,
  countInStock,
  hover = false,
  id,
  customClass=''
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        name,
        id,
        img,
        price,
        quantity: 1,
        slug,
        countInStock,
      }),
    );
    router.push("/cart");
  };
  return (
    // <div className="col-span-4 sm:col-span-2  lg:col-span-1">
    //   <div>
    //     <Link href={`/product/${slug}`}>
    //       <div className="relative aspect-square  ">
    //         <Image
    //           alt={name}
    //           priority
    //           src={urlFor(img).url()}
    //           layout="fill"
    //           objectFit="contain"
    //           quality={100}
    //         />
    //       </div>
    //     </Link>
    //   </div>
    //   <Link href={`/product/${slug}`}>
    //     <h2 className="text-text px-14 sm:px-0 text-center  sm:text-left text-sm cursor-pointer font-light leading-none hover:text-primary limit-3-line my-2">
    //       {name}
    //     </h2>
    //   </Link>
    //   <div className="text-center md:text-left px-14 sm:px-0">
    //     <span className="text-primary text-base font-bold mr-2">
    //       {numberWithCommas(price)}$
    //     </span>
    //     <span className="text-gray line-through text-sm ">
    //       2.359$
    //     </span>
    //   </div>
    //   <div className="mt-2 flex items-end space-x-2 justify-center md:justify-start">
    //     <StarList
    //       quantity={5}
    //       width={18}
    //       height={18}
    //     />
    //     <span className="text-xs text-gray">
    //       (34 reviews)
    //     </span>
    //   </div>
    // </div>
   <>
    <div className={`inline-grid ${hover && "peer"} self-end w-full space-y-2 ${customClass}`}>
      <div
        className={` h-[210px]`}
      >
        <Link href={`/product/${slug.current}`}>
          <a>
            <Image
              alt={`Memoryzone ${name} thumbnail `}
              src={urlFor(img).url()}
              layout="responsive"
              quality={100}
              height="100%"
              width="100%"
            />
          </a>
        </Link>
      </div>
      <Link href={`/product/${slug.current}`}>
        <span className="hover:text-primary cursor-pointer limit-3-line text-sm block text-text">
          {name}
        </span>
      </Link>
      <div className="text-center ">
        <span className="text-md font-semibold mr-2  text-primary">
          {price}$
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
    
    </div>
      <div className="invisible peer-hover:visible flex items-center space-x-1.5 justify-center">
      <button
        onClick={handleAddToCart}
        className={`bg-primary rounded-sm w-[120px] text-white  text-sm flex items-center justify-center py-2 hover:bg-[#d92b1f]
       ${
         (countInStock === 0 ||
           !countInStock) &&
         "opacity-70 pointer-events-none"
       } `}
      >
        {countInStock !== 0 && countInStock && (
          <ShoppingCartIcon
            color="white"
            width={20}
            height={20}
          />
        )}
        <span className="ml-2 block">
          {countInStock !== 0 && countInStock
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
    </div></>
  );
};

export default ProductCard;
