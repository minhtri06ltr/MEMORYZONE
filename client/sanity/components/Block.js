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
export const checkBlock = ({ children }) => {
  return (
    <span>
      <CheckCircleIcon
        color="#008744"
        height={22}
        style={{
          marginRight: "0.5rem",
        }}
        width={22}
      />
      {children}
    </span>
  );
};
