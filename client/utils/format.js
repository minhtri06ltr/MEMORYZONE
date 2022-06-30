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
  ];
  return array[number];
};
export const normalDateTime = (datetime) => {
  var hours = datetime.getHours();
  var minutes = datetime.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes =
    minutes < 10 ? "0" + minutes : minutes;
  var strTime =
    hours + ":" + minutes + " " + ampm;

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
