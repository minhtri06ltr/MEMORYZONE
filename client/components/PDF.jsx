import Image from "next/image";
import { urlFor } from "../lib/client";

import { normalDateTime } from "../utils/format";

const PDF = ({
  wrapRef,
  datetime,
  orderDetail,
}) => {
  return (
    <div className="min-h-screen" ref={wrapRef}>
      <div className="flex justify-between items-center text-[#000000] px-10 pt-6 pb-10">
        <span>
          {datetime && normalDateTime(datetime)}
        </span>
        <span>
          Memoryzone | Thank you for your purchase
        </span>
      </div>

      <a
        href={process.env.NEXT_PUBLIC_CLIENT_URL}
        target="_blank"
        rel="noreferrer"
      >
        <div className="relative w-[225px] cursor-pointer h-[60px] mx-auto">
          <Image
            alt="Memoryzone logo"
            layout="fill"
            priority={true}
            src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/checkout_logo.png?1656064578646"
          />
        </div>
      </a>
      <div className="mt-6 space-y-4 text-center text-[#000000] ">
        <span className="block text-2xl font-semibold  ">
          Thank you for your order
        </span>
        <div className="text-[#595959] ">
          <span className="block ">
            We hope our product will meet your
            expectations. Let us know if you have
            any questions.
          </span>
          <span className="block">
            Hope we can see you again in next buy
            at Memoryzone
          </span>
        </div>
      </div>
      <div className="px-14  my-8">
        <div className="border border-[#e1e1e1] bg-[#fff] divide-y divide-[#e1e1e1]">
          <span className="px-6  text-[#000000] font-semibold block my-3">
            Order [{orderDetail._id}]
          </span>
          <div className=" scroll-smooth ">
            <table className="w-full table table-fixed">
              <tbody className="block  px-4  w-full divide-y divide-[#e1e1e1]">
                {orderDetail.orderList.map(
                  (item, index) => (
                    <tr
                      key={index}
                      className="flex items-center w-full  space-x-4 py-4 "
                    >
                      <td>
                        <div className="relative">
                          <div className=" w-[50px] h-[50px] relative overflow-hidden rounded-md border border-[#e5e5e5]">
                            <Image
                              alt="Memoryzone user's order products image"
                              src={urlFor(
                                orderDetail
                                  .productImage[
                                  index
                                ].image.image,
                              ).url()}
                              layout="fill"
                              quality={100}
                              priority={true}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="w-[80%]">
                        <span className="text-[#333333]  text-left  block ">
                          {item.productName}
                        </span>
                      </td>
                      <td className="w-[5%]">
                        <span className="text-[#000000] whitespace-nowrap   block text-right ">
                          x {item.quantity}
                        </span>
                      </td>
                      <td className="w-[15%]">
                        <span className="text-[#000000]  whitespace-nowrap  block text-right  ">
                          {item.price}$
                        </span>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
          <div className=" text-[#000000] py-4 space-y-4">
            <div className="flex items-center justify-between px-4">
              <span>Provisional</span>
              <span>
                {orderDetail.totalPrice}$
              </span>
            </div>
            <div className="flex items-center justify-between px-4">
              <span>Transport fee</span>
              <span>Free</span>
            </div>
          </div>
          <div className="flex items-center  text-[#000000] justify-between p-4">
            <span className=" text-xl">
              Total
            </span>
            <span className=" text-2xl">
              {orderDetail.totalPrice}$
            </span>
          </div>
        </div>
      </div>
      <div className="grid border text-sm border-[#e1e1e1] mx-14 px-12 py-8 mb-6 grid-cols-2 grid-rows-2 gap-y-6 gap-x-8">
        <div className="flex flex-col  space-y-4 text-[#595959]">
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
        <div className="flex flex-col  space-y-4 text-[#595959]">
          <span className="text-xl text-[#000000]">
            Delivery address
          </span>
          <span>
            {orderDetail.user
              ? `${orderDetail.user.firstName} ${orderDetail.user.lastName}`
              : orderDetail.guestName}
          </span>
          <span>
            {orderDetail.shippingAddress.address}
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
        <div className="flex flex-col  space-y-4 text-[#595959]">
          <span className="text-xl text-[#000000]">
            Payment methods
          </span>
          <span>{orderDetail.paymentMethod}</span>
        </div>
        <div className="flex flex-col   space-y-4 text-[#595959]">
          <span className="text-xl text-[#000000]">
            Shipping method
          </span>
          <span>FAST DELIVERY 24-36 HOURS</span>
        </div>
      </div>
      <span className="block cursor-pointer px-10 text-xs pb-6 text-[#000000]">
        {process.env.NEXT_PUBLIC_CLIENT_URL}
        /checkout/success/{orderDetail._id}
      </span>
    </div>
  );
};

export default PDF;
