import { client } from "../../../../lib/client";
import auth from "../../../../middlewares/auth";
import bcrypt from "bcryptjs";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await verifyToken(req, res);
      break;
    case "POST":
      await resetPassword(req, res);
      break;
  }
};
const verifyToken = async (req, res) => {
  try {
    const userId = await auth(req, res);

    return res.status(200).json({
      success: true,
      message: "Verify token success",
      userId: userId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const resetPassword = async (req, res) => {
  try {
    const { password, userId } = JSON.parse(req.body);
    const returnUser = await client
      .patch(userId)
      .set({
        password: bcrypt.hashSync(password),
      })
      .commit();
    return res.json({
      success: true,
      message: "Reset password success",
      returnUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
