import bcrypt from "bcryptjs";
import { createActiveToken } from "../../../utils/generateToken";
import { client } from "../../../lib/client";
import { validRegister } from "../../../utils/validate";
import { sendEmailHandle } from "../../../middlewares/mailer";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};
const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      isAdmin,
    } = JSON.parse(req.body);
    const errorMessage = validRegister(
      firstName,
      lastName,
      email,
      password,
    );
    if (errorMessage)
      return res.status(400).json({
        success: false,
        error: errorMessage,
      });
    const existUser = await client.fetch(
      `*[_type == "user" && email == $email][0]{email}`,
      {
        email: email,
      },
    );

    if (existUser) {
      return res.status(401).json({
        success: false,
        error: "Email already exists",
      });
    }

    const newUser = {
      _type: "user",
      firstName: firstName,
      isAdmin: isAdmin,
      lastName: lastName,
      password: bcrypt.hashSync(password),
      email: email,
    };
    const activeToken =
      createActiveToken(newUser);
    const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/account/activate/${activeToken}`;

    await sendEmailHandle(
      email,
      url,
      "activate",
      req,
      res,
    );
    return res.status(200).json({
      success: true,
      message:
        "Register success! Please confirm your email to continue",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
