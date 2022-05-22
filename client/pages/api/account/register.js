import bcrypt from "bcryptjs";

import { client } from "../../../lib/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const existUser = await client.fetch(
        `*[_type == "user" && email == $email][0]`,
        {
          email: req.body.email,
        }
      );

      if (existUser) {
        return res
          .status(401)
          .json({ success: false, message: "Email aleardy exists" });
      }

      const newUser = {
        _type: "user",
        firstName: req.body.firstName,
        isAdmin: req.body.isAdmin,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password),
        email: req.body.email,
      };

      const returnUser = await client.create(newUser);
      return res.status(200).json({
        message: "Register successfull",
        success: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
}
