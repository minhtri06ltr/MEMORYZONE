import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";

const Interest = () => {
  return (
    <div className="px-10 mt-10">
      <div className="flex items-center justify-center">
        <button className="text-white py-2.5 font-semibold px-16 cursor-default bg-primary rounded-md">
          INTEREST LIST
        </button>
      </div>
      <div className="flex items-center px-12 justify-between  mt-10">
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="h-[88px] w-[88px] relative">
            <Image
              src="https://app2.jeoway.net/35/icon_catagory_mmz/the_nho_icon.png"
              layout="fill"
              quality={100}
              alt="Memoryzone interesting memory stick "
            />
          </div>
          <span className="text-primary mt-2 block font-semibold">
            Memory Stick
          </span>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="h-[88px] w-[88px] relative">
            <Image
              src="https://app2.jeoway.net/35/icon_catagory_mmz/ram_icon.png"
              layout="fill"
              quality={100}
              alt="Memoryzone interesting ram"
            />
          </div>
          <span className="text-primary mt-2 block font-semibold">
            Ram
          </span>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="h-[88px] w-[88px] relative">
            <Image
              src="https://app2.jeoway.net/35/icon_catagory_mmz/ssd_icon.png"
              layout="fill"
              quality={100}
              alt="Memoryzone interesting memory SSD "
            />
          </div>
          <span className="text-primary mt-2 block font-semibold">
            SSD
          </span>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="h-[88px] w-[88px] relative">
            <Image
              src="https://app2.jeoway.net/35/icon_catagory_mmz/o_cung_di_dong_icon.png"
              layout="fill"
              quality={100}
              alt="Memoryzone interesting memory portable hard drive "
            />
          </div>
          <span className="text-primary mt-2 block font-semibold">
            Portable Hard Drive
          </span>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="h-[88px] w-[88px] relative">
            <Image
              src="https://app2.jeoway.net/35/icon_catagory_mmz/phu_kien_icon.png"
              layout="fill"
              quality={100}
              alt="Memoryzone interesting memory accessory "
            />
          </div>
          <span className="text-primary mt-2 block font-semibold">
            Accessory
          </span>
        </div>
        <div className="flex flex-col justify-center items-center cursor-pointer">
          <div className="h-[88px] w-[88px] relative">
            <Image
              src="https://app2.jeoway.net/35/icon_catagory_mmz/o_cung_ssd_di_dong_icon.png"
              layout="fill"
              quality={100}
              alt="Memoryzone interesting memory stick portable SSD hard drive"
            />
          </div>
          <span className="text-primary mt-2 block font-semibold">
            Portable SSD Hard Drive
          </span>
        </div>
      </div>
      <div className="mt-10">
        <span className="text-text font-semibold text-lg">
          HOT KEYWORDS
        </span>
        <div className="mt-6 flex items-center w-full  space-x-6">
          <div className="rounded-full p-0.5 bg-[#3f3f3f] cursor-pointer">
            <ChevronLeftIcon
              width={24}
              height={24}
              color="white"
            />
          </div>
          <div className="flex items-center justify-between flex-1">
            <div className="px-3 py-2 w-[100px] h-[68px] bg-primary rounded-md cursor-pointer">
              <span className="text-white ">
                laptop ram 8gb
              </span>
            </div>
            <div className="px-3 py-2 w-[100px] h-[68px] bg-primary rounded-md cursor-pointer">
              <span className="text-white ">
                laptop ram 8gb
              </span>
            </div>
            <div className="px-3 py-2 w-[100px] h-[68px] bg-primary rounded-md cursor-pointer">
              <span className="text-white ">
                laptop ram 8gb
              </span>
            </div>
            <div className="px-3 py-2 w-[100px] h-[68px] bg-primary rounded-md cursor-pointer">
              <span className="text-white ">
                laptop ram 8gb
              </span>
            </div>
            <div className="px-3 py-2 w-[100px] h-[68px] bg-primary rounded-md cursor-pointer">
              <span className="text-white ">
                laptop ram 8gb
              </span>
            </div>
            <div className="px-3 py-2 w-[100px] h-[68px] bg-primary rounded-md cursor-pointer">
              <span className="text-white ">
                laptop ram 8gb
              </span>
            </div>
            <div className="px-3 py-2 w-[100px] h-[68px] bg-primary rounded-md cursor-pointer">
              <span className="text-white ">
                laptop ram 8gb
              </span>
            </div>
            <div className="px-3 py-2 w-[100px] h-[68px] bg-primary rounded-md cursor-pointer">
              <span className="text-white ">
                laptop ram 8gb
              </span>
            </div>
          </div>
          <div className="rounded-full p-0.5 bg-[#3f3f3f] cursor-pointer">
            <ChevronRightIcon
              width={24}
              height={24}
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interest;
