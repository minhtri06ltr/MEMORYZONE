import { client } from "../../../lib/client";

import { createAccessToken } from "../../../utils/generateToken";
import jwt from "jsonwebtoken";

export default async (req, res) => {
  try {
    const rfToken = req.cookies.refreshToken;

    if (!rfToken)
      return res.status(400).json({
        success: false,
        error: "Please login to continue",
      });
    //verify
    const result = jwt.verify(rfToken, process.env.NEXT_PUBLIC_REFRESH_TOKEN);
    if (!result)
      return res.status(400).json({
        success: false,
        error: "Your token is incorrect or has expired",
      });
    const existUser = await client.fetch(`*[_type=='user' && _id==$id][0]`, {
      id: result.id,
    });

    if (!existUser) {
      return res.status(400).json({
        success: false,
        error: "User doest not exist",
      });
    }
    const accessToken = createAccessToken({ id: existUser._id });
    return res.status(200).json({
      success: true,
      accessToken: accessToken,
      user: {
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
