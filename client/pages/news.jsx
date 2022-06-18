import { Layout, Path } from "../components";
import Image from "next/image";
import { ClockIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";

const news = () => {
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
     <div className="px-10">
      <div className="my-12 flex space-x-7">
        <div className="w-[75%]">
          <span className="block text-[#323c3f] text-3xl  font-semibold">
            News
          </span>
          <div className="divide-y space-y-8 divide-[#e5e5e5]">
            <div className="pt-8 flex space-x-8">
              <div className="w-[40%] h-[345px] relative">
                <Image
                  alt=""
                  layout="fill"
                  quality={100}
                  src="https://bizweb.sapocdn.net/thumb/large/100/329/122/articles/1200x1200.jpg?v=1649059004967"
                />
              </div>
              <div className="flex-1">
                <span className="text-2xl font-semibold cursor-pointer hover:text-primary text-[#323c3f] block">
                  April Boom - Buy Victus Get Omen
                </span>
                <div className="text-gray text-xs flex py-3 items-center">
                  <ClockIcon
                    width={15}
                    height={15}
                    className="text-gray mr-1 mb-0.5"
                  />
                  <span>Monday, 04/4/2022</span>
                  <UserIcon
                    width={15}
                    height={15}
                    className="text-gray ml-14  mr-1 mb-[3px]"
                  />
                  <span>Posted by Hoan Vu</span>
                </div>
                <p className="text-sm text-[#707070]">
                  In April, MemoryZone organizes a special promotion, from April
                  4, 2022 to April 17, 2022, when there is an invoice to buy HP
                  Victus 16 Laptop at MemoryZone, customers will have the
                  opportunity to win an HP Omen Laptop right away. worth VND
                  50,000,000.Chapter..
                </p>
              </div>
            </div>
            <div className="pt-8 flex space-x-8">
              <div className="w-[40%] h-[345px] relative">
                <Image
                  alt=""
                  layout="fill"
                  quality={100}
                  src="https://bizweb.sapocdn.net/thumb/large/100/329/122/articles/1200x1200.jpg?v=1649059004967"
                />
              </div>
              <div className="flex-1">
                <span className="text-2xl font-semibold text-[#323c3f] block">
                  April Boom - Buy Victus Get Omen
                </span>
                <div className="text-gray text-xs flex py-3 items-center">
                  <ClockIcon
                    width={15}
                    height={15}
                    className="text-gray mr-1 mb-0.5"
                  />
                  <span>Monday, 04/4/2022</span>
                  <UserIcon
                    width={15}
                    height={15}
                    className="text-gray ml-14  mr-1 mb-[3px]"
                  />
                  <span>Posted by Hoan Vu</span>
                </div>
                <p className="text-sm text-[#707070]">
                  In April, MemoryZone organizes a special promotion, from April
                  4, 2022 to April 17, 2022, when there is an invoice to buy HP
                  Victus 16 Laptop at MemoryZone, customers will have the
                  opportunity to win an HP Omen Laptop right away. worth VND
                  50,000,000.Chapter..
                </p>
              </div>
            </div>
            <div className="pt-8 flex space-x-8">
              <div className="w-[40%] h-[345px] relative">
                <Image
                  alt=""
                  layout="fill"
                  quality={100}
                  src="https://bizweb.sapocdn.net/thumb/large/100/329/122/articles/1200x1200.jpg?v=1649059004967"
                />
              </div>
              <div className="flex-1">
                <span className="text-2xl font-semibold text-[#323c3f] block">
                  April Boom - Buy Victus Get Omen
                </span>
                <div className="text-gray text-xs flex py-3 items-center">
                  <ClockIcon
                    width={15}
                    height={15}
                    className="text-gray mr-1 mb-0.5"
                  />
                  <span>Monday, 04/4/2022</span>
                  <UserIcon
                    width={15}
                    height={15}
                    className="text-gray ml-14  mr-1 mb-[3px]"
                  />
                  <span>Posted by Hoan Vu</span>
                </div>
                <p className="text-sm text-[#707070]">
                  In April, MemoryZone organizes a special promotion, from April
                  4, 2022 to April 17, 2022, when there is an invoice to buy HP
                  Victus 16 Laptop at MemoryZone, customers will have the
                  opportunity to win an HP Omen Laptop right away. worth VND
                  50,000,000.Chapter..
                </p>
              </div>
            </div>
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
    </div>
    </Layout>
  );
};

export default news;
