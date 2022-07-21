import React from "react";

const TestPage = ({ data }) => {
  console.log(data);
  return <div>TestPage</div>;
};

export default TestPage;

export const getStaticProps = async () => {
  try {
    const options = {
      method: "GET",

      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key":
          "f47dd1e4cdmshe8fe0655497127ap1eecfdjsn4c1fe5fb5a0b",
        "X-RapidAPI-Host":
          "google-search3.p.rapidapi.com",
      },
    };
    const res = await fetch(
      `https://google-search3.p.rapidapi.com/api/v1/search/q=laptop+lenovo+yoga+slim`,
      options,
    );
    const data = await res.json();

    return {
      props: { data },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: null,
      },
    };
  }
};
