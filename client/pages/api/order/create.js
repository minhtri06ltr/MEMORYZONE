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
    if (isLogin) {
      const result = await auth(req, res);
      console.log(result);

      return res.status(200).json({
        message: "login",
      });
    } else {
    }
    return res.status(200).json({
      message: "guest",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
