import Link from "next/link";
import Image from "next/image";
import { numberWithCommas } from "../utils/format";
import { urlFor } from "../lib/client";

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
        <h2 className="text-text px-20 sm:px-0 text-center sm:text-left text-sm cursor-pointer font-light leading-none hover:text-primary limit-3-line my-2">
          {name}
        </h2>
      </Link>
      <div className="text-center px-20 sm:px-0">
        <span className="text-primary text-base font-bold mr-2">
          {numberWithCommas(price)}$
        </span>
        <span className="text-gray line-through text-sm ">
          2.359$
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
