import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { postData } from "../utils/requestMethod";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../lib/client";
import { clearCart } from "../redux/cartSlice";
import { loadingNotify } from "../redux/notifySlice";
import { useRouter } from "next/router";
import { productSold } from "../middlewares/product";

// This values are the props in the UI

const currency = "USD";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, amount, form }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const token = useSelector((state) => state.account.accessToken);
  const router = useRouter();
  const appDispatch = useDispatch();
  console.log(token);
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={async function (data, actions) {
          dispatch(loadingNotify(true));
          return actions.order.capture().then(async function () {
            // Your code here after capture the order
            console.log(token);
            try {
              if (token == null || token === "" || token === undefined) {
                client
                  .create({
                    role: "guest", // --
                    guestEmail: form.email, //--
                    guestName: form.fullName,
                    _type: "order",
                    shippingAddress: {
                      _type: "shippingAddress",

                      address: form.address,
                      phoneNumber: form.phoneNumber,
                      province: form.province,
                      district: form.district,
                      ward: form.ward,
                      note: form.note,
                    },
                    paymentMethod: "paypal",
                    orderAt: new Date(),
                    totalPrice: amount,
                    orderList: form.products.map((item) => {
                      return {
                        _key: item.id,
                        productName: item.name,
                        price: item.price,
                        slug: item.slug,
                        quantity: item.quantity,
                      };
                    }),
                  })
                  .then((res) => {
                    //  router.push("/checkout/success");
                    appDispatch(clearCart());
                    res.orderList.filter((item) => {
                      return productSold(item._key, item.quantity);
                    });
                  })
                  .catch((error) => alert(error.message));
              } else {
                const res = await postData(
                  "order/create",
                  {
                    ...form,
                    total: amount,
                    paymentMethod: "paypal",
                    orderAt: new Date(),
                  },
                  token
                );
                if (!res.success) {
                  alert(res.error);
                } else {
                  appDispatch(clearCart());
                  //  router.push("/checkout/success");
                  res.returnOrder.orderList.filter((item) => {
                    return productSold(item._key, item.quantity);
                  });
                }
              }
            } catch (error) {
              alert(error.message);
            }
            dispatch(loadingNotify(false));
          });
        }}
      />
    </>
  );
};

const PaypalButton = ({ dispatch, data, total }) => {
  return (
    <div className="max-w-full min-h-[148px]">
      <PayPalScriptProvider
        deferLoading={true}
        options={{
          "client-id": `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`,
          components: "buttons",

          currency: "USD",
        }}
      >
        <ButtonWrapper
          currency={currency}
          amount={total}
          form={data}
          showSpinner={true}
        />
      </PayPalScriptProvider>
    </div>
  );
};
export default PaypalButton;
