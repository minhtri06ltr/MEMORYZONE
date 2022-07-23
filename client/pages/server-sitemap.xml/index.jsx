import { getServerSideSitemap } from "next-sitemap";
import { client } from "../../lib/client";

export const getServerSideProps = async (context) => {
  const category = await client.fetch(`*[_type=='category']{categoryName}`);

  const categoryArray = category.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_CLIENT_URL}/category/${item.categoryName}`,
    lastmod: new Date().toISOString(),
  }));
  const brand = await client.fetch(`*[_type=='brand']{productBrand}`);

  const brandArray = brand.map((item) => ({
    loc: `${process.env.NEXT_PUBLIC_CLIENT_URL}/brand/${item.productBrand}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = categoryArray.concat(brandArray);

  return getServerSideSitemap(context, fields);
};

export default function Site() {}
