import { getImageDimensions } from "@sanity/asset-utils";

export const getImgDimension = (image) => {
  const { width, height } =
    getImageDimensions(image);

  return { width, height };
};
