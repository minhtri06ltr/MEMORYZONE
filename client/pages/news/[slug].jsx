import {
  Layout,
  NotFound,
  Path,
  RelatedNews,
  RSSFeed,
} from "../../components";
import { ClockIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import {
  formatDateName,
  formatDateTime,
  formatDateTimeSchema,
  formatTagToSlug,
} from "../../utils/format";
import Link from "next/link";
import { getFeed } from "../../lib/rss";
import { NewComment } from "../../components";
import { client, urlFor } from "../../lib/client";
import { PortableText } from "@portabletext/react";
import { newDescriptionComponents } from "../../utils/portableTextComponent";
import { useState } from "react";
import { validateEmail } from "../../utils/validate";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "next-share";

const NewDetailsPage = ({
  newBySlug,
  rssFeed,
}) => {
  const [commentSuccess, setCommentSuccess] =
    useState(false);
  const [commentForm, setCommentForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });

  const commentFormHandle = (e) => {
    setCommentForm({
      ...commentForm,
      [e.target.name]: e.target.value,
    });
  };
  const commentHandle = async (e) => {
    e.preventDefault();
    if (
      commentForm.fullName === "" ||
      commentForm.comment === "" ||
      commentForm.email === "" ||
      commentForm.phoneNumber === ""
    ) {
      alert("Please fill all required fields");
      return;
    }
    if (!validateEmail(commentForm.email)) {
      alert("Invalid email");
      return;
    }
    await client
      .patch(newBySlug._id)
      .setIfMissing({ comments: [] })
      .append("comments", [
        {
          _type: "newComment",
          comment: commentForm.comment,
          fullName: commentForm.fullName,
          phoneNumber: commentForm.phoneNumber,
          email: commentForm.email,
          isApprove: false,
          createdTime: new Date(),
        },
      ])
      .commit({
        autoGenerateArrayKeys: true,
      })
      .then((res) => {
        setCommentForm({
          comment: "",
          fullName: "",
          comment: "",
          email: "",
        });
        setCommentSuccess(true);
      })
      .catch((error) => alert(error.message));
  };
  console.log(newBySlug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_CLIENT_URL}/news/${newBySlug.slug.current}`,
    },
    headline: newBySlug.title,
    name: newBySlug.title,
    url: urlFor(newBySlug.thumbnail.image).url(),
    thumbnailUrl: urlFor(
      newBySlug.thumbnail.image,
    ).url(),
    articleSection: "News",
    description: newBySlug.metaDescription.slice(
      0,
      30,
    ),
    articleBody: newBySlug.metaDescription,

    keywords:
      "mouse, Logitech Lift Vertical Ergonomic, technology",
    image: {
      "@type": "ImageObject",
      url: urlFor(
        newBySlug.thumbnail.image,
      ).url(),
      width: 1200,
      height: 628,
    },
    author: {
      "@type": "Person",
      name: newBySlug.author,
    },
    publisher: {
      "@type": "Organization",
      address: "Hokkaido",
      location: "Japan",
      url: process.env.NEXT_PUBLIC_CLIENT_URL,
      identifier: newBySlug.title,
      name: "Memoryzone - Professional in technology",
      logo: {
        "@type": "ImageObject",
        url: "https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/logo.png?1657789685905",
      },
    },
    datePublished: formatDateTimeSchema(
      newBySlug._createdAt,
    ),
    dateModified: formatDateTimeSchema(
      newBySlug._createdAt,
    ),
  };
  const structure1 = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id":
            process.env.NEXT_PUBLIC_CLIENT_URL,
          name: "Home page",
        },
      },

      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_CLIENT_URL}/news`,
          name: "News",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_CLIENT_URL}/news/${newBySlug.slug.current}`,
          name: newBySlug.title,
        },
      },
    ],
  };
  if (!newBySlug)
    return (
      <NotFound
        title="Oops! Look like we don't have this new in our shop"
        description="Please consider to find other new"
        layoutTitle="New not found | Memoryzone professional in technology"
        layoutDescription="Sorry look like we don't have this new in our shop please looking for other new"
      />
    );
  return (
    <Layout
      metaType="article"
      schema={schema}
      structures={[structure1]}
      title={`${newBySlug.title} | Memoryzone - Professional in technology`}
      image={newBySlug.thumbnail.image}
      description={newBySlug.metaDescription.slice(
        0,
        303,
      )}
      id={`/news/${newBySlug.slug.current}`}
      keywords="Memoryzone news, technology news, memoryzone product review"
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
          {
            title: newBySlug.title,
            pathName: `/${newBySlug.slug.current}`,
          },
        ]}
      />
      <div className="limitScreen my-10 flex flex-col xl:flex-row xl:space-x-7">
        <div className="w-full xl:w-[75%]">
          <h1 className="text-[#575454] text-3xl cursor-pointer hover:text-primary">
            {newBySlug.title}
          </h1>
          <div className="text-gray text-xs flex my-6 items-center">
            <ClockIcon
              width={15}
              height={15}
              className="text-gray mr-1 mb-0.5"
            />
            <span>
              {formatDateName(
                newBySlug._createdAt,
              )}
              ,{" "}
              {formatDateTime(
                newBySlug._createdAt,
              )}
            </span>
            <UserIcon
              width={15}
              height={15}
              className="text-gray ml-14  mr-1 mb-[3px]"
            />
            <span>
              Posted by {newBySlug.author}
            </span>
          </div>
          <article className="text-text text-base leading-6">
            <PortableText
              value={newBySlug.description}
              components={
                newDescriptionComponents
              }
            />
          </article>
          <div className="flex text-sm text-text items-center pt-8 pb-6 justify-between  border-b border-[#e5e5e5]">
            <span className="block w-1/2">
              <b>Tags: </b>
              {newBySlug.newTag &&
                newBySlug.newTag.map(
                  (item, index) => {
                    return (
                      <Link
                        href={`/product/${formatTagToSlug(
                          item,
                        )}`}
                        key={index}
                      >
                        <span className="hover:text-primary cursor-pointer">
                          {item}
                          {index <
                            newBySlug.newTag
                              .length -
                              1 && ", "}
                        </span>
                      </Link>
                    );
                  },
                )}
            </span>
            <div className="flex w-1/2 justify-end items-center space-x-2">
              <FacebookShareButton
                url={`
                ${process.env.NEXT_PUBLIC_CLIENT_URL}/news/${newBySlug.slug.current} `}
                quote={
                  "Look I just found this very interesting article on Memoryzone Shop website! You can take a glance. Memoryzone Website: `https://memoryzone.vercel.app`"
                }
                hashtag={
                  "#memoryzone #memoryzoneNews #memoryzoneArticle #memoryzoneReviews #memoryzoneShop #memoryzoneTechnology #memoryzoneProduct #memoryzoneWebsite #memoryzoneE-commerce"
                }
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={`
              ${process.env.NEXT_PUBLIC_CLIENT_URL}/news/${newBySlug.slug.current} `}
                title={
                  "Look I just found this very interesting article on Memoryzone Shop website! You can take a glance. Memoryzone Website: `https://memoryzone.vercel.app`"
                }
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LineShareButton
                url={`
              ${process.env.NEXT_PUBLIC_CLIENT_URL}/news/${newBySlug.slug.current} `}
                title={
                  "Look I just found this very interesting article on Memoryzone Shop website! You can take a glance. Memoryzone Website: `https://memoryzone.vercel.app`"
                }
              >
                <LineIcon size={32} round />
              </LineShareButton>
            </div>
          </div>
          <div className="mt-8 mb-6">
            <RSSFeed data={rssFeed.items} />
          </div>
          <div className="border-b mb-6 border-[#e5e5e5] ">
            <span className="block font-semibold text-lg text-[#323c3f] mb-4">
              Comment:
            </span>
            {newBySlug.comments.map(
              (item, index) => (
                <NewComment
                  key={index}
                  data={item}
                />
              ),
            )}
          </div>
          {commentSuccess && (
            <div className="bg-[#dff0d8] border border-[#d6e9c6] rounded-md px-6 py-3">
              <span className="text-sm text-[#3c763d]">
                You have successfully posted a
                review. We will post your review
                once it is moderated.
              </span>
            </div>
          )}
          <div>
            <span className="block font-semibold text-lg text-[#323c3f] my-10">
              Write comment:
            </span>
            <div>
              <form
                onSubmit={commentHandle}
                className="space-y-6"
              >
                <div className="flex flex-col w-full space-y-6 lg:space-y-0 lg:flex-row items-center lg:space-x-8 ">
                  <div className="flex-1 w-full ">
                    <input
                      required
                      className="px-4 text-text py-2 w-full outline-none rounded-sm border-[#e5e5e5] border text-sm"
                      type="text"
                      placeholder="Full Name"
                      name="fullName"
                      onChange={commentFormHandle}
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <input
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      className="px-4 text-text py-2 w-full outline-none rounded-sm border-[#e5e5e5] border text-sm"
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={commentFormHandle}
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <input
                      required
                      className="text-text px-4 py-2 w-full outline-none rounded-sm border-[#e5e5e5] border text-sm"
                      type="tel"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      pattern="(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b"
                      onChange={commentFormHandle}
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    required
                    name="comment"
                    onChange={commentFormHandle}
                    className="px-4 py-2 text-text h-[148px] outline-none w-full rounded-sm border-[#e5e5e5] border text-sm"
                    placeholder="Write comment"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="rounded-sm  hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6"
                >
                  Submit comment
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden xl:block">
          {" "}
          <RelatedNews />
        </div>
      </div>
    </Layout>
  );
};

export default NewDetailsPage;
export const getStaticPaths = async () => {
  const newSlugs = await client.fetch(
    `*[_type=="new"]{
      slug{
        current
      }
  }`,
  );

  return {
    paths:
      newSlugs?.map((newItem) => ({
        params: {
          slug: newItem.slug.current,
        },
      })) || [],
    fallback: "blocking",
  };
};
export const getStaticProps = async ({
  params: { slug },
}) => {
  //get product data by slug param
  try {
    const newBySlug = await client.fetch(
      `*[_type=="new" && slug.current==$slug][0]{
        _id, description[]{
    ...,
    _type=='muxVideo'=>{
    ...,"video": video.asset->
  }
  },title,slug,newTag,thumbnail,"metaDescription": pt::text(description[_type=='block'][0...2]),author,_createdAt,"comments":coalesce(comments[isApprove==true]{email,fullName,createdTime,comment},[])
      }
      `,
      { slug },
    );
    const rssFeed = await getFeed();

    return {
      props: {
        newBySlug,
        rssFeed,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        newBySlug: null,
      },
    };
  }
};
