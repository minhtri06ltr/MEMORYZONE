import getYoutubeId from "get-youtube-id";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { urlFor } from "../lib/client";
import { PortableText } from "@portabletext/react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

export const components = {
  types: {
    seoImage: (props) => {
      const { width, height } =
        getImageDimensions(props.value.image);
      return (
        <div className="my-6 mx-auto">
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
              // style={{
              //   width: "30%",
              //   padding: "1rem",
              // }}
              className={`w-[30%]  p-4 ${
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
            <div
              // style={{
              //   width: "70%",
              //   padding: "1rem",
              // }}
              className="w-[70%] p-4"
            >
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

    checkMark: ({ children }) => {
      return (
        <span className="text-gray text-sm flex items-center">
          <CheckCircleIcon
            className="mr-2 text-primary"
            height={20}
            width={20}
          />
          {children}
        </span>
      );
    },
    link: (props) => {
      const rel = !props.value.href.startsWith(
        "/",
      )
        ? "noreferrer noopener"
        : undefined;
      return props.value.blank ? (
        <a
          href={props.value.href}
          target="_blank"
          rel={rel}
        >
          {props.children}
        </a>
      ) : (
        <a href={props.value.href} rel={rel}>
          {props.children}
        </a>
      );
    },
    color: (props) => {
      return (
        <span
          style={{
            color: props.value.hex,
          }}
        >
          {props.children}
        </span>
      );
    },
  },
};
