import Image from "next/image";

import { formatDateTime } from "../utils/format";
import StarList from "./StarList";

const Reply = ({ data }) => (
  <>
    {data.map((item, index) => (
      <div key={index} className=" pt-3 pb-6 border-[#dddddd]">
        <div className="flex items-center  justify-start">
          <div className="">
            <Image
              src={`https://ui-avatars.com/api/?rounded=true&size=32&name=${item.fullName.replace(
                " ",
                "+"
              )}&font-size=0.42&color=ffffff&background=666&bold=true`}
              width={32}
              height={32}
            />
          </div>
          <span className="font-semibold text-base ml-3 text-[#505050]">
            {item.fullName}
          </span>
        </div>
        <span className="text-sm block py-2 text-[#505050]">
          {item.comment}
        </span>
        <div className="mb-3">
          <span className="text-xs  cursor-pointer text-[#007bff]">Answer</span>
          <span className="text-[#666666] text-xs italic">
            {" "}
            • 09/04/2022 12:54
          </span>
        </div>
      </div>
    ))}
  </>
);
const Review = ({ data }) => {
  return (
    <div className="mt-6  w-full min-h-10 border-t-[1px] border-[#f7f7f7]">
      <span className="text-sm text-text my-3 block">
        Choose to see a review
      </span>
      <div className="space-x-2 border-b-[1px] pb-3 border-[#f7f7f7]">
        <select
          name="selectReview"
          className="outline-none border cursor-pointer border-[#f1efef] text-base text-text px-2 py-1 w-[150px]"
          id="selectReview"
        >
          <option value={0}>All</option>
          <option value={1}>Have pictures</option>
          <option value={2}>No pictures</option>
        </select>
        <select
          name="selectStar"
          className="outline-none  cursor-pointer border border-[#f1efef] text-base text-text px-2 py-1 w-[150px]"
          id="selectStar"
        >
          <option value={0}>All ★</option>
          <option value={5}>5 ★</option>
          <option value={4}>4 ★</option>
          <option value={3}>3 ★</option>
          <option value={2}>2 ★</option>
          <option value={1}>1 ★</option>
        </select>
      </div>

      <div className="divide-y  ">
        {data.map((item, index) => (
          <div className=" py-3 border-[#dddddd] w-full" key={index}>
            <div className="flex items-center  justify-start">
              <div className="">
                <Image
                  src={`https://ui-avatars.com/api/?rounded=true&size=32&name=${item.fullName.replace(
                    " ",
                    "+"
                  )}&font-size=0.42&color=ffffff&background=666&bold=true`}
                  width={32}
                  height={32}
                />
              </div>
              <span className="font-semibold text-base ml-3 text-[#505050]">
                {item.fullName}
              </span>
            </div>
            <div>
              <StarList quantity={item.rating} width={22} height={22} />
              <span className="text-sm py-2 text-[#505050]">
                {item.comment}
              </span>
            </div>
            <div className="mb-3">
              <span className="text-xs  cursor-pointer text-[#007bff]">
                Answer
              </span>
              <span className="text-[#666666] text-xs italic">
                {" "}
                • {formatDateTime(new Date())}
              </span>
            </div>
            <div className="border border-[#e5e5e5] divide-y  rounded-sm  mb-6 px-3  bg-[#f5f5f5]">
              {item.reply && <Reply data={item.reply} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
