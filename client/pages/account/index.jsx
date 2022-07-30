import { Layout, Path } from "../../components";
import {
  DeviceMobileIcon,
  OfficeBuildingIcon,
  LocationMarkerIcon,
  GlobeIcon,
  CodeIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { formatDateTime, orderStatus } from "../../utils/format";

import { cancelOrder } from "../../redux/orderSlice";
import { postData } from "../../utils/requestMethod";

const AccountPage = () => {
  const router = useRouter();
  const addressList = useSelector((state) => state.address.addressList);
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const orderList = useSelector((state) => state.order.orderList);

  useEffect(() => {
    if (
      Object.keys(account.user).length === 0 &&
      !JSON.parse(localStorage.getItem("isLogin"))
    ) {
      router.push("/account/login");
    }
  }, [Object.keys(account.user).length, router, account.user]);
  const cancelOrderHandle = async (orderId) => {
    if (confirm("Are you sure you want to cancel this order?")) {
      // Save it!

      const res = await postData("order/cancel", orderId, account.accessToken);
      if (res.success) {
        dispatch(cancelOrder(orderId));
        alert(res.message);
      } else {
        alert(res.error);
      }
    } else {
      // Do nothing!
      return;
    }
  };

  return (
    <Layout
      title="Account | Memoryzone - Professional in technology"
      description="Memoryzone account information"
    >
      <Path
        path={[
          {
            title: "Home",
            pathName: "/",
          },
          {
            title: "Account",
            pathName: "/account",
          },
        ]}
      />
      <div className="px-10 my-12 space-x-6 flex  ">
        <div className="w-3/4 pr-2">
          <h1 className="text-text text-lg block font-medium">CUSTOMER</h1>
          <span className="text-sm my-3 block font-semibold text-text ">
            Hello,{" "}
            <span className="text-primary">
              {`${account.user.firstName} ${account.user.lastName}
             `}
            </span>{" "}
            !
          </span>
          <div>
            <table className="border w-full border-[#e1e1e1]">
              <tbody className="divide-y divide-[#e1e1e1]">
                <tr className="divide-x divide-[#e1e1e1]">
                  <td className="headerOrderTable">Order</td>
                  <td className="headerOrderTable">Date</td>
                  <td className="headerOrderTable">Address</td>
                  <td className="headerOrderTable">Order Price</td>
                  <td className="headerOrderTable">Payment Status</td>
                  <td className="headerOrderTable">Status</td>
                  <td className="headerOrderTable">Action</td>
                </tr>
                {orderList.length === 0 ? (
                  <tr className="divide-x divide-[#e1e1e1]">
                    <td colSpan="6" className="text-center align-top   p-2">
                      <span className="text-sm min-h-[42px] block">
                        There is no order yet.
                      </span>
                    </td>
                  </tr>
                ) : (
                  orderList.map((item, index) => (
                    <tr key={index} className="divide-x divide-[#e1e1e1]">
                      <td className="itemOrderTable cursor-pointer hover:text-primary">
                        <Link
                          href={`/checkout/${
                            item.isPaid ? `success/${item._id}` : `${item._id}`
                          }`}
                        >
                          {item._id}
                        </Link>
                      </td>
                      <td className="itemOrderTable ">
                        {formatDateTime(item.orderAt)}
                      </td>
                      <td className="itemOrderTable ">
                        {`${item.shippingAddress.address}, ${
                          item.shippingAddress.ward.split("|")[1]
                        }, ${item.shippingAddress.district.split("|")[1]}, ${
                          item.shippingAddress.province.split("|")[1]
                        }`}
                      </td>
                      <td className="itemOrderTable ">{item.totalPrice}$</td>
                      <td className="itemOrderTable italic">
                        {item.isPaid === null || item.isPaid === false
                          ? "Unpaid"
                          : "Paid"}
                      </td>
                      <td className="itemOrderTable ">
                        {orderStatus(item.orderStatus)}
                      </td>
                      <td className="itemOrderTable align-middle">
                        {item.orderStatus !== 5 && !item.isPaid && (
                          <div className="  text-primary">
                            <XIcon
                              onClick={(e) => cancelOrderHandle(item._id)}
                              width={20}
                              height={20}
                              className="cursor-pointer translate-x-1/4 hover:text-[#d92b1f]"
                            />
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="block text-base mt-4 py-3">MY ACCOUNT</h2>
          <div className="space-y-6 text-sm mb-2">
            <div className="flex items-center ">
              <DeviceMobileIcon
                width={15}
                height={15}
                className="text-primary mr-2.5 mb-[0.25px]"
              />
              <h3>
                Phone Number:{" "}
                {addressList ? addressList[0]?.phoneNumber || "" : ""}
              </h3>
            </div>
            <div className="flex items-center ">
              <LocationMarkerIcon
                width={15}
                height={15}
                className="text-primary  mr-2.5 mb-[0.25px]"
              />
              <h3>
                Address:{" "}
                {addressList
                  ? `${addressList[0]?.address || ""}, ${
                      addressList[0]?.address || ""
                    }, ${addressList[0]?.country || ""}` || ""
                  : ""}
              </h3>
            </div>
            <div className="flex items-center">
              <OfficeBuildingIcon
                width={15}
                height={15}
                className="text-primary mr-2.5 mb-[0.25px]"
              />
              <h3>
                Company: {addressList ? addressList[0]?.company || "" : ""}
              </h3>
            </div>
            <div className="flex items-center">
              <GlobeIcon
                width={15}
                height={15}
                className="text-primary mr-2.5 "
              />
              <h3>
                Country: {addressList ? addressList[0]?.country || "" : ""}
              </h3>
            </div>
            <div className="flex items-center">
              <CodeIcon
                width={15}
                height={15}
                className="text-primary mr-2.5 mb-[0.25px]"
              />
              <h3>
                Zip Code: {addressList ? addressList[0]?.zipCode || "" : ""}
              </h3>
            </div>
          </div>
          <Link href="/account/addresses">
            <button className="rounded-sm my-4 hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary w-full border border-primary  py-2 px-8">
              Address list ({addressList?.length || 0})
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default AccountPage;
