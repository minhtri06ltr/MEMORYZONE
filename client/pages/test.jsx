import React from "react";
import { urlFor } from "../lib/client";
import { client } from "../lib/client";
import SanityMuxPlayer from "sanity-mux-player";

const test = ({ productList }) => {
  console.log(productList);
  return (
    <div>
      <span>test</span>
      <SanityMuxPlayer
        assetDocument={productList.video}
        autoload={false}
        autoplay={false}
        height={500}
        loop={true}
        muted={false}
        showControls={true}
        width={500}
      />
    </div>
  );
};

export default test;
export const getServerSideProps = async () => {
  try {
    const productList = await client.fetch(
      `*[_type=="videoBlogPost" ][0]{
        "video":video.asset->
      }`,
    );

    return {
      props: {
        productList,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        productList: null,
      },
    };
  }
};
