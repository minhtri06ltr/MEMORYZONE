import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [currentSlide, setCurrentSlide] =
    useState(0);
  const array = [
    "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/slider1_2.jpg?1657861540028",
    "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/slider1_1.jpg?1657861540028",
    "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/slider1_3.jpg?1657861540028",
    "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/slider1_4.jpg?1657861540028",
    "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/slider1_5.jpg?1657861540028",
  ];
  const sliderSettings = () => {
    const items = [
      "RELEASE INVENTORY BIG SALE ON HOLIDAYS",
      "ACER HELIOS 300 2022",
      "MSI DOUBLE RAM",
      "SAMSUNG SALE",
      "ROG WEEK SHOCK PRICE",
    ];
    return {
      customPaging: (i) => {
        return (
          <span
            className={`bannerSlideItem  ${
              i === currentSlide
                ? "border-primary"
                : ""
            } `}
          >
            {items[i]}
          </span>
        );
      },

      beforeChange: (prev, next) => {
        setCurrentSlide(next);
      },
      dotsClass:
        "w-full !flex list-none flex-row [&>*]:flex-1",
      dots: true,
      lazyLoad: true,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 3500,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      pauseOnHover: true,
    };
  };
  return (
    <div className="limitScreen pt-6">
      <div className="grid lg:gap-2 gap-x-2 gap-y-4 grid-cols-4 grid-rows-2">
        <div className="col-span-4 row-span-2 lg:col-span-3 lg:row-span-2 relative shadow-md">
          <Slider {...sliderSettings()}>
            {array.map((item, index) => (
              <div key={index}>
                <Image
                  priority
                  src={item}
                  width="100%"
                  height={61}
                  layout="responsive"
                  quality={100}
                  alt="Memoryzone first main slider banner"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="col-span-4 row-span-2 md:col-span-2 lg:col-span-1 lg:row-span-1">
          <Link href="#">
            <div className="w-full h-full inline-grid">
              <Image
                alt="Memoryzone secondary banner"
                src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_slider_1.jpg?1651552159868"
                width="100%"
                height="100%"
                layout="responsive"
                quality={100}
                priority
              />
            </div>
          </Link>
        </div>
        <div className=" col-span-4 row-span-2   md:col-span-2 lg:col-span-1 lg:row-span-1">
          <Link href="#">
            <div className="w-full h-full inline-grid">
              <Image
                src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/banner_slider_2.jpg?1651552159868"
                width="100%"
                height="100%"
                layout="responsive"
                quality={100}
                alt="Memoryzone third banner"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
