import jwt from "jsonwebtoken";
import crypto from "crypto";

export const createAccessToken = (data) => {
  return jwt.sign(
    data,
    process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    {
      expiresIn: "15m",
    },
  );
};
export const createRefreshToken = (data) => {
  return jwt.sign(
    data,
    process.env.NEXT_PUBLIC_REFRESH_TOKEN,
    {
      expiresIn: "7d",
    },
  );
};
export const createActiveToken = (data) => {
  return jwt.sign(
    data,
    process.env.NEXT_PUBLIC_ACTIVE_TOKEN,
    {
      expiresIn: "10m",
    },
  );
};
export const VNPaySigned = (params) => {
  var hmac = crypto.createHmac(
    "sha512",
    process.env.NEXT_PUBLIC_VNP_SECRET,
  );
  var signed = hmac
    .update(new Buffer(params, "utf-8"))
    .digest("hex");
  return signed;
};
