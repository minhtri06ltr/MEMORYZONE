import { client } from "../../../../lib/client";
import { auth } from "../../../../middlewares/auth";

export default async (req, res) => {
  switch (req.method) {
    case "PATCH":
      await orderPayment(req, res);
      break;
  }
};

const orderPayment = async (req, res) => {
  try {
    const result = await auth(req, res);
    const { orderList, amount } = JSON.parse(
      req.body,
    );
    console.log(JSON.parse(req.body));

    const { id } = req.query;
    console.log(id);

    await client
      .patch(id) // Document ID to patch
      .set({
        isPaid: true,
        totalPrice: amount,
        paidAt: new Date(),
        orderList: orderList.map((item) => {
          return {
            _type: "orderItem",
            _key: item.id,
            productName: item.productName,
            price: item.price,
            slug: item.slug,
            quantity: item.quantity,
          };
        }),
      }) // Shallow merge

      .commit() // Perform the patch and return a promise
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json({
          success: false,
          error: error.message,
        });
      });

    return res.status(200).json({
      success: true,
      message: "Payment success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
