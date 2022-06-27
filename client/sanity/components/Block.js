import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

export const centerBlock = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      {props.children}
    </div>
  );
};
export const leftBlock = (props) => {
  return (
    <div style={{ textAlign: "left" }}>
      {props.children}
    </div>
  );
};
export const rightBlock = (props) => {
  return (
    <div style={{ textAlign: "right" }}>
      {props.children}
    </div>
  );
};
export const colorBlock = (props) => {
  return (
    <span
      style={{
        textDecoration: "none",
        color: props.hex,
      }}
    >
      {props.children}
    </span>
  );
};
export const checkBlock = (props) => {
  return (
    <>
      <CheckCircleIcon
        color="#008744"
        height={22}
        style={{
          marginRight: "0.5rem",
        }}
        width={22}
      />
      {props.children}
    </>
  );
};

export const linkBlock = (props) => {
  return (
    <span style={{ color: props.linkColor }}>
      {props.children}
    </span>
  );
};
// export const previewImgBlock = (data) => {
//   const splitArray = data.asset._ref.split("-");

//   const imageType =
//     splitArray[splitArray.length - 1];

//   let imageId = splitArray[1];
//   for (
//     let i = 2;
//     i < splitArray.length - 1;
//     i++
//   ) {
//     imageId += `-${splitArray[i]}`;
//   }
//   return (
//     <img
//       src={`https://cdn.sanity.io/images/trbtzvh4/production/${imageId}.${imageType}`}
//     />
//   );
// };
