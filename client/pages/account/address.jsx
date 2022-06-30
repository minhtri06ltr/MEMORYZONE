import {
  AddressItem,
  Layout,
  Path,
} from "../../components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";

const address = () => {
  const [openAddressForm, setOpenAddressForm] =
    useState(false);
  const [addressForm, setAddressForm] = useState({
    lastName: "",
    firstName: "",
    company: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    phoneNumber: "",
  });

  const router = useRouter();
  const user = useSelector(
    (state) => state.account.user,
  );
  useEffect(() => {
    if (
      Object.keys(user).length === 0 &&
      !JSON.parse(localStorage.getItem("isLogin"))
    ) {
      router.push("/account/login");
    }
  }, [Object.keys(user).length, router]);
  const addressFormHandle = (e) => {
    setAddressForm({
      ...addressForm,
      [e.target.name]: e.target.value,
    });
  };
  const addressHandle = (e) => {
    e.preventDefault();
    if (
      addressForm.lastName === "" ||
      addressForm.firstName === "" ||
      addressForm.address === "" ||
      addressForm.city === "" ||
      addressForm.country === "" ||
      addressForm.phoneNumber === ""
    ) {
      alert("Please fill all required fields");
      return;
    }
  };
  return (
    <Layout
      title="Memoryzone | Address list"
      description="Memoryzone user address list"
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
          {
            title: "Customer Address",
            pathName: "/account/address",
          },
        ]}
      />
      <div className="px-10 my-12">
        <div className="flex justify-between mb-6">
          <span className="text-text text-lg block font-medium">
            YOUR ADDRESS
          </span>
          <Link href="/account">
            <div className="flex items-center cursor-pointer">
              <ArrowLeftIcon
                width={18}
                height={18}
                className="text-primary"
              />
              <span className="text-sm text-text ml-2 block">
                Return to account page
              </span>
            </div>
          </Link>
        </div>
        <button
          onClick={() =>
            setOpenAddressForm(!openAddressForm)
          }
          className="rounded-sm my-4 hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6"
        >
          + Add address
        </button>
        {openAddressForm && (
          <div className="mt-7">
            <form
              onSubmit={addressHandle}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm text-[#323c3f]"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  value={addressForm.lastName}
                  id="lastName"
                  name="lastName"
                  onChange={addressFormHandle}
                  className="addressInput"
                />
              </div>
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm text-[#323c3f]"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={addressForm.firstName}
                  id="firstName"
                  name="firstName"
                  onChange={addressFormHandle}
                  className="addressInput"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm text-[#323c3f]"
                >
                  Company
                </label>
                <input
                  type="text"
                  value={addressForm.company}
                  id="company"
                  name="company"
                  onChange={addressFormHandle}
                  className="addressInput"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm text-[#323c3f]"
                >
                  Address *
                </label>
                <input
                  type="text"
                  required
                  value={addressForm.address}
                  id="address"
                  name="address"
                  onChange={addressFormHandle}
                  className="addressInput"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm text-[#323c3f]"
                >
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={addressForm.city}
                  id="city"
                  name="city"
                  onChange={addressFormHandle}
                  className="addressInput"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm text-[#323c3f]"
                >
                  Country *
                </label>
                <input
                  type="text"
                  required
                  value={addressForm.country}
                  id="country"
                  name="country"
                  onChange={addressFormHandle}
                  className="addressInput"
                />
              </div>
              <div>
                <label
                  htmlFor="zipCode"
                  className="block mb-2 text-sm text-[#323c3f]"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  value={addressForm.zipCode}
                  id="zipCode"
                  name="zipCode"
                  onChange={addressFormHandle}
                  className="addressInput"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm text-[#323c3f]"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  pattern="(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b"
                  value={addressForm.phoneNumber}
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={addressFormHandle}
                  className="addressInput"
                />
              </div>
              <div className="space-x-6">
                <button className="rounded-sm my-4 hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6">
                  Add address
                </button>
                <button
                  onClick={() =>
                    setOpenAddressForm(false)
                  }
                  className="rounded-sm my-4 text-white text-sm bg-[#2a2a2a] border border-[#2a2a2a] py-2 px-6"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="my-7">
          <AddressItem />
        </div>
      </div>
    </Layout>
  );
};

export default address;
