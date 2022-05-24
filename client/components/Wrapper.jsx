import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/accountSlice";
import { getData } from "../utils/requestMethod";

const Wrapper = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const firstLogin = localStorage.getItem("isLogin");
    if (firstLogin) {
      getData("account/accessToken").then((res) => {
        //token expire or incorrect or user delete
        if (!res.success) {
          return localStorage.removeItem("isLogin");
        }
        dispatch(
          loginSuccess({ accessToken: res.accessToken, user: res.user })
        );
      });
    }
  }, []);
  return <>{children}</>;
};

export default Wrapper;
