import bcrypt from "bcryptjs";

import { client } from "../../../lib/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    var check = false;
    const queryEmail = `*[_type == "user" && email.current=='${req.body.registerForm.email}']`;
    try {
      await client.fetch(queryEmail).then((item) => {
        if (item.length !== 0) {
          check = true;
        }
      });
      const newUser = {
        _type: "user",
        firstName: req.body.registerForm.firstName,
        isAdmin: req.body.registerForm.isAdmin,
        lastName: req.body.registerForm.lastName,
        password: bcrypt.hashSync(req.body.registerForm.password),
        email: req.body.registerForm.email,
      };

      client.create(newUser);

      if (check) {
        return res.status(401).json({
          success: false,
          message: "Email already taken",
        });
      } else {
        return res.status(200).json({
          success: true,
          test: "testing",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
}
