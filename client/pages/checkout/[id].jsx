import Image from "next/image";
import {
  Layout,
  PaymentNotFound,
  Term,
} from "../../components";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/outline";

const OrderDetail = () => {
  // return <PaymentNotFound />;
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
              <span className="block my-4  text-lg font-semibold ">
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
              <div className="flex items-center space-x-6 py-4">
                <div className="relative border rounded-md overflow-hidden border-[#e5e5e5] min-w-[50px] min-h-[50px]">
                  <Image
                    layout="fill"
                    src="https://bizweb.sapocdn.net/thumb/thumb/100/329/122/products/laptop-dell-vostro-13-5310-yv5wy5.png?v=1642587230870"
                  />
                </div>
                <span className="block text-sm text-[#333333]">
                  Laptop Dell Vostro 13 5310
                  YV5WY5 (i5-11320H EVO, Iris Xe
                  Graphics, Ram 8GB DDR4, SSD
                  512GB, 13.3 Inch FHD)
                </span>
                <span className="block text-sm text-[#000000]">
                  Out of stock
                </span>
              </div>
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
                  <tr className="flex items-center">
                    <td>
                      <div className="relative">
                        <div className=" w-[50px] h-[50px] relative overflow-hidden rounded-md border border-[#e5e5e5]">
                          <Image
                            src="https://bizweb.sapocdn.net/thumb/thumb/100/329/122/products/laptop-dell-vostro-13-5310-yv5wy5.png?v=1642587230870"
                            layout="fill"
                            quality={100}
                          />
                        </div>
                        <span className="bg-primary font-semibold z-10 rounded-full -right-[0.9em] -top-[0.55em] text-xs px-1.5 py-0.5  text-white absolute">
                          12
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="text-[#333333] text-sm text-left flex-1 block pl-4">
                        Laptop Dell Vostro 13 5310
                        YV5WY5 (i5-11320H EVO,
                        Iris Xe Graphics, Ram 8GB
                        DDR4, SSD 512GB, 13.3 Inch
                        FHD)
                      </span>
                    </td>
                    <td>
                      <span className="text-[#717171] text-sm text-right flex-1 pl-4">
                        23$
                      </span>
                    </td>
                  </tr>
                  <tr className="flex items-center">
                    <td>
                      <div className="relative">
                        <div className=" w-[50px] h-[50px] relative overflow-hidden rounded-md border border-[#e5e5e5]">
                          <Image
                            src="https://bizweb.sapocdn.net/thumb/thumb/100/329/122/products/laptop-dell-vostro-13-5310-yv5wy5.png?v=1642587230870"
                            layout="fill"
                            quality={100}
                          />
                        </div>
                        <span className="bg-primary font-semibold z-10 rounded-full -right-[0.9em] -top-[0.55em] text-xs px-1.5 py-0.5  text-white absolute">
                          12
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="text-[#333333] text-sm text-left flex-1 block pl-4">
                        Laptop Dell Vostro 13 5310
                        YV5WY5 (i5-11320H EVO,
                        Iris Xe Graphics, Ram 8GB
                        DDR4, SSD 512GB, 13.3 Inch
                        FHD)
                      </span>
                    </td>
                    <td>
                      <span className="text-[#717171] text-sm text-right flex-1 pl-4">
                        23$
                      </span>
                    </td>
                  </tr>
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
                  Shipping price
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
                0$
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default OrderDetail;
