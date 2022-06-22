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
