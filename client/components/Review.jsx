import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { formatDateTime } from "../utils/format";
import { StarList } from ".";
import { useRef, useState } from "react";
import { client, urlFor } from "../lib/client";
import { useDispatch } from "react-redux";

const ReplyItem = ({
  data,
  reviewIndex,
  setOpenIndex,
  setReplyForm,
}) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className=" pt-3 pb-6 border-[#dddddd]"
        >
          <div className="flex items-center  justify-start">
            <div>
              <Image
                src={`https://ui-avatars.com/api/?rounded=true&size=32&name=${item.fullName.replace(
                  " ",
                  "+",
                )}&font-size=0.42&color=ffffff&background=666&bold=true`}
                width={32}
                height={32}
                atl={`Memoryzone reply: ${item.fullName} avatar`}
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
            <span
              onClick={() => {
                setReplyForm({
                  comment: "",
                  fullName: "",
                  phoneNumber: "",
                  reviewId: "",
                });
                setOpenIndex(reviewIndex);
              }}
              className="text-xs  cursor-pointer text-[#007bff]"
            >
              Answer
            </span>
            <span className="text-[#666666] text-xs italic">
              {" "}
              • {formatDateTime(item.createTime)}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

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
        {index === 0
          ? ratingLevel[active - 1]
          : ratingLevel[index - 1]}
      </span>
    </div>
  );
};
const RateBar = ({ index, percent }) => {
  return (
    <div className="flex items-center space-x-2 text-sm text-text">
      <span className="whitespace-nowrap">
        {index} ★
      </span>
      <div className="rounded-full bg-[#efefef]  w-full h-3 ">
        <div
          className={`rounded-full bg-[#5cb85c]   h-3 `}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <span> {percent}%</span>
    </div>
  );
};
const Review = ({
  data,
  productName,
  productId,
  averageRate,
  ratingList,
}) => {
  const [rating, setRating] = useState(0);
  const [replyForm, setReplyForm] = useState({
    comment: "",
    fullName: "",
    phoneNumber: "",
    reviewId: "",
  });

  const imgRef = useRef("");
  const [reviewForm, setReviewForm] = useState({
    star: 0,
    comment: "",
    fullName: "",
    phoneNumber: "",
    images: [],
  });
  const [openIndex, setOpenIndex] =
    useState(null);

  const dispatch = useDispatch();
  const { images } = reviewForm;
  const [openReviewForm, setOpenReviewForm] =
    useState(false);
  const reviewFormHandle = async (e) => {
    if (e.target.name === "images") {
      if (reviewForm.images.length >= 5) {
        alert(
          "You can only post up to 5 product photos",
        );
        return;
      }
      if (
        e.target.files[0].type === "image/png" ||
        e.target.files[0].type ===
          "image/svg+xml" ||
        e.target.files[0].type === "image/jpeg" ||
        e.target.files[0].type === "image/gif" ||
        e.target.files[0].type === "image/tiff"
      ) {
        await client.assets
          .upload("image", e.target.files[0], {
            contentType: e.target.files[0].type,
            filename: e.target.files[0].name,
          })
          .then((res) => {
            setReviewForm({
              ...reviewForm,
              images: [...images, res],
            });
          })
          .catch((error) => {
            alert(error.message);
          });
      } else {
        alert("Image format is incorrect");
        return;
      }
    }
    // not onchange image input
    else
      setReviewForm({
        ...reviewForm,
        [e.target.name]: e.target.value,
      });
  };

  const reviewHandle = async (e) => {
    e.preventDefault();
    if (
      reviewForm.fullName === "" ||
      reviewForm.comment === "" ||
      reviewForm.star === 0
    ) {
      alert("Please add required fields");
      return;
    }

    await client
      .patch(productId)
      // Ensure that the `reviews` arrays exists before attempting to add items to it
      .setIfMissing({ reviews: [] })
      // Add the items after the last item in the array (append)
      .append("reviews", [
        {
          _type: "review",
          rating: reviewForm.star,
          comment: reviewForm.comment,
          fullName: reviewForm.fullName,
          phoneNumber: reviewForm.phoneNumber,
          image: reviewForm.images.map((item) => {
            return {
              _type: "image",
              asset: {
                _type: "reference",
                _ref: item._id,
              },
            };
          }),
          isApprove: false,
          createTime: new Date(),
        },
      ])
      .commit({
        // Adds a `_key` attribute to array items, unique within the array, to
        // ensure it can be addressed uniquely in a real-time collaboration context
        autoGenerateArrayKeys: true,
      })
      .then((res) => {
        // data.push(res.reviews[res.reviews.length - 1]); -- render review immediately
        setReviewForm({
          star: 0,
          comment: "",
          fullName: "",
          phoneNumber: "",
          images: [],
        });

        alert(
          "Thanks for your review, please wait for an admin to approve this review",
        );
      })
      .catch((error) => {
        alert(error.message);
      });

    setOpenReviewForm(false);
  };
  const replyHandle = async (reviewId, e) => {
    e.preventDefault();

    if (
      replyForm.fullName === "" ||
      replyForm.comment === ""
    ) {
      alert("Please add required fields");
      return;
    } else {
      await client
        .patch(productId)
        .setIfMissing({
          [`reviews[_key == \"${reviewId}\"].reply`]:
            [],
        })
        // Add the items after the last item in the array (append)
        .append(
          `reviews[_key == \"${reviewId}\"].reply`,
          [
            {
              _type: "reply",
              comment: replyForm.comment,
              fullName: replyForm.fullName,
              phoneNumber: replyForm.phoneNumber,
              createTime: new Date(),
            },
          ],
        )
        .commit({
          // Adds a `_key` attribute to array items, unique within the array, to
          // ensure it can be addressed uniquely in a real-time collaboration context
          autoGenerateArrayKeys: true,
        })
        .then((res) => {
          data[openIndex].reply =
            res.reviews.filter(
              (item) => item.isApprove,
            )[openIndex].reply;

          setOpenIndex(null);
          setReplyForm({
            comment: "",
            fullName: "",
            phoneNumber: "",
            reviewId: "",
          });
        })
        .catch((error) => {
          alert(error.message);
          console.log(error);
        });
    }
  };
  const replyFormHandle = (e) => {
    setReplyForm({
      ...replyForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/*Review summary */}
      <div className="mt-10 mb-4">
        <span className="block text-text text-2xl">
          CUSTOMER REVIEWS
        </span>
        <div className="flex  my-6 items-start space-x-8">
          {data.length === 0 ? (
            <div className=" bg-[#fff3cd] flex-1 text-center rounded-md px-6 py-3">
              <span className="text-sm text-[#856404]">
                There are no reviews yet, be the
                first
              </span>
            </div>
          ) : (
            <div className="flex  space-y-3 flex-1 flex-col items-center justify-center">
              <span className="text-text text-sm block">
                Average rating
              </span>
              <span className="text-3xl font-semibold text-[#d9534f] text-center">
                {parseFloat(
                  averageRate.toFixed(1),
                )}{" "}
                / 5
              </span>
              <span className="text-sm text-gray block">
                ({data?.length} reviews)
              </span>
            </div>
          )}
          <div className="flex-1  space-y-4">
            {ratingList.map((item, index) => (
              <RateBar
                key={index}
                index={index}
                percent={item}
              />
            ))}
          </div>
          <div className="flex-1  space-y-3 flex flex-col items-center justify-center">
            <span className="text-sm text-text block">
              Share product reviews
            </span>
            <button
              onClick={() =>
                setOpenReviewForm(!openReviewForm)
              }
              type="button"
              id="review"
              className="rounded-sm text-white bg-[#d9534f] px-12 py-3  text-sm "
            >
              Write your review
            </button>
          </div>
        </div>
      </div>
      {/*Review section */}
      <div className="mt-6 w-full min-h-10 border-t-[1px] border-[#f7f7f7]">
        {openReviewForm && (
          <form onSubmit={reviewHandle}>
            <div className="py-6 space-y-5">
              <span className="block text-2xl text-[#323c3f]">
                Rate and comment on{" "}
                <b>"{productName}"</b>
              </span>
              <div>
                <label
                  htmlFor="rating"
                  className="block text-sm text-[#323c3f]"
                >
                  Step 1. Choose your rating (*)
                </label>
                <div
                  id="rating"
                  className="flex-row-reverse  items-center justify-end my-1 flex"
                >
                  <Rating
                    index={rating}
                    active={reviewForm.star}
                  />
                  {[5, 4, 3, 2, 1].map(
                    (index) => (
                      <StarIcon
                        key={index}
                        color={`${
                          reviewForm.star === 0
                            ? index <= rating
                              ? "#ffd700"
                              : "#cccccc"
                            : index <=
                              reviewForm.star
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
                          setReviewForm({
                            ...reviewForm,
                            star: index,
                          });
                          setRating(index);
                        }}
                      />
                    ),
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm text-[#323c3f]"
                >
                  Step 2. Enter a product
                  review(*):
                </label>
                <textarea
                  value={reviewForm.comment}
                  id="comment"
                  name="comment"
                  required
                  onChange={reviewFormHandle}
                  className="w-full mt-2 focus:border-[#bdbdbd] min-h-[115px] pl-5 pt-2 pr-28 text-[#686868] text-sm outline-none rounded-md border border-[#ddd]"
                ></textarea>
              </div>
              <div className="pb-2 flex items-center space-x-10">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm text-[#323c3f]"
                  >
                    Step 3. Your full name (*)
                  </label>
                  <input
                    type="text"
                    required
                    value={reviewForm.fullName}
                    id="fullName"
                    name="fullName"
                    onChange={reviewFormHandle}
                    className="reviewInput"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm text-[#323c3f]"
                  >
                    Step 4. Phone number
                  </label>
                  <input
                    value={reviewForm.phoneNumber}
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={reviewFormHandle}
                    className="reviewInput"
                  />
                </div>
              </div>
              <div className="pb-2">
                <label
                  htmlFor="images"
                  onClick={() =>
                    imgRef.current.click()
                  }
                  className="inline text-sm text-[#323c3f]"
                >
                  Step 5. Add product images if
                  available (Maximum 5 images):{" "}
                  <button
                    type="button"
                    className="text-sm outline-none bg-white border border-[#007ff0] text-[#007ff0] rounded-md p-2"
                  >
                    Choose image
                  </button>
                  <input
                    accept="image/*"
                    id="images"
                    name="images"
                    onChange={reviewFormHandle}
                    type="file"
                    onClick={(e) => {
                      e.target.value = null;
                    }}
                    hidden
                    ref={imgRef}
                    multiple
                  />
                </label>
                <div className="flex items-center space-x-6 mt-4 ">
                  {reviewForm.images.map(
                    (image, index) => (
                      <div
                        key={index}
                        className="relative"
                      >
                        <div className="rounded-md relative align-middle  w-[100px] overflow-hidden h-[100px]">
                          <Image
                            src={
                              image.url
                                ? image.url
                                : URL.createObjectURL(
                                    image,
                                  )
                            }
                            quantity={100}
                            objectFit="contain"
                            layout="fill"
                            alt={`${productName} review images`}
                          />
                        </div>

                        <span
                          onClick={() => {
                            setReviewForm({
                              ...reviewForm,
                              images:
                                images.filter(
                                  (item) =>
                                    item !==
                                    image,
                                ),
                            });
                          }}
                          className=" text-white text-xs absolute cursor-pointer right-0 top-0 -translate-y-1/2 translate-x-1/2 z-10 bg-[#635f5f] font-semibold  flex justify-center items-center w-6 h-6 border-2 rounded-full border-white"
                        >
                          x
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="rounded-sm text-white bg-[#d9534f] px-4 py-3  text-sm "
              >
                Submit a review
              </button>
            </div>
          </form>
        )}
        <div className="mt-3 bg-[#dff0d8] border border-[#d6e9c6] rounded-md px-6 py-3">
          <span className="text-sm text-[#3c763d]">
            You have successfully posted a
            comment. We will post your comment
            once it is moderated.
          </span>
        </div>
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
            <option value={1}>
              Have pictures
            </option>
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

        {data.length !== 0 ? (
          <div className="divide-y  ">
            {data?.map((item, index) => (
              <div
                className=" py-3 border-[#dddddd] w-full"
                key={index}
              >
                <div className="flex items-center  justify-start">
                  <div>
                    <Image
                      src={`https://ui-avatars.com/api/?rounded=true&size=32&name=${item.fullName.replace(
                        " ",
                        "+",
                      )}&font-size=0.42&color=ffffff&background=666&bold=true`}
                      width={32}
                      height={32}
                      atl={`Memoryzone review: ${item.fullName} avatar`}
                    />
                  </div>
                  <span className="font-semibold text-base ml-3 pb-1 text-[#505050]">
                    {item.fullName}
                  </span>
                </div>
                <div>
                  <StarList
                    quantity={item.rating}
                    width={22}
                    height={22}
                  />
                  <span className="text-sm py-2 text-[#505050]">
                    {item.comment}
                  </span>
                </div>
                {/*img section */}
                {item.image.length > 0 && (
                  <div className="my-4 flex items-center flex-start space-x-6">
                    {item.image.map(
                      (img, index) => (
                        <div
                          key={index}
                          className="relative cursor-pointer scaleAnimation h-[180px] w-[180px]"
                        >
                          <Image
                            quantity={100}
                            objectFit="contain"
                            layout="fill"
                            src={urlFor(
                              img,
                            ).url()}
                          />
                        </div>
                      ),
                    )}
                  </div>
                )}
                <div className="mb-3">
                  <span
                    onClick={() => {
                      setReplyForm({
                        comment: "",
                        fullName: "",
                        phoneNumber: "",
                        reviewId: "",
                      });
                      setOpenIndex(index);
                    }}
                    className="text-xs  cursor-pointer text-[#007bff]"
                  >
                    Answer
                  </span>
                  <span className="text-[#666666] text-xs italic">
                    {" "}
                    •{" "}
                    {formatDateTime(
                      item.createTime,
                    )}
                  </span>
                </div>
                {item.reply && (
                  <div className="border border-[#e5e5e5] divide-y arrow after:border-[12px] after:border-b-[12px] after:border-b-[#f5f5f5] mt-5 after:-top-6  rounded-sm  mb-6 px-3  bg-[#f5f5f5]">
                    <ReplyItem
                      data={item.reply}
                      setOpenIndex={setOpenIndex}
                      reviewIndex={index}
                      setReplyForm={setReplyForm}
                    />
                  </div>
                )}
                {index === openIndex && (
                  <div className="mb-14">
                    <form
                      className="space-y-3"
                      onSubmit={(e) =>
                        replyHandle(item._key, e)
                      }
                    >
                      <textarea
                        required
                        value={replyForm.comment}
                        name="comment"
                        onChange={replyFormHandle}
                        placeholder="Enter reply for this review (*)"
                        className="w-full focus:border-[#bdbdbd] mt-2 min-h-[115px] pl-5 pt-2 pr-28 text-[#686868] text-sm outline-none rounded-md border border-[#ddd]"
                      ></textarea>
                      <div className="space-x-8 flex items-center">
                        <input
                          type="text"
                          placeholder="Full Name (*)"
                          className="reviewInput"
                          required
                          onChange={
                            replyFormHandle
                          }
                          value={
                            replyForm.fullName
                          }
                          name="fullName"
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="reviewInput"
                          value={
                            replyForm.phoneNumber
                          }
                          name="phoneNumber"
                          onChange={
                            replyFormHandle
                          }
                          pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                        />
                        <button
                          type="submit"
                          className="rounded-md text-white bg-[#ff0000] px-4 py-3  flex-1 text-sm "
                        >
                          Send reply
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-3 bg-[#fff3cd] rounded-md px-6 py-3">
            <span className="text-sm text-[#856404]">
              There are no reviews yet
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Review;
