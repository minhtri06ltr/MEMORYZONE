export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
export const formatDateTime = (datetime) => {
  return (
    ("0" + datetime.getUTCDate()).slice(-2) +
    "/" +
    ("0" + (datetime.getUTCMonth() + 1)).slice(-2) +
    "/" +
    datetime.getUTCFullYear() +
    " " +
    ("0" + datetime.getUTCHours()).slice(-2) +
    ":" +
    ("0" + datetime.getUTCMinutes()).slice(-2) +
    ":" +
    ("0" + datetime.getUTCSeconds()).slice(-2)
  );
};
