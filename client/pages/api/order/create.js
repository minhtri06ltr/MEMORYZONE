import { client } from "../../../lib/client";
import auth from "../../../middlewares/auth";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await createOrder(req, res);
      break;
  }
};

const createOrder = async (req, res) => {
  try {
    const isLogin = req.headers.authorization;
    console.log(JSON.parse(req.body));
    const {
      province,
      district,
      ward,
      email,
      fullName,
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

      fullName,
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
        fullName,
        address,
        phoneNumber,
        province,
        district,
        ward,
        note,
      },
      paymentMethod,

      orderAt,
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
    if (isLogin || isLogin === "") {
      const returnOrder = await client.create({
        ...docs,
        type: "guest", // --
        guestEmail: email, //--
      });

      return res.status(200).json({
        success: true,
        returnOrder,
      });
    } else {
      const result = await auth(req, res);
      console.log(result);
      const returnOrder = await client.create({
        ...docs,

        type: "account",
        user: {
          _type: "reference",
          _ref: result.id,
        },
      });
      return res.status(200).json({
        success: true,
        returnOrder,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
