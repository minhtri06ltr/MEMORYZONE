import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useRef, useState } from "react";

import {
  formatRSSFeedDatetime,
  formatSourceLink,
} from "../utils/format";

const RSSFeed = ({ data }) => {
  const [pixel, setPixel] = useState(0);
  const [slideNumber, setSlideNumber] =
    useState(0);
  const listRef = useRef();
  console.log(slideNumber);
  const handleSlide = (direction) => {
    console.log("run");
    if (
      direction === "right" &&
      slideNumber < data.length - 3
    ) {
      listRef.current.style.transform = `translateX(-${
        pixel + 270
      }px)`;
      setPixel(pixel + 270);
      setSlideNumber(slideNumber + 1);
    }
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(-${
        pixel - 270
      }px)`;
      setPixel(pixel - 270);
      setSlideNumber(slideNumber - 1);
    }
  };
  return (
    <div className="mt-12 border bg-[#f7f7f7] overflow-hidden border-[#e5e5e5] px-4 pt-6 pb-12">
      <div className="flex items-center justify-between ">
        <span className="block underline decoration-primary underline-offset-[6px]">
          Other news
        </span>
        <div className="flex items-center space-x-1">
          <ChevronLeftIcon
            onClick={() => {
              handleSlide("left");
            }}
            width={18}
            height={18}
            color={
              slideNumber === 0
                ? "#d5d5d5"
                : "#c4c4c4"
            }
            className={`${
              slideNumber !== 0 &&
              "cursor-pointer"
            }`}
          />
          <ChevronRightIcon
            onClick={() => {
              handleSlide("right");
            }}
            width={18}
            color={
              slideNumber === data.length - 3
                ? "#d5d5d5"
                : "#c4c4c4"
            }
            className={`${
              slideNumber !== data.length - 3 &&
              "cursor-pointer"
            }`}
            height={18}
          />
        </div>
      </div>
      <div
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
      </div>
    </div>
  );
};

export default RSSFeed;
