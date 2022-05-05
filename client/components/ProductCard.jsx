import Link from "next/link";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="">
      <div className="relative aspect-square">
        <Link href="#">
          <a>
            <Image
              src="https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-lenovo-yoga-slim-7-pro-14ihu5-o-82nh00aevn.png?v=1651221446000"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </a>
        </Link>
      </div>
      <Link href="#">
        <a className="text-text leading-none hover:text-primary limit-3-line my-2">
          Laptop Lenovo Yoga Slim 7 Pro 14IHU5 O 82NH00AEVN (i5-11300H EVO, Iris
          Xe Graphics, Ram 16GB DDR4, SSD 512GB, 14 Inch OLED 2.8K)
        </a>
      </Link>
      <div className="">
        <span className="text-primary text-lg font-bold mr-2">26.690.000₫</span>
        <span className="text-[#888888] line-through text-sm ">
          28.890.000₫
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
