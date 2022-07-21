import { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { loginSuccess } from "../redux/accountSlice";
import { addAddressList } from "../redux/addressSlice";
import { getCartItemsFromLocalStorage } from "../redux/cartSlice";
import { addOrderList } from "../redux/orderSlice";
import { getData } from "../utils/requestMethod";

const Wrapper = ({ children }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const accessToken = useSelector(
    (state) => state.account.accessToken,
  );

  useEffect(() => {
    const firstLogin = JSON.parse(
      localStorage.getItem("isLogin"),
    );
    if (firstLogin) {
      getData("account/accessToken").then(
        (res) => {
          //token expire or incorrect or user delete
          if (!res.success) {
            alert(
              "Your session is expired please login again",
            );
            return localStorage.setItem(
              "isLogin",
              false,
            );
          }
          dispatch(
            loginSuccess({
              accessToken: res.accessToken,
              user: res.user,
            }),
          );
        },
      );
    }
  }, [dispatch]);

  useEffect(() => {
    const __memoryzone__cart = JSON.parse(
      localStorage.getItem("__memoryzone__cart"),
    );

    __memoryzone__cart &&
      __memoryzone__cart.quantity > 0 &&
      dispatch(
        getCartItemsFromLocalStorage(
          __memoryzone__cart,
        ),
      );
  }, [dispatch]);
  useEffect(() => {
    localStorage.setItem(
      "__memoryzone__cart",
      JSON.stringify(cart),
    );
  }, [cart]);
  useEffect(() => {
    if (
      accessToken !== "" &&
      accessToken !== undefined &&
      accessToken !== null
    ) {
      const getOrderHistory = async () => {
        const res = await getData(
          "order/history",
          accessToken,
        );
        if (res.success) {
          dispatch(
            addOrderList(res.orderHistoryList),
          );
        } else {
          alert(res.error);
          return;
        }
      };
      const getUserAddressList = async () => {
        const res = await getData(
          "account/address/list",
          accessToken,
        );
        if (res.success) {
          dispatch(
            addAddressList(res.addressList),
          );
        } else {
          alert(res.error);
          return;
        }
      };
      getUserAddressList();
      getOrderHistory();
    }
  }, [accessToken, dispatch]);
  return <>{children}</>;
};

export default Wrapper;
