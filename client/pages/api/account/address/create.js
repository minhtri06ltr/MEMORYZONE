import { client } from "../../../../lib/client";
import { auth } from "../../../../middlewares/auth";
import { validateAddress } from "../../../../utils/validate";

const createAddress = async (req, res) => {
  try {
    const {
      lastName,
      firstName,
      company,
      address,
      city,
      country,
      zipCode,
      phoneNumber,
    } = JSON.parse(req.body);
    const userId = await auth(req, res);
    const errorMessage = validateAddress(
      lastName,
      firstName,
      address,
      city,
      country,
      phoneNumber,
    );
    if (errorMessage)
      return res.status(400).json({
        success: false,
        error: errorMessage,
      });
    const returnAddressList = await client
      .patch(userId)
      .setIfMissing({
        addressList: [],
      })
      .append("addressList", [
        {
          _type: "address",
          lastName,
          firstName,
          company: company || "",
          address,
          city,
          country,
          zipCode: zipCode || "",
          phoneNumber,
        },
      ])
      .commit({
        // Adds a `_key` attribute to array items, unique within the array, to
        // ensure it can be addressed uniquely in a real-time collaboration context
        autoGenerateArrayKeys: true,
      })
      .then((res) => res);
    // console.log(userId);
    return res.status(200).json({
      success: true,
      message: "Add new address success",
      returnAddressList:
        returnAddressList.addressList,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,

      error: error.message,
    });
  }
};
const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      await createAddress(req, res);
      break;
  }
};
export default handler;
