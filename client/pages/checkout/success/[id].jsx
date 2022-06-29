import {
  Layout,
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
import { normalDateTime } from "../../../utils/format";
import { useEffect } from "react";
import {
  client,
  urlFor,
} from "../../../lib/client";

const OrderSuccess = ({ orderDetail }) => {
  console.log(orderDetail);
  const componentRef = useRef();
  const [datetime, setDatetime] = useState(null);
  useEffect(() => {
    setDatetime(new Date());
  }, []);
  return (
    <Layout
      title="Memoryzone | Thank you for your purchase at Memoryzone"
      description="Thanks for your purchase at Memoryzone we hope can see you again"
      removeLayout={true}
    >
      <div className="bg-[#f4f4f4] px-10 py-8 min-h-screen">
        <div>
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
                <span className="block text-lg text-[#000000]  font-semibold">
                  Thank you for your order
                </span>
                <div className="text-sm text-[#595959]">
                  <span className="block ">
                    We hope our product will meet
                    your expectations. Let us know
                    if you have any questions.
                  </span>
                  <span className="block ">
                    Hope we can see you again in
                    next buy at Memoryzone
                  </span>
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
                  {orderDetail.user.fullName}
                </span>
                <span>
                  {orderDetail.user.email}
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
                  {orderDetail.user.fullName}
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
          <button className="bg-primary hover:bg-[#006533] text-lg text-white px-8 py-3 rounded-md">
            Continue shopping
          </button>
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
export default OrderSuccess;
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
      `*[_type=="order" && _id==$orderId && isPaid==true][0]
      {
       totalPrice,paymentMethod,orderList,_id,shippingAddress,_createdAt,
        "user":*[_type=='user' && _ref== user._ref][0]{
        email,"fullName":firstName+" " +lastName
      },
        "productImage": 
      orderList[]{
        "image": *[_type=='product' && slug.current == ^.slug][0]{image[0]}
      }
      }
      `,
      { orderId: id },
    );

    return {
      props: {
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
