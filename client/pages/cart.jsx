import { Layout, Path } from "../components";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { numberWithCommas } from "../utils/format";

const cart = () => {
  return (
    <Layout title="Cart | Memoryzone" description="Memoryzone personal cart">
      <Path path={["Home", "Cart"]} />
      <div className="px-10">
        <span className="block text-[#323c3f] text-4xl my-12 font-semibold">
          Cart
        </span>
        <div className="">
          <table className="border m-x-auto m-y-0 border-[#ebebeb] border-collapse w-full">
            <thead>
              <tr>
                <td className=" w-[17%] cartRow  text-[#636363]">
                  Product Image
                </td>
                <td className=" w-[33%] cartRow text-[#636363]">
                  Product Name
                </td>
                <td className=" w-[17%] cartRow text-[#636363]">Unit Price</td>
                <td className=" w-[14%] cartRow text-[#636363]">Quantity</td>
                <td className=" w-[14%] cartRow text-[#636363]">Amount</td>
                <td className=" w-[8%] cartRow text-[#636363]">Action</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" cartRow ">
                  <Image
                    src="https://bizweb.dktcdn.net/thumb/small/100/329/122/products/laptop-dell-vostro-13-5310-yv5wy5.png"
                    width={98}
                    height={98}
                  />
                </td>
                <td className=" cartRow">
                  Laptop Dell Vostro 13 5310 YV5WY5 (i5-11320H EVO, Iris Xe
                  Graphics, Ram 8GB DDR4, SSD 512GB, 13.3 Inch FHD)
                </td>
                <td className="cartPrice cartRow">
                  {numberWithCommas(23423)}$
                </td>
                <td className=" cartRow">
                  <div className="border border-[#ccc] w-fit">
                    <button className="border-r border-[#ccc] font-light text-base px-3 ">
                      -
                    </button>
                    <input
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      defaultValue={1}
                      type="text"
                      className="w-12 text-center outline-none border-none"
                    />
                    <button className="border-l border-[#ccc] font-light text-base px-3">
                      +
                    </button>
                  </div>
                </td>
                <td className="cartPrice cartRow">{numberWithCommas(4522)}$</td>
                <td className=" cartRow">
                  <XIcon className="inline-block" width={15} height={15} />
                </td>
              </tr>
              <tr>
                <td className="cartRow py-6 text-right" colSpan="6">
                  Total Price:
                  <span className="cartPrice mx-6">
                    {numberWithCommas(5821)}$
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-end my-6">
          <button className="text-sm font-semibold bg-[#3d4356] text-white rounded-sm px-10 py-2 mr-3">
            KEEP SHOPPING
          </button>
          <button className="text-sm font-semibold bg-primary border border-primary hover:text-primary hover:bg-white text-white rounded-sm px-10 py-2">
            MAKE PAYMENTS
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default cart;
