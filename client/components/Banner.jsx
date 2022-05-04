import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="px-10  w-full pt-4">
      <div className="grid gap-2 grid-cols-4 grid-rows-2">
        <div className="col-span-3 row-span-2 relative shadow-xl">
          <Link href="">
            <a>
              <Image
                src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/slider1_1.jpg?1651552159868"
                width="100%"
                height={61}
                layout="responsive"
              />
            </a>
          </Link>
          <div>
            <ul className="flex items-center">
              <li className=" bg-[#f8f8f8] border-primary bannerSlideItem">
                RELEASE INVENTORY BIG SALE ON HOLIDAYS
              </li>
              <li className="bannerSlideItem">ACER HELIOS 300 2022</li>
              <li className="bannerSlideItem">MSI DOUBLE RAM</li>
              <li className="bannerSlideItem">SAMSUNG SALE</li>
              <li className="bannerSlideItem">ROG WEEK SHOCK PRICE</li>
            </ul>
          </div>
        </div>
        <div className="">
          <Link href="">
            <a>
              <Image
                src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_slider_1.jpg?1651552159868"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </a>
          </Link>
        </div>
        <div className="">
          <Link href="">
            <a>
              <Image
                src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_slider_2.jpg?1651552159868"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
