import Image from "next/image";

import { normalDateTime } from "../utils/format";

const PDF = ({ wrapRef, datetime }) => {
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
      >
        <div className="relative w-[225px] cursor-pointer h-[60px] mx-auto">
          <Image
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
            Order 226020
          </span>
          <div className=" scroll-smooth ">
            <table className="w-full table table-fixed">
              <tbody className="block  px-4  w-full divide-y divide-[#e1e1e1]">
                <tr className="flex items-center w-full  space-x-4 py-4 ">
                  <td>
                    <div className="relative">
                      <div className=" w-[50px] h-[50px] relative overflow-hidden rounded-md border border-[#e5e5e5]">
                        <Image
                          src="https://bizweb.sapocdn.net/thumb/thumb/100/329/122/products/laptop-dell-vostro-13-5310-yv5wy5.png?v=1642587230870"
                          layout="fill"
                          quality={100}
                          priority={true}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="w-[80%]">
                    <span className="text-[#333333]  text-left  block ">
                      Laptop Dell Vostro 13 5310
                      YV5WY5 (i5-11320H EVO, Iris
                      Xe Graphics, Ram 8GB DDR4,
                      SSD 512GB, 13.3 Inch
                      FHD)asdasdasdas asd asd asd
                      asd asd
                    </span>
                  </td>
                  <td className="w-[5%]">
                    <span className="text-[#000000] whitespace-nowrap   block text-right ">
                      x 13
                    </span>
                  </td>
                  <td className="w-[15%]">
                    <span className="text-[#000000]  whitespace-nowrap  block text-right  ">
                      223$
                    </span>
                  </td>
                </tr>
                <tr className="flex items-center w-full  space-x-4 py-4 ">
                  <td>
                    <div className="relative">
                      <div className=" w-[50px] h-[50px] relative overflow-hidden rounded-md border border-[#e5e5e5]">
                        <Image
                          src="https://bizweb.sapocdn.net/thumb/thumb/100/329/122/products/laptop-dell-vostro-13-5310-yv5wy5.png?v=1642587230870"
                          layout="fill"
                          quality={100}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="w-[80%]">
                    <span className="text-[#333333]  text-left  block ">
                      Laptop Dell Vostro 13 5310
                      YV5WY5 (i5-11320H EVO, Iris
                      Xe Graphics, Ram 8GB DDR4,
                      SSD 512GB, 13.3 Inch FHD)
                    </span>
                  </td>
                  <td className="w-[5%]">
                    <span className="text-[#000000] whitespace-nowrap   block text-right ">
                      x 13
                    </span>
                  </td>
                  <td className="w-[15%]">
                    <span className="text-[#000000]  whitespace-nowrap  block text-right  ">
                      223$
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" text-[#000000] py-4 space-y-4">
            <div className="flex items-center justify-between px-4">
              <span>Provisional</span>
              <span>341$</span>
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
              341$
            </span>
          </div>
        </div>
      </div>
      <div className="grid border text-sm border-[#e1e1e1] mx-14 px-4 py-6 mb-6 grid-cols-2 grid-rows-2 gap-y-6 gap-x-8">
        <div className="flex flex-col  space-y-4 text-[#595959]">
          <span className="text-xl text-[#000000]">
            Purchase information
          </span>
          <span>JohnSchima</span>
          <span>jhon123@gmail.com</span>
          <span>0367907374</span>
        </div>
        <div className="flex flex-col  space-y-4 text-[#595959]">
          <span className="text-xl text-[#000000]">
            Delivery address
          </span>
          <span>JohnSchima</span>
          <span>2/19</span>
          <span>
            Phường Vĩnh Phúc, Quận Ba Đình, Hà Nội
          </span>
          <span>0367907374</span>
        </div>
        <div className="flex flex-col  space-y-4 text-[#595959]">
          <span className="text-xl text-[#000000]">
            Payment methods
          </span>
          <span>Paypal</span>
        </div>
        <div className="flex flex-col  space-y-4 text-[#595959]">
          <span className="text-xl text-[#000000]">
            Shipping method
          </span>
          <span>FAST DELIVERY 24-36 HOURS</span>
        </div>
      </div>
      <span className="block cursor-pointer px-10 text-sm pb-6 text-[#000000]">
        {process.env.NEXT_PUBLIC_CLIENT_URL}
        /checkout/success/id
      </span>
    </div>
  );
};

export default PDF;
