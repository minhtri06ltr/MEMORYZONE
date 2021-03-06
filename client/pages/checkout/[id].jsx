import Image from "next/image";
import { Layout, NotFound, PaypalButton, Term } from "../../components";
import { useSelector } from "react-redux";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { client, urlFor } from "../../lib/client";
import { useDispatch } from "react-redux";
import { VNPayURL } from "../../utils/format";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { updateOrder } from "../../redux/orderSlice";
import { productSold } from "../../middlewares/product";
import { patchData, postData } from "../../utils/requestMethod";

import { formatOrderList } from "../../utils/format";

const OrderDetailsPage = ({ orderList, orderDetail, totalPrice }) => {
  console.log(orderDetail);
  const token = useSelector((state) => state.account.accessToken);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const checkPayment = async () => {
      if (router.query.vnp_TransactionStatus === "02") {
        alert("Customer cancel payment");
        return;
      }
      if (router.query.vnp_TransactionStatus === "00") {
        try {
          if (token !== "" && token !== undefined && token !== null) {
            const res = await patchData(
              `/order/payment/${orderDetail._id}`,
              {
                orderList: orderList.filter((item) => {
                  return item.quantity !== 0;
                }),
                totalPrice,
              },
              token
            );

            if (res.success) {
              dispatch(updateOrder(orderDetail._id));
              res.returnOrder.orderList.filter((item) => {
                return productSold(item._key, item.quantity);
              });
              router.push(`/checkout/success/${orderDetail._id}`);
            } else {
              console.log(res.error);
              alert(res.error);
            }
          } else {
            await client
              .patch(orderDetail._id) // Document ID to patch
              .set({
                isPaid: true,
                totalPrice: totalPrice,
                paidAt: new Date(),
                orderList: formatOrderList(
                  orderList.filter((item) => {
                    return item.quantity !== 0;
                  })
                ),
              }) // Shallow merge
              .commit() // Perform the patch and return a promise
              .then((res) => {
                res.orderList.filter((item) => {
                  return productSold(item._key, item.quantity);
                });
                router.push(`/checkout/success/${res._id}`);
              })
              .catch((error) => {
                console.log(error);
                alert(error.message);
              });
          }
        } catch (error) {
          console.log(error);
          alert(error.message);
        }
      }
    };

    if (router.query.vnp_TransactionStatus) {
      checkPayment();
    }
  }, [router.query.vnp_TransactionStatus]);
  useEffect(() => {
    const checkUser = async () => {
      const res = await postData("order/verifyUser", orderDetail._id, token);
      if (!res.success) {
        router.push("/");
      }
    };
    // if (orderDetail.user) checkUser();
  }, []);
  console.log(orderDetail);
  if (!orderDetail)
    return (
      <NotFound
        title="Payment page does not exist "
        description="The URL you entered may be expired,
  deleted, or invalid. Return to home
  page to continue shopping."
        layoutTitle="Payment page does not exist | Memoryzone - Professional in technology"
        layoutDescription="Sorry we can not find this payment in our data please check your order ID again or contact with admin"
      />
    );
  const VNPayCheckoutHandle = async () => {
    const res = await fetch(`https://geolocation-db.com/json/`);
    const data = await res.json();

    window.location.href = VNPayURL(totalPrice, data.IPv4, orderDetail._id);
  };

  const PaymentButton = ({ type }) => {
    switch (type) {
      case "Paypal":
        return (
          <PaypalButton
            total={totalPrice}
            token={token}
            orderList={orderList.filter((item) => {
              return item.quantity !== 0;
            })}
            dispatch={dispatch}
            orderId={orderDetail._id}
          />
        );
        break;
      case "VNPay":
        return (
          <div className="w-full">
            <button
              onClick={VNPayCheckoutHandle}
              className="rounded-sm w-full  hover:bg-white hover:text-primary transition ease-linear text-white text-md bg-primary  border border-primary  py-2 px-6"
            >
              Pay with VNPay
            </button>
          </div>
        );
    }
  };

  return (
    <Layout
      removeLayout={true}
      title="Order Detail | Memoryzone - Professional in technology"
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
                    alt="Memoryzone logo"
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/checkout_logo.png?1656064578646"
                  />
                </div>
              </a>
            </Link>
            <div
              className={` ${
                (router.query.vnp_TransactionStatus === "02" &&
                  router.query.vnp_TransactionStatus) ||
                orderDetail.totalPrice !== totalPrice ||
                orderDetail.orderStatus === 5
                  ? "visible"
                  : "invisible"
              } relative  text-[#000000] 
            `}
            >
              <div className="absolute top-[10%] left-0 -translate-x-[120%]">
                <ShieldCheckIcon width={70} height={70} color="#cccccc" />
              </div>
              <span className="block mt-4 mb-2  text-lg font-semibold ">
                Announce
              </span>
              <span className="mb-6 block text-sm">
                {orderDetail.totalPrice !== totalPrice &&
                  `Some of the products in the cart
                are no longer available to order.
                We apologize for this
                inconvenience.`}
                {router.query.vnp_TransactionStatus === "02" && (
                  <span>
                    Cancel the payment!
                    <br />
                    Comeback and pay whenever you like, have a good day
                  </span>
                )}
                {orderDetail.orderStatus === 5 && (
                  <span>
                    Order have been cancel!
                    <br />
                    Please take a look at other products
                  </span>
                )}
              </span>
            </div>
            <div className="text-sm text-[#000000] flex justify-between items-center my-4">
              <span>Product</span>
              <span>Quantity</span>
            </div>
            <div className="border-y border-[#ddd]  divide-y divide-[#ddd]">
              {orderList.map((item, index) => (
                <div
                  className="flex items-center space-x-6 py-4 justify-between"
                  key={index}
                >
                  <div className="relative border rounded-md overflow-hidden border-[#e5e5e5] min-w-[50px] min-h-[50px]">
                    <Link href={`/product/${item.slug}`}>
                      <a>
                        <Image
                          alt={`Memoryzone order's ${item.productName} image`}
                          layout="fill"
                          src={urlFor(item.image).url()}
                        />
                      </a>
                    </Link>
                  </div>
                  <h2 className="w-[70%] block text-sm text-[#333333]">
                    {item.productName}
                  </h2>
                  <span className="whitespace-nowrap block text-sm text-[#000000]">
                    x {item.quantity === 0 ? "Out of stock" : item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between my-6 ">
              <Link href="/cart">
                <div className="text-primary    hover:text-[#006533]  cursor-pointer flex items-center">
                  <div className="hover:first:-translate-x-2 after:bg-transparent after:absolute after:h-full after:w-24 after:top-0 after:content-[''] relative  mt-0.5 transition ease-linear ">
                    <ChevronLeftIcon width={16} height={16} />
                  </div>
                  <div className=" hover:first:-translate-x-2 transition ease-linear  ">
                    <span className="text-sm text-inherit  ">Back to cart</span>
                  </div>
                </div>
              </Link>
              <Link href="/cart">
                <button
                  className={`rounded-md bg-primary text-white px-6 py-3 text-sm hover:bg-[#006533] ${
                    totalPrice !== 0 && "invisible"
                  }`}
                >
                  Continue
                </button>
              </Link>
            </div>
            <Term />
          </div>
          <div
            className={`flex-1 pl-6 pr-28 bg-[#f8f8f8] border-l border-[#ddd] ${
              totalPrice === 0 && "opacity-70 pointer-events-none"
            }`}
          >
            <div className="max-h-[calc(100vh-480px)] scroll-smooth  overflow-y-auto py-4 ">
              <table>
                <tbody className="space-y-2">
                  {orderList.map(
                    (item, index) =>
                      item.quantity !== 0 && (
                        <tr key={index} className="flex items-center">
                          <td>
                            <div className="relative">
                              <div className=" w-[50px] h-[50px] relative overflow-hidden rounded-md border border-[#e5e5e5]">
                                <Link href={`/product/${item.slug}`}>
                                  <a>
                                    <Image
                                      alt={`Memoryzone order's ${item.productName} image`}
                                      src={urlFor(item.image).url()}
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
                            <h2 className="text-[#333333] text-sm text-left flex-1 block pl-4">
                              {item.productName}
                            </h2>
                          </td>
                          <td>
                            <span className="text-[#717171] text-sm text-right flex-1 pl-4">
                              {item.price}$
                            </span>
                          </td>
                        </tr>
                      )
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
                  {totalPrice - orderDetail.shippingPrice}$
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#717171] text-sm block">
                  Transport fee
                </span>
                <span className="text-[#717171] text-sm block">
                  {totalPrice === 0 ? "---" : orderDetail.shippingPrice}$
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center my-4">
              <span className="text-[16px] text-[#717171] font-light">
                Total
              </span>

              <span className="text-primary text-xl">{totalPrice}$</span>
            </div>
            <div className="mt-8">
              {orderDetail.orderStatus !== 5 && (
                <PaymentButton type={orderDetail.paymentMethod} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default OrderDetailsPage;

export const getServerSideProps = async (context) => {
  //get product data by slug param

  try {
    const orderDetail = await client.fetch(
      `*[_type=="order" && _id==$orderId && isPaid==false][0]
      {
       totalPrice,orderList,_id,paymentMethod,shippingPrice,orderStatus,user,
        "productImage": 
      orderList[]{
        "image": *[_type=='product' && slug.current == ^.slug][0]{image[0]}
      }
      }
      `,
      { orderId: context.query.id }
    );

    let orderList = [];
    for (let i = 0; i < orderDetail.orderList.length; i++) {
      let res = await client.fetch(
        `*[_type=='product' && slug.current ==$slug][0]{countInStock}`,
        { slug: orderDetail.orderList[i].slug }
      );

      orderList.push({
        image: orderDetail.productImage[i].image.image,
        productName: orderDetail.orderList[i].productName,
        quantity:
          orderDetail.orderList[i].quantity > res.countInStock
            ? res.countInStock
            : orderDetail.orderList[i].quantity,
        price: orderDetail.orderList[i].price,
        slug: orderDetail.orderList[i].slug,
        id: orderDetail.orderList[i]._key,
      });
    }
    let totalPrice = 0;
    orderList.map((item) => {
      totalPrice += item.price * item.quantity;
    });

    return {
      props: {
        oldOrderList: orderDetail.orderList,
        orderList,
        totalPrice: totalPrice + orderDetail.shippingPrice,
        orderDetail,
      },
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
