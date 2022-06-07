import jwt from "jsonwebtoken";

export const createAccessToken = (data) => {
  return jwt.sign(data, process.env.NEXT_PUBLIC_ACCESS_TOKEN, {
    expiresIn: "30m",
  });
};
export const createRefreshToken = (data) => {
  return jwt.sign(data, process.env.NEXT_PUBLIC_REFRESH_TOKEN, {
    expiresIn: "7d",
  });
};
