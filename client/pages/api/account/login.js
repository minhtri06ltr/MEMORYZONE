import { client } from "../../../lib/client";
import bcrypt from "bcryptjs";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../utils/generateToken";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = JSON.parse(req.body);

    const existUser = await client.fetch(
      `*[_type=='user' && email ==$email][0]`,
      {
        email: email,
      }
    );

    if (!existUser) {
      return res.status(422).json({
        success: false,
        error: `Email does not exist`,
      });
    }

    if (!bcrypt.compareSync(password, existUser.password)) {
      return res.status(400).json({
        success: false,
        error: "Invalid password",
      });
    }

    const accessToken = createAccessToken({ id: existUser._id });
    const refreshToken = createRefreshToken({ id: existUser._id });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken: accessToken,
      refreshToken: refreshToken,
      user: {
        id: existUser._id,
        fullName: `${existUser.firstName} ${existUser.lastName}`,
        email: existUser.email,
        _createdAt: existUser._createdAt,
        isAdmin: existUser.isAdmin,
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
