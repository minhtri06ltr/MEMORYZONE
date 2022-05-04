import Image from "next/image";
import Link from "next/link";
import {
  UserIcon,
  StarIcon,
  LocationMarkerIcon,
  SearchIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/solid";
import logo from "../assets/img/logo.webp";

const Header = () => {
  return (
    <div className="w-screen">
      {/* Small banner */}
      <section>
        <div className="w-full">
          <Link href="">
            <a>
              <Image
                src="https://app2.jeoway.net/35/images/header/banner10_des.webp"
                layout="responsive"
                width="100%"
                height={3}
              />
            </a>
          </Link>
        </div>
      </section>
      {/* Top header */}
      <section>
        <div className="w-full bg-primary px-12 border-b flex justify-between border-[#339f69] py-1.5">
          <div>
            <Link href="">
              <a className="text-sm text-white">
                Mở cửa: 9h đến 20h từ Thứ 2 đến Chủ Nhật
              </a>
            </Link>
          </div>

          <div className="flex justify-evenly items-center">
            <div className="topHeaderItem">
              <UserIcon width={18} className="pb-0.5" color="white" />
              <span className="topHeaderText">Account</span>
            </div>
            <div className="topHeaderItem">
              <StarIcon width={18} color="white" />
              <span className="topHeaderText">Hot promotion</span>
            </div>
            <div className="topHeaderItem">
              <LocationMarkerIcon width={18} color="white" />
              <span className="topHeaderText">Shop system</span>
            </div>
          </div>
        </div>
      </section>
      {/*Mid header */}
      <section>
        <div className="bg-primary py-6 px-8 flex items-center justify-between">
          <div>
            <Link href="">
              <a>
                <Image src={logo} width={178} height={45} />
              </a>
            </Link>
          </div>
          <div className="bg-white rounded-sm ">
            <div className="p-0.5 flex items-center">
              <input
                placeholder="Product you want to find..."
                type="text"
                className="  w-full text-sm outline-none border-none px-4"
                name="search"
              />
              <button className="bg-secondary px-7 py-3 rounded-sm">
                <SearchIcon width={18} color="white" />
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="flex mr-2 items-center">
              <div className=" p-3 mr-2.5 rounded-full border-2 border-white">
                <PhoneIcon color="white" width={16} />
              </div>
              <div className="flex font-bold text-white flex-col text-sm">
                <a>(028) 7301 3878 (10 line)</a>
                <span className="text-[#ffdada] font-normal">
                  Phone:<b className="text-secondary"> 0909 305 350</b>
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className=" p-3 mr-2.5 rounded-full border-2 border-white">
                <ShoppingBagIcon color="white" width={16} />
              </div>
              <div className="flex text-white flex-col text-sm">
                <span className="font-bold">(0) Product</span>
                <span className="text-[#ffdada]">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
