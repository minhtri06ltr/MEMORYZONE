import Image from "next/image";
import Link from "next/link";
import {
  UserIcon,
  StarIcon,
  LocationMarkerIcon,
  SearchIcon,
  PhoneIcon,
  ShoppingBagIcon,
  ViewListIcon,
} from "@heroicons/react/solid";
import logo from "../assets/img/logo.webp";

const Header = () => {
  return (
    <div className="w-full">
      {/* Small banner */}
      <section>
        <div className="w-full">
          <Link href="#">
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
        <div className="w-full bg-primary px-10 border-b flex justify-between border-[#339f69] py-1.5">
          <div>
            <Link href="#">
              <a className="text-sm text-white">
                Open: 9am to 8pm from Monday to Sunday
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
        <div className="bg-primary py-6 px-10 flex items-center justify-between">
          <div className="mr-16">
            <Link href="#">
              <a>
                <Image src={logo} width={178} height={45} />
              </a>
            </Link>
          </div>
          <div className=" px-6 flex-1">
            <div className="p-1 bg-white rounded-md  flex items-center">
              <input
                placeholder="Product you want to find..."
                type="text"
                className=" text-black w-full text-sm outline-none border-none px-4"
                name="search"
              />
              <button className="bg-secondary px-6 py-2 rounded-md">
                <SearchIcon width={18} color="white" />
              </button>
            </div>
          </div>
          <div className="flex ml-2">
            <div className="flex mr-2 items-center">
              <div className=" p-3 mr-2.5 rounded-full border-2 border-white">
                <PhoneIcon color="white" width={16} />
              </div>
              <div className="flex font-bold  flex-col">
                <a className="text-white  text-sm">(028) 7301 3878 (10 line)</a>
                <span className="text-[#ffdada] font-normal text-xs">
                  Phone:<b className="text-secondary"> 0909 305 350</b>
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className=" p-2.5 mr-2.5 rounded-full border-2 border-white">
                <ShoppingBagIcon color="white" width={20} />
              </div>
              <div className="flex  flex-col ">
                <span className="font-bold text-white text-sm">
                  (0) Product
                </span>
                <span className="text-[#ffdada] text-xs">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Bottom header */}
      <section>
        <div className="bg-[#393a44] px-10 items-center  flex">
          <div className="flex justify-center items-center shrink-0 py-4 px-4  bg-secondary text-white">
            <ViewListIcon width={24} className="mr-2 " />
            <span className="font-extrabold text-lg pr-8">
              Product Category
            </span>
          </div>
          <ul className="px-6 flex flex-1 text-white items-center text-base ">
            <li className="bottomHeaderItem">HOME</li>
            <li className="bottomHeaderItem">PAYMENT</li>
            <li className="bottomHeaderItem">INSTALLMENT</li>
            <li className="bottomHeaderItem">DELIVERY POLICY</li>
            <li className="bottomHeaderItem">CONTACT</li>
            <li className="bottomHeaderItem">LIBRARY</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Header;
