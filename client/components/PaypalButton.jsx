import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { postData } from "../utils/requestMethod";
import { useSelector } from "react-redux";

// This values are the props in the UI

const currency = "USD";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, amount, form }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const token = useSelector((state) => state.account.accessToken);

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
          return actions.order.capture().then(async function () {
            // Your code here after capture the order
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
            console.log(res);
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
