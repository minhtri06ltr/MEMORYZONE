import getYoutubeId from "get-youtube-id";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { urlFor } from "../lib/client";
import { PortableText } from "@portabletext/react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import Link from "next/link";

const centerBlock = ({ children }) => {
  return (
    <span className="text-center block ">
      {children}
    </span>
  );
};
const linkBlock = (props) => {
  const rel = !props.value.href.startsWith("/")
    ? "noreferrer noopener"
    : undefined;
  return props.value.blank ? (
    <a
      style={{ color: props.value.linkColor }}
      href={props.value.href}
      target="_blank"
      rel={rel}
    >
      {props.children}
    </a>
  ) : (
    <a
      href={props.value.href}
      rel={rel}
      style={{ color: props.value.linkColor }}
    >
      {props.children}
    </a>
  );
};
const colorBlock = (props) => {
  return (
    <span
      style={{
        color: props.value.hex,
      }}
    >
      {props.children}
    </span>
  );
};
const seoImageBlock = (props) => {
  const { width, height } = getImageDimensions(
    props.value.image,
  );
  if (props.value.url) {
    const rel = !props.value.url?.startsWith("/")
      ? "noreferrer noopener"
      : undefined;
    const appPage = props.value.url.startsWith(
      process.env.NEXT_PUBLIC_CLIENT_URL,
    );
    console.log(
      props.value.blank,
      props.value.url,
      appPage,
    );
    if (appPage && !props.value.blank) {
      return (
        <div className="my-6 mx-auto w-full">
          <Link
            href={
              props.value.url.split(
                process.env
                  .NEXT_PUBLIC_CLIENT_URL,
              )[1]
            }
          >
            <a>
              <Image
                src={urlFor(
                  props.value.image,
                ).url()}
                layout="responsive"
                width={width}
                height={height}
                priority={true}
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
      );
    } else {
      return props.value.blank ? (
        <div className="my-6 mx-auto w-full">
          <a
            href={props.value.url}
            target="_blank"
            rel={rel}
          >
            <Image
              src={urlFor(
                props.value.image,
              ).url()}
              layout="responsive"
              width={width}
              height={height}
              priority={true}
              objectFit="contain"
            />
          </a>
        </div>
      ) : (
        <div className="my-6 mx-auto w-full">
          <a href={props.value.url} rel={rel}>
            <Image
              src={urlFor(
                props.value.image,
              ).url()}
              layout="responsive"
              width={width}
              height={height}
              priority={true}
              objectFit="contain"
            />
          </a>
        </div>
      );
    }
  }
  return (
    <div className="my-6 mx-auto w-full">
      <Image
        src={urlFor(props.value.image).url()}
        layout="responsive"
        width={width}
        height={height}
        priority={true}
        objectFit="contain"
      />
    </div>
  );
};
const productDetailBlock = (props) => {
  return (
    <div>
      <div
        className={`flex border my-6 border-[#e5e5e5] ${
          props.value.reverse &&
          "flex-row-reverse"
        }`}
      >
        <div
          style={{
            width: "30%",
            // padding: "1rem",
          }}
          className={`w-[30%]  px-4 py-4 ${
            props.value.reverse
              ? "border-l"
              : "border-r"
          }  border-[#e5e5e5]`}
        >
          <div className="relative w-full h-full">
            <Image
              objectFit="contain"
              layout="fill"
              priority={true}
              src={urlFor(
                props.value.image,
              ).url()}
            />
          </div>
        </div>
        <div
          style={{
            width: "70%",
            // padding: "1rem",
          }}
          className="w-[70%] px-4 py-4"
        >
          {props.value.title && (
            <span className="text-2xl font-semibold mb-4 block">
              {props.value.title}
            </span>
          )}

          <PortableText
            value={props.value.description}
          />
        </div>
      </div>
    </div>
  );
};
const titleBlock = (props) => {
  return (
    <div className="flex items-center justify-center border py-4 my-6 border-[#e5e5e5]">
      <PortableText value={props.value.title} />
    </div>
  );
};
const tableBlock = (props) => {
  return (
    <div className="w-full flex justify-center items-center my-6">
      <table className="border border-[#e5e5e5]">
        <tbody>
          {props.value.rows.map(
            (row, rowIndex) => (
              <tr key={rowIndex}>
                {row.cells.map(
                  (cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      // style={{ padding: "2rem" }}
                      className="py-4 px-10 text-center  border border-[#e5e5e5]"
                    >
                      <span className="text-[#1c1c1c] text-sm">
                        {cell}
                      </span>
                    </td>
                  ),
                )}
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};
const youtubeBlock = (props, width, height) => {
  const id = getYoutubeId(props.value.youtubeURL);
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id)
    return <span>Error with Youtube URL</span>;
  return (
    <div className="flex justify-center items-center my-6">
      <iframe
        height={height}
        width={width}
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
const checkMarkItemBlock = ({ children }) => {
  return (
    <span className="text-gray text-sm flex items-center my-2">
      <CheckCircleIcon
        className="mr-2 text-primary"
        height={20}
        width={20}
      />
      {children}
    </span>
  );
};
export const productDescriptionComponents = {
  types: {
    seoImage: seoImageBlock,
    productDetail: productDetailBlock,
    youtube: (props) =>
      youtubeBlock(props, "100%", 616.5),
    table: tableBlock,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  marks: {
    centerText: centerBlock,
    link: linkBlock,
    color: colorBlock,
  },
  list: {
    checkMark: ({ children }) => (
      <ul className="space-y-1">{children}</ul>
    ),
  },
  listItem: {
    checkMark: checkMarkItemBlock,
  },
};
export const newDescriptionComponents = {
  types: {
    seoImage: seoImageBlock,
    blockTitle: titleBlock,
    youtube: (props) =>
      youtubeBlock(props, "100%", 666),
    productDetail: productDetailBlock,
    table: tableBlock,
  },
  marks: {
    centerText: centerBlock,
    link: linkBlock,
    color: colorBlock,
  },
  list: {
    checkMark: ({ children }) => (
      <ul className="space-y-1">{children}</ul>
    ),
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: (props) => {
      if (
        props.value?.children[0]?.marks[0] ===
        "centerText"
      ) {
        return (
          <div className="flex items-center justify-center">
            <div
              className="rounded-full mr-3 bg-text"
              style={{
                width: "4px",
                height: "4px",
                background: "#444444",
              }}
            ></div>
            <li className="flex items-center">
              {props.children}
            </li>
          </div>
        );
      }
      return <li>{props.children}</li>;
    },
    checkMark: checkMarkItemBlock,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl">{children}</h1>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg">{children}</h4>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          fontSize: "28px",
          lineHeight: "43.5px",
        }}
      >
        {children}
      </h2>
    ),
  },
};
export const newSummaryComponents = {
  types: {
    productDetail: (props) => (
      <span>{props.children}</span>
    ),
    seoImage: () => <></>,
    youtube: () => <></>,
    table: (props) => (
      <span>{props.children}</span>
    ),
    blockTitle: (props) => (
      <span>{props.children}</span>
    ),
  },
  marks: {
    strong: (props) => <>{props.children}</>,
    color: (props) => <>{props.children}</>,
  },
  list: {
    checkMark: (props) => <>{props.children}</>,
  },
};
