import { client } from "../../../lib/client";

import { createAccessToken } from "../../../utils/generateToken";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await forgotPasswordRequest(req, res);
      break;
  }
};

const forgotPasswordRequest = async (req, res) => {
  try {
    //check email
    const existEmail = await client.fetch(
      '*[_type=="user" && email==$forgotEmail][0]',
      {
        forgotEmail: JSON.parse(req.body),
      }
    );

    if (!existEmail) {
      return res.status(422).json({
        success: false,
        error: "Email is not exist",
      });
    }
    const accessToken = createAccessToken({ id: existEmail._id });
    const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/account/reset/${accessToken}`;
    console.log(url);
    return res.status(200).json({
      message: "Please check your email to reset the password",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
