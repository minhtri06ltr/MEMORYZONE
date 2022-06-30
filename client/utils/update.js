import { client } from "../lib/client";
import { updateCart } from "../redux/cartSlice";

export const updateCartHandle = (
  dispatch,
  cart,
) => {
  if (cart && cart.products.length > 0) {
    let newCart = [];
    const updateCartHandle = async () => {
      for (let i of cart.products) {
        let res = await client.fetch(
          `*[_type=='product' && _id ==$id][0]{countInStock}`,
          { id: i.id },
        );

        if (res.countInStock === 0) {
          alert(
            `Sorry, ${i.name} is out of stock please we have to remove it from your cart`,
          );
        }
        if (res.countInStock !== 0) {
          if (i.quantity > res.countInStock) {
            alert(
              `Sorry, only have ${res.countInStock} ${i.name} in stock we have to change this product's quantity in your cart`,
            );
          }
          newCart.push({
            id: i.id,
            name: i.name,
            price: i.price,
            img: i.img,
            slug: i.slug,
            quantity:
              i.quantity < res.countInStock
                ? i.quantity
                : res.countInStock,
            countInStock: res.countInStock,
          });
        }
      }

      dispatch(updateCart(newCart));
    };
    updateCartHandle();
  }
};
