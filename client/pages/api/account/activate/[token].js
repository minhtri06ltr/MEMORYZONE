import { client } from "../../../../lib/client";
import { verifyActivateToken } from "../../../../middlewares/auth";
import bcrypt from "bcryptjs";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../../utils/generateToken";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await verifyAccount(req, res);
      break;
  }
};
const verifyAccount = async (req, res) => {
  try {
    const newUser = await verifyActivateToken(
      req,
      res,
    );
    const existUser = await client.fetch(
      `*[_type == "user" && email == $email][0]{email}`,
      {
        email: newUser.email,
      },
    );

    if (existUser) {
      return res.status(401).json({
        success: false,
        error: "Email already exists",
      });
    }
    const { exp, iat, ...other } = newUser;
    const returnUser = await client.create(other);
    const accessToken = createAccessToken({
      id: returnUser._id,
    });
    const refreshToken = createRefreshToken({
      id: returnUser._id,
    });
    return res.status(200).json({
      message: "Register successful",
      success: true,
      accessToken,
      refreshToken,
      user: {
        id: returnUser._id,
        fullName: `${returnUser.firstName} ${returnUser.lastName}`,
        email: returnUser.email,
        _createdAt: returnUser._createdAt,
        isAdmin: returnUser.isAdmin,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};