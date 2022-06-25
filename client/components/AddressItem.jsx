const AddressItem = () => {
  return (
    <div className="border-t border-[#ebebeb] py-8 flex space-x-6">
      <div className="flex-1 space-y-6">
        <span className="text-sm block text-text">
          <b>Account Name:</b> ly test
        </span>
        <span className="text-sm block text-text">
          <b>Company:</b> ly test
        </span>
        <span className="text-sm block text-text">
          <b>Address:</b> ly test
        </span>
        <span className="text-sm block text-text">
          <b>Country:</b> ly test
        </span>
        <span className="text-sm block text-text">
          <b>Phone Number:</b> ly test
        </span>
        <button className="rounded-sm my-4 hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6">
          Edit address
        </button>
      </div>
      <div className="flex-1">
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
              pattern="(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b"
              required
              //  value={reviewForm.fullName}
              id="phoneNumber"
              name="phoneNumber"
              //  onChange={reviewFormHandle}
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
              type="button"
              className="rounded-sm my-4 text-white text-sm bg-[#2a2a2a] border border-[#2a2a2a] py-2 px-6"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressItem;
