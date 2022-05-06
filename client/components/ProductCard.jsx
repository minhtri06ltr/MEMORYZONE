import Link from "next/link";
import Image from "next/image";
import { numberWithCommas } from "../utils/format";
import { urlFor } from "../lib/client";

const ProductCard = ({ name, price, img }) => {
  return (
    <div className="">
      <div className="relative aspect-square">
        <Link href="#">
          <a>
            <Image
              src={urlFor(img).url()}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </a>
        </Link>
      </div>
      <Link href="#">
        <a className="text-text leading-none hover:text-primary limit-3-line my-2">
          {name}
        </a>
      </Link>
      <div className="text-center">
        <span className="text-primary text-lg font-bold mr-2">
          {numberWithCommas(price)}$
        </span>
        <span className="text-[#888888] line-through text-sm ">2.359$</span>
      </div>
    </div>
  );
};

export default ProductCard;
