export const averageRating = (reviews) => {
  let sum = 0;
  reviews.map((item) => {
    sum += item.rating;
  });
  return Math.round(sum / reviews.length);
};
