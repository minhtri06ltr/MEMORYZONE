import { Layout, Path } from "../components";
import Image from "next/image";
import { ClockIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import { client, urlFor } from "../lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import {
  formatDateName,
  formatDateTime,
} from "../utils/format";
import { newSummaryComponents } from "../utils/portableTextComponent";

const NewsPage = ({ news }) => {
  return (
    <Layout
      title="Memoryzone | News"
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
          <span className="block text-[#323c3f] text-3xl  font-semibold">
            News
          </span>
          <div className="divide-y space-y-8 divide-[#e5e5e5]">
            {news.map((item, index) => (
              <div
                key={index}
                className="pt-8 flex space-x-8"
              >
                <Link
                  href={`/news/${item.slug.current}`}
                >
                  <div className="w-[40%] cursor-pointer h-[345px] relative">
                    <Image
                      alt={`Memoryzone ${item.title} new thumbnail`}
                      objectFit="contain"
                      layout="fill"
                      quality={100}
                      src={urlFor(
                        item.thumbnail.image,
                      ).url()}
                    />
                  </div>
                </Link>
                <div className="flex-1">
                  <Link
                    href={`/news/${item.slug.current}`}
                  >
                    <span className="text-2xl font-semibold cursor-pointer hover:text-primary text-[#323c3f] block">
                      {item.title}
                    </span>
                  </Link>
                  <div className="text-gray text-xs flex py-3 items-center">
                    <ClockIcon
                      width={15}
                      height={15}
                      className="text-gray mr-1 mb-0.5"
                    />
                    <span>
                      {formatDateName(
                        news[0]._createdAt,
                      )}
                      ,{" "}
                      {formatDateTime(
                        item._createdAt,
                      )}
                    </span>
                    <UserIcon
                      width={15}
                      height={15}
                      className="text-gray ml-14  mr-1 mb-[3px]"
                    />
                    <span>
                      Posted by {item.author}
                    </span>
                  </div>
                  <div className="text-sm limit-4-line text-[#707070]">
                    <PortableText
                      value={item.description}
                      components={
                        newSummaryComponents
                      }
                    />
                  </div>
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
        </div>
        <div className="flex-1">
          <span className="text-base font-semibold block text-text">
            RELATED NEWS
          </span>
          <div className="space-y-6 divide-y divide-[#e5e5e5]">
            <div className="pt-5 flex items-start">
              <Image
                alt="Memoryzone related news thumbnail"
                src="https://bizweb.sapocdn.net/thumb/small/100/329/122/articles/1200x1200.jpg?v=1649059004967"
                quality={100}
                height={90}
                width={90}
              />
              <span className="ml-5 text-sm text-[#707070] cursor-pointer hover:text-primary">
                April Boom - Buy Victus Get Omen
              </span>
            </div>
            <div className="pt-5 flex items-start">
              <Image
                alt="Memoryzone related news thumbnail"
                src="https://bizweb.sapocdn.net/thumb/small/100/329/122/articles/1200x1200.jpg?v=1649059004967"
                quality={100}
                height={90}
                width={90}
              />
              <span className="ml-5 text-sm text-[#707070] cursor-pointer hover:text-primary">
                April Boom - Buy Victus Get Omen
              </span>
            </div>
            <div className="pt-5 flex items-start">
              <Image
                alt="Memoryzone related news thumbnail"
                src="https://bizweb.sapocdn.net/thumb/small/100/329/122/articles/1200x1200.jpg?v=1649059004967"
                quality={100}
                height={90}
                width={90}
              />
              <span className="ml-5 text-sm text-[#707070] cursor-pointer hover:text-primary">
                April Boom - Buy Victus Get Omen
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
export const getStaticProps = async () => {
  try {
    const news = await client.fetch(
      ` *[_type=="new"]`,
    );

    return {
      props: { news },
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
