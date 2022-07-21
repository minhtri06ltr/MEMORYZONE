import { client } from "../../../../lib/client";
import { auth } from "../../../../middlewares/auth";

const getAddressList = async (req, res) => {
  try {
    const userId = await auth(req, res);
    const addressList = await client.fetch(
      `*[_type=='user' && _id==$userId][0]{
        addressList
    }`,
      {
        userId,
      },
    );

    return res.status(200).json({
      success: true,
      addressList: addressList.addressList,
      message: "Get user address list success",
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
    case "GET":
      await getAddressList(req, res);
      break;
  }
};
export default handler;
