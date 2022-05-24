import bcrypt from "bcryptjs";

import { client } from "../../../lib/client";
import { validRegister } from "../../../utils/validate";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const existUser = await client.fetch(
//         `*[_type == "user" && email == $email][0]`,
//         {
//           email: req.body.email,
//         }
//       );

//       if (existUser) {
//         return res
//           .status(401)
//           .json({ success: false, message: "Email aleardy exists" });
//       }

//       const newUser = {
//         _type: "user",
//         firstName: req.body.firstName,
//         isAdmin: req.body.isAdmin,
//         lastName: req.body.lastName,
//         password: bcrypt.hashSync(req.body.password),
//         email: req.body.email,
//       };

//       const returnUser = await client.create(newUser);
//       return res.status(200).json({
//         message: "Register successfull",
//         success: true,
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({
//         success: false,
//         error: error.message,
//       });
//     }
//   }
// }

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
      `*[_type == "user" && email == $email][0]`,
      {
        email: email,
      }
    );

    if (existUser) {
      return res
        .status(401)
        .json({ success: false, error: "Email aleardy exists" });
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
};
