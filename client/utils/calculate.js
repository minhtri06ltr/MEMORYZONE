export const calculateRate = (
  statisticalReviews,
) => {
  const totalReview =
    statisticalReviews[0] +
    statisticalReviews[1] +
    statisticalReviews[2] +
    statisticalReviews[3] +
    statisticalReviews[4];
  const point =
    statisticalReviews[0] * 1 +
    statisticalReviews[1] * 2 +
    statisticalReviews[2] * 3 +
    statisticalReviews[3] * 4 +
    statisticalReviews[4] * 5;
  const average =
    totalReview === 0 ? 0 : point / totalReview;
  const ratingList =
    totalReview === 0
      ? [0, 0, 0, 0, 0]
      : [
          Math.round(
            (statisticalReviews[0] * 100) /
              totalReview,
          ),
          Math.round(
            (statisticalReviews[1] * 100) /
              totalReview,
          ),
          Math.round(
            (statisticalReviews[2] * 100) /
              totalReview,
          ),
          Math.round(
            (statisticalReviews[3] * 100) /
              totalReview,
          ),
          Math.round(
            (statisticalReviews[4] * 100) /
              totalReview,
          ),
        ];
  return {
    average,
    ratingList,
  };
};
