import { client } from "../../../../lib/client";
import { auth } from "../../../../middlewares/auth";

const editAddressList = async (req, res) => {
  try {
    const userId = await auth(req, res);
    console.log(JSON.parse(req.body));
    const returnAddressList = await client
      .patch(userId)
      .set({
        [`addressList[_key == \"${
          JSON.parse(req.body)._key
        }\"]`]: {
          ...JSON.parse(req.body),
          _type: "address",
        },
      })
      .commit()
      .then((res) => res.addressList)
      .catch((error) => console.log(error));

    return res.status(200).json({
      success: true,
      returnAddressList,
      message: "Edit user address list success",
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
      await editAddressList(req, res);
      break;
  }
};
export default handler;
