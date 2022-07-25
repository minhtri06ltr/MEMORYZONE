import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Inform = () => {
  const [currentSlide, setCurrentSlide] =
    useState(0);
  console.log("current", currentSlide);
  const sliderSettings = {
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },
    arrows: false,
    infinite: false,
    speed: 500,
    lazyLoad: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{ bottom: 0 }}>
        <ul className="bg-[#f9f9f9] ">{dots}</ul>
      </div>
    ),
    customPaging: (i) => {
      console.log(i);
      return (
        <div
          className={`w-[10px] h-[10px] rounded-full ${
            i === currentSlide
              ? "bg-primary"
              : "bg-[#cccccc]"
          } hover:bg-primary`}
        ></div>
      );
    },
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" pt-5 border-t   border-[#ebebeb] bg-[#f9f9f9]">
      <div className="limitScreen">
        <div className="items-stretch space-x-2  justify-between  hidden lg:flex">
          <div className="informItem">
            <div className="relative w-[60px] h-[42px] ">
              <Image
                src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/service_1.png?1655450481933"
                layout="fill"
                alt="Memoryzone Buy super saver"
              />
            </div>

            <div className="informSliderItem">
              <span className="block font-semibold text-sm text-primary">
                Buy super saver
              </span>
              <span className="block text-gray mt-1 text-xs">
                Products are always sold at the
                most favorable prices for
                customers
              </span>
            </div>
          </div>
          <div className="informItem">
            <div className="relative w-[60px] h-[42px]">
              <Image
                src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/service_2.png?1655450481933"
                layout="fill"
                alt="Memoryzone 100% absolute quality"
              />
            </div>

            <div className="informSliderItem">
              <span className="block font-semibold text-sm text-primary">
                100% absolute quality
              </span>
              <span className="block text-gray mt-1 text-xs">
                Guaranteed genuine product...
              </span>
            </div>
          </div>
          <div className="informItem">
            <div className="relative w-[60px] h-[42px] ">
              <Image
                src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/service_3.png?1655450481933"
                layout="fill"
                alt="Memoryzone Huge promotion"
              />
            </div>

            <div className="informSliderItem">
              <span className="block font-semibold text-sm text-primary">
                Huge promotion
              </span>
              <span className="block text-gray mt-1 text-xs">
                Enjoy special offers and
                attractive gifts
              </span>
            </div>
          </div>
          <div className="informItem">
            <div className="relative w-[60px] h-[42px]">
              <Image
                src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/service_4.png?1655450481933"
                layout="fill"
                alt="Memoryzone Easy payment"
              />
            </div>

            <div className="informSliderItem">
              <span className="block font-semibold text-sm text-primary">
                Easy payment
              </span>
              <span className="block text-gray mt-1 text-xs">
                Nationwide delivery from 1 to 4
                days, transfer, payment receipt,
                etc.
              </span>
            </div>
          </div>
        </div>
        <Slider
          {...sliderSettings}
          className="w-full lg:!hidden"
        >
          <div className="informItem">
            <div className="relative w-[60px] h-[42px] ">
              <Image
                src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/service_1.png?1655450481933"
                layout="fill"
                alt="Memoryzone Buy super saver"
              />
            </div>

            <div className="informSliderItem">
              <span className="block font-semibold text-sm text-primary">
                Buy super saver
              </span>
              <span className="block text-gray mt-1 text-xs">
                Products are always sold at the
                most favorable prices for
                customers
              </span>
            </div>
          </div>
          <div className="informItem">
            <div className="relative w-[60px] h-[42px]">
              <Image
                src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/service_2.png?1655450481933"
                layout="fill"
                alt="Memoryzone 100% absolute quality"
              />
            </div>

            <div className="informSliderItem">
              <span className="block font-semibold text-sm text-primary">
                100% absolute quality
              </span>
              <span className="block text-gray mt-1 text-xs">
                Guaranteed genuine product...
              </span>
            </div>
          </div>
          <div className="informItem">
            <div className="relative w-[60px] h-[42px] ">
              <Image
                src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/service_3.png?1655450481933"
                layout="fill"
                alt="Memoryzone Huge promotion"
              />
            </div>

            <div className="informSliderItem">
              <span className="block font-semibold text-sm text-primary">
                Huge promotion
              </span>
              <span className="block text-gray mt-1 text-xs">
                Enjoy special offers and
                attractive gifts
              </span>
            </div>
          </div>
          <div className="informItem">
            <div className="relative w-[60px] h-[42px]">
              <Image
                src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/service_4.png?1655450481933"
                layout="fill"
                alt="Memoryzone Easy payment"
              />
            </div>

            <div className="informSliderItem">
              <span className="block font-semibold text-sm text-primary">
                Easy payment
              </span>
              <span className="block text-gray mt-1 text-xs">
                Nationwide delivery from 1 to 4
                days, transfer, payment receipt,
                etc.
              </span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Inform;
