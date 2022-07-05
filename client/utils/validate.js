import { VNPaySigned } from "./generateToken";

export const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
export const validRegister = (
  firstName,
  lastName,
  email,
  password,
) => {
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password
  ) {
    return "Please add all fields";
  }
  if (!validateEmail(email)) {
    return "Invalid email";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }
};
export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

export const validateOrder = (
  province,
  address,
  phoneNumber,
  total,
  paymentMethod,
  orderAt,
  products,
) => {
  if (
    province === "" ||
    address === "" ||
    phoneNumber === "" ||
    total === "" ||
    paymentMethod === "" ||
    orderAt === ""
  )
    return "Missing required fields";
  if (products.length === 0)
    return "Can't find any product in your order";
};

export const validateVNPayHash = (
  params,
  hash,
) => {
  
  var signData = params.split("?")[1];

  var signed = VNPaySigned(signData);
  if (signed === hash) {
    console.log("ok");
  } else {
    console.log("false");
  }
};
