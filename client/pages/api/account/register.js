import bcrypt from "bcryptjs";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../utils/generateToken";
import { client } from "../../../lib/client";
import { validRegister } from "../../../utils/validate";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};
const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, isAdmin } = JSON.parse(
      req.body
    );
    const errorMessage = validRegister(firstName, lastName, email, password);
    if (errorMessage)
      return res.status(400).json({
        success: false,
        error: errorMessage,
      });
    const existUser = await client.fetch(
      `*[_type == "user" && email == $email][0]{email}`,
      {
        email: email,
      }
    );

    if (existUser) {
      return res
        .status(401)
        .json({ success: false, error: "Email already exists" });
    }

    const newUser = {
      _type: "user",
      firstName: firstName,
      isAdmin: isAdmin,
      lastName: lastName,
      password: bcrypt.hashSync(password),
      email: email,
    };

    const returnUser = await client.create(newUser);
    const accessToken = createAccessToken({ id: returnUser._id });
    const refreshToken = createRefreshToken({ id: returnUser._id });
    console.log(returnUser);
    return res.status(200).json({
      message: "Register successful",
      success: true,
      accessToken,
      refreshToken,
      user: {
        id: existUser._id,
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
