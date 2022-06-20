import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { urlFor } from "../lib/client";
import { useState } from "react";
import getYoutubeId from "get-youtube-id";

const components = {
  types: {
    seoImage: (props) => {
      const { width, height } =
        getImageDimensions(props.value.image);
      return (
        <div className="my-6">
          <Image
            src={urlFor(props.value.image).url()}
            layout="responsive"
            width={width}
            height={height}
            priority={true}
          />
        </div>
      );
    },
    productDetail: (props) => {
      return (
        <div>
          <div
            className={`flex border my-4 border-[#e5e5e5] ${
              props.value.reverse &&
              "flex-row-reverse"
            }`}
          >
            <div
              className={`w-[30%]  p-4  ${
                props.value.reverse
                  ? "border-l"
                  : "border-r"
              }  border-[#e5e5e5]`}
            >
              <div className="relative w-full h-full">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src={urlFor(
                    props.value.image,
                  ).url()}
                />
              </div>
            </div>
            <div className="w-[70%] p-4">
              <span className="text-2xl font-semibold mb-4 block">
                {props.value.title}
              </span>

              <PortableText
                value={props.value.description}
              />
            </div>
          </div>
        </div>
      );
    },

    youtube: (props) => {
      const id = getYoutubeId(
        props.value.youtubeURL,
      );
      const url = `https://www.youtube.com/embed/${id}`;
      if (!id)
        return (
          <span>Error with Youtube URL</span>
        );
      return (
        <iframe
          className="w-full aspect-square"
          height="616.5"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    },
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  marks: {
    centerText: ({ children }) => {
      return (
        <span className="block text-center">
          {children}
        </span>
      );
    },
  },
};
const ProductDescription = ({ content }) => {
  const [expand, setExpand] = useState(false);
  const [tab, setTab] = useState("description");

  return (
    <div className="my-14">
      <div>
        <div className="space-x-1">
          <button
            onClick={() => {
              setTab("description");
            }}
            className={` rounded-sm px-10 py-3 text-md font-semibold ${
              tab === "description"
                ? "bg-primary text-white"
                : "bg-[#f2f2f2] text-text"
            } `}
          >
            PRODUCT DESCRIPTION
          </button>
          <button
            onClick={() => {
              setTab("specification");
            }}
            className={` rounded-sm px-10 py-3 text-md font-semibold ${
              tab === "specification"
                ? "bg-primary text-white"
                : "bg-[#f2f2f2] text-text"
            }`}
          >
            SPECIFICATIONS
          </button>
        </div>
        {tab === "description" && (
          <div
            className={` ${
              expand
                ? "min-h-[440px]"
                : "max-h-[440px]"
            } flex flex-col    w-full border px-8 pt-8 pb-[80px] border-[#e5e5e5]`}
          >
            <div className="text-[#000000] text-sm overflow-hidden h-inherit mb-10 ">
              <PortableText
                value={content}
                components={components}
              />
            </div>
            <div
              className={`relative ${
                !expand && "blurBackground"
              } w-full  text-center`}
            >
              <button
                onClick={() => setExpand(!expand)}
                className=" border border-primary  bg-white text-primary text-sm px-6 py-1.5 rounded-sm"
              >
                {expand ? "Collapse" : "See all"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
