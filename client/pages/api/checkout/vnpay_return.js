import { client } from "../../../lib/client";
import { auth } from "../../../middlewares/auth";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await checkVNPayHash(req, res);
      break;
  }
};

const checkVNPayHash = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
