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
import { useRef, useState } from "react";
import { useEffect } from "react";

const OrderSuccess = () => {
  const componentRef = useRef();
  const [currentDatetime, setCurrentDatetime] =
    useState();
  console.log(currentDatetime);
  useEffect(() => {
    setCurrentDatetime(new Date());
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
                <span>JohnSchima</span>
                <span>jhon123@gmail.com</span>
                <span>0367907374</span>
              </div>
              <div className="flex flex-col text-sm space-y-4 text-[#595959]">
                <span className="text-xl text-[#000000]">
                  Delivery address
                </span>
                <span>JohnSchima</span>
                <span>2/19</span>
                <span>
                  Phường Vĩnh Phúc, Quận Ba Đình,
                  Hà Nội
                </span>
                <span>0367907374</span>
              </div>
              <div className="flex flex-col text-sm space-y-4 text-[#595959]">
                <span className="text-xl text-[#000000]">
                  Payment methods
                </span>
                <span>Paypal</span>
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
                Order 226020 (5)
              </span>
              <div className="max-h-[calc(100vh-480px)] scroll-smooth  overflow-y-auto p-4 ">
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
                          Laptop Dell Vostro 13
                          5310 YV5WY5 (i5-11320H
                          EVO, Iris Xe Graphics,
                          Ram 8GB DDR4, SSD 512GB,
                          13.3 Inch FHD)
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
                          Laptop Dell Vostro 13
                          5310 YV5WY5 (i5-11320H
                          EVO, Iris Xe Graphics,
                          Ram 8GB DDR4, SSD 512GB,
                          13.3 Inch FHD)
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
              <div className="text-sm text-[#000000]">
                <div className="flex items-center justify-between p-4">
                  <span>Provisional</span>
                  <span>341$</span>
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
                  341$
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
              setCurrentDatetime(new Date());
              return componentRef.current;
            }}
          />
          <div className="hidden">
            <PDF
              wrapRef={componentRef}
              datetime={currentDatetime}
            />
          </div>
        </div>
        <Term />
      </div>
    </Layout>
  );
};
export default OrderSuccess;
