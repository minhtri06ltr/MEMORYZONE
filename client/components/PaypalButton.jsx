import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { productSold } from "../middlewares/product";
import { client } from "../lib/client";
import { useRouter } from "next/router";

import { patchData } from "../utils/requestMethod";
import { updateOrder } from "../redux/orderSlice";
import { formatOrderList } from "../utils/format";

// This values are the props in the UI

const currency = "USD";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({
  currency,
  showSpinner,
  amount,
  orderList,
  dispatchAction,
  token,
  orderId,
}) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] =
    usePayPalScriptReducer();
  const router = useRouter();
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
      {showSpinner && isPending && (
        <div className="spinner" />
      )}
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
        onApprove={async function (
          data,
          actions,
        ) {
          return actions.order
            .capture()
            .then(async function () {
              // Your code here after capture the order
              try {
                if (
                  token !== "" &&
                  token !== undefined &&
                  token !== null
                ) {
                  const res = await patchData(
                    `/order/payment/${orderId}`,
                    { orderList, amount },
                    token,
                  );

                  if (res.success) {
                    dispatchAction(
                      updateOrder(orderId),
                    );
                    res.returnOrder.orderList.filter(
                      (item) => {
                        return productSold(
                          item._key,
                          item.quantity,
                        );
                      },
                    );
                    router.push(
                      `/checkout/success/${orderId}`,
                    );
                  } else {
                    console.log(res.error);
                    alert(res.error);
                  }
                } else {
                  await client
                    .patch(orderId) // Document ID to patch
                    .set({
                      isPaid: true,
                      totalPrice: amount,
                      paidAt: new Date(),
                      orderList:
                        formatOrderList(
                          orderList,
                        ),
                    }) // Shallow merge
                    .commit() // Perform the patch and return a promise
                    .then((res) => {
                      res.orderList.filter(
                        (item) => {
                          return productSold(
                            item._key,
                            item.quantity,
                          );
                        },
                      );
                      router.push(
                        `/checkout/success/${res._id}`,
                      );
                    })
                    .catch((error) => {
                      console.log(error);
                      alert(error.message);
                    });
                }
              } catch (error) {
                console.log(error);
                alert(error.message);
              }
            });
        }}
      />
    </>
  );
};

const PaypalButton = ({
  dispatch,
  orderList,
  total,
  orderId,
  token,
}) => {
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
          token={token}
          orderList={orderList}
          showSpinner={true}
          dispatchAction={dispatch}
          orderId={orderId}
        />
      </PayPalScriptProvider>
    </div>
  );
};
export default PaypalButton;
