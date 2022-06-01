import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/accountSlice";
import { getCartItemsFromLocalStorage } from "../redux/cartSlice";
import { getData } from "../utils/requestMethod";

const Wrapper = ({ children }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const firstLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (firstLogin) {
      getData("account/accessToken").then((res) => {
        //token expire or incorrect or user delete
        if (!res.success) {
          return localStorage.setItem("isLogin", false);
        }
        dispatch(
          loginSuccess({ accessToken: res.accessToken, user: res.user })
        );
      });
    }
  }, []);

  useEffect(() => {
    const __memoryzone__cart = JSON.parse(
      localStorage.getItem("__memoryzone__cart")
    );

    __memoryzone__cart &&
      __memoryzone__cart.quantity > 0 &&
      dispatch(getCartItemsFromLocalStorage(__memoryzone__cart));
  }, []);
  useEffect(() => {
    localStorage.setItem("__memoryzone__cart", JSON.stringify(cart));
  }, [cart]);

  return <>{children}</>;
};

export default Wrapper;
