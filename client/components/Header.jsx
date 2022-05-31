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
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { loadingNotify } from "../redux/notifySlice";
import { logout } from "../redux/accountSlice";

const Header = () => {
  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();
  const productQuantity = useSelector((state) => state.cart.quantity);
  const handleLogout = () => {
    dispatch(loadingNotify(true));
    dispatch(logout());
    Cookies.remove("refreshToken", {
      path: "/api/account/accessToken",
    });
    localStorage.setItem("isLogin", false);
    dispatch(loadingNotify(false));
  };
  return (
    <div className="w-full">
      {/* Small banner */}
      <section>
        <Link href="#">
          <div className="relative w-full h-9">
            <Image
              priority
              alt="Memoryzone small banner on top"
              src="https://app2.jeoway.net/35/images/header/banner10_des.webp"
              layout="fill"
            />
          </div>
        </Link>
      </section>
      {/* Top header */}
      <section>
        <div className="w-full bg-primary px-10 border-b flex justify-between border-[#339f69] py-1.5">
          <div>
            <Link href="#">
              <span className="text-xs text-white">
                Open: 9am to 8pm from Monday to Sunday
              </span>
            </Link>
          </div>

          <div className="flex justify-evenly items-center">
            <div className="topHeaderItem">
              <UserIcon width={18} className="text-inherit" />

              {Object.keys(account.user).length !== 0 ? (
                <span className="topHeaderText">
                  Hi! {account.user.firstName} {account.user.lastName}
                </span>
              ) : (
                <Link href="/account/login">
                  <span className="topHeaderText">Account</span>
                </Link>
              )}
            </div>

            <div className="topHeaderItem">
              <StarIcon width={18} className="mt-0.5 text-inherit" />
              <span className="topHeaderText">Hot Promotion</span>
            </div>

            <div className="topHeaderItem">
              <LocationMarkerIcon width={18} className="text-inherit" />
              <span className="topHeaderText">Shop System</span>
            </div>
          </div>
        </div>
      </section>
      {/*Mid header */}
      <section>
        <div className="bg-primary py-4 px-10 flex items-center justify-between">
          <div className="mr-16">
            <Link href="/">
              <div>
                <Image
                  src={logo}
                  alt="Memoryzone homepage logo"
                  width={178}
                  height={45}
                />
              </div>
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
                <a className="text-white hover:text-secondary cursor-pointer  text-sm">
                  (028) 7301 3878 (10 line)
                </a>
                <span className="text-[#ffdada] font-normal text-xs">
                  Phone:<b className="text-secondary"> 0909 305 350</b>
                </span>
              </div>
            </div>
            <Link href="/cart">
              <div className="flex items-center cursor-pointer">
                <div className=" p-2.5 mr-2.5 rounded-full border-2 border-white">
                  <ShoppingBagIcon color="white" width={20} />
                </div>
                <div className="flex  flex-col ">
                  <span className="font-bold text-white text-sm">
                    ({productQuantity}) Product
                  </span>
                  <span className="text-[#ffdada] text-xs">Cart</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/*Bottom header */}
      <section>
        <div className="bg-[#393a44] px-10 items-center  flex">
          <div className="flex justify-center items-center shrink-0 py-3.5 px-4  bg-secondary text-white">
            <ViewListIcon width={24} className="mr-2 " />
            <span className="font-semibold text-lg pr-8">Product Category</span>
          </div>
          <ul className="px-6 flex flex-1 text-white items-center text-base ">
            <li className="bottomHeaderItem">HOME</li>
            <li className="bottomHeaderItem">PAYMENT</li>
            <li className="bottomHeaderItem">INSTALLMENT</li>
            <li className="bottomHeaderItem">DELIVERY POLICY</li>
            <li className="bottomHeaderItem">CONTACT</li>
            <li className="bottomHeaderItem">LIBRARY</li>
            <li onClick={handleLogout} className="cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Header;
