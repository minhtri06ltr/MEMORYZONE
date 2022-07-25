import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Interest = () => {
  const SlideArrow = (props) => {
    return props.direction === "left" ? (
      <div
        className={`  p-0.5 rounded-full slick-arrow   items-center justify-center  ${props.className}`}
        onClick={props.onClick}
        style={{
          ...props.style,
          display: "flex",
          background: "#3f3f3f",
          left: "-48px",
        }}
      >
        <ChevronLeftIcon
          width={24}
          height={24}
          color="white"
        />
      </div>
    ) : (
      <div
        className={`  p-0.5  items-center justify-center rounded-full slick-arrow   ${props.className}`}
        onClick={props.onClick}
        style={{
          ...props.style,
          display: "flex",
          background: "#3f3f3f",
          right: "-48px",
        }}
      >
        <ChevronRightIcon
          width={24}
          height={24}
          color="white"
        />
      </div>
    );
  };
  const sliderSettings = {
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SlideArrow direction="right" />,
    prevArrow: <SlideArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 365,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="mt-10  limitScreen">
      <div className="flex w-full items-center space-x-8">
        <button className="text-white flex-1 py-2.5 text-sm font-semibold px-4 cursor-default bg-primary rounded-md">
          INTEREST LIST
        </button>
        <button className="text-white py-2.5 flex-1 text-sm font-semibold px-4 cursor-default bg-primary rounded-md">
          BUILD PC
        </button>
      </div>
      <div className="flex items-stretch flex-wrap space-x-2  justify-between  mt-10">
        <div className="interestItem">
          <div className="h-[88px] w-[88px] relative">
            <Image
              src="https://app2.jeoway.net/35/icon_catagory_mmz/the_nho_icon.png"
              layout="fill"
              quality={100}
              alt="Memoryzone interesting memory stick "
            />
          </div>
          <span className="text-primary text-center mt-2 block font-semibold">
            Memory Stick
          </span>
        </div>
        <div className="interestItem">
          <div className="h-[88px] w-[88px] relative">
            <Image
              src="https://app2.jeoway.net/35/icon_catagory_mmz/ram_icon.png"
              layout="fill"
              quality={100}
              alt="Memoryzone interesting ram"
            />
          </div>
          <span className="text-primary text-center mt-2 block font-semibold">
            Ram
          </span>
        </div>
        <div className="interestItem">
          <div className="h-[88px] w-[88px] relative">
            <Image
              src="https://app2.jeoway.net/35/icon_catagory_mmz/ssd_icon.png"
              layout="fill"
              quality={100}
              alt="Memoryzone interesting memory SSD "
            />
          </div>
          <span className="text-primary text-center mt-2 block font-semibold">
            SSD
          </span>
        </div>
        <div className="interestItem">
          <div className="h-[88px] w-[88px] relative">
            <Image
              src="https://app2.jeoway.net/35/icon_catagory_mmz/o_cung_di_dong_icon.png"
              layout="fill"
              quality={100}
              alt="Memoryzone interesting memory portable hard drive "
            />
          </div>
          <span className="text-primary text-center mt-2 block font-semibold">
            Portable Hard Drive
          </span>
        </div>
        <div className="interestItem">
          <div className="h-[88px] w-[88px] relative">
            <Image
              src="https://app2.jeoway.net/35/icon_catagory_mmz/phu_kien_icon.png"
              layout="fill"
              quality={100}
              alt="Memoryzone interesting memory accessory "
            />
          </div>
          <span className="text-primary text-center mt-2 block font-semibold">
            Accessory
          </span>
        </div>
        <div className="interestItem">
          <div className="h-[88px] w-[88px] relative">
            <Image
              src="https://app2.jeoway.net/35/icon_catagory_mmz/o_cung_ssd_di_dong_icon.png"
              layout="fill"
              quality={100}
              alt="Memoryzone interesting memory stick portable SSD hard drive"
            />
          </div>
          <span className="text-primary text-center mt-2 block font-semibold">
            Portable SSD Hard Drive
          </span>
        </div>
      </div>
      <div className="mt-4">
        <span className="text-text font-semibold text-lg">
          HOT KEYWORDS
        </span>

        <div className="mt-6 px-12 ">
          <Slider
            {...sliderSettings}
            className="flex"
          >
            {[
              "test",
              "test",
              "test",
              "test",
              "test",
              "test",
              "test",
              "test",
              "test",
              "test",
              "test",
              "test",
              "test",
            ].map((item, index) => (
              <div
                key={index}
                className="px-3 py-2 !w-[100px] h-[68px] justify-center  !flex items-center  bg-primary rounded-md cursor-pointer"
              >
                <span className="text-white  limit-2-line ">
                  {item}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Interest;
