import Image from "next/image";
import { Layout } from ".";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/solid";

const Test = () => {
  return (
    <Layout
      removeLayout={true}
      title="Memoryzone | Checkout"
      description="Memoryzone - Professional in memory - Checkout - Payment orders "
    >
      <div className="flex">
        <div className="bg-[#f4f4f4] h-[1200px] pl-6  w-[66%]">
          <div className="px-8 py-1.5">
            <div className="relative w-56 h-14 mt-6 cursor-pointer ">
              <Link href="/">
                <a>
                  <Image
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/checkout_logo.png?1653463685615"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
            <div className="flex space-x-6 py-6 border-b border-[#ddd]">
              <div className="flex-1 ">
                <div className="flex w-full justify-between items-center mb-3">
                  <span className="font-semibold text-[#000000] text-lg">
                    Delivery information
                  </span>
                  <div>
                    <Link href="/account/login">
                      <a className="flex cursor-pointer items-cemter">
                        <UserCircleIcon
                          className="text-primary mr-1"
                          width={22}
                          height={22}
                        />
                        <span className="text-base text-primary -translate-y-[1px] ">
                          Login
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
                <form className="flex flex-col space-y-3 ">
                  <input
                    type="email"
                    placeholder="Email"
                    className="checkoutInput"
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="checkoutInput"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="checkoutInput"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="checkoutInput"
                  />
                  <div className="checkoutInput  checkoutSelectWrapper">
                    <label className="absolute border-r-1 border-red-500 block text-xs top-1 text-[#999999]">
                      Province
                    </label>
                    <select className="checkoutSelect ">
                      <option>---</option>
                      <option>Something</option>
                    </select>
                  </div>
                  <div className="checkoutInput checkoutSelectWrapper">
                    <label className="absolute text-xs top-1 text-[#999999]">
                      District
                    </label>
                    <select className="checkoutSelect ">
                      <option>---</option>
                      <option>Something</option>
                    </select>
                  </div>
                  <div className="checkoutInput checkoutSelectWrapper">
                    <label className="absolute text-xs top-1 text-[#999999]">
                      Wards
                    </label>
                    <select className="checkoutSelect ">
                      <option>---</option>
                      <option>Something</option>
                    </select>
                  </div>
                  <textarea
                    type="text"
                    className="checkoutInput"
                    placeholder="Note (Option)"
                  ></textarea>
                </form>
              </div>
              <div className="flex-1">
                <span className="font-semibold block mb-3 text-[#000000] text-lg">
                  Shipping
                </span>
                <div className="bg-[#d1ecf1] h-[44px] px-6 py-2 rounded-sm">
                  <span className="text-sm text-primary">
                    Please enter shipping information
                  </span>
                </div>
                <div>
                  <span className="font-semibold block mb-3 mt-12 text-[#000000] text-lg">
                    Payment
                  </span>
                  <div className="rounded-md border bg-white border-[#cecdcd] divide-y divide-[#cecdcd]">
                    <div className="flex justify-between items-center p-4 space-x-3   ">
                      <div className="space-x-3 flex items-center">
                        <input type="radio" className=" block " />
                        <span className="text-sm text-[#545454]">
                          Bank Transfer (VietQR) (Free of charge)
                        </span>
                      </div>
                      <Image
                        src="https://bizweb.dktcdn.net/100/329/122/files/01icon-vietqr.png?v=1639481626593"
                        width={48}
                        height={32}
                      />
                    </div>
                    <div className="flex justify-between items-center p-4 space-x-3   ">
                      <div className="space-x-3 flex items-center">
                        <input type="radio" className=" block " />
                        <span className="text-sm text-[#545454]">
                          Payment on Delivery (COD)
                        </span>
                      </div>
                      <Image
                        src="https://bizweb.dktcdn.net/100/329/122/files/02icon-cod.png?v=1639559673947"
                        width={48}
                        height={32}
                      />
                    </div>
                    <div className="flex justify-between items-center p-4 space-x-3   ">
                      <div className="space-x-3 flex items-center">
                        <input type="radio" className=" block " />
                        <span className="text-sm text-[#545454]">
                          0% interest installment payment via Visa, Master, JCB
                          cards (Order from 150 $)
                        </span>
                      </div>
                      <Image
                        src="https://bizweb.dktcdn.net/100/329/122/files/03icon-tragop-0.png?v=1639481630773"
                        width={48}
                        height={32}
                      />
                    </div>
                    <div className="flex justify-between items-center p-4 space-x-3   ">
                      <div className="space-x-3 flex items-center">
                        <input type="radio" className=" block " />
                        <span className="text-sm text-[#545454]">
                          Online payment via Visa, Master, JCB cards (Free
                          payment)
                        </span>
                      </div>
                      <Image
                        src="https://bizweb.dktcdn.net/100/329/122/files/04icon-visamaster.png?v=1639481634747"
                        width={48}
                        height={32}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="bg-red-200 h-[1200px] flex-1"></div>
      </div>
    </Layout>
  );
};

export default Test;
