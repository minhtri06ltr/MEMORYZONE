import Image from "next/image";
import { Layout, Term } from "../../components";
import Link from "next/link";
import {
  UserCircleIcon,
  ChevronLeftIcon,
} from "@heroicons/react/solid";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { client, urlFor } from "../../lib/client";
import {
  formatOrderList,
  numberWithCommas,
} from "../../utils/format";
import { useEffect, useState } from "react";

import { LogoutIcon } from "@heroicons/react/outline";
import { logout } from "../../redux/accountSlice";
import { validateEmail } from "../../utils/validate";
import { updateCartHandle } from "../../utils/update";
import { postData } from "../../utils/requestMethod";
import { addOrder } from "../../redux/orderSlice";
import { clearCart } from "../../redux/cartSlice";

import { useRouter } from "next/router";
import { loadingNotify } from "../../redux/notifySlice";

const CheckoutPage = ({ provinceList }) => {
  const router = useRouter();
  const [shippingPrice, setShippingPrice] =
    useState(null);
  const cart = useSelector((state) => state.cart);
  const addressList = useSelector(
    (state) => state.address.addressList,
  );
  const [allow, setAllow] = useState(true);
  const account = useSelector(
    (state) => state.account,
  );
  const dispatch = useDispatch();
  const [districtList, setDistrictList] =
    useState([]);
  const [wardList, setWardList] = useState([]);
  const [checkoutForm, setCheckoutForm] =
    useState({
      province: "",
      district: "",
      ward: "",
      email: "",
      fullName: "",
      address: "",
      phoneNumber: "",
      paymentMethod: "",
    });
  console.log(checkoutForm);
  useEffect(() => {
    try {
      const getDistrict = async () => {
        const res = await fetch(
          `https://online-gateway.ghn.vn/shiip/public-api/master-data/district`,
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
              token:
                process.env.NEXT_PUBLIC_GHN_API,
            },
            body: JSON.stringify({
              province_id: parseInt(
                checkoutForm.province.split(
                  " | ",
                )[0],
              ),
            }),
          },
        );
        const formatRes = await res.json();
        console.log(formatRes);
        setDistrictList(formatRes.data);
        setCheckoutForm({
          ...checkoutForm,
          district: "",
          ward: "",
        });
      };
      if (checkoutForm.province !== "") {
        getDistrict();
      }
    } catch (error) {
      alert(error.message);
    }
  }, [checkoutForm.province]);
  useEffect(() => {
    try {
      const getWard = async () => {
        const res = await fetch(
          `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token:
                process.env.NEXT_PUBLIC_GHN_API,
            },
            body: JSON.stringify({
              district_id: parseInt(
                checkoutForm.district.split(
                  " | ",
                )[0],
              ),
            }),
          },
        );
        const formatRes = await res.json();

        setWardList(formatRes.data);
      };
      if (checkoutForm.district !== "") {
        getWard();
      }
    } catch (error) {
      alert(error.message);
    }
  }, [checkoutForm.district]);
  useEffect(() => {
    try {
      const getShippingPrice = async () => {
        dispatch(loadingNotify(true));
        console.log("test");
        const res = await fetch(
          "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token:
                process.env.NEXT_PUBLIC_GHN_API,
              shop_id:
                process.env.NEXT_PUBLIC_SHOP_ID,
            },
            body: JSON.stringify({
              service_type_id: 2,
              insurance_value: cart.total,
              coupon: null,
              from_district_id: 1459,
              to_district_id: parseInt(
                checkoutForm.district.split(
                  " | ",
                )[0],
              ),
              to_ward_code:
                checkoutForm.ward.split(" | ")[0],

              height: 50,
              length: 20,
              weight: 1000,
              width: 20,
            }),
          },
        );
        const formatRes = await res.json();
        console.log(formatRes);
        setShippingPrice(
          Math.round(formatRes.data.total / 5000),
        );
        dispatch(loadingNotify(false));
      };
      if (checkoutForm.ward !== "")
        getShippingPrice();
    } catch (error) {
      alert(error.message);
    }
  }, [checkoutForm.ward]);
  const checkoutFormHandle = (e) => {
    console.log(e.target.name);

    setCheckoutForm({
      ...checkoutForm,
      [e.target.name]: e.target.value,
    });
  };
  const checkoutHandle = async (e) => {
    e.preventDefault();
    if (
      checkoutForm.address === "" ||
      checkoutForm.email === "" ||
      checkoutForm.phoneNumber === "" ||
      checkoutForm.fullName === "" ||
      checkoutForm.province === ""
    ) {
      alert("Please fill all required fields");
      return;
    }
    if (cart.products.length === 0) {
      alert(
        "Can't find any product in your order",
      );
      return;
    }
    if (!validateEmail(checkoutForm.email)) {
      alert("Invalid email");
      return;
    }
    const cartLocal = JSON.parse(
      localStorage.getItem("__memoryzone__cart"),
    );
    updateCartHandle(dispatch, cartLocal);

    if (
      account.accessToken !== "" &&
      account.accessToken !== undefined &&
      account.accessToken !== null
    ) {
      try {
        const res = await postData(
          "order/create",
          {
            ...checkoutForm,
            products: cart.products,
            total: cart.total + shippingPrice,
            isPaid: false,
            shippingPrice: shippingPrice,
            orderAt: new Date(),
          },
          account.accessToken,
        );
        if (!res.success) {
          console.log(res.error);
          alert(res.error);
        } else {
          router.push(
            `/checkout/${res.returnOrder._id}`,
          );
          dispatch(clearCart());

          dispatch(
            addOrder({
              _id: res.returnOrder._id,
              orderAt: res.returnOrder.orderAt,
              orderStatus:
                res.returnOrder.orderStatus,
              shippingAddress:
                res.returnOrder.shippingAddress,
              totalPrice:
                res.returnOrder.totalPrice,
              isPaid: res.returnOrder.isPaid,
            }),
          );
        }
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    } else {
      await client
        .create({
          role: "guest", // --
          guestEmail: checkoutForm.email, //--
          guestName: checkoutForm.fullName,
          _type: "order",
          shippingAddress: {
            _type: "shippingAddress",
            address: checkoutForm.address,
            phoneNumber: checkoutForm.phoneNumber,
            province: checkoutForm.province,
            district: checkoutForm.district,
            ward: checkoutForm.ward,
            note: checkoutForm.note,
          },
          orderStatus: 0,
          paymentMethod:
            checkoutForm.paymentMethod,
          orderAt: new Date(),
          totalPrice: cart.total + shippingPrice,
          isPaid: false,
          shippingPrice: shippingPrice,
          orderList: formatOrderList(
            cart.products,
          ),
        })
        .then((res) => {
          router.push(`/checkout/${res._id}`);
          dispatch(clearCart());
        })
        .catch((error) => {
          console.log(error.message);
          alert(error.message);
        });
    }
  };
  useEffect(() => {
    if (Object.keys(account.user).length !== 0) {
      setCheckoutForm({
        ...checkoutForm,
        email: account.user.email,
        fullName: `${account.user.firstName} ${account.user.lastName}`,
      });
      setAllow(false);
    }
  }, [
    Object.keys(account.user).length,
    account.user,
  ]);
  const handleAddressList = (e) => {
    console.log(e.target.value);
    if (e.target.value === "clearInfo") {
      setCheckoutForm({
        ...checkoutForm,
        province: "",
        district: "",
        ward: "",
        fullName: "",
        address: "",
        phoneNumber: "",
      });
      return;
    }
    setCheckoutForm({
      ...checkoutForm,
      fullName: `${
        addressList[e.target.value].firstName
      } ${addressList[e.target.value].lastName}`,
      phoneNumber:
        addressList[e.target.value].phoneNumber,
      address:
        addressList[e.target.value].address,
    });
  };
  return (
    <Layout
      removeLayout={true}
      title="Checkout | Memoryzone - Professional in technology"
      description="Memoryzone - Professional in technology - Checkout - Payment orders "
    >
      {cart.quantity === 0 ? (
        <Link href="/">
          <span className="mt-12 cursor-pointer hover:text-primary block text-center text-text text-md ">
            You don&apos;t have any product in
            cart yet! Please choose at least one
            product at shop
          </span>
        </Link>
      ) : (
        <div className="flex lg:flex-row limitScreen flex-col-reverse min-h-screen">
          <div className="bg-[#f4f4f4]  w-full  lg:w-[66%]">
            <div className=" lg:px-8 py-1.5">
              <div className=" mt-6 cursor-pointer ">
                <Link href="/">
                  <div className="relative w-56 h-14">
                    <Image
                      alt="Memoryzone checkout page logo"
                      priority
                      quality={100}
                      src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/checkout_logo.png?1653463685615"
                      layout="fill"
                    />
                  </div>
                </Link>
              </div>
              <div>
                <form
                  id="checkout"
                  onSubmit={checkoutHandle}
                  className="flex space-x-6 py-6 "
                >
                  <div className="flex-1 ">
                    <div className="flex w-full justify-between items-center mb-3">
                      <h1 className="font-semibold text-[#000000] text-lg">
                        Delivery information
                      </h1>
                      <div>
                        {allow ? (
                          <Link
                            href={{
                              pathname:
                                "/account/login",
                              query: {
                                return:
                                  "checkout",
                              },
                            }}
                          >
                            <div className="flex cursor-pointer items-center">
                              <UserCircleIcon
                                className="text-primary mr-1"
                                width={22}
                                height={22}
                              />
                              <span className="text-sm text-primary translate-y-[0.5px] ">
                                Login
                              </span>
                            </div>
                          </Link>
                        ) : (
                          <div
                            onClick={() => {
                              dispatch(logout());
                              setAllow(true);
                              localStorage.setItem(
                                "isLogin",
                                false,
                              );
                            }}
                            className="flex cursor-pointer items-center"
                          >
                            <LogoutIcon
                              className="text-primary mr-1"
                              width={22}
                              height={22}
                            />
                            <span className="text-sm text-primary translate-y-[0.5px] ">
                              Logout
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col space-y-3 ">
                      {Object.keys(account.user)
                        .length !== 0 && (
                        <div className="checkoutInput  checkoutSelectWrapper">
                          <label
                            htmlFor="province"
                            className="absolute border-r-1 border-red-500 block text-xs top-1 text-[#999999]"
                          >
                            Address List
                          </label>
                          <select
                            name="addressList"
                            id="addressList"
                            className="checkoutSelect"
                            defaultValue="clearInfo"
                            onChange={
                              handleAddressList
                            }
                          >
                            <option value="clearInfo">
                              Other address...
                            </option>
                            {addressList.map(
                              (item, index) => (
                                <option
                                  key={index}
                                  value={index}
                                >
                                  {item.firstName}
                                  ,{" "}
                                  {item.lastName},{" "}
                                  {item.address}
                                </option>
                              ),
                            )}
                          </select>
                        </div>
                      )}

                      <input
                        onChange={
                          checkoutFormHandle
                        }
                        name="email"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        type="email"
                        value={checkoutForm.email}
                        placeholder="Email"
                        disabled={!allow && true}
                        className={`checkoutInput ${
                          !allow &&
                          "cursor-not-allowed bg-[#eee]"
                        }`}
                      />
                      <input
                        required
                        type={`${
                          account.user.length ===
                          0
                            ? "hidden"
                            : "text"
                        }`}
                        onChange={
                          checkoutFormHandle
                        }
                        name="fullName"
                        placeholder="Full Name"
                        value={
                          checkoutForm.fullName
                        }
                        className="checkoutInput"
                      />
                      <input
                        type="tel"
                        onChange={
                          checkoutFormHandle
                        }
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="checkoutInput"
                        pattern="(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b"
                        value={
                          checkoutForm.phoneNumber
                        }
                        required
                      />
                      <input
                        onChange={
                          checkoutFormHandle
                        }
                        name="address"
                        type="text"
                        required
                        value={
                          checkoutForm.address
                        }
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
                          required
                          value={
                            checkoutForm.province
                          }
                          name="province"
                          id="province"
                          className="checkoutSelect required"
                          onChange={
                            checkoutFormHandle
                          }
                        >
                          {checkoutForm.province ===
                            "" && (
                            <option
                              value=""
                              disabled
                            >
                              ---
                            </option>
                          )}
                          {provinceList.data.map(
                            (item, index) => (
                              <option
                                key={index}
                                value={`${item.ProvinceID} | ${item.ProvinceName}`}
                              >
                                {
                                  item.ProvinceName
                                }
                              </option>
                            ),
                          )}
                        </select>
                      </div>
                      <div
                        className={`checkoutInput checkoutSelectWrapper ${
                          checkoutForm.province ===
                            "" && "bg-[#eee]"
                        }`}
                      >
                        <label
                          htmlFor="district"
                          className="absolute z-10 text-xs top-1 text-[#999999]"
                        >
                          District
                        </label>
                        <select
                          value={
                            checkoutForm.district
                          }
                          disabled={
                            checkoutForm.province ===
                              "" && true
                          }
                          className="checkoutSelect  bg-inherit required"
                          name="district"
                          id="district"
                          onChange={
                            checkoutFormHandle
                          }
                        >
                          {checkoutForm.district ===
                            "" && (
                            <option value="">
                              ---
                            </option>
                          )}
                          {districtList.map(
                            (item, index) => (
                              <option
                                key={index}
                                value={`${item.DistrictID} | ${item.DistrictName}`}
                              >
                                {
                                  item.DistrictName
                                }
                              </option>
                            ),
                          )}
                        </select>
                      </div>
                      <div
                        className={`checkoutInput  checkoutSelectWrapper ${
                          checkoutForm.district ===
                            "" && "bg-[#eee]"
                        }`}
                      >
                        <label className="absolute z-10 text-xs top-1 text-[#999999]">
                          Wards
                        </label>
                        <select
                          value={
                            checkoutForm.ward
                          }
                          disabled={
                            checkoutForm.district ===
                              "" && true
                          }
                          className="checkoutSelect bg-inherit"
                          id="ward"
                          name="ward"
                          onChange={
                            checkoutFormHandle
                          }
                        >
                          {checkoutForm.ward ===
                            "" && (
                            <option value="">
                              ---
                            </option>
                          )}
                          {wardList.map(
                            (item, index) => (
                              <option
                                key={index}
                                value={`${item.WardCode} | ${item.WardName}`}
                              >
                                {item.WardName}
                              </option>
                            ),
                          )}
                        </select>
                      </div>
                      <textarea
                        type="text"
                        className="checkoutInput min-h-[44px] overflow-y-hidden"
                        placeholder="Note (Option)"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold block mb-3 text-[#000000] text-lg">
                      Shipping
                    </span>
                    <div
                      className={`${
                        shippingPrice
                          ? "bg-white border border-[#d9d9d9] py-3"
                          : "bg-[#d1ecf1]"
                      }  px-6 py-2 rounded-md`}
                    >
                      {shippingPrice ? (
                        <div className="text-sm flex justify-between items-center text-[#545454]">
                          <div>
                            <span className="block">
                              Economical delivery
                            </span>
                            <span className="block">
                              (Standard)
                            </span>
                          </div>
                          <span>
                            {shippingPrice}$
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm text-primary">
                          Please enter shipping
                          information
                        </span>
                      )}
                    </div>
                    <div>
                      <span className="font-semibold block mb-3 mt-12 text-[#000000] text-lg">
                        Payment
                      </span>

                      <div className="rounded-md border bg-white border-[#cecdcd] divide-y divide-[#cecdcd]">
                        <div className="checkoutInfo">
                          <div className="space-x-3 flex items-center">
                            <input
                              type="radio"
                              className=" block"
                              name="paymentMethod"
                              required
                              value="Paypal"
                              onChange={
                                checkoutFormHandle
                              }
                            />
                            <span className="text-sm text-[#545454]">
                              Pay using Paypal
                              (Fast, easy and
                              secure)
                            </span>
                          </div>
                          <Image
                            alt="Memoryzone  Pay using Paypal
                            (Fast, easy and
                            secure)"
                            src="https://thumbs.dreamstime.com/b/paypal-logo-printed-paper-chisinau-moldova-september-internet-based-digital-money-transfer-service-128373487.jpg"
                            width={48}
                            height={32}
                            objectFit="contain"
                          />
                        </div>
                        <div className="checkoutInfo">
                          <div className="space-x-3 flex items-center">
                            <input
                              type="radio"
                              className=" block "
                              name="paymentMethod"
                              onChange={
                                checkoutFormHandle
                              }
                              value="COD"
                            />
                            <span className="text-sm text-[#545454]">
                              Payment on Delivery
                              (COD)
                            </span>
                          </div>
                          <Image
                            alt="Memoryzone  Payment on Delivery (COD)"
                            src="https://bizweb.dktcdn.net/100/329/122/files/02icon-cod.png?v=1639559673947"
                            width={48}
                            height={32}
                            objectFit="contain"
                          />
                        </div>
                        <div className="checkoutInfo">
                          <div className="space-x-3 flex items-center">
                            <input
                              type="radio"
                              className=" block "
                              name="paymentMethod"
                              onChange={
                                checkoutFormHandle
                              }
                              value="VNPay"
                            />
                            <span className="text-sm text-[#545454]">
                              VNPay Family wallet
                              (Make life simpler)
                            </span>
                          </div>
                          <Image
                            alt="Memoryzone  VNPay Family wallet
                            (Make life simpler)"
                            src="https://soneku.com/wp-content/uploads/2021/11/vi-vnpay.png"
                            width={48}
                            height={32}
                            objectFit="contain"
                            quality={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <Term />
            </div>
          </div>
          <div className="bg-[#fafafa] border-l border-[#e1e1e1]  flex-1">
            <div className="px-6 py-4 border-b border-[#e1e1e1]">
              <span className="font-semibold text-[#000000] text-lg">
                {`Order (${cart.quantity} ${
                  cart.quantity > 1
                    ? "products"
                    : "product"
                })`}
              </span>
            </div>
            <div className=" px-6 ">
              <div className="max-h-[calc(100vh-480px)] border-b scroll-smooth border-[#e1e1e1] overflow-y-auto py-4 ">
                <table>
                  <tbody className="space-y-2">
                    {cart.products.map(
                      (item, index) => (
                        <tr
                          key={index}
                          className="flex items-center"
                        >
                          <td>
                            <div className="relative">
                              <div className=" w-[50px] h-[50px] relative overflow-hidden rounded-md  border border-[#e5e5e5]">
                                <Image
                                  src={urlFor(
                                    item.img,
                                  ).url()}
                                  layout="fill"
                                  quality={100}
                                  alt={`Memoryzone order's products ${item.name}`}
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
                      ),
                    )}
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
                  <span>
                    {numberWithCommas(cart.total)}
                    $
                  </span>
                </div>
                <div className="text-[#717171] text-sm flex items-center justify-between">
                  <span>Transport fee</span>
                  <span>
                    {shippingPrice
                      ? shippingPrice
                      : "0"}
                    $
                  </span>
                </div>
              </div>
              <div className="py-4">
                <div className=" flex items-center justify-between">
                  <span className="text-base text-[#717171]">
                    Total
                  </span>
                  <span className="text-xl text-primary">
                    {shippingPrice
                      ? numberWithCommas(
                          cart.total +
                            shippingPrice,
                        )
                      : numberWithCommas(
                          cart.total,
                        )}
                    $
                  </span>
                </div>
                <div className="space-y-3 flex items-center  justify-between">
                  <Link href="/cart">
                    <div>
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
                    </div>
                  </Link>

                  <button
                    type="submit"
                    form="checkout"
                    value="checkout"
                    className="rounded-md text-white text-sm bg-primary py-3 px-8"
                  >
                    ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CheckoutPage;
export async function getStaticProps() {
  try {
    const resProvince = await fetch(
      "https://online-gateway.ghn.vn/shiip/public-api/master-data/province",
      {
        method: "GET",
        headers: {
          token: process.env.NEXT_PUBLIC_GHN_API,
        },
      },
    );
    const provinceList = await resProvince.json();
    return {
      props: {
        provinceList: provinceList,
      },
    };
  } catch (error) {
    return {
      props: {
        provinceList: null,
      },
    };
  }
}
