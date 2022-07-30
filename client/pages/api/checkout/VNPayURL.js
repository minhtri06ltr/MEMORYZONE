import querystring from "qs";
import crypto from "crypto";
import { sortObject } from "../../../utils/format";

const redirectVNPayURL = async (req, res) => {
  try {
    const { orderId, orderDescription, amount } =
      JSON.parse(req.body);
    var ipAddr =
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;

    const transactionTime =
      new Date().getFullYear() +
      ("0" + (new Date().getMonth() + 1)).slice(
        -2,
      ) +
      ("0" + new Date().getDate()).slice(-2) +
      ("0" + new Date().getHours()).slice(-2) +
      ("0" + new Date().getMinutes()).slice(-2) +
      ("0" + new Date().getSeconds()).slice(-2);

    var vnp_Params = {};
    vnp_Params["vnp_Version"] = "2.1.0";
    vnp_Params["vnp_Command"] = "pay";
    vnp_Params["vnp_TmnCode"] =
      process.env.NEXT_PUBLIC_VNP_TMN_CODE;
    vnp_Params["vnp_Locale"] = "en";
    vnp_Params["vnp_CurrCode"] = "VND";
    vnp_Params["vnp_TxnRef"] =
      ("0" + new Date().getHours()).slice(-2) +
      ("0" + new Date().getMinutes()).slice(-2) +
      ("0" + new Date().getSeconds()).slice(-2);
    vnp_Params["vnp_Amount"] =
      amount * 100 * 23315;
    vnp_Params[
      "vnp_ReturnUrl"
    ] = `${process.env.NEXT_PUBLIC_CLIENT_URL}/checkout/${orderId}`;
    vnp_Params["vnp_IpAddr"] = ipAddr;
    vnp_Params["vnp_CreateDate"] =
      transactionTime;
    vnp_Params[
      "vnp_OrderInfo"
    ] = `${orderDescription} at ${transactionTime}`;
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
    vnp_Params["vnp_SecureHash"] = signed;
    var vnpUrl =
      process.env.NEXT_PUBLIC_VNP_URL +
      "?" +
      querystring.stringify(vnp_Params, {
        encode: false,
      });

    return res.status(200).json({
      success: true,
      vnpUrl,
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
      await redirectVNPayURL(req, res);
      break;
    case "GET":
      await verifyVNPayTransaction(req, res);
  }
};
export default handler;
