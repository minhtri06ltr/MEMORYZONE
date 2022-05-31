import Link from "next/link";
import Image from "next/image";
import { numberWithCommas } from "../utils/format";
import { urlFor } from "../lib/client";

const ProductCard = ({ name, price, img, slug }) => {
  return (
    <div>
      <div>
        <Link href={`/product/${slug}`}>
          <div className="relative aspect-square block ">
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
        <span className="text-text text-sm cursor-pointer font-light leading-none hover:text-primary limit-3-line my-2">
          {name}
        </span>
      </Link>
      <div className="text-center">
        <span className="text-primary text-base font-bold mr-2">
          {numberWithCommas(price)}$
        </span>
        <span className="text-gray line-through text-sm ">2.359$</span>
      </div>
    </div>
  );
};

export default ProductCard;
