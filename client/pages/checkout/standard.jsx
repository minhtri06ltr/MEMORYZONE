import Image from "next/image";
import { Layout, PaypalButton } from "../../components";
import Link from "next/link";
import { UserCircleIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { urlFor } from "../../lib/client";
import { numberWithCommas } from "../../utils/format";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const standard = ({ provinceList }) => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  const [districtList, setDistrictList] = useState([]);
  const [wardList, setWardList] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({
    province: "",
    district: "",
    ward: "",
    paymentMethod: 0,
  });

  useEffect(() => {
    const getDistrict = async () => {
      const res = await fetch(
        `https://vapi.vnappmob.com/api/province/district/${
          checkoutForm.province.split("|")[0]
        }`,
        {
          method: "GET",
        }
      );
      const formatRes = await res.json();
      setDistrictList(formatRes.results);
    };
    if (checkoutForm.province !== "") {
      getDistrict();
    }
  }, [checkoutForm.province]);
  useEffect(() => {
    const getWard = async () => {
      const res = await fetch(
        `https://vapi.vnappmob.com/api/province/ward/${
          checkoutForm.district.split("|")[0]
        }`,
        {
          method: "GET",
        }
      );
      const formatRes = await res.json();

      setWardList(formatRes.results);
    };
    if (checkoutForm.district !== "") {
      getWard();
    }
  }, [checkoutForm.district]);
  const checkoutFormHandle = (e) => {
    setCheckoutForm({
      ...checkoutForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout
      removeLayout={true}
      title="Memoryzone | Standard Checkout"
      description="Memoryzone - Professional in memory - Checkout - Payment orders "
    >
      {cart.quantity === 0 ? (
        <h1 onClick={() => router.push("/")} className={``}>
          Return to cart
        </h1>
      ) : (
        <div className="flex">
          <div className="bg-[#f4f4f4]  pl-6  w-[66%]">
            <div className="px-8 py-1.5">
              <div className="relative w-56 h-14 mt-6 cursor-pointer ">
                <Link href="/">
                  <a>
                    <Image
                      alt="Memoryzone checkout page logo"
                      quanlity={100}
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
                          <span className="text-sm text-primary translate-y-[0.5px] ">
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
                      <label
                        htmlFor="province"
                        className="absolute border-r-1 border-red-500 block text-xs top-1 text-[#999999]"
                      >
                        Province
                      </label>
                      <select
                        name="province"
                        id="province"
                        className="checkoutSelect"
                        onChange={checkoutFormHandle}
                      >
                        {checkoutForm.province === "" && <option>---</option>}
                        {provinceList.results.map((item, index) => (
                          <option
                            key={index}
                            value={`${item.province_id} | ${item.province_name}`}
                          >
                            {item.province_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="checkoutInput checkoutSelectWrapper">
                      <label
                        htmlFor="district"
                        className="absolute z-10 text-xs top-1 text-[#999999]"
                      >
                        District
                      </label>
                      <select
                        disabled={checkoutForm.province === "" && true}
                        className="checkoutSelect"
                        name="district"
                        id="district"
                        onChange={checkoutFormHandle}
                      >
                        {checkoutForm.district === "" && (
                          <option value="Empty">---</option>
                        )}
                        {districtList.map((item, index) => (
                          <option
                            key={index}
                            value={`${item.district_id} | ${item.district_name}`}
                          >
                            {item.district_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="checkoutInput checkoutSelectWrapper">
                      <label className="absolute z-10 text-xs top-1 text-[#999999]">
                        Wards
                      </label>
                      <select
                        disabled={checkoutForm.district === "" && true}
                        className="checkoutSelect"
                        id="ward"
                        name="ward"
                        onChange={checkoutFormHandle}
                      >
                        {checkoutForm.ward === "" && (
                          <option value="Empty">---</option>
                        )}
                        {wardList.map((item, index) => (
                          <option
                            key={index}
                            value={`${item.ward_id} | ${item.ward_name}`}
                          >
                            {item.ward_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <textarea
                      type="text"
                      className="checkoutInput min-h-[44px] overflow-y-hidden"
                      placeholder="Note (Option)"
                    ></textarea>
                  </form>
                </div>
                <div className="flex-1">
                  <span className="font-semibold block mb-3 text-[#000000] text-lg">
                    Shipping
                  </span>
                  <div className="bg-[#d1ecf1] h-[44px] px-6 py-2 rounded-md">
                    <span className="text-sm text-primary">
                      Please enter shipping information
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-3 mt-12 text-[#000000] text-lg">
                      Payment
                    </span>
                    <div className="rounded-md border bg-white border-[#cecdcd] divide-y divide-[#cecdcd]">
                      <div className="checkoutInfo">
                        <div className="space-x-3 flex items-center">
                          <input type="radio" className=" block " />
                          <span className="text-sm text-[#545454]">
                            Bank Transfer (VietQR) (Free of charge)
                          </span>
                        </div>
                        <Image
                          atl="Memoryzone Bank Transfer (VietQR) (Free of charge)"
                          src="https://bizweb.dktcdn.net/100/329/122/files/01icon-vietqr.png?v=1639481626593"
                          width={48}
                          height={32}
                        />
                      </div>
                      <div className="checkoutInfo">
                        <div className="space-x-3 flex items-center">
                          <input type="radio" className=" block " />
                          <span className="text-sm text-[#545454]">
                            Payment on Delivery (COD)
                          </span>
                        </div>
                        <Image
                          atl="Memoryzone  Payment on Delivery (COD)"
                          src="https://bizweb.dktcdn.net/100/329/122/files/02icon-cod.png?v=1639559673947"
                          width={48}
                          height={32}
                        />
                      </div>
                      <div className="checkoutInfo">
                        <div className="space-x-3 flex items-center">
                          <input type="radio" className=" block " />
                          <span className="text-sm text-[#545454]">
                            0% interest installment payment via Visa, Master,
                            JCB cards (Order from 150 $)
                          </span>
                        </div>
                        <Image
                          atl="Memoryzone  0% interest installment payment via Visa, Master, JCB
                    cards (Order from 150 $)"
                          src="https://bizweb.dktcdn.net/100/329/122/files/03icon-tragop-0.png?v=1639481630773"
                          width={48}
                          height={32}
                        />
                      </div>
                      <div className="checkoutInfo">
                        <div className="space-x-3 flex items-center">
                          <input type="radio" className=" block " />
                          <span className="text-sm text-[#545454]">
                            Online payment via Visa, Master, JCB cards (Free
                            payment)
                          </span>
                        </div>
                        <Image
                          alt="Memoryzone    Online payment via Visa, Master, JCB cards (Free
                      payment)"
                          src="https://bizweb.dktcdn.net/100/329/122/files/04icon-visamaster.png?v=1639481634747"
                          width={48}
                          height={32}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="cursor-pointer text-sm text-right text-primary block hover:text-[#006533] py-3">
                  Terms of use
                </span>
                <div className="text-right pb-6">
                  <span className="text-primary text-sm font-semibold block">
                    Please keep an eye on your email to receive updates on your
                    order, including the shipping unit and the waybill number.
                  </span>
                  <span className="text-sm block">
                    Due to the impact of the Covid-19 epidemic, some areas may
                    receive goods later than expected. Thank you for your
                    understanding!
                  </span>
                  <span className="text-sm block">
                    ** You can choose to pay in advance via bank transfer for
                    contactless delivery.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fafafa] border-l border-[#e1e1e1]  flex-1">
            <div className="px-6 py-4 border-b border-[#e1e1e1]">
              <span className="font-semibold text-[#000000] text-lg">
                {`Order (${cart.quantity} ${
                  cart.quanlity > 1 ? "products" : "product"
                })`}
              </span>
            </div>
            <div className=" px-6 ">
              <div className="max-h-[calc(100vh-480px)] border-b scroll-smooth border-[#e1e1e1] overflow-y-auto py-4 ">
                <table>
                  <tbody>
                    {cart.products.map((item, index) => (
                      <tr key={index} className="flex items-center">
                        <td>
                          <div className="relative">
                            <div className=" w-[50px] h-[50px] relative overflow-hidden rounded-md bg-white border border-[#e5e5e5]">
                              <Image
                                src={urlFor(item.img).url()}
                                layout="fill"
                                quality={100}
                                atl={`Memoryzone checkout products: ${item.name}`}
                              />
                            </div>
                            <span className="bg-primary font-semibold z-10 rounded-full -right-[0.9em] -top-[0.55em] text-xs px-1.5 py-0.5  text-white absolute">
                              {item.quantity}
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className="text-[#333333] text-sm text-left flex-1 block pl-4">
                            {item.name}
                          </span>
                        </td>
                        <td>
                          <span className="text-[#717171] text-sm text-right flex-1 pl-4">
                            {item.price}$
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="space-x-3 flex items-center border-b border-[#e1e1e1] justify-center py-5">
                <input
                  type="text"
                  className="checkoutInput flex-1"
                  placeholder="Discount code"
                />
                <button className="rounded-md text-white text-sm bg-[#63b48c] py-3 px-8">
                  Apply
                </button>
              </div>
              <div className=" border-b border-[#e1e1e1] py-5 space-y-4">
                <div className="text-[#717171] text-sm flex items-center justify-between">
                  <span>Provisional</span>
                  <span>{numberWithCommas(cart.total)}$</span>
                </div>
                <div className="text-[#717171] text-sm flex items-center justify-between">
                  <span>Shipping price</span>
                  <span>0$</span>
                </div>
              </div>
              <div className="py-4">
                <div className=" flex items-center justify-between">
                  <span className="text-base text-[#717171]">Total</span>
                  <span className="text-xl text-primary">
                    {numberWithCommas(cart.total)}$
                  </span>
                </div>
                <div className="space-y-3 flex items-center  justify-between">
                  <Link href="/cart">
                    <a>
                      <div className="text-primary cursor-pointer flex items-center">
                        <ChevronLeftIcon width={20} height={20} />
                        <span className="text-sm text-inerhit">
                          Back to cart
                        </span>
                      </div>
                    </a>
                  </Link>
                  <button className="rounded-md text-white text-sm bg-primary py-3 px-8">
                    ORDER
                  </button>
                </div>
                <div className="mt-8 space-y-4">
                  <div>
                    <PaypalButton />
                  </div>
                  <div>stripe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default standard;
export async function getStaticProps() {
  try {
    const resProvince = await fetch("https://vapi.vnappmob.com/api/province");
    const provinceList = await resProvince.json();
    return {
      props: {
        provinceList: provinceList,
      },
    };
  } catch (error) {
    return {
      provinceList: null,
    };
  }
}
