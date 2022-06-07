export const productSold = async (productId, quantity) => {
  await client
    .patch(productId)
    .inc({
      sold: quantity,
    })
    .dec({
      inStock: quantity,
    })
    .commit();
};
