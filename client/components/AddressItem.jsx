import { useState } from "react";
import { postData } from "../utils/requestMethod";
import { useDispatch } from "react-redux";
import { editAddress } from "../redux/addressSlice";

const AddressItem = ({ data, token }) => {
  const dispatch = useDispatch();
  const [openEditForm, setOpenEditForm] =
    useState(false);
  const [editAddressForm, setEditAddressForm] =
    useState({
      lastName: data.lastName,
      firstName: data.firstName,
      company: data.company || "",
      address: data.address,
      city: data.city,
      country: data.country,
      zipCode: data.zipCode || " ",
      phoneNumber: data.phoneNumber,
      _key: data._key,
    });
  const editAddressFormHandle = (e) => {
    setEditAddressForm({
      ...editAddressForm,
      [e.target.name]: e.target.value,
    });
  };
  const editAddressHandle = async (e) => {
    e.preventDefault();
    const res = await postData(
      "account/address/edit",
      editAddressForm,
      token,
    );

    if (res.success) {
      alert(res.message);
      dispatch(
        editAddress(res.returnAddressList[0]),
      );
      setOpenEditForm(false);
      return;
    } else {
      alert(res.error);
      return;
    }
  };
  return (
    <div className="border-t border-[#ebebeb] py-8 flex space-x-6">
      <div className="flex-1 space-y-6">
        <span className="text-sm block text-text">
          <b>Account Name:</b>{" "}
          {`${data.firstName} ${data.lastName}`}
        </span>
        <span className="text-sm block text-text">
          <b>Company:</b>{" "}
          {data.company || "Unknown"}
        </span>
        <span className="text-sm block text-text">
          <b>Address:</b> {data.address}
        </span>
        <span className="text-sm block text-text">
          <b>Country:</b> {data.country}
        </span>
        <span className="text-sm block text-text">
          <b>Phone Number:</b> {data.phoneNumber}
        </span>
        <button
          onClick={() =>
            setOpenEditForm(!openEditForm)
          }
          className="rounded-sm my-4 hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6"
        >
          Edit address
        </button>
      </div>
      {openEditForm && (
        <div className="flex-1">
          <form
            className="space-y-6"
            onSubmit={editAddressHandle}
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
                value={editAddressForm.lastName}
                id="lastName"
                name="lastName"
                onChange={editAddressFormHandle}
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
                value={editAddressForm.firstName}
                id="firstName"
                name="firstName"
                onChange={editAddressFormHandle}
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
                value={editAddressForm.company}
                id="company"
                name="company"
                onChange={editAddressFormHandle}
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
                value={editAddressForm.address}
                id="address"
                name="address"
                onChange={editAddressFormHandle}
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
                value={editAddressForm.city}
                id="city"
                name="city"
                onChange={editAddressFormHandle}
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
                value={editAddressForm.country}
                id="country"
                name="country"
                onChange={editAddressFormHandle}
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
                value={editAddressForm.zipCode}
                id="zipCode"
                name="zipCode"
                onChange={editAddressFormHandle}
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
                pattern="(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b"
                required
                value={
                  editAddressForm.phoneNumber
                }
                id="phoneNumber"
                name="phoneNumber"
                onChange={editAddressFormHandle}
                className="addressInput"
              />
            </div>
            <div className="space-x-6">
              <button
                type="submit"
                className="rounded-sm my-4 hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6"
              >
                Update address
              </button>
              <button
                onClick={() =>
                  setOpenEditForm(false)
                }
                type="button"
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

export default AddressItem;
