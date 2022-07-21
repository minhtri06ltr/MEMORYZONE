import { VNPaySigned } from "./generateToken";

export const numberWithCommas = (x) => {
  return x
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
export const formatDateTime = (
  datetime,
  includeTime = false,
) => {
  var b = datetime.split(/\D+/);
  const convert = new Date(
    Date.UTC(
      b[0],
      --b[1],
      b[2],
      b[3],
      b[4],
      b[5],
      b[6],
    ),
  );
  if (includeTime === true)
    return (
      ("0" + convert.getUTCDate()).slice(-2) +
      "/" +
      ("0" + (convert.getUTCMonth() + 1)).slice(
        -2,
      ) +
      "/" +
      convert.getUTCFullYear() +
      " " +
      ("0" + convert.getUTCHours()).slice(-2) +
      ":" +
      ("0" + convert.getUTCMinutes()).slice(-2) +
      ":" +
      ("0" + convert.getUTCSeconds()).slice(-2)
    );
  else
    return (
      ("0" + convert.getUTCDate()).slice(-2) +
      "/" +
      ("0" + (convert.getUTCMonth() + 1)).slice(
        -2,
      ) +
      "/" +
      convert.getUTCFullYear()
    );
};
export const formatProcess = (process) => {
  const string =
    Object.keys(process)[
      Object.keys(process).length - 2
    ];
  return (
    string.charAt(0).toUpperCase() +
    string.slice(1)
  );
};
export const formatDateName = (datetime) => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var b = datetime.split(/\D+/);
  const convert = new Date(
    Date.UTC(
      b[0],
      --b[1],
      b[2],
      b[3],
      b[4],
      b[5],
      b[6],
    ),
  );
  return days[convert.getDay()];
};
export const orderStatus = (number) => {
  const array = [
    "Wait for confirm",
    "Confirmed",
    "Wait for pick up",
    "Delivering",
    "Successful delivery",
    "Cancel",
  ];
  return array[number];
};
export const normalDateTime = (datetime) => {
  var hours = datetime.getHours();
  var minutes = datetime.getMinutes();
  var AMPM = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes =
    minutes < 10 ? "0" + minutes : minutes;
  var strTime =
    hours + ":" + minutes + " " + AMPM;

  return (
    ("0" + datetime.getUTCDate()).slice(-2) +
    "/" +
    ("0" + (datetime.getUTCMonth() + 1)).slice(
      -2,
    ) +
    "/" +
    datetime.getUTCFullYear() +
    ", " +
    strTime
  );
};
export const formatOrderList = (orderList) => {
  return orderList.map((item) => {
    return {
      _type: "orderItem",
      _key: item.id,
      productName: item.productName ?? item.name,
      price: item.price,
      slug: item.slug,
      quantity: item.quantity,
    };
  });
};

export const VNPayURL = (
  price,
  ipAddress,
  orderId,
) => {
  if (!ipAddress) {
    alert(
      "Missing IP Address please contact to Admin for this problem",
    );
    return;
  }
  const amount = price * 23315 * 100;
  const transactionTime =
    new Date().getFullYear() +
    ("0" + (new Date().getMonth() + 1)).slice(
      -2,
    ) +
    ("0" + new Date().getDate()).slice(-2) +
    ("0" + new Date().getHours()).slice(-2) +
    ("0" + new Date().getMinutes()).slice(-2) +
    ("0" + new Date().getSeconds()).slice(-2);

  var tnx = transactionTime.substr(
    transactionTime.length - 6,
  );
  var returnURL = `${process.env.NEXT_PUBLIC_CLIENT_URL}/checkout/${orderId}`;
  var orderDescription = `Payment+order+ID+${orderId}`;

  const params = `vnp_Amount=${amount}&vnp_Command=pay&vnp_CreateDate=${transactionTime}&vnp_CurrCode=VND&vnp_IpAddr=${ipAddress}&vnp_Locale=en&vnp_OrderInfo=${encodeURIComponent(
    orderDescription,
  )}&vnp_ReturnUrl=${encodeURIComponent(
    returnURL,
  )}&vnp_TmnCode=${
    process.env.NEXT_PUBLIC_VNP_TMN_CODE
  }&vnp_TxnRef=${tnx}&vnp_Version=2.1.0`;
  const signed = VNPaySigned(params);
  const url = `${process.env.NEXT_PUBLIC_VNP_URL}?${params}&vnp_SecureHash=${signed}`;
  return url;
};
export const formatTagToSlug = (tag) => {
  const navigate = tag.split(":")[0];
  switch (navigate) {
    case "p":
      return (
        process.env.NEXT_PUBLIC_CLIENT_URL +
        "/product/" +
        tag
          .slice(2)
          .toLowerCase()
          //Remove spaces
          .replace(/\s+/g, "-")
          .replace(/\./g, "-")
          //Remove special characters
          .replace(
            /[&\/\\#,+()$~%.'":*?<>{}]/g,
            "",
          )
          .slice(0, 95)
      );
      break;
    case "b":
      return (
        process.env.NEXT_PUBLIC_CLIENT_URL +
        "/brand/" +
        tag
          .split(":")[1]
          .toLowerCase()
          //Remove spaces
          .replace(/\s+/g, "-")
          .replace(/\./g, "-")
          //Remove special characters
          .replace(
            /[&\/\\#,+()$~%.'":*?<>{}]/g,
            "",
          )
          .slice(0, 95)
      );
      break;
    case "c":
      return (
        process.env.NEXT_PUBLIC_CLIENT_URL +
        "/category/" +
        tag
          .split(":")[1]
          .toLowerCase()
          //Remove spaces
          .replace(/\s+/g, "-")
          .replace(/\./g, "-")
          //Remove special characters
          .replace(
            /[&\/\\#,+()$~%.'":*?<>{}]/g,
            "",
          )
          .slice(0, 95)
      );
      break;
    default:
      break;
  }
};

export const formatSourceLink = (tag) => {
  const imgTags = tag.match(
    /<img [^>]*src="[^"]*"[^>]*>/gm,
  );
  if (imgTags) {
    const sources = imgTags[0]
      .match(/<img [^>]*src="[^"]*"[^>]*>/gm)
      .map((x) =>
        x.replace(/.*src="([^"]*)".*/, "$1"),
      );
    return sources[0];
  }

  return "https://bizweb.dktcdn.net/thumb/1024x1024/assets/themes_support/noimage.gif";
};

export const formatRSSFeedDatetime = (
  datetime,
) => {
  return datetime.split(" +")[0];
};
