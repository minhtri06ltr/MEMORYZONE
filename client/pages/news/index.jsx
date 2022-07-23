import { Layout, Path, RelatedNews, RSSFeed } from "../../components";
import Image from "next/image";
import { ClockIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import { client, urlFor } from "../../lib/client";
import Link from "next/link";
import { formatDateName, formatDateTime } from "../../utils/format";
import { getImgDimension } from "../../utils/getDimensions";
import { getFeed } from "../../lib/rss";

const NewsPage = ({ news, rssFeed }) => {
  console.log(rssFeed);
  return (
    <Layout
      title="News | Memoryzone professional in technology"
      description="Memoryzone news page - where you can read all the newest information about technology, product, computer tips and trick, software and trending content "
    >
      <Path
        path={[
          {
            title: "Home",
            pathName: "/",
          },
          {
            title: "News",
            pathName: "/news",
          },
        ]}
      />
      <div className="px-10 my-12 flex space-x-7">
        <div className="w-[75%]">
          <h1 className="block text-[#323c3f] text-3xl  font-semibold">News</h1>

          <div className="divide-y space-y-8 divide-[#e5e5e5]">
            {news.map((item, index) => (
              <div key={index} className="pt-8 flex space-x-8">
                <Link href={`/news/${item.slug.current}`}>
                  <div
                    className={`w-[40%] cursor-pointer relative`}
                    style={{
                      height: getImgDimension(item.thumbnail.image).height,
                      maxHeight: "336px",
                    }}
                  >
                    <Image
                      alt={`Memoryzone ${item.title} new thumbnail`}
                      objectFit="cover"
                      layout="fill"
                      quality={100}
                      src={urlFor(item.thumbnail.image).url()}
                    />
                  </div>
                </Link>
                <div className="flex-1">
                  <Link href={`/news/${item.slug.current}`}>
                    <h2 className="text-2xl font-semibold cursor-pointer hover:text-primary text-[#323c3f] block">
                      {item.title}
                    </h2>
                  </Link>
                  <div className="text-gray text-xs flex py-3 items-center">
                    <ClockIcon
                      width={15}
                      height={15}
                      className="text-gray mr-1 mb-0.5"
                    />
                    <span>
                      {formatDateName(news[0]._createdAt)},{" "}
                      {formatDateTime(item._createdAt)}
                    </span>
                    <UserIcon
                      width={15}
                      height={15}
                      className="text-gray ml-14  mr-1 mb-[3px]"
                    />
                    <span>Posted by {item.author}</span>
                  </div>
                  <p className="text-sm limit-4-line  text-[#707070]">
                    {item.metaDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-x-1.5 mt-16 flex items-center justify-start mb-6 text-sm text-text">
            <button className="rounded-sm h-[40px] w-[40px] ease-linear transition bg-[#f2f2f2] hover:bg-primary  hover:text-white">
              1
            </button>
            <button className="rounded-sm h-[40px] w-[40px] ease-linear transition bg-[#f2f2f2] hover:bg-primary  hover:text-white">
              23
            </button>
            <button className="rounded-sm h-[40px] w-[40px] ease-linear transition bg-[#f2f2f2] hover:bg-primary  hover:text-white">
              ...
            </button>
            <button className="rounded-sm px-5 h-[40px] min-w-[40px] ease-linear transition bg-[#f2f2f2] hover:bg-primary  hover:text-white">
              Next
            </button>
          </div>
          <RSSFeed data={rssFeed.items} />
        </div>
        <RelatedNews />
      </div>
    </Layout>
  );
};

export default NewsPage;
export const getStaticProps = async () => {
  try {
    const news = await client.fetch(
      ` *[_type=='new' ]{_createdAt,author,title,thumbnail,slug,
        "metaDescription": pt::text(description[_type=='block'][0...3])
      }`
    );
    const rssFeed = await getFeed();
    return {
      props: { news, rssFeed },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        news: null,
      },
    };
  }
};
