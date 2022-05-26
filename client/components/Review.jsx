import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { formatDateTime } from "../utils/format";
import { StarList } from ".";
import { useRef, useState } from "react";

const Reply = ({ data }) => (
  <>
    {data.map((item, index) => (
      <div key={index} className=" pt-3 pb-6 border-[#dddddd]">
        <div className="flex items-center  justify-start">
          <div>
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

const Rating = ({ index, active }) => {
  const ratingLevel = [
    `Don't like`,
    "Acceptance",
    "Normal",
    "Very good",
    "Amazing",
  ];
  if (index === 0 && active === 0) return;
  return (
    <div className="bg-[#37a953] rounded-sm arrow after:right-full after:border-r-[6px] after:border-r-[#37a953] after:border-[6px] flex items-center justify-center ml-2 py-1 px-2">
      <span className="text-white text-xs">
        {index === 0 ? ratingLevel[active - 1] : ratingLevel[index - 1]}
      </span>
    </div>
  );
};
const Review = ({ data, productName }) => {
  const [rating, setRating] = useState(0);
  const [star, setStar] = useState(0);
  const imgRef = useRef("");

  const [openReviewForm, setOpenReviewForm] = useState(true);
  return (
    <div className="mt-6 w-full min-h-10 border-t-[1px] border-[#f7f7f7]">
      {openReviewForm && (
        <div className="py-6 space-y-5">
          <span className="block text-2xl text-[#323c3f]">
            Rate and comment on <b>"{productName}"</b>
          </span>
          <div>
            <span className="block text-sm text-[#323c3f]">
              Step 1. Choose your rating
            </span>
            <div className="flex-row-reverse  items-center justify-end my-1 flex">
              <Rating index={rating} active={star} />
              {[5, 4, 3, 2, 1].map((index) => (
                <StarIcon
                  key={index}
                  color={`${
                    star === 0
                      ? index <= rating
                        ? "#ffd700"
                        : "#cccccc"
                      : index <= star
                      ? "#ffd700"
                      : "#cccccc"
                  }`}
                  width={30}
                  height={30}
                  className={`cursor-pointer rating mx-1 hover:text-[gold] `}
                  onMouseEnter={() => {
                    setRating(index);
                  }}
                  onMouseLeave={() => {
                    setRating(0);
                  }}
                  onClick={() => {
                    setStar(index);
                    setRating(index);
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <span className="block text-sm text-[#323c3f]">
              Step 2. Enter a product review(*):
            </span>
            <textarea
              required
              className="w-full mt-2 min-h-[115px] pl-5 pt-2 pr-28 text-[#686868] text-sm outline-none rounded-md border border-[#ddd]"
            ></textarea>
          </div>
          <div className="pb-2 flex items-center space-x-10">
            <div>
              <span className="block mb-2 text-sm text-[#323c3f]">
                Step 3. Your full name (*)
              </span>
              <input
                type="text"
                required
                className="px-4 py-2 border min-w-[270px] text-[#686868] text-sm border-[#dddddd] outline-none"
              />
            </div>
            <div>
              <span className="block mb-2 text-sm text-[#323c3f]">
                Step 4. Phone number
              </span>
              <input
                type="text"
                required
                className="px-4 py-2 border min-w-[270px] text-[#686868] text-sm border-[#dddddd] outline-none"
              />
            </div>
          </div>
          <div className="pb-2">
            <span
              onClick={() => imgRef.current.click()}
              className="inline text-sm text-[#323c3f]"
            >
              Step 5. Add product images if available (Maximum 5 images):{" "}
              <button className="text-sm bg-white border border-[#007ff0] text-[#007ff0] rounded-md p-2">
                Choose image
              </button>
              <input type="file" hidden ref={imgRef} />
            </span>
            <div className="flex items-center space-x-6 mt-4 ">
              <div className="relative">
                <div className="rounded-md relative align-middle  w-[100px] overflow-hidden h-[100px]">
                  <Image
                    src="https://bizweb.sapocdn.net/100/329/122/files/bravo-15.jpg?v=1629950033072"
                    quantity={100}
                    objectFit="cover"
                    layout="fill"
                  />
                </div>

                <span className=" text-white text-xs absolute cursor-pointer right-0 top-0 -translate-y-1/2 translate-x-1/2 z-10 bg-[#635f5f] font-semibold  flex justify-center items-center w-6 h-6 border-2 rounded-full border-white">
                  x
                </span>
              </div>
              <div className="relative">
                <div className="rounded-md relative align-middle  w-[100px] overflow-hidden h-[100px]">
                  <Image
                    src="https://bizweb.sapocdn.net/100/329/122/files/bravo-15.jpg?v=1629950033072"
                    quantity={100}
                    objectFit="cover"
                    layout="fill"
                  />
                </div>

                <span className=" text-white text-xs absolute cursor-pointer right-0 top-0 -translate-y-1/2 translate-x-1/2 z-10 bg-[#635f5f] font-semibold  flex justify-center items-center w-6 h-6 border-2 rounded-full border-white">
                  x
                </span>
              </div>
              <div className="relative">
                <div className="rounded-md relative align-middle  w-[100px] overflow-hidden h-[100px]">
                  <Image
                    src="https://bizweb.sapocdn.net/100/329/122/files/bravo-15.jpg?v=1629950033072"
                    quantity={100}
                    objectFit="cover"
                    layout="fill"
                  />
                </div>

                <span className=" text-white text-xs absolute cursor-pointer right-0 top-0 -translate-y-1/2 translate-x-1/2 z-10 bg-[#635f5f] font-semibold  flex justify-center items-center w-6 h-6 border-2 rounded-full border-white">
                  x
                </span>
              </div>
            </div>
          </div>
          <button className="rounded-sm text-white bg-[#d9534f] px-4 py-3  text-sm ">
            Submit a review
          </button>
        </div>
      )}
      <span className="text-sm text-text my-3 block">
        Choose to see a review
      </span>
      <div className="space-x-2 border-b border-[#f7f7f7] pb-3 ">
        <select
          name="selectReview"
          className="outline-none border cursor-pointer border-[#f1efef] text-sm text-text p-2 w-[150px]"
          id="selectReview"
        >
          <option value={0}>All</option>
          <option value={1}>Have pictures</option>
          <option value={2}>No pictures</option>
        </select>
        <select
          name="selectStar"
          className="outline-none  cursor-pointer border border-[#f1efef] text-sm text-text p-2 w-[150px]"
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

      {data ? (
        <div className="divide-y  ">
          {data.map((item, index) => (
            <div className=" py-3 border-[#dddddd] w-full" key={index}>
              <div className="flex items-center  justify-start">
                <div>
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
              <div className="border border-[#e5e5e5] divide-y arrow after:border-[12px] after:border-b-[12px] after:border-b-[#f5f5f5] mt-5 after:-top-6  rounded-sm  mb-6 px-3  bg-[#f5f5f5]">
                {item.reply && <Reply data={item.reply} />}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-3 bg-[#fff3cd] rounded-md px-6 py-3">
          <span className="text-sm text-[#856404]">
            There are no reviews yet
          </span>
          <button onClick={() => setOpenReviewForm(!openReviewForm)}>
            Write your review
          </button>
        </div>
      )}
    </div>
  );
};

export default Review;
