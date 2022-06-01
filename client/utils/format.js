export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
export const formatDateTime = (datetime) => {
  var b = datetime.split(/\D+/);
  const convert = new Date(
    Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6])
  );
  return (
    ("0" + convert.getUTCDate()).slice(-2) +
    "/" +
    ("0" + (convert.getUTCMonth() + 1)).slice(-2) +
    "/" +
    convert.getUTCFullYear() +
    " " +
    ("0" + convert.getUTCHours()).slice(-2) +
    ":" +
    ("0" + convert.getUTCMinutes()).slice(-2) +
    ":" +
    ("0" + convert.getUTCSeconds()).slice(-2)
  );
};
