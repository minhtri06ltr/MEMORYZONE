import Link from "next/link";
import Image from "next/image";
import { numberWithCommas } from "../utils/format";
import { urlFor } from "../lib/client";
import StarList from "./StarList";

const ProductCard = ({
  name,
  price,
  img,
  slug,
}) => {
  return (
    <div className="col-span-4 sm:col-span-2  lg:col-span-1">
      <div>
        <Link href={`/product/${slug}`}>
          <div className="relative aspect-square  ">
            <Image
              alt={name}
              priority
              src={urlFor(img).url()}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </Link>
      </div>
      <Link href={`/product/${slug}`}>
        <h2 className="text-text px-14 sm:px-0 text-center  sm:text-left text-sm cursor-pointer font-light leading-none hover:text-primary limit-3-line my-2">
          {name}
        </h2>
      </Link>
      <div className="text-center md:text-left px-14 sm:px-0">
        <span className="text-primary text-base font-bold mr-2">
          {numberWithCommas(price)}$
        </span>
        <span className="text-gray line-through text-sm ">
          2.359$
        </span>
      </div>
      <div className="mt-2 flex items-end space-x-2 justify-center md:justify-start">
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
  );
};

export default ProductCard;
