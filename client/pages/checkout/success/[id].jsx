import {
  Layout,
  NotFound,
  PDF,
  Term,
} from "../../../components";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircleIcon,
  PrinterIcon,
} from "@heroicons/react/outline";
import ReactToPrint from "react-to-print";
import { useState, useRef } from "react";

import { useEffect } from "react";
import {
  client,
  urlFor,
} from "../../../lib/client";
import {
  getData,
  postData,
} from "../../../utils/requestMethod";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const OrderSuccessPage = ({ orderDetail }) => {
  console.log(orderDetail);
  const componentRef = useRef();
  const [datetime, setDatetime] = useState(null);
  const router = useRouter();
  const token = useSelector(
    (state) => state.account.accessToken,
  );
  useEffect(() => {
    const checkUser = async () => {
      const res = await postData(
        "order/verifyUser",
        orderDetail._id,
        token,
      );
      if (!res.success) {
        router.push("/");
      }
    };
    if (orderDetail.role === "account")
      checkUser();
    setDatetime(new Date());
  }, []);
  if (!orderDetail)
    return (
      <NotFound
        title="Payment page does not exist"
        description="The URL you entered may be expired,
deleted, or invalid. Return to home
page to continue shopping."
        layoutTitle="Payment page does not exist | Memoryzone - Professional in technology"
        layoutDescription="Sorry we can not find this payment in our data please check your order ID again or contact with admin"
      />
    );

  return (
    <Layout
      title="Thank you for your purchase at Memoryzone | Memoryzone - Professional in technology"
      description="Thanks for your purchase at Memoryzone we hope can see you again"
      removeLayout={true}
    >
      <div className="bg-[#f4f4f4] px-10 py-8 min-h-screen">
        <div>
          <Link href="/">
            <a>
              <div className="relative w-[225px] cursor-pointer h-[60px]">
                <Image
                  alt="Memoryzone logo"
                  priority={true}
                  layout="fill"
                  src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/checkout_logo.png?1656064578646"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="flex space-x-6">
          <div className="w-[60%]">
            <div className="flex items-center my-6 space-x-2">
              <div>
                <CheckCircleIcon
                  width={100}
                  height={100}
                  color="#8ec343"
                />
              </div>
              <div className="space-y-4">
                <h1 className="block text-lg text-[#000000]  font-semibold">
                  Thank you for your order
                </h1>
                <div className="text-sm text-[#595959]">
                  <h2 className="block ">
                    We hope our product will meet
                    your expectations. Let us know
                    if you have any questions.
                  </h2>
                  <h2 className="block ">
                    Hope we can see you again in
                    next buy at Memoryzone
                  </h2>
                </div>
                <button className="bg-primary hover:bg-[#006533] text-sm text-white px-8 py-3 rounded-md">
                  Show transfer information
                </button>
              </div>
            </div>
            <div className="grid ml-16 mt-10 grid-cols-2 grid-rows-2 gap-y-6 gap-x-8">
              <div className="flex flex-col text-sm space-y-4 text-[#595959]">
                <span className="text-xl text-[#000000]">
                  Purchase information
                </span>
                <span>
                  {orderDetail.user
                    ? `${orderDetail.user.firstName} ${orderDetail.user.lastName}`
                    : orderDetail.guestName}
                </span>
                <span>
                  {orderDetail.user
                    ? orderDetail.user.email
                    : orderDetail.guestEmail}
                </span>
                <span>
                  {
                    orderDetail.shippingAddress
                      .phoneNumber
                  }
                </span>
              </div>
              <div className="flex flex-col text-sm space-y-4 text-[#595959]">
                <span className="text-xl text-[#000000]">
                  Delivery address
                </span>
                <span>
                  {orderDetail.user
                    ? `${orderDetail.user.firstName} ${orderDetail.user.lastName}`
                    : orderDetail.guestName}
                </span>
                <span>
                  {
                    orderDetail.shippingAddress
                      .address
                  }
                </span>
                <span>
                  {`${
                    orderDetail.shippingAddress.ward.split(
                      "|",
                    )[1]
                  }, ${
                    orderDetail.shippingAddress.district.split(
                      "|",
                    )[1]
                  }, ${
                    orderDetail.shippingAddress.province.split(
                      "|",
                    )[1]
                  }`}
                </span>
                <span>
                  {
                    orderDetail.shippingAddress
                      .phoneNumber
                  }
                </span>
              </div>
              <div className="flex flex-col text-sm space-y-4 text-[#595959]">
                <span className="text-xl text-[#000000]">
                  Payment methods
                </span>
                <span>
                  {orderDetail.paymentMethod}
                </span>
              </div>
              <div className="flex flex-col text-sm space-y-4 text-[#595959]">
                <span className="text-xl text-[#000000]">
                  Shipping method
                </span>
                <span>
                  FAST DELIVERY 24-36 HOURS
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="border border-[#e1e1e1] bg-[#fafafa] divide-y divide-[#e1e1e1]">
              <span className="px-4  text-[#000000] text-sm font-semibold block my-2">
                Order [{orderDetail._id}] (
                {orderDetail.orderList.length})
              </span>
              <div className="max-h-[calc(100vh-480px)] scroll-smooth  overflow-y-auto p-4 ">
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
                                <Image
                                  src={urlFor(
                                    orderDetail
                                      .productImage[
                                      index
                                    ].image.image,
                                  ).url()}
                                  layout="fill"
                                  quality={100}
                                  alt={`Memoryzone success order's ${item.productName} image`}
                                />
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
              <div className="text-sm text-[#000000]">
                <div className="flex items-center justify-between p-4">
                  <span>Provisional</span>
                  <span>
                    {orderDetail.totalPrice}$
                  </span>
                </div>
                <div className="flex items-center justify-between p-4">
                  <span>Transport fee</span>
                  <span>Free</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <span className="text-[#000000] text-[16px]">
                  Total
                </span>
                <span className="text-primary text-xl">
                  {orderDetail.totalPrice}$
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-8 justify-center my-6">
          <Link href="/">
            <button className="bg-primary hover:bg-[#006533] text-lg text-white px-8 py-3 rounded-md">
              Continue shopping
            </button>
          </Link>
          <ReactToPrint
            trigger={() => {
              return (
                <div className="text-primary hover:text-[#006533] flex items-center space-x-2 cursor-pointer">
                  <div>
                    <PrinterIcon
                      color=""
                      width={35}
                      height={35}
                    />
                  </div>
                  <span className="text-xl">
                    Print
                  </span>
                </div>
              );
            }}
            documentTitle="Memoryzone - Thank for your purchase"
            content={() => {
              setDatetime(new Date());
              return componentRef.current;
            }}
          />
          <div className="hidden">
            <PDF
              wrapRef={componentRef}
              datetime={datetime}
              orderDetail={orderDetail}
            />
          </div>
        </div>
        <Term />
      </div>
    </Layout>
  );
};
export default OrderSuccessPage;

export const getServerSideProps = async (
  context,
) => {
  //get product data by slug param
  try {
    const orderDetail = await client.fetch(
      `*[_type=="order" && _id==$orderId && isPaid==true][0]
      {
       totalPrice,paymentMethod,orderList,_id,shippingAddress,_createdAt,guestName,guestEmail,
       "user": *[_type=='user' && _id == ^.user._ref ][0]{
        email,firstName  , lastName},
        "productImage": 
      orderList[]{
        "image": *[_type=='product' && slug.current == ^.slug][0]{image[0]}
      }
      }
      `,
      { orderId: context.query.id },
    );

    return {
      props: {
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
