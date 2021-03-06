import { client } from "../../../lib/client";
import { auth } from "../../../middlewares/auth";

const getOrderHistory = async (req, res) => {
  try {
    const userId = await auth(req, res);

    const orderHistoryList = await client.fetch(
      `*[_type=="order" && user._ref==$userId]{
            orderStatus,
          _id,
          shippingAddress,
          totalPrice,
         isPaid,
          orderAt,

      } | order(orderAt desc)`,
      {
        userId,
      },
    );
    return res.status(200).json({
      success: true,
      message: "Get user's order history success",
      orderHistoryList,
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
      await getOrderHistory(req, res);
      break;
  }
};
export default handler;
