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
import { MenuIcon } from "@heroicons/react/outline";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import Cookies from "js-cookie";

import { logout } from "../redux/accountSlice";
import { useRouter } from "next/router";
import { clearOrder } from "../redux/orderSlice";
import { useState } from "react";
import hotIcon from "../assets/img/hot.svg";

const Header = () => {
  const user = useSelector(
    (state) => state.account.user,
  );

  const dispatch = useDispatch();
  const productQuantity = useSelector(
    (state) => state.cart.quantity,
  );
  const [searchTerm, setSearchTerm] =
    useState("");
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("refreshToken", {
      path: "/api/account/accessToken",
    });
    localStorage.setItem("isLogin", false);
    dispatch(clearOrder());
  };
  const searchHandle = (e) => {
    e.preventDefault();

    if (searchTerm === "") {
      alert(
        "Please let me know what you want to search",
      );
      return;
    }
    router.push(`/search?key=${searchTerm}`);
  };
  return (
    <div className="w-full bg-primary">
      {/* Small banner */}
      <section>
        <Link href="#">
          <div className="cursor-pointer">
            <Image
              priority
              alt="Memoryzone small banner on top website"
              src="https://app2.jeoway.net/35/images/header/banner10_des.webp"
              layout="responsive"
              width="100%"
              height={4}
            />
          </div>
        </Link>
      </section>
      {/* Top header */}
      <section>
        <div className="border-b border-[#339f69]">
          <div className="limitScreen  flex items-center  py-3">
            <div className="hidden cursor-pointer lg:block w-1/2 space-x-4">
              <Link href="#">
                <span className="text-xs text-white relative after:w-[1px] after:bg-white after:absolute after:-right-[20%] after:top-0 after:h-full">
                  Build PC
                </span>
              </Link>
              <Link href="#">
                <span className="text-xs cursor-pointer text-white ">
                  Open: 9am to 8pm from Monday to
                  Sunday
                </span>
              </Link>
            </div>

            <div className="flex  justify-center space-x-4 md:justify-end w-full lg:w-1/2 items-center">
              <div className="topHeaderItem">
                <UserIcon
                  width={18}
                  className="text-inherit"
                />

                {Object.keys(user).length !==
                0 ? (
                  <Link href="/account">
                    <span className="topHeaderText">
                      Hi!{" "}
                      {`${user.firstName} 
                      ${user.lastName}`}
                    </span>
                  </Link>
                ) : (
                  <Link href="/account/login">
                    <span className="topHeaderText">
                      Account
                    </span>
                  </Link>
                )}
              </div>

              <div className="topHeaderItem hidden md:flex">
                <div className="relative w-4 h-4 mt-1">
                  <Image
                    src={hotIcon}
                    layout="fill"
                  />
                </div>
                <Link href="/account">
                  <span className="topHeaderText">
                    Hot Promotion
                  </span>
                </Link>
              </div>

              <div className="topHeaderItem hidden md:flex">
                <LocationMarkerIcon
                  width={18}
                  className="text-inherit"
                />
                <span className="topHeaderText">
                  Shop System
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Mid header */}
      <section>
        <div className="limitScreen py-6 relative  flex items-center justify-between">
          <div className="cursor-pointer lg:hidden">
            <MenuIcon
              color="white"
              width={30}
              height={30}
            />
          </div>
          <div className="lg:mr-16 mr-0 ">
            <Link href="/">
              <div className="cursor-pointer translate-x-0 md:translate-x-1/4 lg:translate-x-0 flex items-center justify-center">
                <Image
                  src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/logo.png?1657789685905"
                  alt="Memoryzone main logo"
                  width={178}
                  height={45}
                />
              </div>
            </Link>
          </div>
          <div className="  absolute  lg:relative w-[calc(100%-2rem)] lg:w-auto py-2 lg:py-0  px-0 top-full  lg:px-6 lg:flex-1">
            <div>
              <form
                onSubmit={searchHandle}
                className="p-1 bg-white rounded-r-md  flex items-center"
              >
                <input
                  placeholder="Product you want to find..."
                  type="text"
                  required
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  className=" text-black w-full h-full   text-sm outline-none border-none px-4"
                  name="search"
                />
                <button
                  className="bg-secondary px-6 py-2 rounded-md"
                  type="submit"
                >
                  <SearchIcon
                    width={18}
                    color="white"
                  />
                </button>
              </form>
            </div>
          </div>
          <div className="flex space-x-2 ml-0 items-center lg:ml-2 ">
            <div className="top-full mt-20 lg:relative lg:mt-0 lg:top-0 lg:left-0   left-[1rem]   absolute md:hidden lg:flex  mr-0 lg:mr-2 items-center  flex">
              <div className=" p-3 mr-2.5 rounded-full border-2 border-white">
                <PhoneIcon
                  color="white"
                  width={16}
                />
              </div>
              <div className="flex font-bold  flex-col">
                <a
                  href="tel:84367907374"
                  className="text-white hover:text-secondary cursor-pointer  text-sm"
                >
                  (84) 3679 0 7374
                </a>
                <span className="text-[#ffdada] font-normal text-xs">
                  Phone:
                  <b className="text-secondary">
                    036 790 7374
                  </b>
                </span>
              </div>
            </div>
            <Link href="/cart">
              <div className="top-full mt-20 md:mt-0 right-[1rem]  lg:top-0 lg:right-0 absolute md:relative flex items-center cursor-pointer">
                <div className=" p-2.5 mr-2.5 rounded-full border-2 border-white">
                  <ShoppingBagIcon
                    color="white"
                    width={20}
                  />
                </div>
                <div className="flex  flex-col ">
                  <span className="font-bold text-white text-sm">
                    ({productQuantity}) Product
                  </span>
                  <span className="text-[#ffdada] text-xs">
                    Cart
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/*Bottom header */}
      <section className="lg:bg-[#393a44]">
        <div className="limitScreen ">
          <div className="lg:bg-[#393a44] bg-inherit    items-center  flex">
            <div className="flex justify-start mt-36 md:mt-16 lg:mt-0 cursor-pointer lg:justify-center items-center shrink-0 py-2.5 mb-4 lg:mb-0 lg:py-3.5 px-4 w-full lg:w-auto   bg-secondary text-white">
              <MenuIcon
                width={24}
                className="mr-2"
              />
              <span className="font-semibold text-base lg:text-lg pr-8">
                Product Category
              </span>
            </div>
            <ul className="list-none px-6  flex-1 hidden lg:flex text-white items-center text-base ">
              <li className="bottomHeaderItem">
                HOME
              </li>
              <li className="bottomHeaderItem">
                PAYMENT
              </li>
              <li className="bottomHeaderItem">
                INSTALLMENT
              </li>
              <Link href="/category/chuot-app">
                <li className="bottomHeaderItem">
                  DELIVERY POLICY
                </li>
              </Link>
              <Link href="/product/search?query=asd">
                <li className="bottomHeaderItem">
                  CONTACT
                </li>
              </Link>
              <Link href="/news">
                <li className="bottomHeaderItem">
                  LIBRARY
                </li>
              </Link>
              <li
                onClick={handleLogout}
                className="cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
