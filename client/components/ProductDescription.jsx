import { PortableText } from "@portabletext/react";
import { components } from "../utils/portableTextComponent";
import { useState } from "react";

const ProductDescription = ({
  description,
  specificationTable,
}) => {
  const [expand, setExpand] = useState(false);
  const [tab, setTab] = useState("description");
  console.log(specificationTable);
  return (
    <div className="my-14">
      <div>
        <div className="space-x-1">
          <button
            onClick={() => {
              setTab("description");
            }}
            className={` rounded-sm outline-none px-10 py-3 text-md font-semibold ${
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
            className={` rounded-sm px-10 outline-none py-3 text-md font-semibold ${
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
            } flex flex-col    w-full border px-8 pt-8 pb-[80px] border-[#e5e5e5]`}
          >
            <div className="text-[#000000] text-sm overflow-hidden h-inherit mb-10 ">
              <PortableText
                value={description}
                components={components}
              />
            </div>
            <div
              className={`relative ${
                !expand && "blurBackground"
              } w-full  text-center`}
            >
              <button
                onClick={() => setExpand(!expand)}
                className=" border border-primary  bg-white text-primary text-sm px-6 py-1.5 rounded-sm"
              >
                {expand ? "Collapse" : "See all"}
              </button>
            </div>
          </div>
        )}
        {tab === "specification" && (
          <div className="border-[#e5e5e5] border px-8 pt-8 pb-14">
            <span className="block border border-[#e5e5e5] text-center text-[#800000] py-4 mb-6 text-xl font-semibold">
              Specifications
            </span>

            <div className="border-x border-[#2c2c2c]">
              <table className="w-full border  border-[#e5e5e5]">
                <tbody>
                  {specificationTable.map(
                    (item, index) => (
                      <tr
                        key={index}
                        className="even:bg-[#f9f6d1]"
                      >
                        <td className="text-sm text-right p-3 border w-1/2 border-[#e5e5e5] font-semibold  ">
                          {item.title}
                        </td>
                        <td className="text-sm text-left p-3 border w-1/2 border-[#e5e5e5] ">
                          <PortableText
                            value={
                              item.description
                            }
                            components={
                              components
                            }
                          />
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
