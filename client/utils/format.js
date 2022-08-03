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
export const formatDateTimeSchema = (
  datetime,
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
  return (
    convert.getUTCFullYear() +
    "-" +
    ("0" + (convert.getUTCMonth() + 1)).slice(
      -2,
    ) +
    "-" +
    ("0" + convert.getUTCDate()).slice(-2)
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
      slug: item.slug.current,
      quantity: item.quantity,
    };
  });
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
export const detect = (ratingList) => {
  let min = 0;
  let max = 0;

  ratingList.map((item, index) => {
    if (item !== 0) min = index + 1;
  });
  for (
    let i = ratingList.length - 1;
    i >= 0;
    i--
  ) {
    if (ratingList[i] !== 0) max = i + 1;
  }
  return {
    max,
    min,
  };
};

export const sortObject = (obj) => {
  var sorted = {};
  var str = [];
  var key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(
      obj[str[key]],
    ).replace(/%20/g, "+");
  }
  return sorted;
};
