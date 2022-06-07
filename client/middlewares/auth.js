import jwt from "jsonwebtoken";

const auth = async (req, res) => {
  const token = req.headers.authorization;

  const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_ACCESS_TOKEN);

  if (!decoded) {
    return res.status(400).json({
      success: false,
      message: "Invalid Authentication",
    });
  }

  return decoded.id;
};

export default auth;
