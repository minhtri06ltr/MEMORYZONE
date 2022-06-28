import Image from "next/image";
import {
  Layout,
  PaymentNotFound,
  Term,
} from "../../components";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { client, urlFor } from "../../lib/client";
import { useEffect } from "react";
import { updateOrder } from "../../utils/update";

const OrderDetail = ({
  oldOrderList,
  orderList,
  orderDetail,
  check,
}) => {
  console.log(oldOrderList, orderList, check);
  if (!orderDetail) return <PaymentNotFound />;
  return (
    <Layout
      removeLayout={true}
      title="Memoryzone | Order Detail"
      description="Keep on track your order with Memoryzone"
    >
      <div className="bg-[#f4f4f4] min-h-screen flex pl-36 ">
        <div className=" space-x-16 flex flex-1">
          <div className="flex flex-col  pt-6 w-[48%]  ">
            <Link href="/">
              <a>
                <div className="relative w-[225px] cursor-pointer h-[60px]">
                  <Image
                    priority={true}
                    layout="fill"
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/checkout_logo.png?1656064578646"
                  />
                </div>
              </a>
            </Link>
            <div className="relative text-[#000000]">
              <div className="absolute top-[10%] left-0 -translate-x-[120%]">
                <ShieldCheckIcon
                  width={70}
                  height={70}
                  color="#cccccc"
                />
              </div>
              <span className="block mt-4 mb-2  text-lg font-semibold ">
                Announce
              </span>
              <span className="mb-6 block text-sm">
                Some of the products in the cart
                are no longer available to order.
                We apologize for this
                inconvenience.
              </span>
            </div>
            <div className="text-sm text-[#000000] flex justify-between items-center my-4">
              <span>Product</span>
              <span>Quantity</span>
            </div>
            <div className="border-y border-[#ddd]  divide-y divide-[#ddd]">
              {orderDetail.orderList.map(
                (item, index) => (
                  <div
                    className="flex items-center space-x-6 py-4 justify-between"
                    key={index}
                  >
                    <div className="relative border rounded-md overflow-hidden border-[#e5e5e5] min-w-[50px] min-h-[50px]">
                      <Link
                        href={`/product/${item.slug}`}
                      >
                        <a>
                          <Image
                            layout="fill"
                            src={urlFor(
                              orderDetail
                                .productImage[
                                index
                              ].image.image,
                            ).url()}
                          />
                        </a>
                      </Link>
                    </div>
                    <span className="w-[70%] block text-sm text-[#333333]">
                      {item.productName}
                    </span>
                    <span className="block text-sm text-[#000000]">
                      x{" "}
                      {item.quantity === 0
                        ? "Out of stock"
                        : item.quantity}
                    </span>
                  </div>
                ),
              )}
            </div>
            <div className="flex items-center justify-between my-6 ">
              <Link href="/cart">
                <div className="text-primary    hover:text-[#006533]  cursor-pointer flex items-center">
                  <div className="hover:first:-translate-x-2 after:bg-transparent after:absolute after:h-full after:w-24 after:top-0 after:content-[''] relative  mt-0.5 transition ease-linear ">
                    <ChevronLeftIcon
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className=" hover:first:-translate-x-2 transition ease-linear  ">
                    <span className="text-sm text-inherit  ">
                      Back to cart
                    </span>
                  </div>
                </div>
              </Link>
              <Link href="/cart">
                <button className="rounded-md bg-primary text-white px-6 py-3 text-sm hover:bg-[#006533]">
                  Continue
                </button>
              </Link>
            </div>
            <Term />
          </div>
          <div className="flex-1 pl-6 pr-28 bg-[#f8f8f8] border-l border-[#ddd] opacity-70">
            <div className="max-h-[calc(100vh-480px)] scroll-smooth  overflow-y-auto py-4 ">
              <table>
                <tbody className="space-y-2">
                  {orderDetail.orderList.map(
                    (item, index) => (
                      <tr
                        key={index}
                        className="flex items-center"
                      >
                        <td>
                          <div className="relative">
                            <div className=" w-[50px] h-[50px] relative overflow-hidden rounded-md border border-[#e5e5e5]">
                              <Link
                                href={`/product/${item.slug}`}
                              >
                                <a>
                                  <Image
                                    src={urlFor(
                                      orderDetail
                                        .productImage[
                                        index
                                      ].image
                                        .image,
                                    ).url()}
                                    layout="fill"
                                    quality={100}
                                  />
                                </a>
                              </Link>
                            </div>
                            <span className="bg-primary font-semibold z-10 rounded-full -right-[0.9em] -top-[0.55em] text-xs px-1.5 py-0.5  text-white absolute">
                              {item.quantity}
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className="text-[#333333] text-sm text-left flex-1 block pl-4">
                            {item.productName}
                          </span>
                        </td>
                        <td>
                          <span className="text-[#717171] text-sm text-right flex-1 pl-4">
                            {item.price}$
                          </span>
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
            <div className="border-y border-[#ddd] py-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#717171] text-sm block">
                  Provisional
                </span>
                <span className="text-[#717171] text-sm block">
                  0$
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#717171] text-sm block">
                  Transport fee
                </span>
                <span className="text-[#717171] text-sm block">
                  --
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center my-4">
              <span className="text-[16px] text-[#717171] font-light">
                Total
              </span>
              <span className="text-primary text-xl">
                {orderDetail.totalPrice}$
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default OrderDetail;
export const getStaticPaths = async () => {
  const orderIds = await client.fetch(
    `*[_type=="order"]{
      _id
  }`,
  );

  return {
    paths:
      orderIds?.map((orderId) => ({
        params: {
          id: orderId._id,
        },
      })) || [],
    fallback: false,
  };
};
export const getStaticProps = async ({
  params: { id },
}) => {
  //get product data by slug param
  try {
    const orderDetail = await client.fetch(
      `*[_type=="order" && _id==$orderId && isPaid==false][0]
      {
       totalPrice,paymentMethod,orderList,_id,
        "productImage": 
      orderList[]{
        "image": *[_type=='product' && slug.current == ^.slug][0]{image[0]}
      }
      }
      `,
      { orderId: id },
    );
    let check = false;

    const orderList = [];
    for (
      let i = 0;
      i < orderDetail.orderList.length - 1;
      i++
    ) {
      let res = await client.fetch(
        `*[_type=='product' && slug.current ==$slug]{countInStock}`,
        { slug: orderDetail.orderList[i].slug },
      );
      if (res.countInStock === 0) {
        check = true;
        orderList.push({
          image: productImage[i].image.image,
          productName:
            orderDetail.orderList[i].productName,
          quantity: 0,
          price: 0,
        });
      } else {
        if (
          res.countInStock <
          orderDetail.orderList[i].quantity
        )
          check = true;
        orderList.push({
          image: productImage[i].image.image,
          productName:
            orderDetail.orderList[i].productName,
          quantity:
            orderDetail.orderList[i].quantity >
            res.countInStock
              ? res.countInStock
              : orderDetail.orderList[i].quantity,
          price:
            orderDetail.orderList[i].productName,
        });
      }
    }
    return {
      props: {
        oldOrderList: orderDetail.orderList,
        orderList,
        check,
        orderDetail,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        orderDetail: null,
      },
    };
  }
};
