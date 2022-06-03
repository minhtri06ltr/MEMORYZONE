import { ArrowLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";

const Testt = () => {
  const [openAddressForm, setOpenAddressForm] = useState(false);
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
  return (
    <div className="px-10 mt-10">
      <div className="flex justify-between mb-6">
        <span className="text-[#444] text-lg block font-medium">
          YOUR ADDRESS
        </span>
        <Link href="/account">
          <div className="flex items-center cursor-pointer">
            <ArrowLeftIcon width={18} height={18} className="text-primary" />
            <span className="text-sm text-[#444] ml-2 block">
              Return to account page
            </span>
          </div>
        </Link>
      </div>
      <button
        onClick={() => setOpenAddressForm(!openAddressForm)}
        className="rounded-sm my-4 hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6"
      >
        + Add address
      </button>
      {openAddressForm && (
        <div className="mt-7">
          <form className="space-y-6">
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
                //  value={reviewForm.fullName}
                id="lastName"
                name="lastName"
                //  onChange={reviewFormHandle}
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
                //  value={reviewForm.fullName}
                id="firstName"
                name="firstName"
                //  onChange={reviewFormHandle}
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
                //  value={reviewForm.fullName}
                id="company"
                name="company"
                //  onChange={reviewFormHandle}
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
                //  value={reviewForm.fullName}
                id="address"
                name="address"
                //  onChange={reviewFormHandle}
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
                //  value={reviewForm.fullName}
                id="city"
                name="city"
                //  onChange={reviewFormHandle}
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
                //  value={reviewForm.fullName}
                id="country"
                name="country"
                //  onChange={reviewFormHandle}
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
                //  value={reviewForm.fullName}
                id="zipCode"
                name="zipCode"
                //  onChange={reviewFormHandle}
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
                //  value={reviewForm.fullName}
                id="phoneNumber"
                name="phoneNumber"
                //  onChange={reviewFormHandle}
                className="addressInput"
              />
            </div>
            <div className="space-x-6">
              <button className="rounded-sm my-4 hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6">
                Add address
              </button>
              <button
                onClick={() => setOpenAddressForm(false)}
                className="rounded-sm my-4 text-white text-sm bg-[#2a2a2a] border border-[#2a2a2a] py-2 px-6"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Testt;
