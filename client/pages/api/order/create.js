import { client } from "../../../lib/client";
import { auth } from "../../../middlewares/auth";
import { formatOrderList } from "../../../utils/format";
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
      products,
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
      isPaid: false,
      paymentMethod,
      orderAt,
      orderStatus: 0,
      totalPrice: total,
      orderList: formatOrderList(products),
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

    //key,quantity, _id,ispay ,orderAt,orderstatus,shipaddress,total
    return res.status(200).json({
      success: true,
      message:
        "Payment success! We will contact you to confirm the order",
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
