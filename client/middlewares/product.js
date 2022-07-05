import { client } from "../lib/client";

export const productSold = async (
  productId,
  quantity,
) => {
  await client
    .patch(productId)
    .inc({
      sold: quantity,
    })
    .dec({
      countInStock: quantity,
    })
    .commit()
    .then((res) => console.log(res))
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
};
