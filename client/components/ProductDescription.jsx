import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { urlFor } from "../lib/client";
import { useState } from "react";

const components = {
  types: {
    seoImage: (props) => {
      console.log(props);
      const { width, height } =
        getImageDimensions(props.value.image);
      return (
        <Image
          src={urlFor(props.value.image).url()}
          width={width}
          height={height}
        />
      );
    },
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

const ProductDescription = ({ content }) => {
  const [expand, setExpand] = useState(false);
  const [tab, setTab] = useState("description");
  console.log(expand);
  return (
    <div className="my-14">
      <PortableText
        value={content}
        components={components}
      />
      {/* <div>
        <div className="space-x-1">
          <button
            onClick={() => {
              setTab("description");
            }}
            className={` rounded-sm px-10 py-3 text-md font-semibold ${
              tab === "description"
                ? "bg-primary text-white"
                : "bg-[#f2f2f2] text-text"
            } `}
          >
            PRODUCT DESCRIPTION
          </button>
          <button
            onClick={() => {
              setTab("specification");
            }}
            className={` rounded-sm px-10 py-3 text-md font-semibold ${
              tab === "specification"
                ? "bg-primary text-white"
                : "bg-[#f2f2f2] text-text"
            }`}
          >
            SPECIFICATIONS
          </button>
        </div>
        {tab === "description" && (
          <div
            className={` ${
              expand
                ? "min-h-[440px]"
                : "max-h-[440px]"
            } flex flex-col   w-full border px-8 pt-8 pb-[80px] border-[#e5e5e5]`}
          >
            <div className="text-[#000000] text-sm overflow-hidden h-inherit mb-10 ">
              <div>
                <p>
                  {" "}
                  Laptop Gaming MSI Bravo 15
                  B5DD-276VN trang bị vi xử lí
                  tiên tiến AMD Ryzen 5000
                  H-Series và card đồ họa Radeon
                  RX 5500M giúp chiếc laptop sở
                  hữu được sức mạnh sánh được với
                  máy desktop, để bạn có những
                  trải nghiệm chơi game và đa
                  phương tiện tuyệt vời hơn.{" "}
                </p>
                <div className="flex border my-4 border-[#e5e5e5]">
                  <div className="w-[30%]  p-4  border-r  border-[#e5e5e5]">
                    <div className="relative w-full h-full">
                      <Image
                        objectFit="contain"
                        layout="fill"
                        src="https://bizweb.sapocdn.net/100/329/122/files/screenshot-1629951842.jpg?v=1629951905613"
                      />
                    </div>
                  </div>
                  <div className="w-[70%] p-4">
                    <span className="text-2xl font-semibold mb-4 block">
                      Đắm chìm với âm thanh vòm
                      NAHIMIC 3
                    </span>
                    <p className="mb-4">
                      NAHIMIC 3 là hệ thống cải
                      tiến của âm thanh vòm 7.1
                      mang đến trải nghiệm và hiệu
                      suất âm thanh vượt trội. Từ
                      chơi game đến các cuộc gọi
                      hội nghị, MSI Bravo 15 mang
                      đến hiệu ứng vòm 3D thực sự
                      có thể được điều chỉnh dễ
                      dàng bằng phần mềm được cung
                      cấp để phù hợp với mọi môi
                      trường và để có trải nghiệm
                      âm thanh hoàn hảo.
                    </p>
                  </div>
                </div>
                <div className="flex border flex-row-reverse my-4 border-[#e5e5e5]">
                  <div className="w-[30%]  p-4  border-r  border-[#e5e5e5]">
                    <div className="relative w-full h-full">
                      <Image
                        layout="fill"
                        objectFit="contain"
                        src="https://bizweb.sapocdn.net/100/329/122/files/hires-bg.png?v=1629951370891"
                      />
                    </div>
                  </div>
                  <div className="w-[70%] p-4">
                    <span className="text-2xl font-semibold mb-4 block">
                      Hi-Res Audio
                    </span>
                    <p className="mb-4">
                      Chìm đắm trong những bản
                      nhạc lossless và tận hưởng
                      âm thanh cao cấp với
                      Hi-Resolution Audio. MSI
                      Bravo 15 cho trải nghiệm và
                      lắng nghe âm thanh đúng
                      chất.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`relative ${
                !expand && "blurBackground"
              } w-full  text-center`}
            >
              <button
                onClick={() => setExpand(!expand)}
                className=" border border-primary -translate-x-1/2 bg-white text-primary text-sm px-6 py-1.5 rounded-sm"
              >
                {expand ? "Collapse" : "See all"}
              </button>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default ProductDescription;
