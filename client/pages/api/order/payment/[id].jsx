import { client } from "../../../../lib/client";
import { auth } from "../../../../middlewares/auth";
import { formatOrderList } from "../../../../utils/format";

const orderPayment = async (req, res) => {
  try {
    const result = await auth(req, res);
    const { orderList, amount } = JSON.parse(
      req.body,
    );

    const { id } = req.query;

    const returnOrder = await client
      .patch(id) // Document ID to patch
      .set({
        isPaid: true,
        totalPrice: amount,
        paidAt: new Date(),
        orderList: formatOrderList(orderList),
      }) // Shallow merge

      .commit(); // Perform the patch and return a promise

    return res.status(200).json({
      success: true,
      message: "Payment success",
      returnOrder,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export default async (req, res) => {
  switch (req.method) {
    case "PATCH":
      await orderPayment(req, res);
      break;
  }
};
