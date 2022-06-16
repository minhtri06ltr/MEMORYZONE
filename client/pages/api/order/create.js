import { client } from "../../../lib/client";
import {auth} from "../../../middlewares/auth";
import { validateOrder } from "../../../utils/validate";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await createOrder(req, res);
      break;
  }
};

const createOrder = async (req, res) => {
  try {
    const {
      province,
      district,
      ward,
      address,
      phoneNumber,
      note,
      total,
      paymentMethod,
      orderAt,
      products,
    } = JSON.parse(req.body);
    const errorMessage = validateOrder(
      province,
      address,
      phoneNumber,
      total,
      paymentMethod,
      orderAt,
      products
    );
    if (errorMessage)
      return res.status(400).json({
        success: false,
        error: errorMessage,
      });
    const docs = {
      _type: "order",
      shippingAddress: {
        _type: "shippingAddress",
        address,
        phoneNumber,
        province,
        district,
        ward,
        note,
      },
      paymentMethod,
      orderAt,
      orderStatus: "Wait for confirm",
      totalPrice: total,
      orderList: products.map((item) => {
        return {
          _key: item.id,
          productName: item.name,
          price: item.price,
          slug: item.slug,
          quantity: item.quantity,
        };
      }),
    };
    const userId = await auth(req, res);

    const returnOrder = await client.create({
      ...docs,
      role: "account",
      user: {
        _type: "reference",
        _ref: userId,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Payment success! We will contact you to confirm the order",
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
