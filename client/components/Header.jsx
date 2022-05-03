import Image from "next/image";
import Link from "next/link";
import { UserIcon, StarIcon, LocationMarkerIcon } from "@heroicons/react/solid";

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
        <div className="w-full bg-primary px-12 border-b flex justify-between border-gray-700 py-1.5">
          <div>
            <Link href="">
              <a className="text-sm text-white">
                Mở cửa: 9h đến 20h từ Thứ 2 đến Chủ Nhật
              </a>
            </Link>
          </div>

          <div className="flex justify-evenly items-center">
            <div className="topHeaderItem">
              <UserIcon width={17} color="white" />
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
    </div>
  );
};

export default Header;
