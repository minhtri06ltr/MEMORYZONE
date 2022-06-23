import { Layout, Path } from "../../components";
import { ClockIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import {
  formatDateName,
  formatDateTime,
} from "../../utils/format";
import Image from "next/image";
import { NewComment } from "../../components";
import { client } from "../../lib/client";
import { PortableText } from "@portabletext/react";
import { newDescriptionComponents } from "../../utils/portableTextComponent";
import { useState } from "react";

const NewsDetail = ({ newBySlug }) => {
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
  const commentHandle = (e) => {
    e.preventDefault();
  };
  return (
    <Layout
      title="Memoryzone | News"
      description="Catch up all news technology with Memoryzone"
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
            title: "Test",
            pathName: "/test",
          },
        ]}
      />
      <div className="px-10 my-12 flex space-x-7">
        <div className="w-[75%]">
          <span className="text-[#575454] text-3xl cursor-pointer hover:text-primary">
            {newBySlug.title}
          </span>
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
          <div className="text-text text-sm">
            <PortableText
              value={newBySlug.description}
              components={
                newDescriptionComponents
              }
            />
          </div>
          <div className="mt-8 mb-6">
            share section
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
                <div className="flex items-center space-x-8 ">
                  <div className="flex-1">
                    <input
                      className="px-4 text-text py-2 w-full outline-none rounded-sm border-[#e5e5e5] border text-sm"
                      type="text"
                      placeholder="Full Name"
                      name="fullName"
                      onChange={commentFormHandle}
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      className="px-4 text-text py-2 w-full outline-none rounded-sm border-[#e5e5e5] border text-sm"
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={commentFormHandle}
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      className="text-text px-4 py-2 w-full outline-none rounded-sm border-[#e5e5e5] border text-sm"
                      type="tel"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      onChange={commentFormHandle}
                    />
                  </div>
                </div>
                <div>
                  <textarea
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
        <div className="flex-1">
          <span className="text-base font-semibold block text-text">
            RELATED NEWS
          </span>
          <div className="space-y-6 divide-y divide-[#e5e5e5]">
            <div className="pt-5 flex items-start">
              <Image
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

export default NewsDetail;
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
    fallback: true,
  };
};
export const getStaticProps = async ({
  params: { slug },
}) => {
  //get product data by slug param
  try {
    const newBySlug = await client.fetch(
      `*[_type=="new" && slug.current==$slug][0]{
        description,title,author,_createdAt,"comments":coalesce(comments[isApprove==true]{email,fullName,createdTime,comment},[])
      }`,
      { slug },
    );

    return {
      props: {
        newBySlug,
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
