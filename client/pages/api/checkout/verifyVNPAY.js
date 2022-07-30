import querystring from "qs";
import crypto from "crypto";
import { sortObject } from "../../../utils/format";

const verifyVNPayTransaction = async (
  req,
  res,
) => {
  try {
    var vnp_Params = JSON.parse(req.body);
    console.log("test");
    console.log(vnp_Params);
    var secureHash = vnp_Params["vnp_SecureHash"];
    console.log(secureHash);
    delete vnp_Params["vnp_SecureHash"];
    delete vnp_Params["vnp_SecureHashType"];
    vnp_Params = sortObject(vnp_Params);
    var signData = querystring.stringify(
      vnp_Params,
      { encode: false },
    );
    var hmac = crypto.createHmac(
      "sha512",
      process.env.NEXT_PUBLIC_VNP_SECRET,
    );
    var signed = hmac
      .update(new Buffer(signData, "utf-8"))
      .digest("hex");

    if (secureHash !== signed) {
      //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
      return res.status(401).json({
        success: false,
        message: "Transaction failed",
        code: "97",
      });
    } else {
      console.log("test");
    }
    res.status(200).json({
      signData: vnp_Params["vnp_TmnCode"],
      success: true,
      message: "Verify success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      await verifyVNPayTransaction(req, res);
      break;
  }
};
export default handler;
