import jwt from "jsonwebtoken";
import { client } from "../lib/client";

const auth = async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(
    token.split(" ")[1],
    process.env.NEXT_PUBLIC_ACCESS_TOKEN
  );

  if (!decoded) {
    return res.status(400).json({
      success: false,
      message: "Invalid Authentication",
    });
  }
  const user = await client.fetch(`*[_type=="user" && _id==$id][0]`, {
    id: decoded.id,
  });
  return user;
};

export default auth;
