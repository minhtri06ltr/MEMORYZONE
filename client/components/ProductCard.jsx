import Link from "next/link";
import Image from "next/image";
import { numberWithCommas } from "../utils/format";
import { urlFor } from "../lib/client";
import StarList from "./StarList";
import { ShoppingCartIcon, EyeIcon } from "@heroicons/react/solid";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const ProductCard = ({
  name,
  price,
  img,
  slug,
  reviewLength,
  rating,
  countInStock,
  hover = false,
  id,
  customClass = "",
}) => {
  console.log(slug);
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
      })
    );
    router.push("/cart");
  };
  return (
    <div className={` ${customClass} h-auto`}>
      <div className={` ${hover && "peer"}  w-full space-y-1  pb-2`}>
        <div className={` aspect-square`}>
          <Link href={`/product/${slug.current}`}>
            <a>
              <Image
                alt={`Memoryzone ${name} thumbnail `}
                src={urlFor(img).url()}
                layout="responsive"
                width="100%"
                height="100%"
                quality={100}
              />
            </a>
          </Link>
        </div>
        <Link href={`/product/${slug.current}`}>
          <span className="hover:text-primary text-center md:text-left cursor-pointer limit-3-line text-sm block text-text">
            {name}
          </span>
        </Link>
        <div className="text-center ">
          <span className="text-md font-semibold mr-2  text-primary">
            {numberWithCommas(price)}$
          </span>
          <span className="text-sm line-through   text-gray">
            {numberWithCommas(Math.round(price * 1.2))}$
          </span>
        </div>
        {reviewLength !== 0 && (
          <div className="flex items-end space-x-2 justify-center ">
            <StarList quantity={5} width={20} height={20} />
            <span className="text-xs text-gray">
              ({reviewLength} {reviewLength > 1 ? "reviews" : "review"})
            </span>
          </div>
        )}
      </div>
      <div
        className={`${
          hover ? "invisible" : "visible"
        } peer-hover:visible hover:visible flex items-center space-x-1.5 justify-center`}
      >
        <button
          onClick={handleAddToCart}
          className={`bg-primary rounded-sm w-[120px] text-white  text-sm flex items-center justify-center py-2 hover:bg-[#d92b1f]
       ${
         (countInStock === 0 || !countInStock) &&
         "opacity-70 pointer-events-none"
       } `}
        >
          {countInStock !== 0 && countInStock && (
            <ShoppingCartIcon color="white" width={20} height={20} />
          )}
          <span className="ml-2 block">
            {countInStock !== 0 && countInStock ? "Buy now" : "Out of stock"}
          </span>
        </button>
        <button className="bg-primary  p-2 rounded-sm hover:bg-[#d92b1f] text-white flex items-center justify-center">
          <EyeIcon color="white" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
