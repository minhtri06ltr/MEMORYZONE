import { Layout, Path } from "../components";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { numberWithCommas } from "../utils/format";
import { useDispatch, useSelector } from "react-redux";
import { urlFor } from "../lib/client";
import Link from "next/link";
import {
  decreaseProduct,
  increaseProduct,
  deleteProduct,
  onChangeQuantity,
} from "../redux/cartSlice";
import { isNumber } from "../utils/validate";
import { loadingNotify } from "../redux/notifySlice";

const cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  return (
    <Layout title="Memoryzone | Cart" description="Memoryzone personal cart">
      <Path path={["Home", "Cart"]} />
      <div className="px-10">
        <span className="block text-[#323c3f] text-3xl mt-12 mb-4 font-semibold">
          Cart
        </span>
        {cartItems.products.length > 0 ? (
          <div className="my-8">
            <table className="border m-x-auto m-y-0 border-[#ebebeb] border-collapse w-full">
              <thead>
                <tr>
                  <td className=" w-[17%] cartRow  text-[#636363]">
                    Product Image
                  </td>
                  <td className=" w-[33%] cartRow text-[#636363]">
                    Product Name
                  </td>
                  <td className=" w-[17%] cartRow text-[#636363]">
                    Unit Price
                  </td>
                  <td className=" w-[14%] cartRow text-[#636363]">Quantity</td>
                  <td className=" w-[14%] cartRow text-[#636363]">Amount</td>
                  <td className=" w-[8%] cartRow text-[#636363]">Action</td>
                </tr>
              </thead>
              <tbody>
                {cartItems.products.map((item, index) => (
                  <tr key={index}>
                    <td className=" cartRow ">
                      <Link href={`/product/${item.slug}`}>
                        <a>
                          <Image
                            alt={`Memoryzone products in cart: ${item.name}`}
                            className="cursor-pointer"
                            src={urlFor(item.img).url()}
                            width={98}
                            height={98}
                            priority
                            layout="responsive"
                          />
                        </a>
                      </Link>
                    </td>
                    <td className=" cartRow">{item.name}</td>
                    <td className="cartPrice cartRow">
                      {numberWithCommas(item.price)}$
                    </td>
                    <td className="  cartRow">
                      <div className="mx-auto border border-[#ccc] w-fit">
                        <button
                          onClick={() => {
                            item.quantity >= 2 &&
                              dispatch(decreaseProduct(item.id));
                          }}
                          className="border-r border-[#ccc] font-light text-base px-3 "
                        >
                          -
                        </button>
                        <input
                          disabled={item.countInStock === item.quantity && true}
                          onChange={(e) => {
                            const re = /^[0-9\b]+$/;
                            if (
                              e.target.value === "" ||
                              re.test(e.target.value)
                            ) {
                              if (isNumber(parseInt(e.target.value))) {
                                if (parseInt(e.target.value) === 0) {
                                  dispatch(
                                    onChangeQuantity({
                                      quantity: 1,
                                      id: item.id,
                                    })
                                  );
                                  return;
                                }
                                if (e.target.value > item.countInStock) {
                                  dispatch(
                                    onChangeQuantity({
                                      quantity: item.countInStock,
                                      id: item.id,
                                    })
                                  );
                                } else {
                                  dispatch(
                                    onChangeQuantity({
                                      quantity: parseInt(e.target.value),
                                      id: item.id,
                                    })
                                  );
                                }
                              } else {
                                dispatch(
                                  onChangeQuantity({ quantity: 1, id: item.id })
                                );
                              }
                            }
                          }}
                          value={item.quantity}
                          type="text"
                          className={`w-12 text-center outline-none border-none ${
                            item.quantity === item.countInStock &&
                            "cursor-not-allowed"
                          }`}
                        />
                        <button
                          onClick={() => {
                            if (item.quantity === item.countInStock) {
                              alert(
                                `We only have ${item.countInStock} of these left in the store`
                              );
                              return;
                            }
                            item.quantity < item.countInStock &&
                              dispatch(increaseProduct(item.id));
                          }}
                          className="border-l border-[#ccc] font-light text-base px-3"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="cartPrice cartRow">
                      {numberWithCommas(item.price * item.quantity)}$
                    </td>
                    <td className=" cartRow">
                      <XIcon
                        onClick={() => {
                          dispatch(loadingNotify(true));
                          dispatch(deleteProduct(item.id));
                          dispatch(loadingNotify(false));
                        }}
                        className="inline-block hover:text-[#c92b26] mb-1 cursor-pointer"
                        width={15}
                        height={15}
                      />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="cartRow py-6 text-right" colSpan="6">
                    Total Price:
                    <span className="cartPrice mx-6">
                      {numberWithCommas(cartItems.total)}$
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex items-center justify-end my-6">
              <Link href="/">
                <button className="text-sm font-semibold bg-[#3d4356] text-white rounded-sm px-10 py-2 mr-3">
                  KEEP SHOPPING
                </button>
              </Link>
              <Link href="/test/ui">
                <button className="text-sm font-semibold bg-primary border border-primary hover:text-primary hover:bg-white text-white rounded-sm px-10 py-2">
                  MAKE PAYMENTS
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <span className="block text-text text-sm">
            There are no products in the shopping cart. Return to{" "}
            <Link href="/">
              <span className="hover:text-primary cursor-pointer">
                the store
              </span>
            </Link>{" "}
            to continue shopping.
          </span>
        )}
        <div className="h-[2000px]"></div>
      </div>
    </Layout>
  );
};

export default cart;
