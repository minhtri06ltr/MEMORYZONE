import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  formatRSSFeedDatetime,
  formatSourceLink,
} from "../utils/format";

const RSSFeed = ({ data }) => {
  const [currentSlide, setCurrentSlide] =
    useState(0);

  const sliderRef = useRef();
  const sliderSettings = {
    //autoplay: true,
    pauseOnHover: true,
    speed: 500,
    autoplaySpeed: 3500,
    infinite: true,
    afterChange: (current) =>
      setCurrentSlide(current),
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    lazyLoad: true,
    arrow: false,
  };
  return (
    <div className="mt-12 border bg-[#f7f7f7] overflow-hidden border-[#e5e5e5] px-4 py-6">
      <div className="flex items-center justify-between ">
        <span className="block underline decoration-primary underline-offset-[6px]">
          Other news
        </span>
        <div className="flex items-center space-x-1">
          <ChevronLeftIcon
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
            width={18}
            height={18}
            className="cursor-pointer"
          />
          <ChevronRightIcon
            onClick={() => {
              sliderRef.current.slickNext();
            }}
            width={18}
            className="cursor-pointer"
            height={18}
          />
        </div>
      </div>
      <div className="my-4   ">
        <Slider
          ref={(c) => (sliderRef.current = c)}
          {...sliderSettings}
        >
          {data.map((item, index) => (
            <div
              className="space-y-3 mx-2 aspect-square flex-1"
              style={{ width: "254px" }}
              key={index}
            >
              <a
                href={item.link}
                rel="noreferrer noopener"
                target="_blank"
              >
                <div className="relative h-[156px] cursor-pointer">
                  <Image
                    objectFit="cover"
                    alt={`Memoryzone other news ${item.title}`}
                    layout="fill"
                    src={formatSourceLink(
                      item.content,
                    )}
                  />
                </div>
              </a>
              <span className="block text-gray text-xs text-right">
                {formatRSSFeedDatetime(
                  item.pubDate,
                )}
              </span>
              <a
                rel="noreferrer noopener"
                href={item.link}
                target="_blank"
                className="block"
              >
                <span className="block cursor-pointer hover:text-primary">
                  {item.title}
                </span>
              </a>
              <span className="block text-gray text-sm">
                {item.contentSnippet}
              </span>
            </div>
          ))}
        </Slider>
      </div>
      {/* <div
        ref={listRef}
        className="my-4 flex items-stretch justify-center space-x-4  transition ease-out duration-300 w-max overflow-hidden"
      >
        {data.map((item, index) => (
          <div
            className="space-y-3 aspect-square flex-1"
            style={{ width: "254px" }}
            key={index}
          >
            <a
              href={item.link}
              rel="noreferrer noopener"
              target="_blank"
            >
              <div className="relative h-[156px] cursor-pointer">
                <Image
                  objectFit="cover"
                  alt={`Memoryzone other news ${item.title}`}
                  layout="fill"
                  src={formatSourceLink(
                    item.content,
                  )}
                />
              </div>
            </a>
            <span className="block text-gray text-xs text-right">
              {formatRSSFeedDatetime(
                item.pubDate,
              )}
            </span>
            <a
              rel="noreferrer noopener"
              href={item.link}
              target="_blank"
              className="block"
            >
              <span className="block cursor-pointer hover:text-primary">
                {item.title}
              </span>
            </a>
            <span className="block text-gray text-sm">
              {item.contentSnippet}
            </span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default RSSFeed;
